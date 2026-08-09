# Office 365 levélküldés — beállítás

A kapcsolati űrlap levelei a `functions/api/kapcsolat.ts` Cloudflare Pages
Functionből mennek ki, Microsoft Graph `sendMail` hívással, az Exchange Online
postafiókból. Ez a fájl a `docs/` alatt van, tehát nem kerül be a buildbe.

**Miért Graph és nem SMTP:** a Cloudflare Workers futtatókörnyezet nem tud nyers
TCP-kapcsolatot nyitni, így SMTP-t nem tud beszélni. A Microsoft ezen felül az
SMTP AUTH-ot (basic auth) kivezeti, új bérlőkben alapból tiltott.

## 1. Postafiók

Kell egy valódi, licencelt postafiók a küldéshez — a Graph `sendMail` nem tud
licenc nélküli fiókból küldeni. Javaslat: `noreply@triox.hu` (Exchange Online
Plan 1 elég). Ha nem akarunk külön licencet, az `info@triox.hu` is lehet a
feladó; ekkor a saját fiókjában látszanak az Elküldött elemek között.

<!-- KITÖLTENDŐ: melyik postafiók legyen a feladó, és van-e rá licenc -->

## 2. Entra ID app-regisztráció

Microsoft Entra admin center → **Alkalmazásregisztrációk** → **Új regisztráció**.

1. Név: `triox.hu kapcsolati űrlap`. Támogatott fióktípus: *csak ebben a
   szervezeti címtárban*. Átirányítási URI nem kell.
2. **API-engedélyek** → *Engedély hozzáadása* → **Microsoft Graph** →
   **Alkalmazásengedélyek** → `Mail.Send`. Ezután **Rendszergazdai
   jóváhagyás megadása** — e nélkül a hívás 403-at ad.
3. **Tanúsítványok és titkos kulcsok** → *Új titkos ügyfélkulcs*. Az értéket
   csak egyszer mutatja meg, azonnal mentsd el. **Írd fel a lejárat dátumát** —
   ha lejár, az űrlap némán elhal (a Function 502-t ad, a látogató hibát lát).

   <!-- KITÖLTENDŐ: a titok lejárati dátuma, hogy naptárba kerüljön -->

## 3. Hozzáférés szűkítése egy postafiókra — fontos

A `Mail.Send` alkalmazásengedély alapból **a bérlő összes postafiókjából**
engedi a küldést. Ezt Exchange Online alkalmazás-hozzáférési szabállyal
szűkítjük a feladó fiókra. Exchange Online PowerShellben:

```powershell
Connect-ExchangeOnline
New-DistributionGroup -Name "SzkriptKuldok" -Type Security -Members "noreply@triox.hu"
New-ApplicationAccessPolicy -AppId <ALKALMAZAS_ID> `
  -PolicyScopeGroupId "SzkriptKuldok@triox.hu" `
  -AccessRight RestrictAccess `
  -Description "A triox.hu urlap csak a noreply fiokbol kuldhet"
Test-ApplicationAccessPolicy -Identity "info@triox.hu" -AppId <ALKALMAZAS_ID>
```

Az utolsó parancsnak `Denied`-et kell adnia egy másik fiókra, és `Granted`-et a
`noreply@triox.hu` címre. A szabály életbe lépése akár egy órát is vehet.

## 4. Cloudflare Pages változók

Cloudflare dashboard → Workers & Pages → `triox-web` → Settings →
**Environment variables**. Mind a **Production**, mind a **Preview**
környezetben vedd fel őket, különben az előnézeti ágakon nem működik az űrlap.

| Változó | Típus | Érték |
|---|---|---|
| `O365_TENANT_ID` | plain | a bérlő címtárazonosítója |
| `O365_CLIENT_ID` | plain | az app-regisztráció alkalmazásazonosítója |
| `O365_CLIENT_SECRET` | **Secret** (titkosított) | a 2. pontban kapott titok |
| `O365_FELADO` | plain | `noreply@triox.hu` |
| `O365_CIMZETT` | plain | `info@triox.hu` |

A változó felvétele után **új deploy kell**, hogy a Function lássa őket.

## 5. SPF, DKIM, DMARC

A levél az Exchange Online-ból megy, tehát a `triox.hu` SPF-rekordjában benne
kell lennie az `include:spf.protection.outlook.com` résznek, és a DKIM-et be
kell kapcsolni a Microsoft Defender portálon. Ezek nélkül a visszaigazoló
levelek a levélszemét mappában landolnak.

<!-- KITÖLTENDŐ: a jelenlegi SPF/DKIM/DMARC állapot ellenőrzése -->

## 6. Visszaélés elleni védelem

A kódban: mézesbödön mező, mezőhossz-korlátok, azonos eredet (Origin) kényszer,
és a visszaigazoló levél nem tartalmazza a beküldő szövegét — így nem lehet vele
idegen címekre kéretlen tartalmat küldetni.

Ami **nincs** a kódban: sebességkorlát. Ez Cloudflare oldalon a helye, kód
nélkül: Security → WAF → **Rate limiting rules**, útvonal `/api/kapcsolat`,
javaslat 5 kérés / 10 perc / IP, akció Block.

<!-- KITÖLTENDŐ: a rate limiting szabály felvétele a Cloudflare-en -->

## Helyi teszt

Az `astro dev` szerver nem futtat Pages Functiont, ott az űrlap hibát ad.
Helyi végponthoz:

```bash
cp .dev.vars.example .dev.vars   # töltsd ki
npm run build
npm run functions                # http://localhost:8788
```

Gyors próba levélküldés nélkül (a mézesbödön miatt nem megy ki levél):

```bash
curl -s -X POST http://127.0.0.1:8788/api/kapcsolat -H 'Content-Type: application/json' -H 'Origin: http://127.0.0.1:8788' -d '{"nev":"Teszt","email":"teszt@pelda.hu","uzenet":"Proba uzenet a vegponthoz.","ceges_fax":"x"}'
```

## Hibakeresés

A Function `console.error` sorai a Cloudflare dashboard → Pages projekt →
**Functions** → Real-time logs nézetben látszanak.

| Tünet | Valószínű ok |
|---|---|
| 403 a token után, `Access is denied` | nincs rendszergazdai jóváhagyás a `Mail.Send`-re |
| 403 `ApplicationAccessPolicy` említéssel | a 3. pont szabálya kizárja a feladó fiókot |
| 401 a tokenkérésnél | lejárt vagy elgépelt `O365_CLIENT_SECRET` |
| `MailboxNotEnabledForRESTAPI` | a feladó fióknak nincs Exchange Online licence |
| A látogató „A levélküldés jelenleg nem elérhető" üzenetet lát | hiányzik valamelyik környezeti változó, vagy nem volt új deploy |
