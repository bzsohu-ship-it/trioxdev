---
cim: DCaaS – Bérelt adatközpont
osszefoglalo: A teljes IT infrastruktúráját kiszervezheti hozzánk — szerverek, tárolók, hálózat és üzemeltetés egy kézben, saját szerverszoba nélkül.
sorrend: 2
cimke: teljes kiszervezés
szelesLayout: true
---

## Akár a teljes szerverterem szolgáltatásként

## 1. Mit jelent ez egy mondatban?

A DCaaS azt jelenti, hogy **a cége teljes szerverterme átkerül hozzánk szolgáltatásként** – nem néhány virtuális gép, hanem a teljes kiszolgálói környezet: a dedikált hardver, a tárolók, a hálózat, a címtár, a mentés, a katasztrófa-helyreállítás és a hozzá tartozó üzemeltetés, egyetlen, kiszámítható havi díjért.

Ön nem egy szolgáltatást vásárol a sok közül, hanem **megszünteti a saját szerverterem fenntartásának teljes költségét és kockázatát** – az áramellátástól a hűtésen és a mentéseken át a rendszergazdai készenlétig.

---

## 2. Miben több, mint az IaaS?

A kettő egymásra épül. Az IaaS bérelt virtuális gépeket ad; a DCaaS a **teljes infrastruktúra-réteget** átveszi, beleértve azokat az elemeket is, amelyek eddig a cég saját telephelyein voltak.

| Szempont | IaaS | **DCaaS** |
|---|---|---|
| Számítási kapacitás | Virtuális gépek megosztott platformon, elkülönített szegmensben | **Dedikált fizikai hosztok**, garantált, nem osztott erőforrással |
| Tárolás | Meghatározott lemezterület | **Dedikált tárolókapacitás**, teljesítményszint szerint (SSD / HDD tier) |
| Hálózat | VLAN-szegmens + gateway | **Teljes hálózati architektúra**: szegmentálás, tűzfal, VPN, publikus közzététel, dokumentált címzés |
| Címtár, identitás | Az ügyfél feladata | **Saját tartományvezérlők, csoportházirendek, jogosultságkezelés** üzemeltetéssel |
| Mentés | Többszintű mentés | **Több szintű mentés + replikáció + tesztelt helyreállítás, RPO/RTO célértékekkel** |
| Katasztrófa-helyreállítás | Opció | **A szolgáltatás alapeleme** |
| Üzemeltetés | Infrastruktúra-szint | **Teljes életciklus**: tervezés, változáskezelés, patch-menedzsment, kapacitástervezés, riport |
| Amit kivált | Egy vagy több szervert | **A teljes szervertermet** |

Röviden: az IaaS-nél Ön még üzemelteti a rendszerét a mi vasunkon. A DCaaS-nél **mi üzemeltetjük a rendszerét**, Ön pedig a saját üzletével foglalkozik.

---

## 3. Mit kap konkrétan?

### 3.1 Dedikált számítási réteg

| Elem | Mit jelent |
|---|---|
| **Dedikált fizikai hosztok** | A megállapodás szerinti szerverek kizárólag az Ön környezetét futtatják |
| **Vállalati szerverhardver** | Enterprise szerver platform: redundáns tápegység, ECC memória, RAID-védett tárolók, hardveres felügyelettel |
| **Virtualizáció** | Iparági szabvány virtualizációs platformok, VMware, Hyper-V, Proxmox ökoszisztémákra optimalizálva |
| **Leállásmentes karbantartás** | A virtuális gépek működés közben átköltöztethetők másik fizikai hosztra (Live Migration), így a hardverkarbantartás nem jelent üzemszünetet |
| **Magas rendelkezésre állás** | Több hosztból álló környezet, ahol egy szerver kiesése nem állítja le a teljes működést |
| **Tervezett bővíthetőség** | Az erőforrás-igény növekedésekor új hoszt bevonása – az Ön oldalán beszerzés, telepítés és leállás nélkül |

### 3.2 Tárolás

- **Teljesítményszint szerinti tárolókapacitás** – gyors SSD réteg az adatbázisoknak és a terminálszolgáltatásnak, költséghatékony kapacitásréteg az archív és fájlszerver-adatoknak.
- **RAID-védelem** minden szinten, folyamatos lemezállapot-figyeléssel.
- **Kapacitásfigyelés és előrejelzés** – nem akkor derül ki, hogy elfogy a hely, amikor már elfogyott. Rendszeres riportban látja a felhasználás trendjét.
- **Rugalmas bővítés** – a tárhely növelése napokban, nem hetekben mérhető.

### 3.3 Hálózat és biztonság

- **Dedikált hálózati szegmens**, dokumentált címzési renddel.
- **Igény esetén teljesen izolált hálózat** – saját fizikai switch, önálló címtartomány, a közös infrastruktúrától elválasztva. Egészségügyi, pénzügyi vagy más fokozottan érzékeny adatot kezelő rendszereknél ez alapkövetelmény.
- **Dedikált tűzfal / gateway** – a NAT-, port- és tűzfalszabályok kizárólag az Ön környezetéhez tartoznak, senki máséval nem keverednek.
- **Site-to-site VPN** az irodák és a bérelt adatközpont között, valamint **kliens VPN** a távoli munkavégzéshez.
- **Publikus IP-címek** a kifelé nyújtott szolgáltatásokhoz (web, FTP, VPN-végpont).
- **Out-of-band hardvermenedzsment** – a hardver állapotát az operációs rendszertől függetlenül felügyeljük, a tápegység, ventilátor, memória és lemez hibái sok esetben még előjelzés szintjén kiderülnek.

### 3.4 Címtár és identitás

- **Saját Active Directory tartomány** vagy a meglévő tartomány átköltöztetése, üzemeltetéssel.
- **Redundáns tartományvezérlők**, hogy egyetlen gép kiesése ne akadályozza a bejelentkezést.
- **Csoportházirendek, jogosultsági struktúra** kialakítása és karbantartása – ki mihez férhet hozzá, dokumentáltan.
- **Terminálszolgáltatás (RDS)** igény esetén: a felhasználók bárhonnan, bármilyen eszközről ugyanazt a munkakörnyezetet érik el.

### 3.5 Mentés és katasztrófa-helyreállítás

Ez a DCaaS legfontosabb hozzáadott értéke – és jellemzően az a terület, ahol a saját szerverteremben a legnagyobb a kockázat.

- **Enterprise Plus** – vállalati kategóriájú mentőmegoldás, nem külső merevlemezre másolás.
- **Több, egymástól független mentési tároló** – elsődleges nagykapacitású repository és külön fizikai másodlagos backup target, hogy egyetlen eszköz meghibásodása ne vigye el a mentéseket is.
- **Hyper-V replikáció** – a kritikus virtuális gépekről futásra kész másolat áll rendelkezésre külön adatközpontban. Hardverhiba esetén a helyreállítás percekben és nem napokban mérhető.
- **RPO és RTO célértékek szerződésben.** Közérthetően:
  - **RPO** = mennyi adat elvesztése fogadható el a legrosszabb esetben (pl. legfeljebb 1 óra munkája).
  - **RTO** = mennyi idő alatt kell a rendszernek újra működnie (pl. 4 órán belül).
- **Dokumentált, tesztelt visszaállítás.** A mentés csak akkor ér valamit, ha vissza is lehet állítani. Megállapodás szerinti rendszerességgel próba-visszaállítást végzünk, és annak eredményét írásban átadjuk.

### 3.6 Üzemeltetés, felügyelet, átláthatóság

- **Folyamatos monitorozás** – hoszt- és virtuálisgép-szintű CPU-, memória-, tárhely- és szolgáltatásfigyelés.
- **Patch- és frissítéskezelés** – ütemezett, előre egyeztetett karbantartási ablakokban, nem véletlenszerű újraindításokkal.
- **Változáskezelés** – minden lényeges beavatkozás dokumentált, visszakövethető és visszafordítható.
- **Kapacitástervezés** – előre jelezzük, mikor és mivel kell bővíteni, hogy ne váratlan üzemzavarból derüljön ki.
- **Rendszeres, az Önhöz tartozó adatokra szűrt riportok** – virtuális gépek, erőforrás-felhasználás, hálózati beállítások, mentési állapot.
- **Naprakész infrastruktúra-dokumentáció** – amit egy esetleges auditnál, biztosítási vagy megfelelőségi kérdésnél elő tud venni.
- **Egy kapcsolattartó** – nem kell külön hardverszállítót, licencforgalmazót, hálózati partnert és rendszergazdát koordinálni.

### 3.7 Szoftverlicenc: SPLA és CSP

- **SPLA (Services Provider License Agreement)** – a Windows Server, a Remote Desktop Services és az SQL Server licencei a szolgáltató nevén, **havi tényleges használat alapján** kerülnek elszámolásra. Ön nem vásárol örökös licencet, nem előlegez meg több millió forintot, és nem kell külön Software Assurance a verziófrissítéshez.
- **Havonta le- és felskálázható** – ha egy hónapban kevesebb felhasználó dolgozik, az elszámolás ehhez igazodik.
- **A licencaudit kockázata a szolgáltatót terheli** – a megfelelő licencmennyiség jelentése a mi felelősségünk.
- **CSP (Cloud Solution Provider)** – a Microsoft 365 és a felhőalapú kiegészítő szolgáltatások ugyanezen a szerződésen, **egy számlán**, magyar nyelvű támogatással.
- **Meglévő licencek** bizonyos esetekben License Mobility keretében áthozhatók, ilyenkor a licencdíj kikerül a havi díjból.

---

## 4. Mit vált ki a saját szerverteremből?

| Kategória | Amit ma a saját szerverterme igényel |
|---|---|
| Épület, tér | Szerverszoba vagy dedikált helyiség, rack szekrény, kábelezés, fizikai zárás, beléptetés |
| Áram | 0–24 órás fogyasztás, szünetmentes tápegység és 3–4 évente akkumulátorcsere, esetleg aggregátor |
| Hűtés | Klímaberendezés beszerzése, karbantartása, meghibásodás esetén azonnali beavatkozás |
| Tűz- és vízvédelem | Érzékelés, oltórendszer, biztosítás |
| Hálózat | Redundáns internetkapcsolat, switch, tűzfal, router, publikus IP-tartomány |
| Szerverhardver | Szerverek, memória, RAID-vezérlő, vállalati SSD/HDD, tartalék alkatrészek, támogatási szerződés meghosszabbítása |
| Mentés | Mentőeszköz, második telephelyi tároló, mentőmédia és annak cseréje |
| Szoftver | Windows Server, CAL-ok, RDS SAL-ok, SQL Server, virtualizáció, mentőszoftver-licenc |
| Munkaerő | Rendszergazdai óradíj, éjszakai és hétvégi készenlét, szabadság és betegség idejére helyettesítés |
| Idő | Az az idő, amit a vezetés és a munkatársak IT-problémák kezelésével töltenek |

Mindez **egyetlen havi szolgáltatási díjba épül be** – kiszámíthatóan, egy tételként, meglepetések nélkül.

---

## 5. Kockázatok, amelyeket átvállalunk

| Kockázat | Saját szerverteremben | DCaaS mellett |
|---|---|---|
| Áramkimaradás | A cég áll, amíg az UPS kitart | Redundáns tápellátás, felügyelt környezet |
| Klímahiba | A szerverek túlmelegszenek, leállnak vagy tönkremennek | Adatközponti hűtés, folyamatos hőmérséklet-figyelés |
| Hardvermeghibásodás | Alkatrész beszerzési ideje, addig áll a rendszer | Előjelzés alapú felügyelet, támogatott hardver, replika |
| Zsarolóvírus | A hálózaton lévő mentés is titkosítódhat | Több, elkülönített mentési szint, replika |
| Kulcsemberfüggőség | Egyetlen ember tudja, hogyan működik | Dokumentált környezet, csapat mögötte |
| Betörés, tűz, vízkár | Az irodai szerverterem sérülékeny | Fizikailag védett adatközponti környezet |
| Technológiai avulás | 4–5 évente új beruházás | A hardvercsere a mi felelősségünk és költségünk |
| Licencaudit | Az Ön kockázata | A szolgáltató jelenti és felel érte |

---

## 6. A pénzügyi és adózási előny: CAPEX helyett OPEX

### 6.1 A saját szerverterem: beruházás (CAPEX)

1. A **teljes bekerülési értéket egy összegben ki kell fizetnie** – szerverek, tárolók, hálózat, UPS, klíma, licencek egyszerre.
2. Az eszközöket **aktiválni kell** a könyvekben: a 100 ezer forint feletti egyedi értékű eszköz tárgyi eszközként kerül nyilvántartásba.
3. A költség **évekre elosztva, értékcsökkenési leírás formájában** jelenik meg.
4. **Kifizette ma, de az adóalapját csak évek alatt, részletekben csökkenti.**
5. Emellett jár az eszköznyilvántartás, a leltározás, az évenkénti értékcsökkenés-számítás és a végén a selejtezés adminisztrációja.
6. Ha hitelből vagy lízingből finanszírozza: kamatteher, fedezetlekötés, csökkenő hitelkeret más célokra.
7. A negyedik–ötödik évben – amikor az eszközök már kifutottak – **kezdheti elölről az egészet.**

### 6.2 A bérelt adatközpont: működési költség (OPEX)

- ✅ **A havi díj az adott időszak költsége** – nem eszközbeszerzés, nincs aktiválás.
- ✅ **Teljes egészében, azonnal csökkenti az adóalapot** abban az évben, amelyben felmerül.
- ✅ **Az áfa havonta, folyamatosan levonható** – nem kell egy nagy összegű beruházás áfáját megelőlegezni.
- ✅ **Nincs tárgyi eszköz nyilvántartás, leltár, értékcsökkenés-számítás, selejtezés.**
- ✅ **Kiszámítható, tervezhető cash-flow** – ismétlődő, azonos nagyságrendű havi tétel.
- ✅ **Nem terheli a hitelképességet** – a hitelkerete más, üzletileg hasznosabb célra marad szabad.
- ✅ **A technológiai avulás és a hardvercsere kockázata a szolgáltatóé.**
- ✅ **A rejtett üzemeltetési költségek is láthatóan jelennek meg** – az áram, a hűtés és a készenlét ma is pénzbe kerül, csak szétszórva és nehezen mérhetően.

### 6.3 Összehasonlítás

| | Saját szerverterem (CAPEX) | Bérelt adatközpont (OPEX) |
|---|---|---|
| Kifizetés | Egy összegben, előre | Havonta, egyenletesen |
| Költségelszámolás | Évekre elosztva, értékcsökkenéssel | **Azonnal, teljes egészében** |
| Adóalap-csökkentés | Részletekben, évek alatt | **A felmerülés évében, teljes összegben** |
| Áfa | Nagy összeg megelőlegezése | Havonta, folyamatosan levonva |
| Könyvviteli teher | Aktiválás, écs, leltár, selejtezés | Egy bejövő számla |
| Rejtett költségek | Áram, hűtés, készenlét, alkatrész – szétszórva | Egy tételben, láthatóan |
| Avulási kockázat | Az Öné | A miénk |
| Skálázhatóság | Új beruházás kell | Havi szinten módosítható |
| Licenckockázat | Az Öné (audit) | A miénk (SPLA-jelentés) |
| Kulcsemberfüggőség | Magas | A szolgáltatói csapat és a dokumentáció fedezi |

> **Fontos:** Ez a tájékoztató általános ismertetés, nem minősül adótanácsadásnak. A konkrét elszámolás módját kérjük, egyeztesse könyvelőjével vagy adótanácsadójával.

---

## 7. Mikor éri meg különösen?

- **Most kellene lecserélni a teljes szerverparkot** – a beruházás egy összegben jelentkezne.
- **Elavult vagy nem megfelelő a szerverterem** – nincs megfelelő hűtés, szünetmentesítés, fizikai védelem.
- **Egyetlen ember tudásától függ az IT** – szabadsága, betegsége vagy távozása komoly kockázat.
- **Nincs tesztelt helyreállítási terv** – van mentés, de senki nem próbálta még ki, hogy vissza is lehet állítani.
- **Növekvő megfelelőségi elvárások** érik a céget (partneri, biztosítói vagy szabályozói oldalról), és hiányzik a dokumentált, auditálható infrastruktúra.
- **Több telephely** működik, és mindenhol külön kiszolgálót kellene fenntartani.
- **Kiszámítható IT-költséget** szeretne a váratlan hardvermeghibásodások és pánikhelyzetek helyett.
- **Adóalap-optimalizálás** szempontjából előnyösebb a folyó költség a többéves amortizációnál.

---

## 8. Hogyan zajlik az átállás?

1. **Felmérés** – a jelenlegi kiszolgálók, alkalmazások, adatmennyiség, hálózat és a valós erőforrás-igény feltérképezése.
2. **Célarchitektúra és RPO/RTO egyeztetés** – rendszerenként meghatározzuk, mennyi állásidő és mennyi adatvesztés fogadható el.
3. **Ajánlat** – tételes havi díj: hosztok, tárolókapacitás, hálózat, mentési szint, licencek, üzemeltetési szint.
4. **Szerződés és SLA** – rendelkezésre állás, reakcióidő, karbantartási ablakok, mentési és megőrzési szabályok írásban.
5. **Migrációs terv** – ütemezés, sorrend, teszt-migráció, visszaállási forgatókönyv. A kritikus rendszerek soha nem élesben, előkészítés nélkül költöznek.
6. **Migráció** – lépésenként, egyeztetett időablakokban, a leállás minimalizálásával.
7. **Átadás** – hozzáférések, dokumentáció, riportolási rend, kapcsolattartási és eszkalációs útvonal.
8. **Folyamatos üzemeltetés** – monitorozás, frissítéskezelés, rendszeres riport és időszakos átbeszélés a következő időszak igényeiről.

---

## 9. Gyakori kérdések

**Az adataim ugyanazon a hardveren futnak, mint más ügyfeleké?**
DCaaS esetén dedikált fizikai hosztokat biztosítunk – az erőforrásokon nem osztozik más ügyféllel. Fokozottan érzékeny rendszerekhez teljesen izolált hálózatot alakítunk ki.

**Kinél van az adat tulajdonjoga?**
Az adat minden esetben az Öné. Mi tárolási, üzemeltetési és védelmi szolgáltatást nyújtunk hozzá.

**Mi történik, ha felmondom a szolgáltatást?**
A virtuális gépek és az adatok exportált formában kiadhatók, a szerződésben rögzített feltételek szerint. Az SPLA-licencek nem vihetők át, mert azok szolgáltatói licencek.

**Kaphatok rendszergazdai jogot?**
Igen. A vendég operációs rendszerekben teljes körű adminisztrátori hozzáférést kap, saját belső IT-munkatársa is dolgozhat a környezetben. A hypervisor, a fizikai infrastruktúra és a mentési réteg a mi felelősségünk marad.

**Mi történik hardverhiba esetén?**
A hardvert out-of-band módon felügyeljük, a szervereken támogatási szerződés van. A virtuális gépek működés közben másik fizikai hosztra költöztethetők, a kritikus rendszerekről pedig futásra kész replika áll rendelkezésre.

**Mi van, ha megnő az igény?**
A kapacitásbővítés a szolgáltatás része: több memória, több processzormag vagy nagyobb tárhely beszerzés és leállás nélkül biztosítható, a havi díj arányos módosításával.

**Megfelel a szolgáltatás az auditoknak?**
Naprakész infrastruktúra-dokumentációt, mentési és helyreállítási nyilvántartást, valamint jogosultsági kimutatásokat biztosítunk. A cégére vonatkozó konkrét megfelelőségi követelményeket a szerződéskötés előtt közösen tekintjük át.

---

## 10. Kapcsolat

Ajánlatkéréshez elegendő nagyságrendileg megadni:

- hány felhasználó és hány telephely dolgozik a rendszerben,
- milyen kiszolgálók működnek ma (fájlszerver, adatbázis, ügyviteli rendszer, terminálszerver, levelezés),
- mekkora adatmennyiséget kezel, és milyen ütemben növekszik,
- mennyi állásidő és mennyi adatvesztés fogadható el a kritikus rendszereknél,
- mikor jár le a jelenlegi hardver támogatása.

Ezek alapján tételes, összehasonlítható ajánlatot készítünk – a jelenlegi saját üzemeltetés becsült teljes költségével egy táblázatban.

*Ez a dokumentum tájékoztató jellegű, nem minősül adótanácsadásnak, és nem helyettesíti az egyedi szerződéses feltételeket.*
