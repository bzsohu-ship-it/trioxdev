# Helyi és hibrid IT-üzemeltetés — megerősítendő tételek

**Belső jegyzet. Nem publikus** — ez a mappa nincs a buildben, csak a `src/pages` és a `public` kerül ki.

A [helyi-uzemeltetes.md](../src/content/szolgaltatasok/helyi-uzemeltetes.md) oldal jelenleg **kizárólag a megerősített (✅) tételeket** tartalmazza. Az alábbiakat a forrásdokumentum `⚠️`-vel jelölte („piaci sztenderd, valószínűleg vállalható, de kiadás előtt erősítsd meg"), ezért kimaradtak.

Jelölje be, amit ténylegesen vállalnak, és beszúrhatók az oldalra a megadott helyre.

## Kártyák

| # | Kártya | Kimaradt tétel |
|---|---|---|
| 2 | Hibrid | Egységes címtár: kiterjesztett Active Directory (további DC az adatközpontban), közös DNS/DHCP-logika |
| 2 | Hibrid | Felhő-integráció: Microsoft 365 / Entra ID és Azure irányú kapcsolódás, hibrid identitás |
| 4 | Mentés | Alkalmazás-tudatos mentés: adatbázis- és levelezőrendszer-konzisztens mentés (VSS / natív adatbázis-mentés) |
| 5 | DR | Failover a Triox oldalára (site-to-site VPN-en vagy dedikált publikus IP-n) |
| 5 | DR | Visszaállás (failback) a telephelyre |
| 5 | DR | Definiált RTO / RPO rendszerenként — **csak mérhető, szerződésben tartható értékkel** |

## Platform-katalógus

**Virtualizáció**
- Kubernetes

**Linux disztribúciók**
- Red Hat Enterprise Linux (RHEL)
- Rocky Linux / AlmaLinux / CentOS (és CentOS-migráció)
- SUSE Linux Enterprise / openSUSE
- Oracle Linux
- FreeBSD

**Címtár és munkahelyi szolgáltatások**
- Active Directory Certificate Services (belső PKI)
- Microsoft Entra ID (Azure AD), Entra Connect szinkron
- Microsoft Exchange Server (helyszíni és hibrid) — *sok magyar cégnél még él*
- Linux-alapú levelezés (Postfix, Dovecot)
- Nyomtatószerver, hálózati nyomtatás

**Adatbázisok**
- **Firebird / InterBase** — *a forrásdokumentum külön kiemeli: sok magyar ügyviteli és számlázó rendszer alatt ez fut*
- PostgreSQL
- MySQL / MariaDB
- Oracle Database — *a magyar nagyvállalati körben erős érv*
- MongoDB
- Redis
- IBM Db2

**Alkalmazás- és webszerverek**
- Apache HTTP Server
- nginx (reverse proxy, terheléselosztás, TLS-terminálás)
- Apache Tomcat
- WildFly / JBoss EAP
- Node.js (PM2 vagy systemd alatt)
- PHP-FPM
- Java futtatókörnyezet (JRE/JDK)

**Üzleti alkalmazások** — *csak referenciával vállalhatók*
- ERP és ügyviteli rendszerek (SQL- vagy Firebird-alapú)
- Microsoft Dynamics NAV / Business Central
- SAP
- Bér- és HR-rendszerek, számlázó- és készletprogramok
- Dokumentumkezelő és iktató rendszerek
- MES / SCADA gyártásvezérlés kiszolgáló oldala — *a legerősebb érv a helyi üzemeltetés mellett, ha vállalható*
- Kamerarendszer- és beléptető szerverek (VMS)

**Hálózat és biztonság**
- Cisco hálózati eszközök
- Fortinet / pfSense / OPNsense tűzfalak
- Wi-Fi infrastruktúra, vendéghálózat leválasztással
- Végpontvédelem felügyelete központi konzollal

**Hardver**
- Szünetmentes tápellátás (UPS) felügyelete, szabályos leállítás áramszünetnél

## Egyéb nyitott kérdés

- **Átvételi felmérés díjmentessége.** A forrásdokumentum egy bizalomépítő mondatot javasol a záró CTA fölé („A felmérés nem kötelezettségvállalás. A végén kap egy dokumentált állapotképet és egy kockázati listát — akkor is, ha nem velünk dolgozik tovább."). Ez kimaradt, mert azt sugallja, hogy a felmérés ingyenes. Ha az, beszúrható a záró blokk végére.
- **Visszaállítási tesztek elhatárolása.** Az oldal három helyen kiírja, hogy ez a szerződésben egyeztetett igényeknek megfelelően, külön szolgáltatás. Ha az üzemeltetési alapdíj tartalmaz évi egy tesztet, a megfogalmazást pontosítani kell.
