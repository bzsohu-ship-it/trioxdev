---
cim: Az auditor nem azt kérdezi, tartottak-e oktatást
leiras: Hanem azt, hogy tudják-e bizonyítani. A NIS2 hazai törvénye és a DORA is elvárja a dolgozók biztonságtudatosságát — arról viszont kevés szó esik, hogy ezt mivel lehet igazolni. Közérthetően a képzésről és a mérésről.
datum: 2026-08-20
piszkozat: true
---

<div class="osszefoglalo">

Röviden

- A támadások túlnyomó része nem a rendszernél kezdődik, hanem egy kollégánál, aki rákattint valamire.
- A hazai kiberbiztonsági törvény és a pénzügyi szektorra vonatkozó DORA is elvárja a **dolgozók biztonságtudatosságát** — csak épp mindkettő azt is elvárja, hogy ez **bizonyítható** legyen.
- Jogszabály nem ír elő konkrét szoftvert. Egy erre való platform — a legismertebb a **KnowBe4** — attól hasznos, hogy méri és dokumentálja azt, amit egy éves prezentáció nem.
- A cél nem az, hogy a kollégák „átmenjenek a teszten”. Az, hogy egy gyanús levélnél megálljanak — és merjenek szólni.

</div>

Egy éves biztonsági oktatás jellemzően így néz ki: januárban van egy prezentáció,
mindenki aláír egy jelenléti ívet, és a mappa lekerül a polcra. Ha márciusban
megérkezik egy megszólalásig hiteles levél a „szállítótól” az új
bankszámlaszámmal, abból a prezentációból már semmi nem segít.

Ez nem a kollégák hibája. Egy egyszeri előadás nem alakít ki reflexet — arról
nem is beszélve, hogy a támadások időközben sokat változtak. Erről korábban
[külön írtunk](/blog/ai-csalas-hangklonozas/): a rossz helyesírás mint
felismerési jel elveszett.

## „A leggyengébb láncszem az ember” — közhely, de mérhető

Ezt a mondatot annyiszor leírták már, hogy elveszítette a súlyát. Pedig van egy
gyakorlati következménye, amiről ritkán esik szó: **ha az ember a kockázat egyik
hordozója, akkor ezt a kockázatot mérni is lehet.**

Nem úgy, hogy megkérdezzük, ki figyelt oda az oktatáson. Hanem úgy, hogy
megnézzük, ki mit csinál egy valósághű, de ártalmatlan próbahelyzetben. Ez a
különbség a „tartottunk oktatást” és a „tudjuk, hol tartunk” között.

> **Ami nincs mérve, arról nem tudjuk, javult-e. Ami nincs dokumentálva, arról az auditor azt feltételezi, hogy meg sem történt.**

## Mit vár el a jogszabály — és mit nem

Itt érdemes pontosnak lenni, mert erről sok félreértés kering.

A NIS2 irányelvet Magyarországon a **2024. évi LXIX. törvény** (Kiberbiztonsági
tv.) ültette át, amely 2025. január 1-jén lépett hatályba; a versenyszférában a
felügyeleti hatóság az **SZTFH**. A pénzügyi szektorra emellett a **DORA**
rendelet — (EU) 2022/2554 — vonatkozik, amelyet 2025. január 17-e óta kell
alkalmazni.

A két szabályozás máshogy nyúl a képzéshez:

| | Kire vonatkozik | Mit mond a képzésről |
|---|---|---|
| **Kiberbiztonsági tv. (NIS2)** | Az érintett szervezetek — jellemzően kritikus és fontos ágazatok | A kockázatkezelési intézkedések közé tartozik a kiberbiztonsági higiénia és a képzés. A végrehajtási rendelet a **vezető tisztségviselőkre és az információbiztonsági felelősökre** ír elő konkrét, óraszámhoz kötött képzést. |
| **DORA** | Pénzügyi szervezetek | A 13. cikk kifejezetten **minden munkavállalóra és a felső vezetésre** előírja az IKT-biztonsági tudatossági programot, a szerephez igazított mélységben. |

A vezetői és felelősi képzés óraszámait a **17/2025. (VII. 24.) EM rendelet**
rögzíti; a 2025 vége előtt kinevezetteknek átmeneti határidőt ad. Hogy egy adott
cégre pontosan mi vonatkozik, az az ágazattól és a mérettől függ — **ezt a
kérdést érdemes szakértővel tisztázni, ez a cikk nem jogi tanácsadás.**

Két dolgot viszont érdemes kiemelni, mert ezek minden érintettre igazak:

- **Konkrét szoftvert egyik jogszabály sem ír elő.** E-learning rendszer nélkül
  is lehet megfelelni.
- **A bizonyíthatóságot viszont mindkettő elvárja.** Egy ellenőrzésnél nem a
  szándék számít, hanem a dokumentum.

## Amit egy platform hozzátesz

Itt jön képbe az eszközkategória, amelynek a legismertebb képviselője a
**KnowBe4**. Nem varázslat és nem is kötelező — egyszerűen elvégzi azt a három
dolgot, amit kézzel nagyon nehéz.

Az első a **rendszeresség**: rövid, ismétlődő képzési egységek egyszeri
előadás helyett, magyar nyelvű tartalommal is.

A második a **próbahelyzet**: szimulált adathalász levelek, amelyek valósághűek,
de ártalmatlanok. Aki rákattint, nem kárt okoz, hanem egy visszajelzést kap.

A harmadik — és auditban ez a legfontosabb — a **nyomvonal**: ki, mikor, mit
végzett el, hogyan változott az eredmény. A platform beépített riportjai és
naplója pontosan ezt adják ki.

<figure class="abra">
<svg viewBox="0 0 880 262" role="img" aria-labelledby="abra-kepzesi-kor">
<title id="abra-kepzesi-kor">A biztonságtudatossági program körfolyamat: felmérés, képzés, szimulált adathalász próba, majd mérés. Aki elakad, célzott ismétlést kap, és a kör újraindul. A folyamat mellékterméke a dokumentált nyomvonal, ami az auditnak marad.</title>
<text class="abra__mono" x="105" y="26" text-anchor="middle">1. FELMÉRÉS</text>
<rect class="abra__doboz" x="10" y="40" width="190" height="80" rx="4" />
<text class="abra__cimke" x="105" y="72" text-anchor="middle">Hol tartunk most</text>
<text class="abra__kicsi" x="105" y="96" text-anchor="middle">kiindulási állapot</text>
<path class="abra__vonal" d="M200 80 H234" />
<path class="abra__nyil" d="M242 80 L232 74 L232 86 Z" />
<text class="abra__mono" x="340" y="26" text-anchor="middle">2. KÉPZÉS</text>
<rect class="abra__doboz" x="245" y="40" width="190" height="80" rx="4" />
<text class="abra__cimke" x="340" y="72" text-anchor="middle">Rövid, ismétlődő</text>
<text class="abra__kicsi" x="340" y="96" text-anchor="middle">nem évi egy előadás</text>
<path class="abra__vonal" d="M435 80 H469" />
<path class="abra__nyil" d="M477 80 L467 74 L467 86 Z" />
<text class="abra__mono" x="575" y="26" text-anchor="middle">3. PRÓBA</text>
<rect class="abra__doboz" x="480" y="40" width="190" height="80" rx="4" />
<text class="abra__cimke" x="575" y="72" text-anchor="middle">Szimulált levél</text>
<text class="abra__kicsi" x="575" y="96" text-anchor="middle">valósághű, ártalmatlan</text>
<path class="abra__vonal" d="M670 80 H704" />
<path class="abra__nyil" d="M712 80 L702 74 L702 86 Z" />
<text class="abra__mono" x="793" y="26" text-anchor="middle">4. MÉRÉS</text>
<rect class="abra__kiemelt" x="715" y="40" width="155" height="80" rx="4" />
<text class="abra__cimke" x="793" y="72" text-anchor="middle">Mi változott</text>
<text class="abra__kicsi" x="793" y="96" text-anchor="middle">ki hol tart</text>
<path class="abra__vonal" d="M793 120 V152 H340 V136" />
<path class="abra__nyil" d="M340 124 L334 138 L346 138 Z" />
<text class="abra__mono" x="566" y="170" text-anchor="middle">AKI ELAKAD, CÉLZOTT ISMÉTLÉST KAP</text>
<path class="abra__vonal" stroke-dasharray="4 4" d="M170 152 V190" />
<rect class="abra__kiemelt" x="20" y="190" width="300" height="56" rx="4" />
<text class="abra__mono" x="170" y="214" text-anchor="middle">AMI AZ AUDITORNAK MARAD</text>
<text class="abra__kicsi" x="170" y="234" text-anchor="middle">ki, mikor, mit végzett el — visszakereshetően</text>
</svg>
</figure>

## A szimulált adathalászat nem csapda

Ez a leggyakoribb fenntartás, és jogos: senki nem szeretné, ha a kollégák úgy
éreznék, tőrbe csalják őket. A tapasztalat szerint ez azon múlik, **hogyan
vezetik be**.

Amit érdemes előre kimondani: a cél nem a kollégák megszégyenítése, hanem az,
hogy a hiba **gyakorlaton** derüljön ki, ne élesben. Aki rákattint, kapjon
azonnali, tárgyilagos visszajelzést — ne kioktatást. És a nevekre bontott
eredmény ne a faliújságra kerüljön.

A legfontosabb pedig ez: **a bejelentés legyen a siker, ne a hibátlanság.** Ha a
kolléga fél a következményektől, akkor élesben sem fog szólni — és pontosan az
a néhány óra vész el, ami alatt a kár még korlátozható lett volna.

> **Egy szimuláció akkor jó, ha a végén többen mernek szólni. Nem akkor, ha kevesebben kattintanak.**

## Hogyan álljon neki

<ol class="lepesek">
<li><strong>Nézzék meg, mi vonatkozik Önökre.</strong> Ágazat, méret, ügyfélkör — ebből derül ki, hogy a Kiberbiztonsági tv., a DORA, egy ügyfél-átvilágítás vagy egyszerűen a józan ész az indok. A válasz meghatározza, meddig kell elmenni.</li>
<li><strong>Mérjenek egy kiindulási állapotot.</strong> Egy első, mindenkire kiterjedő próba megmutatja, hol tart ma a cég. Enélkül később nem lesz mihez viszonyítani — és éppen a javulás a legjobb érv a folytatás mellett.</li>
<li><strong>Mondják ki a szabályokat előre.</strong> Hogy lesznek próbák, hogy ezek célja a gyakorlás, és hogy a bejelentésért soha nincs retorzió. Ezt a vezetőnek kell kimondania, nem az informatikának.</li>
<li><strong>Kezdjék a vezetőkkel.</strong> Nemcsak azért, mert rájuk szólnak a szigorúbb képzési előírások, hanem mert a megszemélyesítéses csalás célpontja is jellemzően ez a kör.</li>
<li><strong>Tegyék rendszeressé, és őrizzék meg a riportokat.</strong> Egy audit vagy egy biztosítói kárrendezés visszamenőleg kér bizonyítékot. Az a riport ér valamit, ami akkor is megvan, amikor már senki nem emlékszik a részletekre.</li>
</ol>

## Amit a rendszer oldalán érdemes végiggondolni

<details>
<summary>Technikai és bevezetési részletek</summary>

- **Magyar nyelvű tartalom**: a képzés csak akkor működik, ha a kollégák a saját nyelvükön kapják — a nagyobb platformok, köztük a KnowBe4, ezt támogatják
- **Szerepkör szerinti bontás**: a pénzügyre és a vezetőkre más forgatókönyv való, mint a gyártásra
- **A szimulált levelek átengedése** a levelezőrendszer szűrőin, hogy a próba valóban megérkezzen — ez tervezést igényel
- **Adatvédelmi tisztázás**: milyen adat keletkezik a kollégákról, ki látja, meddig őrizzük — ez a belső szabályzatba és a munkavállalói tájékoztatóba is bekerül
- **Egyszerű bejelentési út**: egy gomb a levelezőben, amivel a gyanús levél egy kattintással jelenthető
- **Riportok megőrzése** az audit által elvárt ideig, visszakereshető formában
- **Integráció a meglévő védelemmel**: a képzés a technikai réteget kiegészíti, nem helyettesíti — MFA, levélhitelesítés (SPF, DKIM, DMARC) és adathalász-védelem nélkül önmagában kevés

</details>

## Amit ettől nem szabad várni

Az őszinteség kedvéért: egy tudatossági program nem old meg mindent. Nem fogja
megakadályozni a nulladik napi sérülékenységet, nem pótolja a mentést, és nem
helyettesíti a többfaktoros hitelesítést. Aki azt reméli, hogy a képzés után a
kattintási arány nullára megy, csalódni fog — ez nem is reális cél.

Amit viszont ad: a támadás egy jelentős része megáll a kollégánál, a többinél
pedig **órákkal hamarabb érkezik a bejelentés**. Egy zsarolóvírusnál vagy egy
utalásos csalásnál ez a néhány óra dönti el, mekkora a kár.

<div class="zaras">

**Nézzük meg együtt, hol tart most a cége.** A felmérés végén kap egy
dokumentált állapotképet és egy kockázati listát — abban az is benne van, mit
vár el Önöktől egy audit, és mi az a néhány lépés, ami a legtöbbet javít.
[Kérjen felmérést](/kapcsolat/), vagy olvasson a
[biztonsági megközelítésünkről](/biztonsag/).

</div>
