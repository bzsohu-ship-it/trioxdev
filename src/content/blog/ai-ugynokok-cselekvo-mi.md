---
cim: Az AI eddig javaslatot adott. Most már cselekszik is.
leiras: Az AI-ügynök nem választ ír, hanem elvégzi a feladatot — belép a rendszerbe, kitölt, elküld, módosít. Közérthetően arról, mi változik ettől egy cég mindennapjaiban, és hol érdemes megállítani.
datum: 2026-08-06
---

<div class="osszefoglalo">

Röviden

- Az eddigi AI **válaszolt**. Az ügynök **cselekszik**: belép a rendszerekbe, kitölt egy űrlapot, levelet küld, adatot módosít.
- Ettől nem lett okosabb. Attól változott meg minden, hogy a tévedésének mostantól **következménye** van.
- A kérdés nem az, hogy megbízunk-e benne, hanem hogy **mihez van jogosultsága**, és **mit nem tehet meg jóváhagyás nélkül**.
- A szabályok ugyanazok, mint egy új kollégánál: szűk jogosultság, jóváhagyás a visszafordíthatatlan lépések előtt, és napló arról, ki mit csinált.

</div>

Az elmúlt években az irodai mesterséges intelligencia egy dolgot csinált:
szöveget adott vissza. Kért egy összefoglalót, kapott egyet. Kért egy
levéltervezetet, kapott egyet. Amit a válasszal kezdett, az az Ön dolga volt —
átolvasta, javított rajta, elküldte.

Most egy új szó járja körbe a szakmát: **ügynök**. Az elnevezés talán
titokzatosan hangzik, a jelentése viszont egyszerű. Az ügynök nem javaslatot
ad, hanem elvégzi a feladatot. Nem megírja a levelet, hanem elküldi. Nem
elmondja, mit kellene beírni a rendszerbe, hanem beírja.

## Mi a különbség a „válaszol” és a „csinálja” között?

Első hallásra ez csak kényelmi kérdés: eggyel kevesebb kattintás. A gyakorlatban
viszont egy fontos biztonsági elem tűnik el a folyamatból — **az ember, aki
eddig a válasz és a következmény közé állt**.

Amikor az AI csak javasolt, minden tévedése megállt egy emberi pillantásnál.
Rossz volt az összeg? Kiszúrta, mielőtt elküldte. Nem stimmelt a határidő?
Javította. Ez a szűrő nem volt tökéletes, de ott volt.

Az ügynöknél ez a lépés kiesik — hacsak nem tesszük vissza szándékosan.

<figure class="abra">
<svg viewBox="0 0 880 306" role="img" aria-labelledby="abra-ugynok">
<title id="abra-ugynok">Korábban a folyamat három lépésből állt: kérdés, az AI javaslata, majd az ember végezte el a műveletet — a megállás természetes volt. Az ügynöknél a feladatot a gépi lépések követik, és a művelet magától megtörténik, ezért a jóváhagyási pontot szándékosan kell visszatenni a visszafordíthatatlan lépés elé.</title>
<text class="abra__mono" x="10" y="14">EDDIG</text>
<rect class="abra__doboz" x="10" y="26" width="210" height="76" rx="4" />
<text class="abra__cimke" x="115" y="58" text-anchor="middle">A kérdés</text>
<text class="abra__kicsi" x="115" y="80" text-anchor="middle">amit Ön feltett</text>
<path class="abra__vonal" d="M220 64 H266" />
<path class="abra__nyil" d="M274 64 L264 58 L264 70 Z" />
<rect class="abra__doboz" x="280" y="26" width="210" height="76" rx="4" />
<text class="abra__cimke" x="385" y="58" text-anchor="middle">Az AI javasol</text>
<text class="abra__kicsi" x="385" y="80" text-anchor="middle">szöveget ad vissza</text>
<path class="abra__vonal" d="M490 64 H536" />
<path class="abra__nyil" d="M544 64 L534 58 L534 70 Z" />
<rect class="abra__kiemelt" x="550" y="26" width="320" height="76" rx="4" />
<text class="abra__cimke" x="710" y="58" text-anchor="middle">Az ember végzi el</text>
<text class="abra__kicsi" x="710" y="80" text-anchor="middle">a megállás magától adódik</text>
<text class="abra__mono" x="10" y="138">MOST</text>
<rect class="abra__doboz" x="10" y="150" width="210" height="76" rx="4" />
<text class="abra__cimke" x="115" y="182" text-anchor="middle">A feladat</text>
<text class="abra__kicsi" x="115" y="204" text-anchor="middle">amit Ön kiadott</text>
<path class="abra__vonal" d="M220 188 H266" />
<path class="abra__nyil" d="M274 188 L264 182 L264 194 Z" />
<rect class="abra__doboz" x="280" y="150" width="210" height="76" rx="4" />
<text class="abra__cimke" x="385" y="182" text-anchor="middle">Az ügynök lép</text>
<text class="abra__kicsi" x="385" y="204" text-anchor="middle">belép, kitölt, küld</text>
<path class="abra__vonal" d="M490 188 H536" />
<path class="abra__nyil" d="M544 188 L534 182 L534 194 Z" />
<rect class="abra__doboz" x="550" y="150" width="320" height="76" rx="4" />
<text class="abra__cimke" x="710" y="182" text-anchor="middle">A művelet megtörtént</text>
<text class="abra__kicsi" x="710" y="204" text-anchor="middle">nincs, ami magától megállítsa</text>
<path class="abra__vonal" stroke-dasharray="5 5" d="M517 226 V250" />
<rect class="abra__kiemelt" x="370" y="250" width="300" height="52" rx="4" />
<text class="abra__mono" x="520" y="272" text-anchor="middle">IDE KELL A JÓVÁHAGYÁS</text>
<text class="abra__kicsi" x="520" y="292" text-anchor="middle">a visszafordíthatatlan lépés elé</text>
</svg>
</figure>

## Miért éppen most?

Nem egyik napról a másikra történt. Két dolog találkozott.

Az egyik, hogy a nyelvi modellek elég megbízhatóan tudják **lépésekre bontani**
a feladatot: mit kell először megnézni, mi következik utána, mikor van kész. A
másik, hogy a szoftverek sorra kaptak olyan csatlakozási pontokat, amiken egy
program ugyanazt meg tudja tenni, amit egy ember a felületen kattintva.

Ettől lett az ügynök hirtelen használható — és ettől lett a jogosultságok
kérdése sürgős.

> **Nem az a fordulat, hogy az AI okosabb lett. Az, hogy már nem javasol, hanem gombot nyom.**

## A tévedés ára változott meg

Egy nyelvi modell időnként magabiztosan téved. Ez eddig sem volt jó, de
kezelhető volt: az ember átolvasta és javította. Egy ügynöknél viszont a
tévedés nem szöveg marad, hanem **elküldött levél**, **módosított adat** vagy
**megrendelés**.

Fontos látni, hogy ez nem az AI „elszabadulásáról” szól. A hétköznapi
kockázatok sokkal prózaibbak: félreérti a feladatot, rossz rekordot választ,
kétszer csinálja meg ugyanazt, vagy olyasmit is elvégez, amit Ön csak
előkészíteni kért.

## Nem bizalmi kérdés, hanem jogosultsági

A leggyakoribb hiba, hogy a cégek ezt bizalmi kérdésként teszik fel:
„megbízhatunk benne?” Ez zsákutca, mert nincs rá jó válasz. A használható
kérdés így hangzik: **mit tud megtenni, és mihez kell engedély?**

Ez pontosan ugyanaz a logika, ami egy új kolléga esetében is működik. Nem azért
kap szűkebb jogosultságot, mert nem bízunk benne, hanem mert így a tévedés is
kisebbet üt.

| Amit nyugodtan rábízhat | Amihez emberi jóváhagyás kell |
|---|---|
| Adat összegyűjtése, kigyűjtése, összehasonlítása | Levél kiküldése ügyfélnek vagy partnernek |
| Vázlat, összefoglaló, jegyzőkönyv elkészítése | Pénzügyi tranzakció, megrendelés, szerződéses vállalás |
| Belső feladatok rendezése, emlékeztetők | Adat módosítása vagy törlése éles rendszerben |
| Ismétlődő adminisztráció előkészítése | Jogosultság adása, fiók létrehozása |
| Javaslat arra, mi legyen a következő lépés | Bármi, ami a cégen kívülre látszik |

A jobb oldali oszlop lényege nem az, hogy az ügynök ne érjen hozzá. Hanem hogy
**előkészítheti, de elküldeni ember küldi el.**

## Öt szabály, mielőtt bekapcsolja

<ol class="lepesek">
<li><strong>Adjon neki saját azonosítót.</strong> Ne egy kolléga fiókjával dolgozzon, mert akkor a naplóban minden az ő nevén jelenik meg. Külön azonosítóval visszakereshető, mit csinált a gép és mit az ember.</li>
<li><strong>Kezdje olvasási joggal.</strong> Az első hetekben elég, ha megnéz, összegyűjt és javasol. Ami tényleg időt takarít meg, az sokszor már ennyitől is látszik.</li>
<li><strong>Húzza meg a visszafordíthatatlan vonalat.</strong> Kiküldött levél, utalás, törlés, jogosultság-adás: ezek elé mindig kerüljön emberi jóváhagyás. Ez nem lassítja le a hasznot, csak a kárt korlátozza.</li>
<li><strong>Legyen napló, és nézze is meg valaki.</strong> Az első időszakban hetente érdemes átfutni, mit csinált. A legtöbb félreértés itt derül ki — jóval azelőtt, hogy baj lenne belőle.</li>
<li><strong>Mondja meg, kihez tartozik.</strong> Legyen egy megnevezett kolléga, aki felel érte: ő állítja le, ha furcsán viselkedik, és őt kérdezik, ha valami nem stimmel. Gazdátlan rendszerből lesz a legtöbb baj.</li>
</ol>

## És amit a rendszer oldalán érdemes

<details>
<summary>Technikai részletek</summary>

- **Külön szolgáltatásfiók** az ügynöknek, a legszűkebb szükséges jogosultsággal — nem személyes fiók, nem adminisztrátori jog
- **Jogosultság-lejárat és rendszeres felülvizsgálat**: ami egy kísérlethez kellett, az három hónap múlva már ne éljen
- **Jóváhagyási lépés** a kifelé irányuló és a visszafordíthatatlan műveletek előtt, technikailag kikényszerítve, nem szabályzatban kérve
- **Teljes naplózás**: mit ért el, mit módosított, mikor — visszakereshető formában
- **Elkülönített próbakörnyezet** a bevezetés első szakaszára, éles adat nélkül
- **Adatkezelési tisztázás**: milyen adat kerülhet a szolgáltatáshoz, hol tárolódik, mennyi ideig — ez a belső szabályzatba is bekerül
- **Leállítási lehetőség**: legyen egy kapcsoló, amivel azonnal megállítható, és tudja valaki, hol van

</details>

## Mit várjon reálisan?

Az ügynökök ma az ismétlődő, jól körülírható adminisztrációban hoznak
kézzelfogható eredményt: adatot gyűjtenek össze, előkészítenek, rendszereznek.
Ami nem megy: a felelősség átvétele. A számot, a határidőt és a vállalást
továbbra is embernek kell jóváhagynia.

Ezért a bevezetés sikere nem azon múlik, melyik terméket választja. Azon, hogy
a jogosultságok rendben vannak-e, és hogy előre eldöntötte-e, hol húzódik a
vonal.

> **Egy ügynök annyira veszélyes, amennyire tág jogosultságot adott neki. Ez nem róla szól, hanem önről.**

<div class="zaras">

**A jogosultságok rendbetétele az első lépés** — akkor is, ha az ügynökök még
odébb vannak. Ha szeretné látni, mi az aktuális állapot Önöknél, kezdjük egy
felméréssel: a végén kap egy dokumentált állapotképet és egy kockázati listát.
[Kérjen felmérést](/kapcsolat/), vagy olvasson a
[biztonsági megközelítésünkről](/biztonsag/).

</div>
