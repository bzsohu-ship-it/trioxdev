---
cim: IaaS – Bérelt virtuális infrastruktúra
osszefoglalo: Virtuális gépek, tárhely és hálózat a saját szerverparkunkon — a hardverrel és az üzemeltetéssel nem kell foglalkoznia.
sorrend: 1
cimke: egyedi konfiguráció
---

## Hardver és szoftver szolgáltatásként (SPLA / CSP)

## 1. Mit jelent ez egy mondatban?

Ön nem szervert vásárol, hanem **működő informatikai infrastruktúrát bérel** – a "vasat", vagy a virtualizációt, a hálózatot, a mentést és a Microsoft licenceket egyben, havi díj ellenében.

A szerverek a mi adatközponti környezetünkben futnak, a mi tulajdonunkban, a mi karbantartásunkban. Ön a saját, elkülönített virtuális gépeit kapja meg, teljes adminisztrátori jogosultsággal – pontosan úgy, mintha a szerver a saját szerverszobájában állna, csak nem kell megvennie, üzemeltetnie és 3 évente lecserélnie.

---

## 2. Mit kap konkrétan?

### 2.1 Számítási kapacitás (a "vas")

| Elem | Mit jelent |
|---|---|
| **Virtuális gépek (VM)** | Igény szerinti darabszámban, meghatározott vCPU / RAM / tárhely paraméterekkel |
| **Vállalati szerverhardver** | Enterprise szerverek, redundáns tápegységgel, ECC memóriával, RAID-védett tárolókkal |
| **Virtualizáció** | Iparági szabvány hypervisorok, ökoszisztémáira optimalizálva |
| **Rugalmas skálázás** | Több RAM, több CPU vagy nagyobb lemez általában néhány órán belül, új hardver beszerzése nélkül |
| **Leállásmentes karbantartás** | Live Migration: a VM-ek működés közben átköltöztethetők másik fizikai hosztra, ha karbantartás vagy hardvercsere szükséges |

### 2.2 Hálózat és biztonság

- **Dedikált, elkülönített hálózati szegmens (VLAN)** – az Ön gépei hálózati szinten el vannak választva minden más ügyféltől.
- **Igény esetén teljesen izolált hálózat** – saját virtuális switch, külön címtartomány, az általános hálózattól fizikailag elkülönítve. Ez érzékeny adatot kezelő rendszereknél (biotechnológia, pénzügy) alap követelmény.
- **Saját tűzfal** – dedikált gateway, amelyen a NAT-, port- és tűzfalszabályok kizárólag az Ön rendszeréhez tartoznak.
- **Publikus IP-cím(ek)** – webes, FTP vagy VPN-szolgáltatás közzétételéhez.
- **Site-to-site vagy kliens VPN** – a partner saját telephelyeinek irodai hálózatai és az adatközpontjaink közötti infrastruktúra biztonságos összekötésre.

### 2.3 Mentés és üzletmenet-folytonosság

- **Enterprise Plus** – nagyvállalati kategóriájú mentési megoldások, nem "másolat egy külső winchesterre".
- **Több szintű mentési tároló** – elsődleges repository és külön fizikai másodlagos backup targetek, egymástól független eszközökön külön adatközpontokban.
- **VM replikáció** – kritikus VM-ekről futásra kész másolat tartható fenn külön replika hoszton, így hardverhiba esetén a helyreállítás percekben és nem napokban mérhető.
- **Visszaállítási teszt** – megállapodás szerinti rendszerességgel, dokumentáltan.

### 2.4 Üzemeltetés és átláthatóság

- **Out-of-band hardvermenedzsment** – a hardver állapotát (tápegység, ventilátor, memória, lemezek) az operációs rendszertől függetlenül felügyeljük, a meghibásodás gyakran még előjelzés szintjén kiderül.
- **Kapacitásfigyelés** – CPU-, memória- és tárhely-kihasználtság folyamatos mérése, hogy a szűk keresztmetszet ne váratlanul érkezzen.
- **Rendszeres, ügyfélre szűrt riportok** – az Önhöz tartozó virtuális gépekről, erőforrásokról és hálózati beállításokról, biztonságos felületen elérhetően. Így pontosan látja, miért fizet.
- **Egy kapcsolattartó** – nem kell külön hardverszállítót, licencforgalmazót és rendszergazdát koordinálni.

---

## 3. A szoftverlicenc: SPLA és CSP

Ez az a pont, ahol a legtöbb félreértés keletkezik, ezért érdemes külön kifejteni.

### 3.1 SPLA – Services Provider License Agreement

A Microsoft külön licencelési konstrukciót tart fenn a szolgáltatóknak. A Triox Hosting **SPLA-szerződéssel** rendelkezik, ami azt jelenti:

- A Windows Server, a Remote Desktop Services (RDS), az SQL Server és más Microsoft termékek licencei **a szolgáltató nevén, havi használat alapján** kerülnek jelentésre és elszámolásra.
- **Ön nem vásárol licencet.** Nem kell előre kifizetnie több százezer vagy millió forintot olyan szoftverért, amit aztán évekig amortizál. (CAPEX)
- A licenc **a havi szolgáltatási díj részeként** kerül számlázásra (OPEX), a ténylegesen használt mennyiség szerint.
- **Havonta le- és felskálázható, nincs kötelezően vállalt hűségidő és mennyiség megkötés.** Ha egy hónapban 20 felhasználó helyett 15 dolgozik a rendszerben, a következő elszámolás ehhez igazodik.
- **Mindig jogtiszta, mindig aktuális verzió.** A verziófrissítés joga benne van a konstrukcióban, nem kell külön Software Assurance-t venni.
- **A licencaudit kockázata a szolgáltatót terheli.** A megfelelő licencmennyiség jelentése a mi feladatunk és a mi felelősségünk, aminek minden hónapban a Microsoft Corp. felé rendszeresen eleget is teszünk.

### 3.2 CSP – Cloud Solution Provider

A felhőalapú Microsoft-szolgáltatásokat (Microsoft 365, Exchange Online, Azure-kiegészítések) **CSP** programon keresztül biztosítjuk:

- Havi vagy éves előfizetés, magyar nyelvű, helyi támogatással.
- **Egy szállító, egy számla** – a bérelt szerverinfrastruktúra és a felhőszolgáltatás nem két külön adminisztráció.
- Rugalmas licencszám-módosítás új munkatárs belépésekor vagy kilépésekor.

### 3.3 Ha már van saját licence

Bizonyos Microsoft-licencek (jellemzően aktív Software Assurance vagy előfizetés mellett) **License Mobility** keretében áthozhatók a bérelt környezetbe. Ilyenkor a licencdíj kikerül a havi díjból. Ennek feltételeit meglévő szerződéseinek ismeretében közösen tisztázzuk.

---

## 4. Ha ezt a szolgáltatást választja, mit nem kell megvennie?

| Kategória | Amit egy saját szerver esetén meg kellene vásárolnia |
|---|---|
| Hardver | Szerver, CPU, memória, RAID-vezérlő, vállalati SSD/HDD, tartalék alkatrészek |
| Infrastruktúra | Rack, szünetmentes tápegység és akkumulátorcsere, hűtés, tűzvédelem, fizikai zárás |
| Hálózat | Switch, tűzfal, router, redundáns internetkapcsolat, publikus IP-tartomány |
| Szoftver | Windows Server, CAL-ok, RDS SAL-ok, SQL Server, virtualizáció, mentőszoftver-licenc |
| Mentés | Mentőeszköz, második telephelyi tároló, mentőmédia |
| Üzemeltetés | Áram (0–24 órás), légkondicionálás, karbantartási szerződés, hardvertámogatás meghosszabbítása |
| Munkaerő | Rendszergazdai óradíj a telepítésre, frissítésekre, hibaelhárításra, éjszakai és hétvégi rendelkezésre állásra |
| Kockázat | Egy meghibásodott alkatrész beszerzési ideje, amíg a cég áll |

Ezek mindegyike **beépül a havi szolgáltatási díjba** – kiszámíthatóan, egyetlen tételként.

---

## 5. A pénzügyi és adózási előny: CAPEX helyett OPEX

### 5.1 A saját szerver: beruházás (CAPEX)

Ha megvásárol egy szervert és a hozzá tartozó szoftverlicenceket:

1. A **teljes vételárat azonnal ki kell fizetnie** – a pénz egy összegben kimegy a cégből.
2. Az eszközt **aktiválni kell** a könyvekben: a 100 ezer forint feletti egyedi beszerzési értékű eszköz nem számolható el egy összegben költségként.
3. A költség **évekre elosztva, értékcsökkenési leírás formájában** jelenik meg.
4. **Kifizette ma, de az adóalapját csak évek alatt, részletekben csökkenti.**
5. Emellett jár az eszköznyilvántartás, a leltározás, az évenkénti értékcsökkenés-számítás és a végén a selejtezés adminisztrációja is.
6. Ha hitelből vagy lízingből finanszírozza: kamat, fedezet, hitelképesség-terhelés.
7. A negyedik-ötödik évben – amikor a gép már nincs a könyvekben – **újra kell kezdenie az egészet**.

### 5.2 A bérelt infrastruktúra: működési költség (OPEX)

Az IaaS **igénybe vett szolgáltatásként** kerül számlázásra:

- ✅ **A havi díj az adott időszak költsége** – nem eszközbeszerzés, nem kell aktiválni.
- ✅ **Teljes egészében, azonnal csökkenti az adóalapot** abban az évben, amelyben felmerül.
- ✅ **Az áfa havonta, folyamatosan levonható** – nem kell egy nagy összegű beruházás áfáját megelőlegezni.
- ✅ **Nincs tárgyi eszköz nyilvántartás, leltár, értékcsökkenés-számítás, selejtezés.**
- ✅ **Kiszámítható, tervezhető cash-flow** – ismétlődő, azonos nagyságrendű havi tétel.
- ✅ **Nem terheli a hitelképességet** – nem beruházás, nem eszközfinanszírozás.
- ✅ **A technológiai avulás kockázata a szolgáltatóé.** Amikor a hardver elöregszik, mi cseréljük.

### 5.3 Összehasonlítás

| | Saját szerver (CAPEX) | Bérelt infrastruktúra (OPEX) |
|---|---|---|
| Kifizetés | Egy összegben, előre | Havonta, egyenletesen |
| Költségelszámolás | Évekre elosztva, értékcsökkenéssel | **Azonnal, teljes egészében** |
| Adóalap-csökkentés | Részletekben, évek alatt | **A felmerülés évében, teljes összegben** |
| Áfa | Egy nagy összeg megelőlegezése | Havonta, folyamatosan levonva |
| Könyvviteli teher | Aktiválás, écs, leltár, selejtezés | Egy bejövő számla |
| Avulási kockázat | Az Öné | A miénk |
| Skálázhatóság | Új beszerzés kell | Havi szinten módosítható |
| Licenckockázat | Az Öné (audit) | A miénk (SPLA-jelentés) |

> **Fontos:** Ez a tájékoztató általános ismertetés, nem minősül adótanácsadásnak. A konkrét elszámolás módját kérjük, egyeztesse könyvelőjével vagy adótanácsadójával.

---

## 6. Mikor éri meg különösen?

Az IaaS jellemzően akkor a legjobb választás, ha:

- **Elöregedett a jelenlegi szerver** – a csere költsége most jelentkezne egy összegben.
- **Nincs saját rendszergazda**, vagy egyetlen ember tudásától függ a teljes IT.
- **Nincs megfelelő szerverszoba** – az irodai sarokban álló szerver hőség, por, áramkimaradás és fizikai lopás kockázatának van kitéve.
- **Nő vagy hullámzik az igény** – projektszerű terhelés, szezonalitás, gyors növekedés.
- **Fontos a mentés és a helyreállíthatóság**, de eddig nem volt rá dedikált megoldás vagy tesztelt folyamat.
- **Kiszámítható IT-költséget** szeretne a váratlan hardvermeghibásodások helyett.
- **Adóalap-optimalizálás** szempontjából előnyösebb a folyó költség a többéves amortizációnál.

---

## 7. Hogyan indul a szolgáltatás?

1. **Igényfelmérés** – milyen rendszereket futtat ma, mekkora erőforrásra van szükség, milyen elérhetőségi elvárások vannak.
2. **Ajánlat** – konkrét VM-konfiguráció, tárhely, hálózat, mentési szint és licencigény alapján, tételes havi díjjal.
3. **Szerződés és SLA** – rendelkezésre állás, reakcióidő, mentési és megőrzési szabályok írásban rögzítve.
4. **Migráció** – a meglévő rendszerek átköltöztetése, előre egyeztetett ütemezés szerint, a leállás minimalizálásával.
5. **Átadás és üzemeltetés** – hozzáférések átadása, dokumentáció, rendszeres riportok.

---

## 8. Gyakori kérdések

**Az adataim ugyanabban a rendszerben vannak, mint más ügyfeleké?**
A virtuális gépei kizárólag az Önéi, és hálózati szinten dedikált, elkülönített szegmensben futnak. Fokozottan érzékeny környezethez teljesen izolált hálózatot is tudunk biztosítani.

**Mi történik, ha felmondom a szolgáltatást?**
A virtuális gépei és adatai kiadhatók exportált formában, hogy máshol vagy saját környezetben tovább tudja üzemeltetni őket. A pontos feltételeket a szerződés rögzíti. Az SPLA-licencek nem vihetők át, mert azok szolgáltatói licencek.

**Kinél van az adat tulajdonjoga?**
Az adat minden esetben az Öné. Mi tárolási és üzemeltetési szolgáltatást nyújtunk hozzá.

**Kaphatok rendszergazdai jogot a saját gépeimen?**
Igen. A vendég operációs rendszerekben teljes körű adminisztrátori hozzáférést kap, ha ezt igényli. A hypervisor és a fizikai infrastruktúra a mi felelősségünk marad.

**Mi történik hardverhiba esetén?**
A hardvert folyamatosan felügyeljük out-of-band módon. A virtuális gépek működés közben másik fizikai hosztra költöztethetők, a kritikus rendszerekről pedig futásra kész replika tartható fenn.

**A mentés benne van az árban?**
Az alapszintű mentés igen; a megőrzési idő, a mentési gyakoriság és a replikáció mértéke az Ön igénye szerint bővíthető, ez az ajánlat, majd a szerződés tárgyát képezi.

---

## 9. Kapcsolat

Ajánlatkéréshez elegendő nagyságrendileg megadni:

- hány felhasználó dolgozik a rendszerben,
- milyen alkalmazásokat futtat (pl. ügyviteli rendszer, adatbázis, fájlszerver, terminálszerver),
- mekkora adatmennyiséget kezel,
- mennyi állásidőt tud elviselni.

Ezek alapján konkrét, tételes ajánlatot készítünk.

*Ez a dokumentum tájékoztató jellegű, nem minősül adótanácsadásnak, és nem helyettesíti az egyedi szerződéses feltételeket.*
