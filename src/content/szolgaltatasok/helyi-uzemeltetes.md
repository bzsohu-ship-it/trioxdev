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

<figure class="abra">
<svg viewBox="0 0 880 232" role="img" aria-labelledby="abra-modellek">
<title id="abra-modellek">A három üzemeltetési modell: on-premise a telephelyen, hibrid a telephely és a Triox adatközpont között site-to-site VPN-nel, illetve teljesen adatközponti. A modellek között bármelyik irányba van átjárás.</title>
<text class="abra__mono" x="135" y="14" text-anchor="middle">ON-PREMISE</text>
<rect class="abra__doboz" x="55" y="30" width="160" height="104" rx="4" />
<rect class="abra__sav" x="75" y="50" width="120" height="16" rx="2" />
<rect class="abra__sav" x="75" y="74" width="120" height="16" rx="2" />
<rect class="abra__sav" x="75" y="98" width="120" height="16" rx="2" />
<text class="abra__cimke" x="135" y="154" text-anchor="middle">Az Ön telephelye</text>
<text class="abra__kicsi" x="135" y="172" text-anchor="middle">minden helyben fut</text>
<text class="abra__mono" x="440" y="14" text-anchor="middle">HIBRID</text>
<rect class="abra__doboz" x="305" y="42" width="110" height="80" rx="4" />
<rect class="abra__sav" x="320" y="58" width="80" height="14" rx="2" />
<rect class="abra__sav" x="320" y="78" width="80" height="14" rx="2" />
<rect class="abra__kiemelt" x="465" y="42" width="110" height="80" rx="4" />
<rect class="abra__sav" x="480" y="58" width="80" height="14" rx="2" />
<rect class="abra__sav" x="480" y="78" width="80" height="14" rx="2" />
<path class="abra__vonal" stroke-dasharray="4 4" d="M415 82 H465" />
<text class="abra__mono" x="440" y="74" text-anchor="middle">VPN</text>
<text class="abra__cimke" x="440" y="154" text-anchor="middle">Telephely + adatközpont</text>
<text class="abra__kicsi" x="440" y="172" text-anchor="middle">egy rendszer, egy felügyelet alatt</text>
<text class="abra__mono" x="745" y="14" text-anchor="middle">ADATKÖZPONTI</text>
<rect class="abra__kiemelt" x="665" y="30" width="160" height="104" rx="4" />
<rect class="abra__sav" x="685" y="50" width="120" height="16" rx="2" />
<rect class="abra__sav" x="685" y="74" width="120" height="16" rx="2" />
<rect class="abra__sav" x="685" y="98" width="120" height="16" rx="2" />
<text class="abra__cimke" x="745" y="154" text-anchor="middle">Triox adatközpont</text>
<text class="abra__kicsi" x="745" y="172" text-anchor="middle">nincs saját szerverszoba</text>
<path class="abra__vonal" d="M150 206 H730" />
<path class="abra__nyil" d="M135 206 L152 200 L152 212 Z" />
<path class="abra__nyil" d="M745 206 L728 200 L728 212 Z" />
<rect x="330" y="196" width="220" height="20" fill="var(--c-paper)" />
<text class="abra__mono" x="440" y="210" text-anchor="middle">ÁTJÁRÁS BÁRMELYIK IRÁNYBA</text>
</svg>
</figure>

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

A hibrid rendszerek nem attól lesznek rosszak, hogy hibridek, hanem attól, hogy két külön csapat, két külön eljárásrend és két külön mentési logika mentén épülnek. Ilyenkor a hiba pontosan a két világ határán szokott keletkezni — és pontosan ott nincs is gazdája. **Nálunk a telephelyi és az adatközponti rész egy rendszer**, egy felügyelet alatt, közös címtárral, közös mentési renddel, site-to-site VPN-nel összekötve.

> **Két rendszer két felelőssel: az a hiba, ami senkié. Egy rendszer két helyszínen: az egy megoldás.**

<details>
<summary>Technikai részletek</summary>

- **Site-to-site VPN** a telephely és a Triox adatközpont között, ügyfelenként dedikált gateway-en
- **Egységes címtár és névfeloldás:** kiterjesztett Active Directory (további tartományvezérlő az adatközpontban), közös DNS/DHCP-logika
- **Kapacitás-kiegészítés:** ha a telephelyi vas elfogy, a bővítés lehet virtuális gép az adatközpontban — hardverbeszerzés és szállítási idő nélkül
- **Off-site mentési és replika-célpont** a telephelyi rendszerekhez
- **Fokozatos migráció támogatása:** ha később mégis a költöztetés a cél, az hibriden keresztül, leállás nélkül, lépésenként történik
- **Felhő-integráció:** Microsoft 365 / Entra ID és Azure irányú kapcsolódás, hibrid identitás

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

<figure class="abra">
<svg viewBox="0 0 880 252" role="img" aria-labelledby="abra-321">
<title id="abra-321">Az éles rendszer a telephelyen fut. Mellette helyi mentés áll a gyors visszaállításhoz, ezen felül a Triox adatközpontjába megy másolat két, egymástól független backup targetre, két helyszínre, valamint egy off-site VM-replika, amit nem visszaállítani kell, hanem elindítani.</title>
<rect class="abra__doboz" x="0" y="72" width="150" height="70" rx="4" />
<text class="abra__cimke" x="75" y="102" text-anchor="middle">Éles rendszer</text>
<text class="abra__kicsi" x="75" y="122" text-anchor="middle">az Ön telephelyén</text>
<path class="abra__vonal" d="M150 107 H194" />
<path class="abra__nyil" d="M200 107 L192 102 L192 112 Z" />
<rect class="abra__doboz" x="200" y="72" width="150" height="70" rx="4" />
<text class="abra__cimke" x="275" y="102" text-anchor="middle">Helyi mentés</text>
<text class="abra__kicsi" x="275" y="122" text-anchor="middle">gyors visszaállításhoz</text>
<path class="abra__vonal" d="M350 107 H404" />
<path class="abra__nyil" d="M410 107 L402 102 L402 112 Z" />
<rect class="abra__kiemelt" x="410" y="18" width="470" height="196" rx="4" />
<text class="abra__mono" x="426" y="38">TRIOX ADATKÖZPONT — KÉT HELYSZÍN</text>
<rect class="abra__sav" x="426" y="50" width="212" height="56" rx="2" />
<text class="abra__cimke" x="532" y="74" text-anchor="middle">Backup target 1</text>
<text class="abra__kicsi" x="532" y="93" text-anchor="middle">helyszín A</text>
<rect class="abra__sav" x="652" y="50" width="212" height="56" rx="2" />
<text class="abra__cimke" x="758" y="74" text-anchor="middle">Backup target 2</text>
<text class="abra__kicsi" x="758" y="93" text-anchor="middle">helyszín B</text>
<rect class="abra__sav" x="426" y="126" width="438" height="68" rx="2" />
<text class="abra__cimke" x="645" y="152" text-anchor="middle">Off-site VM-replika</text>
<text class="abra__kicsi" x="645" y="174" text-anchor="middle">nem visszaállítani kell, hanem elindítani</text>
<text class="abra__mono" x="440" y="242" text-anchor="middle">3 PÉLDÁNY · 2 MÉDIA · 1 TELEPHELYEN KÍVÜL</text>
</svg>
</figure>

<details>
<summary>Technikai részletek</summary>

- **Helyi mentés** gyors visszaállításhoz: dedikált mentőtároló vagy NAS a telephelyen
- **Off-site másolat** a Triox adatközpontjába, több, egymástól független fizikai backup targetre, több helyszínre
- **3-2-1 elv gyakorlatban:** 3 példány, 2 különböző médián, 1 telephelyen kívül
- **Enterprise mentési platform:** Veeam Backup & Replication és Veeam Agent (fizikai gépekhez is), alternatívaként Synology / Iperius / BackupChain megoldások
- **Alkalmazás-tudatos mentés:** adatbázis- és levelezőrendszer-konzisztens mentés (VSS vagy natív adatbázis-mentés), nem csak fájlszintű másolat
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
- **Failover a Triox oldalára:** a felébresztett környezetet a site-to-site VPN-en vagy dedikált publikus IP-n éri el
- **Definiált RTO / RPO:** rendszerenként egyeztetve — nem egy szám az egész cégre
- **Visszaállás (failback)** a telephelyre, amint a rendes állapot helyreállt
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

<h2 id="platform-katalogus">Mit üzemeltetünk — platform-katalógus</h2>

Az alábbi lista nem termékkatalógus, hanem annak a bizonyítéka, hogy a rendszerét **nem kell hozzáigazítani** az üzemeltetőhöz. Ha valami nincs a listán, az nem jelenti, hogy nem üzemeltetjük — jelentse, mi fut Önnél, és megmondjuk.

### Virtualizáció és konténerek

| Platform | Megjegyzés |
|---|---|
| **Microsoft Hyper-V** (Windows Server / Hyper-V Server) | Feladatátvevő fürt (Failover Cluster), Hyper-V replika |
| **VMware vSphere / ESXi** | Meglévő környezet átvétele és üzemeltetése |
| **Proxmox VE** | KVM és LXC |
| **Docker / Docker Compose** | Konténerizált alkalmazások üzemeltetése |
| **Kubernetes** | Konténer-orkesztráció |
| Fizikai (bare metal) szerverek | Ahol a virtualizáció nem opció (licenckötöttség, hardverkulcs, teljesítmény) |

### Operációs rendszer platformok

**Microsoft Windows**

- Windows Server 2025, 2022, 2019, 2016
- Windows Server 2012 R2 és korábbi — **örökölt rendszerek** üzemeltetése, kockázati értékeléssel és kiváltási úttervvel
- Windows kliens: Windows 11, Windows 10, csoportházirenddel (GPO) menedzselve
- Terminálszolgáltatás / Remote Desktop Services (RDS), session host farm

**Linux / UNIX**

- Ubuntu Server LTS
- Debian
- Red Hat Enterprise Linux (RHEL)
- Rocky Linux / AlmaLinux / CentOS — CentOS-migrációval együtt
- SUSE Linux Enterprise / openSUSE
- Oracle Linux
- FreeBSD

> Az örökölt (már nem támogatott) rendszereket sem tagadjuk le: sok magyar cégnél fut olyan alkalmazás, ami régi platformot igényel. Ezeket **izolált, szigorúan szegmentált környezetben** tudjuk biztonságosan tovább üzemeltetni, amíg a kiváltás megtörténik.

### Címtár, identitás és munkahelyi szolgáltatások

- **Active Directory Domain Services** — tartományi címtár, GPO, OU-struktúra, jogosultságkezelés
- **DNS és DHCP** — belső névfeloldás, címkiosztás
- **Active Directory Certificate Services (belső PKI)** — vállalati tanúsítványkiadás
- **Microsoft Entra ID (Azure AD)** — hibrid identitás, Entra Connect szinkron
- **Microsoft 365** — Exchange Online, SharePoint Online, Teams, OneDrive; migráció és üzemeltetés
- **Microsoft Exchange Server** — helyszíni és hibrid levelezés
- **Linux-alapú levelezés** — Postfix, Dovecot
- **Fájlszolgáltatás** — Windows fájlszerver, DFS, kvóták, ACL-struktúra; Linux Samba / NFS
- **Nyomtatószerver**, hálózati nyomtatás
- **WSUS** — belső frissítéselosztás

### Adatbázis szerverek

- **Microsoft SQL Server** — 2016-tól 2022/2025-ig, Expresstől Enterprise-ig; Always On rendelkezésre állási csoport, karbantartási tervek, mentési stratégia
- **Firebird / InterBase** — sok magyar ügyviteli és számlázó rendszer alatt ez fut
- **PostgreSQL**
- **MySQL / MariaDB** — webes és ügyviteli alkalmazások alatt
- **Oracle Database**
- **MongoDB**
- **Redis** — cache és session-tár
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
| **Apache HTTP Server** | Klasszikus webkiszolgálás, virtuális hosztok |
| **nginx** | Reverse proxy, terheléselosztás, TLS-terminálás |
| **Apache Tomcat** | Java webalkalmazások |
| **Node.js** | PM2 vagy systemd alatt futtatva |
| **PHP-FPM** | PHP-alapú alkalmazások kiszolgálása |
| **Java futtatókörnyezet (JRE/JDK)** | Ügyviteli és banki kliensek alatt |
| **FTP / SFTP szolgáltatás** | Adatcsere partnerekkel |
| **Terminálszerver-alapú alkalmazás-kiszolgálás (RDS)** | Ahol az ügyviteli rendszer vastag kliense központosítva fut |

### Üzleti alkalmazások futtatókörnyezete

Nem a szoftver gyártói supportját adjuk, hanem azt a platformot, amin fut — és a mentést, ami megvédi.

- **ERP és ügyviteli rendszerek** — SQL- vagy Firebird-alapú magyar és nemzetközi rendszerek kiszolgálása
- **Microsoft Dynamics NAV / Business Central**
- **Bér- és HR-rendszerek, számlázó- és készletprogramok**
- **Dokumentumkezelő és iktató rendszerek**
- **Ágazati és gyártásvezérlő rendszerek (MES, SCADA) kiszolgáló oldala**
- **Kamerarendszer- és beléptető szerverek (VMS)**
- **Egyedi fejlesztésű, belső alkalmazások** — ahol a fejlesztő már nem elérhető, de a rendszernek mennie kell

### Hálózat és biztonság

- **MikroTik RouterOS** — routing, tűzfal, VPN, VLAN
- **Cisco** hálózati eszközök
- **Fortinet / pfSense / OPNsense** tűzfalak
- **VLAN-alapú vagy fizikai szegmentálás** — kétszintű felosztás: belső (adatbázis, alkalmazás) és publikus (web, mail) réteg
- **VPN** — site-to-site és távoli hozzáférés (IPsec, WireGuard, OpenVPN, SSTP)
- **Wi-Fi infrastruktúra**, vendéghálózat leválasztással
- **Tanúsítványkezelés** — nyilvános és belső TLS-tanúsítványok, lejárat-figyeléssel
- **Végpontvédelem** felügyelete, központi konzollal

### Tároló, mentés, hardver

- **Szerverplatformok:** Dell PowerEdge, HPE ProLiant, Lenovo / IBM — iDRAC, iLO out-of-band menedzsmenttel
- **Tárolók:** RAID-tömbök, SAN / iSCSI, NAS (Synology és társai)
- **Mentés:** Veeam Backup & Replication, Veeam Agent, Synology mentési megoldások, Iperius, BackupChain, Windows Server Backup
- **Szünetmentes tápellátás (UPS)** felügyelete, szabályos leállítás áramszünetnél
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

> A felmérés nem kötelezettségvállalás. A végén kap egy dokumentált állapotképet és egy kockázati listát — akkor is, ha nem velünk dolgozik tovább.

