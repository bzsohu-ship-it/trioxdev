// A kapcsolatfelvételi űrlap levélküldő végpontja — Cloudflare Pages Function.
//
// Az űrlap a böngészőből ide POST-ol, a levelek innen mennek ki a Microsoft
// Graph `sendMail` hívásával, tehát az Office 365 (Exchange Online) postafiókból.
// Nincs SMTP: a Workers futtatókörnyezet nem tud nyers TCP-t, ráadásul a
// Microsoft az SMTP AUTH-ot kivezeti. A titkok szerveroldalon maradnak, a
// böngésző soha nem látja őket.
//
// A szükséges Entra ID app-regisztráció és a Cloudflare-környezeti változók
// beállítása: docs/office365-levelkuldes.md

interface Env {
  /** Entra ID (Azure AD) bérlő azonosítója. */
  O365_TENANT_ID: string;
  /** Az app-regisztráció alkalmazásazonosítója. */
  O365_CLIENT_ID: string;
  /** Az app-regisztráció titka. Cloudflare-en Secret típusú változó. */
  O365_CLIENT_SECRET: string;
  /** A feladó postafiók UPN-je, pl. `noreply@triox.hu`. */
  O365_FELADO: string;
  /** Ide érkezik a belső értesítő, pl. `info@triox.hu`. */
  O365_CIMZETT: string;
}

interface Kontextus {
  request: Request;
  env: Env;
}

/** A beküldő mezői, már megtisztítva. */
interface Megkereses {
  nev: string;
  ceg: string;
  email: string;
  telefon: string;
  uzenet: string;
}

const HATAROK = {
  nev: 80,
  ceg: 120,
  email: 200,
  telefon: 40,
  uzenet: 4000,
} as const;

/** A teljes JSON törzs felső korlátja bájtban — a nagy POST-ot el se olvassuk. */
const TORZS_MAX = 16 * 1024;

const EMAIL_MINTA = /^[^\s@,;<>]+@[^\s@,;<>]+\.[a-z]{2,}$/i;

const GRAPH = 'https://graph.microsoft.com/v1.0';

export const onRequestPost = async ({ request, env }: Kontextus): Promise<Response> => {
  if (!azonosOrigin(request)) return hiba(403, 'Ismeretlen forrás.');

  const hosszJelzes = Number(request.headers.get('content-length') ?? 0);
  if (hosszJelzes > TORZS_MAX) return hiba(413, 'Túl hosszú üzenet.');

  let nyers: unknown;
  try {
    nyers = await request.json();
  } catch {
    return hiba(400, 'Hibás kérés.');
  }
  if (typeof nyers !== 'object' || nyers === null) return hiba(400, 'Hibás kérés.');
  const adat = nyers as Record<string, unknown>;

  // Mézesbödön: ember nem tölti ki. A botnak sikert jelzünk, hogy ne
  // próbálkozzon másik mezőkiosztással, de levél nem megy ki.
  if (mezo(adat.ceges_fax)) return json(200, { ok: true });

  const megkereses = ellenoriz(adat);
  if (typeof megkereses === 'string') return hiba(422, megkereses);

  const hianyzoBeallitas = (
    ['O365_TENANT_ID', 'O365_CLIENT_ID', 'O365_CLIENT_SECRET', 'O365_FELADO', 'O365_CIMZETT'] as const
  ).filter((kulcs) => !env[kulcs]);
  if (hianyzoBeallitas.length > 0) {
    console.error('Hiányzó Office 365 beállítás:', hianyzoBeallitas.join(', '));
    return hiba(500, 'A levélküldés jelenleg nem elérhető.');
  }

  let token: string;
  try {
    token = await tokentKer(env);
  } catch (e) {
    console.error('Token kérése nem sikerült:', e);
    return hiba(502, 'A levélküldés jelenleg nem elérhető.');
  }

  // Az értesítő a fontos levél: ha ez nem megy ki, hibát jelzünk a látogatónak.
  try {
    await levelKuld(token, env.O365_FELADO, ertesitoLevel(megkereses, env.O365_CIMZETT));
  } catch (e) {
    console.error('Az értesítő nem ment ki:', e);
    return hiba(502, 'A küldés nem sikerült.');
  }

  // A visszaigazoló másodlagos: ha elakad, a megkeresés akkor is nálunk van.
  try {
    await levelKuld(token, env.O365_FELADO, visszaigazoloLevel(megkereses));
  } catch (e) {
    console.error('A visszaigazoló nem ment ki:', e);
  }

  return json(200, { ok: true });
};

// ---------------------------------------------------------------- ellenőrzés

/**
 * Csak a saját eredetünkről fogadunk el beküldést. A gazdanevet hasonlítjuk, így
 * a triox.hu, a *.pages.dev előnézetek és a helyi wrangler is átmegy, külső
 * oldalról indított POST viszont nem.
 */
function azonosOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return false;
  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

function mezo(ertek: unknown): string {
  return typeof ertek === 'string' ? ertek.trim() : '';
}

/** Visszatér a megtisztított megkereséssel, vagy magyar hibaszöveggel. */
function ellenoriz(adat: Record<string, unknown>): Megkereses | string {
  const nev = mezo(adat.nev);
  const ceg = mezo(adat.ceg);
  const email = mezo(adat.email);
  const telefon = mezo(adat.telefon);
  const uzenet = mezo(adat.uzenet);

  if (nev.length < 2 || nev.length > HATAROK.nev) return 'Adja meg a nevét.';
  if (email.length > HATAROK.email || !EMAIL_MINTA.test(email)) return 'Az e-mail cím nem érvényes.';
  if (uzenet.length < 10 || uzenet.length > HATAROK.uzenet) return 'Írja le pár mondatban, miben segíthetünk.';
  if (ceg.length > HATAROK.ceg) return 'A cégnév túl hosszú.';
  if (telefon.length > HATAROK.telefon) return 'A telefonszám túl hosszú.';

  return { nev, ceg, email, telefon, uzenet };
}

// ------------------------------------------------------------- Microsoft Graph

/**
 * Az alkalmazástoken a bérlőre szól, nem a beküldőre — client credentials
 * folyamat. Az isolate élettartamára eltesszük: a token egy óráig érvényes,
 * fölösleges minden beküldéshez újat kérni.
 */
let tokenGyorstar: { ertek: string; lejar: number } | null = null;

async function tokentKer(env: Env): Promise<string> {
  const most = Date.now();
  if (tokenGyorstar && tokenGyorstar.lejar > most) return tokenGyorstar.ertek;

  const valasz = await fetch(`https://login.microsoftonline.com/${env.O365_TENANT_ID}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: env.O365_CLIENT_ID,
      client_secret: env.O365_CLIENT_SECRET,
      scope: 'https://graph.microsoft.com/.default',
      grant_type: 'client_credentials',
    }),
  });

  if (!valasz.ok) throw new Error(`token HTTP ${valasz.status}: ${await valasz.text()}`);

  const test = (await valasz.json()) as { access_token?: string; expires_in?: number };
  if (!test.access_token) throw new Error('a válaszban nincs access_token');

  // Egy perc ráhagyás, hogy ne épp lejáró tokennel hívjunk.
  tokenGyorstar = { ertek: test.access_token, lejar: most + ((test.expires_in ?? 3600) - 60) * 1000 };
  return test.access_token;
}

interface GraphLevel {
  message: {
    subject: string;
    body: { contentType: 'HTML'; content: string };
    toRecipients: { emailAddress: { address: string } }[];
    replyTo?: { emailAddress: { address: string } }[];
  };
  saveToSentItems: boolean;
}

async function levelKuld(token: string, felado: string, level: GraphLevel): Promise<void> {
  const valasz = await fetch(`${GRAPH}/users/${encodeURIComponent(felado)}/sendMail`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(level),
  });
  // A sendMail sikeres esetben 202-t ad, törzs nélkül.
  if (!valasz.ok) throw new Error(`sendMail HTTP ${valasz.status}: ${await valasz.text()}`);
}

// ----------------------------------------------------------------- levelek

function ertesitoLevel(m: Megkereses, cimzett: string): GraphLevel {
  const sorok = [
    ['Név', m.nev],
    ['Cég', m.ceg || '—'],
    ['E-mail', m.email],
    ['Telefon', m.telefon || '—'],
  ]
    .map(([cimke, ertek]) => `<tr><th align="left" style="padding:2px 12px 2px 0">${esc(cimke)}</th><td>${esc(ertek)}</td></tr>`)
    .join('');

  return {
    message: {
      subject: `Megkeresés a triox.hu-ról — ${m.nev}`,
      body: {
        contentType: 'HTML',
        content: `<p>Új megkeresés érkezett a triox.hu kapcsolati űrlapjáról.</p>
<table>${sorok}</table>
<p><strong>Üzenet</strong></p>
<p>${esc(m.uzenet).replace(/\n/g, '<br>')}</p>`,
      },
      toRecipients: [{ emailAddress: { address: cimzett } }],
      // Így a postafiókból egy Válasz gombbal a beküldőnek megy a levél.
      replyTo: [{ emailAddress: { address: m.email } }],
    },
    saveToSentItems: true,
  };
}

/**
 * A visszaigazoló a beküldő által megadott címre megy, ezért szándékosan nem
 * tartalmazza az üzenet szövegét: különben az űrlap idegen címekre szóló
 * kéretlen levelek továbbítójává válna. Csak a név kerül bele, escape-elve.
 */
function visszaigazoloLevel(m: Megkereses): GraphLevel {
  return {
    message: {
      subject: 'Megkaptuk a megkeresését — Triox Informatika',
      body: {
        contentType: 'HTML',
        content: `<p>Kedves ${esc(m.nev)}!</p>
<p>Köszönjük a megkeresését. A triox.hu kapcsolati űrlapján beküldött üzenetét
megkaptuk, 2 munkanapon belül válaszolunk.</p>
<p>Ha időközben kiegészítené, válaszoljon erre a levélre, vagy írjon az
<a href="mailto:info@triox.hu">info@triox.hu</a> címre.</p>
<p>Üdvözlettel:<br>Triox Informatika Kft.<br>
<a href="https://triox.hu/">triox.hu</a></p>
<p style="color:#6b7280;font-size:12px">Ezt a levelet automatikusan küldtük, mert
valaki ezzel az e-mail címmel üzenetet küldött a triox.hu oldalról. Ha nem Ön
volt, hagyja figyelmen kívül.</p>`,
      },
      toRecipients: [{ emailAddress: { address: m.email } }],
      replyTo: [{ emailAddress: { address: 'info@triox.hu' } }],
    },
    saveToSentItems: false,
  };
}

function esc(szoveg: string): string {
  return szoveg
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function json(statusz: number, torzs: Record<string, unknown>): Response {
  return new Response(JSON.stringify(torzs), {
    status: statusz,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}

function hiba(statusz: number, uzenet: string): Response {
  return json(statusz, { ok: false, hiba: uzenet });
}
