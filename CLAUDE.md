# Triox honlap — munkaszabályok Claude Code-nak

## Mi ez
A triox.hu statikus oldala. Astro 5, TypeScript, saját CSS (nincs Tailwind).
A tartalom markdownban van, a design tokenek egy helyen: `src/styles/global.css`.

## Nyelv és hangnem
- Minden felhasználói szöveg **magyar**, magázódó ("Ön").
- Rövid mondatok, konkrétum szórakoztató jelzők helyett.
- Cégszlogen: „Tudjuk hogyan segíthetünk önnek" — pontosan így írjuk.
- Nem ígérünk olyat, amit nem tudunk tartani (SLA, uptime, ügyfélszám csak akkor,
  ha Zsolt megadta a valós számot).

## Hol mit módosíts
| Feladat | Fájl |
|---|---|
| Új szolgáltatás | `src/content/szolgaltatasok/<slug>.md` (frontmatter: cim, osszefoglalo, sorrend, cimke) |
| Új blogbejegyzés | `src/content/blog/<slug>.md` (frontmatter: cim, leiras, datum, piszkozat) |
| Menü | `src/components/Header.astro` |
| Színek, betűk, térköz | `src/styles/global.css` (csak a `:root` tokeneket!) |
| Kapcsolati űrlap mezői | `src/components/Kapcsolatform.astro` |
| Átirányítás régi URL-ről | `public/_redirects` |
| HTTP fejlécek | `public/_headers` |

## Szabályok
1. A slug ékezet nélküli, kisbetűs, kötőjeles (`felho-szolgaltatasok`), mert ez lesz az URL.
2. Új szín **nem** kerül közvetlenül komponensbe — előbb token a `:root`-ban.
3. Minden oldal a `Base` layoutot használja, `cim` és `leiras` proppal (SEO).
4. Piszkozat blogbejegyzés: `piszkozat: true` — nem kerül be a buildbe.
5. Változtatás után mindig fusson le: `npm run build`. Ha hibázik, ne commitolj.
6. Ne írj tényadatot (ár, reakcióidő, referencia) találomra. Ha hiányzik, hagyj
   `<!-- KITÖLTENDŐ: ... -->` jelölést, és szólj róla.

## Parancsok
```bash
npm run dev      # helyi szerver :4321
npm run build    # statikus build a dist/ mappába
npm run check    # típus- és sablonellenőrzés
```
