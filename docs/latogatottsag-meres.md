# Látogatottság-mérés beállítása

Két mérés fut az oldalon, szándékosan eltérő feltétellel:

| | Cloudflare Web Analytics | Google Analytics 4 |
|---|---|---|
| Süti | nincs | van (`_ga`, `_ga_…`) |
| Hozzájárulás kell? | nem | igen, az Elfogadom gomb után indul |
| Mit ad | oldalletöltés, látogatószám, honnan érkeztek, ország, eszköz, betöltési sebesség | mindezt részletesebben, plusz konverziók, útvonalak, Search Console és Ads összekötés |
| Ára | ingyenes | ingyenes |

A kód a [src/components/Meres.astro](../src/components/Meres.astro) fájlban van, a
hozzájárulás-kérő sáv a [src/components/Sutisav.astro](../src/components/Sutisav.astro)
fájlban, a nyilvános tájékoztató a [src/pages/sutik.astro](../src/pages/sutik.astro) lapon.

**Amíg a lenti két környezeti változó nincs beállítva, semmi nem mér.** Nincs
mérőkód a lapon, és süti-sáv sem jelenik meg. Ez szándékos: a helyi fejlesztés és
az előnézeti buildek így nem szennyezik az éles statisztikát.

## 1. Cloudflare Web Analytics

1. Cloudflare dashboard → bal oldali menü → **Analytics & Logs → Web Analytics**.
2. **Add a site** → a hostname `triox.hu`.
3. A kapott beágyazó kódból csak a `token` értéke kell (32 hexa karakter).

> **Ne kapcsolja be a Pages projekt saját „Web Analytics" kapcsolóját.** Az a
> beacont a peremhálózaton fecskendezné be, és mivel a mérőkódot már ez a repó
> kiteszi, minden oldalletöltés kétszer számítódna.

## 2. Google Analytics 4

1. [analytics.google.com](https://analytics.google.com) → **Admin → Create → Property**.
   Időzóna: Budapest, pénznem: HUF.
2. A property alatt **Data streams → Add stream → Web**, URL: `https://triox.hu`.
3. A stream adatlapján a **Measurement ID** kell: `G-` kezdetű azonosító.
4. **Admin → Data collection and modification → Data retention**: az alapérték
   2 hónap, érdemes 14 hónapra állítani, különben az év/év összehasonlítás nem megy.
5. **Admin → Data collection → Google signals**: hagyja kikapcsolva. Bekapcsolva
   a Google a bejelentkezett felhasználói fiókjaihoz köti a látogatást, ami a
   süti-tájékoztatónkban leírtakon túli adatkezelés lenne.

## 3. A két azonosító beírása

A buildet a **Cloudflare Pages saját Git-integrációja** futtatja (a GitHub Actions
csak ellenőriz, nem publikál) — ezért a változók a Cloudflare Pages projektbe kellenek,
nem GitHub secretbe.

Cloudflare dashboard → **Workers & Pages → trioxdev → Settings → Variables and Secrets**,
és **Production** és **Preview** környezetben egyaránt:

| Változó | Érték |
|---|---|
| `PUBLIC_CF_BEACON_TOKEN` | a Web Analytics tokenje |
| `PUBLIC_GA4_ID` | a `G-` kezdetű Measurement ID |

Ezek **nem titkok**: a böngészőben úgyis látszanak, ezért sima (nem Secret típusú)
változóként vehetők fel, és a `PUBLIC_` előtag is szándékos — az Astro csak ilyen
előtaggal engedi a böngészőbe. Az O365-titkokra ez nem vonatkozik: azok maradnak
Secret típusúak, `PUBLIC_` előtag nélkül.

A változók **build időben** épülnek be, tehát a beállításuk után egy új deploy kell
(Deployments → a legutóbbi mellett **Retry deployment**), különben nem lesz hatásuk.

Ha a preview környezetben nem szeretné mérni a saját próbálgatásait, egyszerűen ne
vegye fel a változókat Previewben.

### Helyi próba

```bash
echo 'PUBLIC_GA4_ID=G-XXXXXXXXXX' > .env
npm run dev
```

A `.env` a `.gitignore`-ban van. Éles GA4 azonosítóval ne teszteljen helyben, mert
az adat bekerül az éles statisztikába — vagy vegyen fel egy külön teszt-propertyt.

## 4. Az ajánlatkérés mint konverzió

A sikeres űrlapbeküldés után az oldal a **`/kapcsolat/koszonjuk/`** címre irányít át.
Ez a lap `noindex`, és a sitemapból is ki van zárva, hogy a keresőből érkező látogató
ne látsszon ajánlatkérésnek.

- **Cloudflare**: nincs egyedi esemény, ezért itt a `/kapcsolat/koszonjuk/` oldal
  letöltésszáma az ajánlatkérések száma. A Web Analytics **Pages** listájában látszik.
- **GA4**: a köszönőoldal `ajanlatkeres` néven eseményt is küld, de csak akkor, ha a
  látogató tényleg az űrlapról érkezett (az űrlap egy `sessionStorage` jelzést tesz ki
  az átirányítás előtt). A frissítés és a közvetlen megnyitás így nem számol konverziót.

Az esemény az első beküldés után jelenik meg a GA4-ben (24–48 óra). Onnantól:
**Admin → Data display → Events** → az `ajanlatkeres` sorban a **Mark as key event** kapcsoló.
Ezután a Reports → Engagement → Conversions alatt követhető, és Google Ads-hez is
átadható.

Ellenőrzés élesítés után: GA4 **Admin → DebugView**, vagy **Reports → Realtime**,
miközben beküld egy próbaüzenetet az űrlapon.

## Mit néz az ember hetente

- **Cloudflare Web Analytics → Pages**: melyik oldal hozza a látogatókat.
- **Cloudflare → Referrers**: honnan jönnek (Google, LinkedIn, közvetlen).
- **`/kapcsolat/koszonjuk/` letöltésszáma**: ez a lényeg — hány ajánlatkérés jött.
- **GA4 → Reports → Acquisition → Traffic acquisition**: ugyanez csatornákra bontva.

Egy statikus céges oldalon az első hetekben kevés adat lesz. Következtetést egy
hónapnyi adat alatt ne vonjon le belőle.

## Ami még hiányzik

- A **Google Search Console** (search.google.com/search-console) nincs beállítva.
  Az mutatja meg, milyen keresésekre jön be az oldal — a Cloudflare és a GA4 ezt
  nem látja. Érdemes felvenni és a GA4-hez kötni.
