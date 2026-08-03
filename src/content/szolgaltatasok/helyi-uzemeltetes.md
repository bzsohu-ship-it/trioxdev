---
cim: Helyi és hibrid IT-üzemeltetés
osszefoglalo: Nem kell hozzánk költöztetnie az infrastruktúráját. A saját telephelyén álló rendszerét ugyanazzal az eljárásrenddel üzemeltetjük, mint az adatközpontit — akár a kettő kombinációjával.
sorrend: 5
cimke: on-premise és hibrid
szelesLayout: true
---

## Nem biztos, hogy költöznie kell. Az viszont biztos, hogy valakinek üzemeltetnie kell.

Sok cégnél a szerver nem azért van a telephelyen, mert így alakult, hanem mert oda kell: gyártásvezérlés, mérőműszer, kamerarendszer, beléptető, nagy fájlállomány, ügyviteli rendszer szállítói kikötése, vagy egy adatkezelési szabály, ami nem enged mást. **Nálunk ez nem akadály, hanem egy szolgáltatási forma.** Üzemeltetjük a saját telephelyén álló rendszerét ugyanazokkal az eljárásokkal, felügyelettel és mentési renddel, mint a saját adatközpontunkban futó környezeteket.

Ha pedig a kettő kombinációja a jó válasz, azt is felépítjük — a telephely és az adatközpont ilyenkor **egyetlen, közösen felügyelt rendszer**, nem két külön világ.

> **Három út van: nálunk, Önnél, vagy mindkettő. Mind a hármat mi üzemeltetjük.**

---

## A három modell

| Modell | Hol van a rendszer | Kinek való |
|---|---|---|
| **On-premise üzemeltetés** | Teljes egészében az Ön telephelyén | Ahol a hardvernek fizikailag ott kell lennie, vagy már megtörtént a beruházás |
| **Hibrid** | Egy része Önnél, egy része a Triox adatközpontjában | Ahol a kritikus rendszer helyben fut, de kell mögé független mentés, replika vagy kiegészítő kapacitás |
| **Adatközponti (hosting)** | Teljes egészében nálunk | Ahol nincs értelme szerverszobát fenntartani |

> A három modell között **átjárás van**. Nem kell most eldöntenie a végállapotot — sok ügyfelünk on-premise üzemeltetéssel kezd, és a hardver életciklusának végén lép tovább hibrid vagy adatközponti irányba. A váltás ilyenkor nem projekt-sokk, mert addigra már mi ismerjük a rendszert.

Ha a teljes kiszervezés mellett dönt, arról a [DCaaS](/szolgaltatasok/dcaas/) és az [IaaS](/szolgaltatasok/iaas/) oldalon olvashat, a mögötte álló adatközponti háttérről pedig a [Technológia](/technologia/) oldalon.

---

## 1. A rendszere maradhat ott, ahol van

Egy meglévő szerverpark leváltása nem mindig indokolt, és nem is mindig lehetséges. Van, ahol a gyártásvezérlés, a mérőrendszer vagy a nagy fájlállomány miatt a szervernek fizikailag a telephelyen a helye — és van, ahol egyszerűen csak az van, hogy a hardver két éve lett megvéve. **Mi ezt nem tekintjük átmeneti állapotnak.** A saját telephelyén álló környezetét teljes körűen üzemeltetjük: a hypervisortól az operációs rendszereken és adatbázisokon át a mentésig, ugyanazzal a dokumentált eljárásrenddel, amivel a saját adatközpontunkat.

> **Az üzemeltetés minősége nem attól függ, hol áll a rack. Attól, ki nyitja ki reggel a monitoring felületet.**

<details>
<summary>Technikai részletek</summary>

- **Teljes stack-felelősség:** hypervisor, operációs rendszerek, adatbázis- és alkalmazásszerverek, címtár, hálózat, mentés — nem csak „a szerver"
- **Dokumentált környezet:** felmérés, rendszerdokumentáció, változáskövetés — átvételkor és folyamatosan
- **Rendszeres, automatizált infrastruktúra-audit:** riportált, ellenőrizhető állapot
- **Meglévő hardver átvétele:** Dell PowerEdge, HPE ProLiant, Lenovo/IBM szerverek, iDRAC / iLO out-of-band menedzsmenttel
- **Nincs kényszerű platformváltás:** ami fut, az futhat tovább — a migráció külön döntés, nem az együttműködés feltétele
- **Az eszközpark az Öné marad:** az üzemeltetés szolgáltatás, nem eszköz-kiváltás

</details>

---

## 2. A telephely és az adatközpont ne két külön világ legyen

A hibrid rendszerek nem attól lesznek rosszak, hogy hibridek, hanem attól, hogy két külön csapat, két külön eljárásrend és két külön mentési logika mentén épülnek. Ilyenkor a hiba pontosan a két világ határán szokott keletkezni — és pontosan ott nincs is gazdája. **Nálunk a telephelyi és az adatközponti rész egy rendszer**, egy felügyelet alatt, közös mentési renddel, site-to-site VPN-nel összekötve.

> **Két rendszer két felelőssel: az a hiba, ami senkié. Egy rendszer két helyszínen: az egy megoldás.**

<details>
<summary>Technikai részletek</summary>

- **Site-to-site VPN** a telephely és a Triox adatközpont között, ügyfelenként dedikált gateway-en
- **Kapacitás-kiegészítés:** ha a telephelyi vas elfogy, a bővítés lehet virtuális gép az adatközpontban — hardverbeszerzés és szállítási idő nélkül
- **Off-site mentési és replika-célpont** a telephelyi rendszerekhez
- **Fokozatos migráció támogatása:** ha később mégis a költöztetés a cél, az hibriden keresztül, leállás nélkül, lépésenként történik

</details>

---

## 3. Amit senki nem néz, az addig működik, amíg nem

A telephelyi rendszerek jellemző kockázata nem a hardverhiba, hanem az, hogy **senki nem nézi**. A tele lemez, a hónapok óta hibás mentés, a lejárt tanúsítvány, a leállt szolgáltatás vagy a két éve nem frissült szerver mind olyan hiba, amit gépi felügyelettel napokkal-hetekkel a következmény előtt észre lehet venni. Minden általunk üzemeltetett rendszer — a telephelyiek is — folyamatos, automatizált felügyelet alatt áll, és a frissítéskezelés nálunk ütemezett, tesztelt, visszakövethető folyamat, nem alkalmi kattintgatás.

> **A jó üzemeltetés jellemzője nem az, hogy gyorsan javít. Az, hogy a legtöbb hibából soha nem lesz kiesés.**

<details>
<summary>Technikai részletek</summary>

- **Infrastruktúra-monitoring:** hálózati eszközök, szerverek, szolgáltatások, kapacitás- és trendfigyelés (LibreNMS-alapú)
- **RMM / távoli menedzsment:** végpont- és szerverfelügyelet, távoli beavatkozás, eszközleltár
- **Patch-menedzsment:** Windows és Linux frissítések ütemezett, karbantartási ablakhoz kötött telepítése (WSUS vagy RMM-alapú)
- **Riasztás-kezelés:** küszöbérték-alapú és eseményvezérelt riasztás, definiált eszkalációval
- **Mentés-ellenőrzés:** a mentési feladatok napi szintű ellenőrzése — nem csak az, hogy elindult, hanem hogy le is futott
- **Ügyfél-riportok:** rendszeres, a saját környezetre szűrt erőforrás- és állapotriport (hoszt, VM, hálózat)
- **Kapacitástervezés:** trendadatokra épülő előrejelzés, hogy a bővítés tervezett legyen, ne tűzoltás

</details>

A mentés-ellenőrzés a mentési feladat lefutásának felügyelete. Annak igazolása, hogy a mentés vissza is állítható, külön szolgáltatás: [Audit Restore Validation és visszaállítási tesztek](/szolgaltatasok/audit-restore-validation/) — a szerződésben egyeztetett igényeknek megfelelően.

---

## 4. A telephelyi mentés akkor ér valamit, ha nem csak a telephelyen van

A saját szerverszobában futó rendszerek leggyakoribb rejtett kockázata, hogy a mentés ugyanabban a helyiségben van, mint az éles rendszer — ugyanazon a hálózaton, ugyanazon a tápon, ugyanazon zár mögött. Tűz, beázás, lopás vagy egy titkosító zsarolóvírus esetén ez a mentés is elveszik. **Ezért a telephelyi mentés mellé mindig adunk egy tőle független, off-site másolatot** a Triox adatközpontjában — így a helyi visszaállítás gyors marad, de a katasztrófa-eset is fedve van.

> **A kérdés nem az, van-e mentés. Az, hogy hol van, és mennyi idő alatt van fent.**

<details>
<summary>Technikai részletek</summary>

- **Helyi mentés** gyors visszaállításhoz: dedikált mentőtároló vagy NAS a telephelyen
- **Off-site másolat** a Triox adatközpontjába, több, egymástól független fizikai backup targetre, több helyszínre
- **3-2-1 elv gyakorlatban:** 3 példány, 2 különböző médián, 1 telephelyen kívül
- **Enterprise mentési platform:** Veeam Backup & Replication és Veeam Agent (fizikai gépekhez is), alternatívaként Synology / Iperius / BackupChain megoldások
- **Megőrzési politika:** ügyfelenként egyeztetett retenció, több generációval

</details>

> ### A mentés nem bizonyíték. A visszaállítás az.
>
> Azt, hogy a mentés valóban visszaállítható, csak egy elvégzett visszaállítási teszt igazolja — auditnál és biztosítói eseménynél is ez a dokumentum számít. A visszaállítási teszteket a szerződésben egyeztetett igényeknek megfelelően, **külön szolgáltatásként** végezzük, elkülönített tesztkörnyezetben, audit-kompatibilis jegyzőkönyvvel.
>
> **→ [Audit Restore Validation és visszaállítási tesztek](/szolgaltatasok/audit-restore-validation/)**

---

## 5. A visszaállítás nem terv, hanem külön infrastruktúra

Ha a telephelyen áll az éles rendszer, akkor a telephely kiesése — tűz, elhúzódó áramszünet, hálózati kiesés, súlyos hardverhiba — az egész cég kiesése. Egy mentésből való visszaállítás ilyenkor **napokban** mérhető, mert kell hozzá hardver is, amin elindul. **Ezért a kritikus terhelésekhez off-site VM-replikát adunk a saját adatközpontunkban: azt nem visszaállítani kell, hanem elindítani.**

> **A különbség a mentés és a replika között az, hogy az egyiket vissza kell tölteni valamire. A másikat el kell indítani.**

<details>
<summary>Technikai részletek</summary>

- **Off-site VM-replika** a Triox adatközpontjában, a kritikus terhelésekhez
- **Csökkentett üzem is opció:** nem minden rendszernek kell teljes kapacitáson futnia egy DR-eseményben — az olcsóbb, reális szint is tervezhető
- **Két budapesti adatközponti helyszín**, egymástól függetlenül
- **Teljes Disaster Recovery teszt:** a DR-terv éles próbája — a szerződésben egyeztetett igényeknek megfelelően, külön szolgáltatásként, dokumentált jegyzőkönyvvel

</details>

A replika léte és a replika működése két különböző állítás. A másodikat egy elvégzett, dokumentált DR-teszt igazolja — ezt a szerződésben egyeztetett igényeknek megfelelően, önálló szolgáltatásként végezzük.

---

## 6. Van, amit nem lehet távolról megjavítani

A telephelyi üzemeltetés akkor működik, ha a távoli beavatkozás mögött van fizikai jelenlét is: kell valaki, aki kimegy, ha meghal egy tápegység, ha ki kell cserélni egy diszket, vagy ha be kell üzemelni egy új eszközt. **A Triox magyar nyelvű, személyes üzemeltetői kapcsolatot ad** — nem ticket-számot egy külföldi rendszerben —, szerződésben rögzített reakcióidővel és országos helyszíni kiszállással.

> **Nem call centert kap, hanem üzemeltetőt, aki ismeri a rendszerét.**

<details>
<summary>Technikai részletek</summary>

- **Magyar nyelvű támogatás**, személyes üzemeltetői kapcsolattal
- **Szerződésben rögzített reakcióidő** és támogatási időablak — a konkrét értékeket az SLA tartalmazza
- **Országos helyszíni kiszállás** — a távoli beavatkozással nem megoldható esetekre
- **Tervezett karbantartási ablakok:** frissítés, firmware, újraindítás egyeztetett időben, nem munkaidőben
- **Naprakész rendszerdokumentáció:** átadható, auditálható — nem az üzemeltető fejében van
- **Beszerzés- és életciklus-támogatás:** hardver- és licenckiválasztás, SPLA/CSP licencelés, bővítés tervezése
- **Átvételi felmérés:** a szolgáltatás indulásakor teljes körű állapotfelmérés és kockázati lista

</details>

---

## Mit üzemeltetünk — platform-katalógus

Az alábbi lista nem termékkatalógus, hanem annak a bizonyítéka, hogy a rendszerét **nem kell hozzáigazítani** az üzemeltetőhöz. Ha valami nincs a listán, az nem jelenti, hogy nem üzemeltetjük — jelentse, mi fut Önnél, és megmondjuk.

### Virtualizáció és konténerek

| Platform | Megjegyzés |
|---|---|
| **Microsoft Hyper-V** (Windows Server / Hyper-V Server) | Feladatátvevő fürt (Failover Cluster), Hyper-V replika |
| **VMware vSphere / ESXi** | Meglévő környezet átvétele és üzemeltetése |
| **Proxmox VE** | KVM és LXC |
| **Docker / Docker Compose** | Konténerizált alkalmazások üzemeltetése |
| Fizikai (bare metal) szerverek | Ahol a virtualizáció nem opció (licenckötöttség, hardverkulcs, teljesítmény) |

### Operációs rendszer platformok

**Microsoft Windows**

- Windows Server 2025, 2022, 2019, 2016
- Windows Server 2012 R2 és korábbi — **örökölt rendszerek** üzemeltetése, kockázati értékeléssel és kiváltási úttervvel
- Windows kliens: Windows 11, Windows 10, csoportházirenddel (GPO) menedzselve
- Terminálszolgáltatás / Remote Desktop Services (RDS), session host farm

**Linux**

- Ubuntu Server LTS
- Debian

> Az örökölt (már nem támogatott) rendszereket sem tagadjuk le: sok magyar cégnél fut olyan alkalmazás, ami régi platformot igényel. Ezeket **izolált, szigorúan szegmentált környezetben** tudjuk biztonságosan tovább üzemeltetni, amíg a kiváltás megtörténik.

### Címtár, identitás és munkahelyi szolgáltatások

- **Active Directory Domain Services** — tartományi címtár, GPO, OU-struktúra, jogosultságkezelés
- **DNS és DHCP** — belső névfeloldás, címkiosztás
- **Microsoft 365** — Exchange Online, SharePoint Online, Teams, OneDrive; migráció és üzemeltetés
- **Fájlszolgáltatás** — Windows fájlszerver, DFS, kvóták, ACL-struktúra
- **WSUS** — belső frissítéselosztás

### Adatbázis szerverek

- **Microsoft SQL Server** — 2016-tól 2022/2025-ig, Expresstől Enterprise-ig; Always On rendelkezésre állási csoport, karbantartási tervek, mentési stratégia
- **SQLite-alapú alkalmazások** — fájlszintű mentéssel

**Amit az adatbázis-üzemeltetés nálunk jelent:**

- Mentési és megőrzési stratégia (teljes / differenciális / tranzakciós napló)
- Karbantartási tervek: index-újraépítés, statisztikák, konzisztencia-ellenőrzés
- Teljesítményfigyelés és lassú lekérdezések azonosítása
- Verzió- és javítócsomag-kezelés, tesztelt frissítéssel
- Jogosultságkezelés és hozzáférés-naplózás
- Rendelkezésre állási megoldások (fürt, replikáció, log shipping)

### Alkalmazás- és webszerverek

| Platform | Megjegyzés |
|---|---|
| **Microsoft IIS** | ASP.NET / .NET Framework és .NET (Core) alkalmazások, alkalmazáskészletek, tanúsítványkezelés |
| **FTP / SFTP szolgáltatás** | Adatcsere partnerekkel |
| **Terminálszerver-alapú alkalmazás-kiszolgálás (RDS)** | Ahol az ügyviteli rendszer vastag kliense központosítva fut |

### Üzleti alkalmazások futtatókörnyezete

Nem a szoftver gyártói supportját adjuk, hanem azt a platformot, amin fut — és a mentést, ami megvédi.

- **Egyedi fejlesztésű, belső alkalmazások** — ahol a fejlesztő már nem elérhető, de a rendszernek mennie kell

### Hálózat és biztonság

- **MikroTik RouterOS** — routing, tűzfal, VPN, VLAN
- **VLAN-alapú vagy fizikai szegmentálás** — kétszintű felosztás: belső (adatbázis, alkalmazás) és publikus (web, mail) réteg
- **VPN** — site-to-site és távoli hozzáférés (IPsec, WireGuard, OpenVPN, SSTP)
- **Tanúsítványkezelés** — nyilvános és belső TLS-tanúsítványok, lejárat-figyeléssel

### Tároló, mentés, hardver

- **Szerverplatformok:** Dell PowerEdge, HPE ProLiant, Lenovo / IBM — iDRAC, iLO out-of-band menedzsmenttel
- **Tárolók:** RAID-tömbök, SAN / iSCSI, NAS (Synology és társai)
- **Mentés:** Veeam Backup & Replication, Veeam Agent, Synology mentési megoldások, Iperius, BackupChain, Windows Server Backup
- **Hardver-életciklus:** garancia- és supportkövetés, bővítés- és cseretervezés

### Felügyelet, menedzsment, automatizálás

- **LibreNMS** — hálózati és szerverfelügyelet
- **RMM platform** — végpont- és szerverfelügyelet, távoli beavatkozás, leltár
- **WSUS / RMM-alapú patch-menedzsment**
- **PowerShell és Bash automatizálás** — ismétlődő feladatok, riportok, auditok
- **Automatizált infrastruktúra-audit és riportálás** — dokumentált, ellenőrizhető környezet
- **Licenc-optimalizálás** — SPLA és CSP licencelés, magszám-alapú Windows Server licencszámítás

---

## Nézzük meg együtt, mi fut most Önnél

A legtöbb cégnél nem az a kérdés, hogy felhő vagy saját szerver — hanem az, hogy **melyik rendszernek hol a helye**. Erre nem lehet árlistáról válaszolni. Nézzük meg együtt, mi fut most Önnél, mi mennyibe kerül üzemeltetésben és kockázatban, és mi az a minimális változtatás, ami a legtöbbet javít.

