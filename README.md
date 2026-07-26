# triox.hu

Statikus honlap Astro 5-tel. Tartalom markdownban, deploy Azure Static Web Appsre
GitHub Actionsön keresztül.

## Indítás

```bash
npm install
cp .env.example .env      # töltsd ki a PUBLIC_N8N_WEBHOOK értékét
npm run dev               # http://localhost:4321
```

## Felépítés

```
src/
  content/szolgaltatasok/*.md   # szolgáltatásoldalak (ezt szerkeszted a leggyakrabban)
  content/blog/*.md             # blogbejegyzések
  components/                   # Header, Footer, Allapottabla (hero), Kapcsolatform
  layouts/Base.astro            # <head>, SEO meta, JSON-LD
  pages/                        # útvonalak
  styles/global.css             # MINDEN design token itt
public/staticwebapp.config.json # fejlécek + 301 átirányítások a régi GoDaddy URL-ekről
```

## Deploy (Cloudflare Pages)

A `main` ágra pusholt commit automatikusan élesedik a GitHub Actionsön keresztül.

Szükséges GitHub secretek:

| Secret | Honnan |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare dashboard -> My Profile -> API Tokens, "Cloudflare Pages: Edit" jog |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare dashboard jobb oldali sáv, vagy `npx wrangler whoami` |
| `PUBLIC_N8N_WEBHOOK` | a saját n8n webhook URL-ed |

Kézi deploy (megkerüli a CI-t, hibakereséshez jó):

```bash
npm run build
npx wrangler pages deploy dist --project-name=triox-web
```

## Fejlécek és átirányítások

Cloudflare Pages a `public/_headers` és `public/_redirects` fájlokat olvassa.
Új átirányítás felvételéhez ezeket szerkeszd, ne az Astro configot.

## Kapcsolati űrlap -> n8n

Az űrlap JSON POST-ot küld a `PUBLIC_N8N_WEBHOOK` címre:

```json
{ "nev": "", "ceg": "", "email": "", "telefon": "", "uzenet": "",
  "forras": "triox.hu", "ido": "2026-07-26T08:00:00.000Z" }
```

Javasolt n8n folyam: **Webhook -> IF (mézesbödön üres?) -> e-mail az info@triox.hu-ra
-> visszaigazoló e-mail a feladónak.**
A webhook node-on engedélyezd a CORS-t a `https://triox.hu` originre.

## Amíg nincs kitöltve

Több oldalon szándékosan maradt jelölés (ár, reakcióidő, referenciák). Ezek nélkül
az oldal működik, de nem hoz ajánlatkérést — ezek a legfontosabb következő lépések.
