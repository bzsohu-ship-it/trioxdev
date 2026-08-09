# Partnerek oldal — megerősítendő tételek

**Belső jegyzet. Nem publikus** — ez a mappa nincs a buildben, csak a `src/pages` és a `public` kerül ki.

A [partnerek.astro](../src/pages/partnerek.astro) oldal minden gyártónál azt írja le, hogy az adott
termék **mit csinál** a Triox által üzemeltetett környezetekben. Ez mind alátámasztható a
szolgáltatásoldalak platform-katalógusából. Formális partnerstátuszt viszont az oldal **egyetlen
gyártónál sem állít**, a Microsoft kivételével.

## Megerősített

| Gyártó | Állítás | Forrás |
|---|---|---|
| **Microsoft** | CSP viszonteladó, SPLA szerződéses partner; a licencaudit kockázata a szolgáltatót terheli | `src/content/szolgaltatasok/iaas.md` 3.1–3.2, `dcaas.md` 3.7 |

## Megerősítendő — amíg nincs válasz, nem kerül ki

| Kérdés | Hol kerülne az oldalra |
|---|---|
| Van-e **formális viszonteladói vagy partnerszerződés** a Dell, HPE, Lenovo, Cisco, MikroTik, Veeam vagy Synology felé? | A csempe `szerep` mezője alá, a Microsoftéhoz hasonló formában |
| Van-e **partnerfokozat** (Gold / Premier / Authorized Reseller stb.) vagy tanúsítványszám, amit ki lehet írni? | Ugyanoda |
| Van-e **gyártói logóhasználati engedély**? | Enélkül a csempéken a név marad szedve — lásd lent |
| Van-e **mérnöki tanúsítvány** (pl. Veeam VMCE, MikroTik MTCNA/MTCRE, Cisco CCNA) a csapatban? | Önálló blokk lehetne az oldal alján: „Amit a csapat papírral is tud" |

## Logók

A csempe akkor mutat logót, ha a fájl bekerül a `public/partnerek/` mappába, és a `partnerek.astro`
adott sorába felvesszük a `logo: '<fájlnév>'` mezőt. **Addig a név áll benne szedve, ami szándékos:**
a gyártói logók használatát márkahasználati szabályzat köti, és a legtöbb gyártó megköveteli az
érvényes partnerszerződést a logó megjelenítéséhez.

Ha megvan az engedély, a logók SVG-ben kerüljenek be (a csempe 2,75 rem magasságra skálázza őket).

## Amit szándékosan nem írtunk ki

- **Reakcióidő és rendelkezésre állás gyártói támogatásra** (pl. „next business day alkatrészcsere") —
  ez a konkrét támogatási szerződéstől függ gépenként, nem általánosítható.
- **Ügyfélszám, telepített eszközszám** — nincs megadott valós szám.
- **IBM Db2** — a `helyi-uzemeltetes-megerositendo.md` szerint továbbra sem vállalt platform, ezért
  az IBM csempe csak a szerverekről beszél.
