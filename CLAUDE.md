# Triox honlap — munkaszabályok Claude Code-nak

## Mi ez
A triox.hu statikus oldala. Astro 7, TypeScript, saját CSS (nincs Tailwind).
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
| Logó, favicon, megosztókép | `public/` — lásd az **Arculat** fejezetet |
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
   `<!-- KITÖLTENDŐ: ... -->` jelölést, és szólj róla. **Figyelem:** az Astro 7
   markdown-feldolgozója (Sätteri) a HTML-megjegyzéseket változatlanul kiírja a
   publikus oldalba, és remark-plugin nem köthető be. Ha a jegyzet nem való
   nyilvánosságra — például az, hogy mit *nem* vállalunk —, akkor `docs/`-ba
   kerüljön, ami nincs a buildben (lásd `docs/helyi-uzemeltetes-megerositendo.md`).

## Arculat

Forrás: `OneDrive/Triox/Logo/2026/triox-logo-kit/` (2026-os logókészlet, `OLVASSEL.md`-vel).
A `public/`-ban **csak a weben ténylegesen használt fájlok** vannak — a LinkedIn/Facebook
borító, az e-mail aláírás és a profilképek nem webes eszközök, azok maradjanak a kitben.

### Színek

| Token | Érték | Mi ez |
|---|---|---|
| `--c-brand` | `#0007FF` | A jel gradiensének világos vége. Kontraszt fehéren **8,49:1**. |
| `--c-brand-deep` | `#0005BF` | A gradiens sötét vége — hover-állapot. |
| `--c-brand-wash` | `#EBEDFF` | Halvány háttér: hover-sávok, kiemelt dobozok. |
| `--c-ink` | `#16181D` | Szövegszín és a sötét sávok háttere. |

A `theme-color` meta és a `public/site.webmanifest` `theme_color`-ja is `#0007FF` —
ha a márkaszín változik, **mind a hármat** át kell írni.

### Betűk

Montserrat (`--f-display`) a logó betűtípusa: címsorok, cégnév, szlogen, gombok.
Inter (`--f-body`) a folyó szöveg. JetBrains Mono (`--f-util`) a mono jelölések
(eyebrow, űrlapcímke, metaadat).

### Fájlok a `public/`-ban

| Fájl | Mire való |
|---|---|
| `logo.svg` | A gradienses jel. Fejléc, lábléc, világos hátterű vízjel. |
| `logo-feher.svg` | Egyszínű fehér jel — **csak sötét háttérre** (`.band--sotet`). |
| `logo.png` | Álló lockup (jel + cégnév + szlogen), 3200×1788, átlátszó. A kód nem használja: külső hivatkozásoknak van (e-mail aláírás, dokumentumok). |
| `favicon.*`, `apple-touch-icon.png`, `android-chrome-*`, `maskable-icon-*`, `mstile-*`, `site.webmanifest`, `browserconfig.xml` | Favicon- és app-ikon készlet. **Kézzel ne szerkeszd** — a kit `favicon/` mappájából származnak. |
| `og-image-1200x630-vilagos.png` | Open Graph link-előnézet (LinkedIn, Facebook, Slack, Teams). |
| `twitter-card-1200x675-vilagos.png` | X `summary_large_image`. |

### Szabályok a grafikai elemekre

1. **Sötét sávon (`.band--sotet`) a gomb fehér, nem márkakék.** A `#0007FF` a `#16181D`
   háttéren csak 2,08:1 kontrasztot ad, ami megbukik a WCAG 3:1-es küszöbén nem-szöveges
   elemekre. A fehér gomb kék felirattal 17,76:1 / 8,49:1.
2. **Sötét sávon `logo-feher.svg`, világoson `logo.svg`.** A kék jel sötét alapon eltűnik.
3. **Vízjel `class="vizjel"`, `alt=""` és `aria-hidden="true"`.** Dekoráció, nem tartalom.
   Átlátszóság: világos háttéren 4–6%, sötéten 7%. A konténer kap `position: relative`
   és `overflow: hidden` beállítást, különben vízszintes görgetést okoz.
4. **A jel önmagában nem hordoz cégnevet.** Ha felirat is áll mellette (pl. lábléc), a kép
   `aria-hidden`, hogy képernyőolvasón ne hangozzon el kétszer.
5. **A lockup a láblécben nem használható.** A `viewBox` 1971×496: a lábléc ~300 px-es
   helyén a szlogen 4–5 px magas lenne. Helyette jel + valódi szöveg áll.
6. **Új megosztókép esetén az `og:image` abszolút URL** legyen (`new URL(..., Astro.site)`),
   különben a Facebook és a LinkedIn nem tölti be.

## Parancsok
```bash
npm run dev      # helyi szerver :4321
npm run build    # statikus build a dist/ mappába
npm run check    # típus- és sablonellenőrzés
```
