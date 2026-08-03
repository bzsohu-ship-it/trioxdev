# Helyi és hibrid IT-üzemeltetés — megerősítendő tételek

**Belső jegyzet. Nem publikus** — ez a mappa nincs a buildben, csak a `src/pages` és a `public` kerül ki.

A [helyi-uzemeltetes.md](../src/content/szolgaltatasok/helyi-uzemeltetes.md) oldalra 2026-08-03-án bekerült a forrásdokumentum `⚠️` tételeinek nagy része. Az alábbiak **szándékosan maradtak kint** — ezek addig ne kerüljenek be, amíg nincs mögöttük valós kompetencia és vállalás.

## Kimaradt: szolgáltatási vállalás

| Tétel | Hova kerülne | Miért maradt ki |
|---|---|---|
| Definiált RTO / RPO rendszerenként | 5. kártya (DR) | Csak mérhető, szerződésben tartható értékkel írható ki — ugyanaz a logika, ami miatt a 99,99% is kikerült az oldalról |

## Kimaradt: platformok

**Virtualizáció**
- Kubernetes

**Linux disztribúciók** — *jelenleg csak Ubuntu Server LTS és Debian szerepel*
- Red Hat Enterprise Linux (RHEL)
- Rocky Linux / AlmaLinux / CentOS (és CentOS-migráció)
- SUSE Linux Enterprise / openSUSE
- Oracle Linux
- FreeBSD

**Adatbázisok**
- IBM Db2

**Alkalmazás- és webszerverek** — *jelenleg csak IIS, FTP/SFTP és RDS szerepel*
- Apache HTTP Server
- nginx (reverse proxy, terheléselosztás, TLS-terminálás)
- Apache Tomcat
- WildFly / JBoss EAP
- Node.js (PM2 vagy systemd alatt)
- PHP-FPM
- Java futtatókörnyezet (JRE/JDK)

**Üzleti alkalmazások**
- SAP

## Nyitott szerkesztői kérdés

- **A visszaállítási teszt benne van-e az üzemeltetési alapdíjban?** Az oldal jelenleg három helyen azt írja, hogy a szerződésben egyeztetett igényeknek megfelelően, **külön szolgáltatásként** történik. Ha az alapdíj tartalmaz évi egy tesztet, a megfogalmazást pontosítani kell („a szerződésben egyeztetett gyakorisággal, azon felül külön megrendelésre").

## Megjegyzés a következő körhöz

Az adatbázis-blokkban szerepel a MySQL / MariaDB, a MongoDB és a Redis, az alkalmazásszerver-blokkban viszont nincs sem nginx, sem Apache, sem PHP-FPM, sem Node.js. Ez a párosítás szokatlan: ezek a rendszerek jellemzően együtt fordulnak elő. Ha az alkalmazásszerver-oldali kompetencia valójában megvan, érdemes kiírni — enélkül a katalógus azt sugallja, hogy az adatbázist üzemeltetjük, az előtte álló webréteget viszont nem.
