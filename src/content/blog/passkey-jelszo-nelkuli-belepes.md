---
cim: A jelszó, amit nem lehet ellopni
leiras: A nagy szolgáltatók sorra kapcsolják be a jelszó nélküli belépést. Közérthetően arról, mi ez, miért biztonságosabb az SMS-kódnál is, és mikor érdemes egy cégnek belevágnia.
datum: 2026-07-07
---

<div class="osszefoglalo">

Röviden

- A jelszó azért bukik el újra és újra, mert **elmondható** — és amit el lehet mondani, azt ki is lehet csalni.
- Az SMS-ben kapott kód sokat javít, de nem old meg mindent: az is átadható egy jól megcsinált hamis oldalnak.
- A passkey (belépési kulcs) lényege, hogy **a titok soha nem hagyja el az eszközét**. Nincs mit ellopni, nincs mit kicsalni.
- A cégeknek nem kell egyik napról a másikra váltaniuk. A sorrend számít: előbb a kritikus fiókok, aztán a többi.

</div>

Az elmúlt években a legtöbb cégnél ugyanaz a jelszószabály él: legyen hosszú,
legyen benne szám és nagybetű, és cserélje háromhavonta. Az eredmény jól
ismert: `Tavasz2026!`, aztán `Nyar2026!`, felragasztva a monitor sarkára.

Nem a kollégák hanyagok. Az elvárás irreális. Egy ember nem tud fejben tartani
harminc különböző, bonyolult jelszót — úgyhogy nem is tartja fejben.

## A jelszó mindig ugyanott bukik el

A jelszónak egy szerkezeti hibája van: **közös titok**. Ön ismeri, és a
szolgáltató is ismeri. Ez azt jelenti, hogy a belépéskor ki kell adnia a
kezéből — és bármi, ami kiadható, kicsalható.

Innen ered a támadások zöme. Nem feltörik a jelszót, hanem elkérik. Küldenek
egy levelet, ami a bank vagy a levelezőrendszer bejelentkezési oldalára
hasonlít, Ön beírja a jelszót, és onnantól ketten tudják.

A másik forgatókönyv még hétköznapibb: valamelyik régen használt weboldal
adatbázisa kiszivárog. Ha ott ugyanaz a jelszó szerepelt, amit a céges
levelezéshez is használ, akkor a támadónak nem is kell semmit kicsalnia.

## „De nálunk van SMS-kód”

Ez már komoly előrelépés, és önmagában a támadások nagy részét kizárja.
Érdemes viszont tudni, hol a határa.

Ha a hamis oldal jól van megcsinálva, nemcsak a jelszót kéri be, hanem a kódot
is — és valós időben továbbadja az igazi oldalnak. Ön belép, a támadó szintén.
Ezenkívül a telefonszám sem sérthetetlen: a SIM-cserés csalás régóta ismert
módszer. És ott van a legemberibb kockázat: ha valakinek naponta tízszer ugrik
fel a jóváhagyó kérdés, előbb-utóbb rányom akkor is, amikor nem ő
kezdeményezte.

> **Az SMS-kód nem rossz. Csak ugyanazon a ponton támadható, mint a jelszó: Önnek kell továbbadnia valamit.**

## Mi az a passkey — egyszerűen

A passkey (magyarul belépési kulcs) esetén a bejelentkezés nem úgy zajlik, hogy
Ön elmond egy titkot. Hanem úgy, hogy az eszköze **bizonyítja**, hogy nála van
a kulcs — anélkül, hogy megmutatná.

Vegyünk egy hasonlatot. A jelszó olyan, mintha a kapuban bemondaná a
jelmondatot: aki hallja, attól kezdve ő is be tud menni. A passkey olyan, mint
egy pecsétnyomó: a kaput őrző látja a lenyomatot, felismeri, beengedi — de a
pecsétnyomó végig az Ön zsebében marad.

A gyakorlatban ez annyit jelent, hogy belépéskor a telefonja vagy a
számítógépe kéri az ujjlenyomatát, az arcát vagy a PIN-kódját, és ennyi. Az
eszközön tárolt kulcs elvégzi a többit.

<figure class="abra">
<svg viewBox="0 0 880 268" role="img" aria-labelledby="abra-passkey">
<title id="abra-passkey">Jelszavas belépésnél a titok átmegy a hálózaton, ezért lehallgatható vagy hamis oldalnak megadható, és később újra felhasználható. Passkey esetén a kulcs az eszközön marad, csak egy aláírás megy át, ami kizárólag az adott oldalra érvényes.</title>
<text class="abra__mono" x="10" y="14">JELSZÓ</text>
<rect class="abra__doboz" x="10" y="26" width="230" height="76" rx="4" />
<text class="abra__cimke" x="125" y="58" text-anchor="middle">Az Ön eszköze</text>
<text class="abra__kicsi" x="125" y="80" text-anchor="middle">itt van a titok</text>
<path class="abra__vonal" d="M240 64 H324" />
<path class="abra__nyil" d="M332 64 L322 58 L322 70 Z" />
<text class="abra__mono" x="286" y="50" text-anchor="middle">A TITOK ÁTMEGY</text>
<rect class="abra__doboz" x="335" y="26" width="180" height="76" rx="4" />
<text class="abra__cimke" x="425" y="58" text-anchor="middle">A szolgáltató</text>
<text class="abra__kicsi" x="425" y="80" text-anchor="middle">ő is ismeri a titkot</text>
<path class="abra__vonal" stroke-dasharray="5 5" d="M515 64 H599" />
<path class="abra__nyil" d="M607 64 L597 58 L597 70 Z" />
<rect class="abra__doboz" x="610" y="26" width="260" height="76" rx="4" />
<text class="abra__cimke" x="740" y="58" text-anchor="middle">Ellopható, továbbadható</text>
<text class="abra__kicsi" x="740" y="80" text-anchor="middle">és bárhonnan újra használható</text>
<text class="abra__mono" x="10" y="146">PASSKEY</text>
<rect class="abra__kiemelt" x="10" y="158" width="230" height="76" rx="4" />
<text class="abra__cimke" x="125" y="190" text-anchor="middle">Az Ön eszköze</text>
<text class="abra__kicsi" x="125" y="212" text-anchor="middle">a kulcs nem hagyja el</text>
<path class="abra__vonal" d="M240 196 H324" />
<path class="abra__nyil" d="M332 196 L322 190 L322 202 Z" />
<text class="abra__mono" x="286" y="182" text-anchor="middle">CSAK EGY ALÁÍRÁS</text>
<rect class="abra__doboz" x="335" y="158" width="180" height="76" rx="4" />
<text class="abra__cimke" x="425" y="190" text-anchor="middle">A szolgáltató</text>
<text class="abra__kicsi" x="425" y="212" text-anchor="middle">csak ellenőriz</text>
<path class="abra__vonal" d="M515 196 H599" />
<path class="abra__nyil" d="M607 196 L597 190 L597 202 Z" />
<rect class="abra__kiemelt" x="610" y="158" width="260" height="76" rx="4" />
<text class="abra__cimke" x="740" y="190" text-anchor="middle">Nincs mit ellopni</text>
<text class="abra__kicsi" x="740" y="212" text-anchor="middle">és más oldalon nem érvényes</text>
</svg>
</figure>

Ebből következik a legfontosabb tulajdonsága: **a passkey ahhoz az egy
oldalhoz kötődik, ahol létrehozták**. Ha egy megtévesztően hasonló hamis oldal
kéri a belépést, a kulcs egyszerűen nem működik rajta. Nem azért, mert Ön
észreveszi a csalást — hanem mert a technológia nem is engedi.

## A három megoldás egymás mellett

| | Jelszó | Jelszó + SMS-kód | Passkey |
|---|---|---|---|
| Kicsalható hamis oldallal | Igen | Jellemzően igen | Nem |
| Kiszivárgó adatbázisból megszerezhető | Igen | Részben | Nem |
| Újra felhasználható másik oldalon | Igen | Igen | Nem |
| Kell hozzá megjegyezni valamit | Igen | Igen | Nem |
| Belépés gyorsasága | Lassú | Lassabb | Gyors |

## „És ha elveszik a telefon?”

Ez a leggyakoribb — és teljesen jogos — kérdés. A válasz az, hogy ugyanaz
történik, mint a bankkártyájával: letiltják, és kap újat.

A gyakorlatban ezt kétféleképp lehet előkészíteni. Vagy több eszközre kerül
kulcs (telefon és laptop is), vagy a kulcsok a fiókjához szinkronizálódnak, és
az új eszközön elérhetők lesznek. Cégeknél emellett van egy adminisztrátor, aki
regisztrálhat új eszközt — ahogy ma is ő az, aki jelszót tud állítani.

Amit viszont **előre** kell megcsinálni, az a helyreállítási folyamat: ki
igazolja a kolléga személyazonosságát, és milyen csatornán. Ha ez nincs
kitalálva, a támadó pontosan itt fog próbálkozni.

## Mikor érdemes belevágni?

Nem egyszerre, és nem mindenhol. A bevezetés akkor sikeres, ha sorrendben
történik, és a régi belépési mód addig marad meg, amíg az új be nem járódott.

<ol class="lepesek">
<li><strong>Először a kritikus fiókok.</strong> Az adminisztrátori hozzáférések, a levelezés és a pénzügyi rendszerek. Itt a legnagyobb a kár, és itt a legkevesebb az érintett.</li>
<li><strong>Legyen tartalék belépési mód.</strong> Mindenkinek legalább két regisztrált módja legyen, és legyen egy vészhelyzeti adminisztrátori fiók, amivel akkor is be lehet jutni, ha valami elakad.</li>
<li><strong>Készítsék elő a helyreállítást.</strong> Írják le, mi történik elveszett vagy cserélt eszköz esetén, és ki hagyja jóvá. Ez a folyamat lesz a rendszer leggyengébb pontja, ha nincs kitalálva.</li>
<li><strong>Utána jöhet a többi kolléga.</strong> Csoportonként, rövid tájékoztatással. A tapasztalat az, hogy az ellenállás kicsi: a belépés gyorsabb lesz, és nincs több jelszócsere.</li>
<li><strong>A végén szigorítsanak.</strong> Ha a kulcsok mindenkinél működnek, a gyengébb belépési módok fokozatosan kikapcsolhatók — enélkül a támadó egyszerűen a régi utat fogja használni.</li>
</ol>

<details>
<summary>Technikai részletek</summary>

- **FIDO2 / WebAuthn szabvány** — a passkey nem egy gyártó terméke, hanem nyílt szabvány; a nagy platformok és böngészők támogatják
- **Eszközhöz kötött vagy szinkronizált kulcs**: a szigorúbb környezetekben eszközhöz kötött (hardverkulcs), a hétköznapiban a fiókhoz szinkronizált kulcs a praktikus
- **Windows Hello for Business** és mobil hitelesítő alkalmazás jelszó nélküli módban — a céges eszközparkban jellemzően ez az első lépés
- **Hardveres biztonsági kulcsok** (USB/NFC) a kiemelt, adminisztrátori hozzáférésekhez
- **Feltételes hozzáférési szabályok**: eszközmegfelelőség, helyszín és kockázat alapján, hogy a kivételek ne váljanak kiskapuvá
- **Vészhelyzeti („break-glass”) fiók**: külön tárolt, szigorúan naplózott hozzáférés arra az esetre, ha a hitelesítés elérhetetlenné válik
- **Örökölt protokollok kizárása**: a régi, egyfaktoros bejelentkezést engedő hozzáférési utak letiltása — enélkül a bevezetés csak részben véd
- **Naplózás**: sikeres és sikertelen belépések, kulcsregisztrációk követése

</details>

## Amit ma is meg lehet tenni

Ha a váltás most nem fér bele, két dolog akkor is javít a helyzeten. Az egyik a
jelszókezelő bevezetése — így minden fiókhoz külön, hosszú jelszó tartozik,
amit senkinek nem kell fejben tartania. A másik, hogy a jelszócsere-kényszer
helyett inkább hosszabb jelszavak legyenek: a rendszeres kényszerű csere
bizonyítottan gyengébb jelszavakhoz vezet.

> **A cél nem az, hogy a kollégái jobban vigyázzanak a jelszavukra. Az, hogy a belépéshez ne kelljen olyasmi, amire vigyázni kell.**

<div class="zaras">

**A jelszó nélküli belépés bevezetése nem hetekig tartó projekt** — de a
sorrendet és a helyreállítási folyamatot érdemes előre végiggondolni. Ha
szeretné megnézni, hol tart most a cége hitelesítése, [keressen minket](/kapcsolat/),
vagy olvasson a [biztonsági megközelítésünkről](/biztonsag/).

</div>
