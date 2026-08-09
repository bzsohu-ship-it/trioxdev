# Esettanulmányok oldal — megerősítendő tételek

**Belső jegyzet. Nem publikus** — ez a mappa nincs a buildben, csak a `src/pages` és a `public` kerül ki.

Az [esettanulmanyok.astro](../src/pages/esettanulmanyok.astro) oldal a Rólunk oldal „Akikkel
dolgozunk" listáját bontja ki négy részletes esetleírássá. A négy környezet ténye onnan származik;
minden technikai állítás, amivel kibontottuk őket, egy máshol már kiadott, megerősített tételre megy
vissza.

## Megerősített — mire támaszkodik az oldal

| Állítás | Forrás |
|---|---|
| A négy környezet léte és rövid leírása | `src/pages/rolunk.astro` — „Akikkel dolgozunk" |
| Redundáns 2×10 Gbps gerinc, két budapesti helyszín, 20+ év | `rolunk.astro` — „Számokban”; `technologia.astro` |
| Ügyfelenként dedikált átjáró, saját publikus IPv4, kétszintű szegmentálás | `technologia.astro` — „Ügyfél-izoláció”; `biztonsag.astro` — 2–3. réteg |
| Teljesen izolált, az internetről nem elérhető környezet érzékeny adatnál | `technologia.astro` — „Ügyfél-izoláció”; `dcaas.md` 9. pont |
| VPN-protokollok (IPsec, WireGuard, OpenVPN, SSTP) | `biztonsag.astro` — „Hálózati perem” |
| Out-of-band management, iDRAC / iLO | `technologia.astro`; `biztonsag.astro` — 7. réteg |
| Az átállás lépései (felmérés → RPO/RTO → terv → teszt-migráció → éles átállás → üzemeltetés) | `src/content/szolgaltatasok/dcaas.md` 8. pont |
| Átvétel, dokumentálás, stabilizálás, riport | `menedzselt-it-uzemeltetes.md` — „Hogyan kezdünk neki?” |
| „A felmérés nem kötelezettségvállalás” | `helyi-uzemeltetes.md` záró blokk |
| Visszaállítási jegyzőkönyv, minősítéssel | `audit-restore-validation.md` |
| Az adat tulajdonjoga az ügyfélé | `dcaas.md` 9. pont |
| AD tartomány, csoportházirend, redundáns tartományvezérlők | `biztonsag.astro` — „Identitás” |

## Megerősítendő — amíg nincs válasz, nem kerül ki

| Kérdés | Hol kerülne az oldalra |
|---|---|
| Melyik szolgáltatási modellben (IaaS / DCaaS / SaaS / menedzselt / helyi) fut ténylegesen a négy környezet? | Ma csak *hivatkozunk* a hasonló modellre. Ha megvan, mehet egy mátrix az áttekintő táblázat alá. |
| Az izolált kutatói környezetben **hova megy a mentés** — marad a zárt szegmensen belül, vagy van telephelyen kívüli másolat is? | Ma a semleges „a mentési célpontok is a zárt környezet részei, egymástól függetlenül” áll. Pontosítható. |
| A médiaszolgáltatónál **melyik virtualizációs platform** fut, és volt-e platformváltás a migrációval? | Az 01. eset technikai részletei közé. |
| Melyik évben zajlott az egyes projektek átállása, és mióta fut nálunk? | „X éve üzemeltetjük” típusú mondat az esetkártyák elejére. |
| Adható-e **névre szóló referencia** ajánlatkéréskor, az érintett partner hozzájárulásával? | Ma óvatosan van megfogalmazva: „kérdezzen rá a felmérésen, megnézzük, mit tudunk megosztani”. Ha van rá elvi zöld út, ez határozottabb lehet. |
| Van-e olyan partner, aki **hozzájárult a nevesítéshez**? | Egy nevesített eset többet ér az összes többinél. Külön kártyaként lehetne, logóval. |

## Amit szándékosan nem írtunk ki

- **Bármilyen mért szám az ügyfélkörnyezetekről**: adatmennyiség (TB), VM- vagy szerverdarabszám,
  felhasználószám, migrációs időtartam, tényleges állásidő az átálláskor, elért rendelkezésre állás,
  megtakarítás forintban vagy százalékban. Egyik sincs megadva, tehát egyik sem szerepel.
  Az oldal erről a „Nem írunk ki számot, amit nem mértünk” kártyában maga is számot ad.
- **Ágazati alszegmens vagy bármi, ami beazonosít** (pl. „országos kereskedelmi rádió”,
  „gyógyszerkutató labor”). A négy megnevezés pontosan annyi, amennyi a Rólunk oldalon is szerepel.
- **Rendelkezésre állási vagy reakcióidő-szám** — ez az SLA-ba való, lásd `docs/biztonsag-megerositendo.md`.
- **Ügyfélszám.** Az oldal „4 környezet”-et ír, nem „4 ügyfelet”: a negyedik eset több cég azonos
  helyzete. Ha van megadható valós ügyfélszám, a hero gyorsnézetébe kerülhet.

## Szerkesztési megjegyzés a csillaghoz

A `*` jel mind a négy környezetnév mellett és az áttekintő táblázat fejlécében áll, és a lap alján
lévő `#nevekrol` lábjegyzetre ugrik. Ez tudatosan apró: Zsolt kérése az volt, hogy a diszkréció
tény legyen, ne az oldal fő üzenete. Ha új esetkártya kerül fel, a csillagot is vinni kell vele.
