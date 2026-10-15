// A magyar és az angol (/en/) oldalpárok őre — `npm run check:nyelv`.
//
// 1. Minden magyar oldalnak van angol párja, és a kettő <style> blokkja
//    betűre azonos (sorvég-különbség nem számít). Így a két nyelv megjelenése
//    nem tud szétcsúszni: ha valaki az egyik oldal stílusát módosítja, a
//    másikét is kell.
// 2. A src/i18n/utak.ts slug-térképe és a két tartalomgyűjtemény fájljai
//    fedik egymást: nincs fordítás nélküli bejegyzés, és nincs árva fordítás.
//
// Fordítási útmutató: docs/angol-forditasi-utmutato.md
import fs from 'node:fs';
import path from 'node:path';

const gyoker = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const ut = (...r) => path.join(gyoker, ...r);
const hibak = [];

/** Magyar oldal → angol oldal (src/pages alatt). */
const OLDALPAROK = {
  'index.astro': 'en/index.astro',
  '404.astro': 'en/404.astro',
  'biztonsag.astro': 'en/security.astro',
  'esettanulmanyok.astro': 'en/case-studies.astro',
  'gyik.astro': 'en/faq.astro',
  'kapcsolat.astro': 'en/contact.astro',
  'partnerek.astro': 'en/partners.astro',
  'rolunk.astro': 'en/about.astro',
  'tamogatas.astro': 'en/support.astro',
  'technologia.astro': 'en/technology.astro',
  'adatvedelmi-nyilatkozat.astro': 'en/privacy.astro',
  'sox-megfeleles.astro': 'en/sox-compliance.astro',
  'szolgaltatasok/index.astro': 'en/services/index.astro',
  'szolgaltatasok/[...slug].astro': 'en/services/[...slug].astro',
  'blog/index.astro': 'en/blog/index.astro',
  'blog/[...slug].astro': 'en/blog/[...slug].astro',
};

function stilus(fajl) {
  const c = fs.readFileSync(fajl, 'utf8').replace(/\r\n/g, '\n');
  const i = c.indexOf('<style');
  return i === -1 ? '' : c.slice(i).trimEnd();
}

// Minden magyar oldal szerepel-e a listában (új oldalnál ide is kell).
function bejar(mappa, elotag = '') {
  return fs.readdirSync(mappa, { withFileTypes: true }).flatMap((e) => {
    if (e.isDirectory()) return e.name === 'en' && !elotag ? [] : bejar(path.join(mappa, e.name), `${elotag}${e.name}/`);
    return e.name.endsWith('.astro') ? [`${elotag}${e.name}`] : [];
  });
}
for (const hu of bejar(ut('src/pages'))) {
  if (!(hu in OLDALPAROK)) hibak.push(`Nincs angol pár felvéve: src/pages/${hu} (scripts/nyelvparok.mjs OLDALPAROK)`);
}

for (const [hu, en] of Object.entries(OLDALPAROK)) {
  const huF = ut('src/pages', hu);
  const enF = ut('src/pages', en);
  if (!fs.existsSync(enF)) { hibak.push(`Hiányzik az angol oldal: src/pages/${en}`); continue; }
  if (stilus(huF) !== stilus(enF)) hibak.push(`Eltér a <style> blokk: src/pages/${hu} ⇄ src/pages/${en}`);
}

// Slug-térkép a utak.ts-ből (egyszerű kulcs: érték párok a két objektumban).
const utak = fs.readFileSync(ut('src/i18n/utak.ts'), 'utf8');
function terkep(nev) {
  const blokk = utak.match(new RegExp(`${nev}[^=]*=\\s*\\{([\\s\\S]*?)\\n\\};`));
  if (!blokk) throw new Error(`Nem található: ${nev}`);
  return [...blokk[1].matchAll(/'?([\w-]+)'?\s*:\s*'([\w-]+)'/g)].map((m) => [m[1], m[2]]);
}
function slugok(mappa) {
  return fs.readdirSync(ut(mappa)).filter((f) => f.endsWith('.md')).map((f) => f.slice(0, -3)).sort();
}
for (const [nev, huMappa, enMappa] of [
  ['SZOLGALTATAS_SLUG', 'src/content/szolgaltatasok', 'src/content/en/services'],
  ['BLOG_SLUG', 'src/content/blog', 'src/content/en/blog'],
]) {
  const t = terkep(nev);
  const hu = slugok(huMappa);
  const en = slugok(enMappa);
  for (const s of hu) if (!t.some(([h]) => h === s)) hibak.push(`${huMappa}/${s}.md nincs a ${nev} térképben`);
  for (const [h, e] of t) {
    if (!hu.includes(h)) hibak.push(`${nev}: nincs ${huMappa}/${h}.md`);
    if (!en.includes(e)) hibak.push(`${nev}: hiányzik a fordítás ${enMappa}/${e}.md`);
  }
  for (const s of en) if (!t.some(([, e]) => e === s)) hibak.push(`Árva fordítás: ${enMappa}/${s}.md`);
}

if (hibak.length) {
  console.error(`Nyelvpár-ellenőrzés: ${hibak.length} hiba\n- ${hibak.join('\n- ')}`);
  process.exit(1);
}
console.log(`Nyelvpár-ellenőrzés rendben: ${Object.keys(OLDALPAROK).length} oldalpár, a tartalomgyűjtemények teljesek.`);
