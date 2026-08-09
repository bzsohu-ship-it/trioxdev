# triox.hu

Statikus honlap Astro 5-tel. Tartalom markdownban, deploy Azure Static Web Appsre
GitHub Actionsön keresztül.

## Indítás

```bash
npm install
npm run dev               # http://localhost:4321
```

A kapcsolati űrlap levélküldése Cloudflare Pages Function, amit az `astro dev`
nem futtat. Ha azt is tesztelni akarod helyben, lásd lentebb.

## Felépítés

```
src/
  content/szolgaltatasok/*.md   # szolgáltatásoldalak (ezt szerkeszted a leggyakrabban)
  content/blog/*.md             # blogbejegyzések
  components/                   # Header, Footer, Allapottabla (hero), Kapcsolatform
  layouts/Base.astro            # <head>, SEO meta, JSON-LD
  pages/                        # útvonalak
  styles/global.css             # MINDEN design token itt
functions/api/kapcsolat.ts      # az űrlap levélküldő végpontja (Cloudflare Pages Function)
public/_headers, public/_redirects  # fejlécek + 301 átirányítások a régi GoDaddy URL-ekről
```

## Deploy (Cloudflare Pages)

A `main` ágra pusholt commit automatikusan élesedik a GitHub Actionsön keresztül.

Szükséges GitHub secretek:

| Secret | Honnan |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare dashboard -> My Profile -> API Tokens, "Cloudflare Pages: Edit" jog |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare dashboard jobb oldali sáv, vagy `npx wrangler whoami` |

Kézi deploy (megkerüli a CI-t, hibakereséshez jó):

```bash
npm run build
npx wrangler pages deploy dist --project-name=trioxdev
```

## Fejlécek és átirányítások

Cloudflare Pages a `public/_headers` és `public/_redirects` fájlokat olvassa.
Új átirányítás felvételéhez ezeket szerkeszd, ne az Astro configot.

## Kapcsolati űrlap -> Office 365

Az űrlap a saját domainünkön lévő `/api/kapcsolat` végpontra POST-ol JSON-t
(`nev`, `ceg`, `email`, `telefon`, `uzenet`). A végpont a
[functions/api/kapcsolat.ts](functions/api/kapcsolat.ts) Cloudflare Pages
Function, ami Microsoft Graph `sendMail` hívással két levelet küld az Exchange
Online postafiókból:

1. **értesítő** az `O365_CIMZETT` címre, `Reply-To` a beküldő címe;
2. **visszaigazoló** a beküldőnek (az üzenet szövege nélkül — lásd a docs
   „Visszaélés elleni védelem" pontját).

Nincs SMTP és nincs külső köztes rendszer: a Workers futtatókörnyezet nem tud
nyers TCP-t, a Microsoft pedig az SMTP AUTH-ot kivezeti.

Szükséges Cloudflare Pages környezeti változók (Production **és** Preview):
`O365_TENANT_ID`, `O365_CLIENT_ID`, `O365_CLIENT_SECRET` (Secret),
`O365_FELADO`, `O365_CIMZETT`.

Az Entra ID app-regisztráció, a `Mail.Send` engedély, a postafiókra szűkítés és
az SPF/DKIM lépések: [docs/office365-levelkuldes.md](docs/office365-levelkuldes.md).

Helyi teszt (az `astro dev` nem futtat Functiont):

```bash
cp .dev.vars.example .dev.vars   # töltsd ki
npm run build
npm run functions                # http://localhost:8788
```

A `functions` script rögzített `--compatibility-date`-tel indul: e nélkül a
wrangler a mai dátumot venné, amit a csomaggal szállított workerd még nem ismer,
és el sem indulna.

A `mailto:` hivatkozások (fejléc, lábléc, kapcsolat, rólunk, támogatás) a
látogató saját levelezőjét nyitják meg — azok nem a mi kiszolgálónkon mennek ki,
és nem is vezethetők át az Office 365-ön.

## Amíg nincs kitöltve

Több oldalon szándékosan maradt jelölés (ár, reakcióidő, referenciák). Ezek nélkül
az oldal működik, de nem hoz ajánlatkérést — ezek a legfontosabb következő lépések.
