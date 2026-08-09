# Biztonság oldal — megerősítendő tételek

**Belső jegyzet. Nem publikus** — ez a mappa nincs a buildben, csak a `src/pages` és a `public` kerül ki.

A [biztonsag.astro](../src/pages/biztonsag.astro) minden állítása mögött áll egy másik oldalon már
kiadott, megerősített tétel: a `/technologia/` kártyái, a szolgáltatásoldalak platform-katalógusai,
a `/rolunk/` számai és a `/gyik/` válaszai. Új biztonsági állítás **nem** került az oldalra.

## Amit az oldal szándékosan NEM állít

Az „Amit nem állítunk” szekció ezeket részben ki is mondja — a lenti lista az, ami mögé
megerősítés kellene, mielőtt bármelyik kikerül.

| Tétel | Hova kerülne | Miért nincs kint |
|---|---|---|
| **ISO 27001 / ISAE / SOC 2 tanúsítvány** | „Megfelelés és bizonyíthatóság” blokk | Nincs megerősítve, hogy van érvényes auditlelet. Az oldal jelenleg azt írja: tanúsítványra csak akkor hivatkozunk, ha van mögötte auditlelet. |
| **NIS2-megfelelés mint vállalás** | Ugyanoda | Az oldal csak annyit ír, hogy a felmérésen végigvesszük az audit-elvárásokat — ez a `menedzselt-it-uzemeltetes.md` felmérési listájából jön. Konkrét NIS2-megfelelési vállalás nincs. |
| **EDR / XDR terméknév, SIEM, SOC-ügyelet** | „Végpont” rétegkártya | A platform-katalógus csak „végpontvédelem felügyelete, központi konzollal” szintig megy. TermékNÉV és 7×24 ügyelet nincs megerősítve. |
| **Sérülékenységvizsgálat / pentest rendszeressége** | „Rétegről rétegre” vagy önálló blokk | A `menedzselt-it-uzemeltetes.md` említ „biztonsági auditok, sérülékenységek feltárása” tételt, de rendszerességet és módszertant nem. Ezért az oldalon sem szerepel. |
| **DDoS-védelem** | „Hálózati perem” rétegkártya | Sehol máshol nem szerepel a honlapon. |
| **Titkosítás nyugalmi állapotban (at rest), mentés-titkosítás, immutable/WORM repository** | „Adat” rétegkártya | Nincs megerősítve. Zsarolóvírus-kontextusban ez erős érv lenne — érdemes megkérdezni. |
| **Konkrét reakcióidő, rendelkezésre állási %, RTO/RPO szám** | Az incidens-ábra lábjegyzete | Eldöntött kérdés: szerződésben (SLA) rögzítjük, honlapon nem írjuk ki. Lásd `helyi-uzemeltetes-megerositendo.md` „Lezárt kérdések”. |
| **Ügyfélszám, kezelt végpontszám, incidensstatisztika** | Hero gyorsnézet | Nincs megadott valós szám. A gyorsnézet négy adata mind visszavezethető: 1 ügyfél = 1 hálózat, 2 helyszín, 3-2-1 mentés, 0 kitett kezelőfelület. |
| **Munkatársi biztonsági tanúsítványok** (pl. Veeam VMCE, MikroTik MTCNA, Cisco CCNA) | Önálló blokk lehetne | Ugyanaz a nyitott kérdés, mint a `partnerek-megerositendo.md`-ben. |

## A felelősségi mátrix

A „Ki miért felel” táblázat **tájékoztató**, és ezt a lábjegyzet ki is mondja: a végleges határt a
szolgáltatási szerződés rögzíti. Az egyes cellák forrása:

- **IaaS — operációs rendszer az ügyfélé:** `gyik.astro`, „Ön dönti el, milyen szoftverkörnyezet fut rajta”
- **DCaaS — OS, címtár, mentés a Trioxé:** `dcaas.md` 3.1–3.6
- **SaaS — teljes alkalmazás-stack a Trioxé:** `saas.md` 3.2
- **Helyi és hibrid — a fizikai környezet az ügyfélé, a felügyelet a Trioxé:** `helyi-uzemeltetes.md` 1–3.
- **Visszaállítási teszt mindenhol „közös”:** eldöntött kérdés, önálló szolgáltatás, nem az alapdíj része.

Ha Zsolt bármelyik cellát máshogy látja, **a táblázat a mérvadó dokumentum az ügyfél felé** — ott kell
javítani először.

## Ellenőrizendő a következő körben

- A `/tamogatas/` oldalon még ott áll a „*Ide kerüljön a nyitvatartás és a vállalt reakcióidő.*”
  jelölés. A biztonsági oldal incidens-szekciója hivatkozik a Támogatás oldalra — érdemes együtt
  kitölteni.
