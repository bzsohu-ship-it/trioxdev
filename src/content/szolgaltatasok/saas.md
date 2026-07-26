---
cim: SaaS – Alkalmazás-hosting
osszefoglalo: Üzleti alkalmazásainak üzemeltetése menedzselt környezetben — a szerver, az operációs rendszer és a rendelkezésre állás a mi felelősségünk.
sorrend: 3
cimke: menedzselt hosting
szelesLayout: true
---

## Az alkalmazás szolgáltatásként, szerver nélkül

## 1. Mit jelent ez egy mondatban?

A SaaS azt jelenti, hogy **Ön nem szervert és nem is operációs rendszert kap, hanem magát a működő alkalmazást** – egy címen, egy bejelentkezéssel, bármikor, bárhonnan elérhetően.

Nincs telepítés, nincs frissítés, nincs adatbázis-karbantartás, nincs mentési rendszer, amit üzemeltetni kellene. Az alkalmazás mögötti teljes technológiai réteget – kiszolgálót, adatbázist, gyorsítótárat, tanúsítványt, mentést, felügyeletet – mi működtetjük, Ön pedig **használja és dolgozik vele**.

---

## 2. Miben más, mint az IaaS és a DCaaS?

A három szolgáltatás ugyanarra a kérdésre ad választ különböző mélységben: **hol van a határ Ön és a szolgáltató felelőssége között?**

| Réteg | IaaS | DCaaS | **SaaS** |
|---|---|---|---|
| Fizikai hardver, adatközpont | Triox | Triox | **Triox** |
| Virtualizáció, hálózat | Triox | Triox | **Triox** |
| Operációs rendszer, címtár | **Ügyfél** | Triox | **Triox** |
| Adatbázis, futtatókörnyezet | **Ügyfél** | Megosztott | **Triox** |
| Alkalmazás telepítése, frissítése | **Ügyfél** | **Ügyfél** | **Triox** |
| Alkalmazás felügyelete, működése | **Ügyfél** | **Ügyfél** | **Triox** |
| Adat és üzleti folyamat | Ügyfél | Ügyfél | **Ügyfél** |

**Röviden:**
- **IaaS** – bérelt virtuális gépeket kap, a rendszert Ön üzemelteti rajtuk.
- **DCaaS** – a teljes szervertermét vesszük át, az infrastruktúrát és az operációs rendszereket mi üzemeltetjük.
- **SaaS** – már a szerver kérdése sem merül fel: Ön belép egy címen és dolgozik. **Csak az adat és az üzleti folyamat marad Önnél.**

---

## 3. Mit kap konkrétan?

### 3.1 Az alkalmazás, elérhető formában

| Elérési mód | Mikor ez a megfelelő |
|---|---|
| **Böngészőből, saját domainen** | Webes alkalmazásoknál – bármilyen eszközről, telepítés nélkül |
| **Terminálszolgáltatáson (RDS) keresztül** | Klasszikus, telepítést igénylő ügyviteli és könyvelőprogramoknál – a felhasználó ugyanazt a megszokott felületet látja, csak nem a saját gépén fut |
| **Kliensprogramból, VPN-en át** | Ha az alkalmazás vastag kliensre épül, de az adatbázisnak központban a helye |
| **Mobil eszközről** | Ahol az alkalmazás támogatja – ugyanaz az adat, ugyanaz a jogosultság |

Minden esetben: **saját domainnév**, érvényes és automatikusan megújított **TLS-tanúsítvány** (https), és egyértelmű, dokumentált belépési pont.

### 3.2 A teljes alkalmazás-stack üzemeltetése

| Komponens | Mit csinál | Mit vállalunk |
|---|---|---|
| **Webkiszolgáló** | Fogadja a felhasználói kéréseket | Konfiguráció, teljesítményhangolás, tanúsítványkezelés |
| **Alkalmazásszerver** | Futtatja az üzleti logikát | Futtatókörnyezet karbantartása, verziókövetés |
| **Adatbázis** (SQL / PostgreSQL / MongoDB) | Tárolja az adatot | Telepítés, hangolás, indexkarbantartás, mentés, helyreállítás |
| **Gyorsítótár** (pl. Redis) | Gyorsítja a működést | Üzemeltetés, memóriaméretezés |
| **Háttérfeldolgozás, ütemezett feladatok** | Riportok, importok, éjszakai zárások | Futásfelügyelet, hibariasztás |
| **Fájltárolás** | Dokumentumok, mellékletek, médiaállományok | Kapacitásfigyelés, mentés |
| **Monitorozó réteg** | Figyeli, hogy minden él-e | Riasztás, beavatkozás |

Ha bármelyik réteg megáll, az **nálunk keletkező hibajegy**, nem az Ön problémája.

### 3.3 Elérhetőség, teljesítmény, közzététel

- **Dedikált gateway és publikus IP** – az alkalmazás úgy jelenik meg az interneten, ahogy Ön szeretné, saját domainen.
- **Tűzfalszabályok az Ön alkalmazására szabva** – csak az a forgalom jut be, aminek be kell jutnia.
- **Korlátozott elérés opcióval** – ha az alkalmazásnak nem kell nyilvánosnak lennie, kizárólag VPN-en vagy megadott IP-címekről érhető el.
- **Teljesítményfigyelés** – nemcsak azt nézzük, hogy „fut-e a szerver", hanem hogy **az alkalmazás valóban válaszol-e és milyen gyorsan**. A lassulás gyakran hamarabb kiderül nálunk, mint a felhasználóknál.
- **Skálázás terhelés szerint** – szezonális csúcsok, kampányidőszakok, hónap eleji zárások esetén az erőforrás átmenetileg is növelhető.

### 3.4 Biztonság és hozzáférés

- **Elkülönített hálózati szegmens** – az alkalmazás nem közös térben fut más ügyfelek rendszereivel.
- **Több rétegű elválasztás** – a nyilvánosan elérhető komponensek (webréteg) és az adatbázis külön szegmensben; az adatbázis közvetlenül kívülről nem érhető el.
- **Titkosított kapcsolat** végponttól végpontig (https, VPN).
- **Jogosultságkezelés** – ki mit láthat és módosíthat, dokumentáltan; igény esetén az Ön címtárához kötve.
- **Kétfaktoros hitelesítés (MFA)** lehetősége a bejelentkezéshez.
- **Naplózás** – ki, mikor, honnan lépett be; ez auditnál és incidensvizsgálatnál egyaránt szükséges.

### 3.5 Mentés és helyreállítás

- **Alkalmazás-konzisztens mentés** – az adatbázis és a fájlok együtt, egymással összhangban.
- **Több szintű mentés** – rendszeres teljes mentés és gyakoribb adatbázis-mentés, elkülönített tárolókon.
- **Időpontra visszaállítás** – nem csak „a tegnapi állapot", hanem igény esetén a nap egy korábbi pontja is visszaállítható.
- **RPO és RTO célértékek szerződésben:**
  - **RPO** = mennyi adat elvesztése fogadható el a legrosszabb esetben (pl. legfeljebb 1 óra munkája)
  - **RTO** = mennyi idő alatt kell az alkalmazásnak újra működnie (pl. 4 órán belül)
- **Tesztelt visszaállítás** – megállapodás szerinti rendszerességgel próba-visszaállítást végzünk, és annak eredményét írásban átadjuk.

### 3.6 Frissítés, verziókezelés, tesztkörnyezet

- **Ütemezett frissítések** előre egyeztetett karbantartási ablakban, nem munkaidő közepén.
- **Frissítés előtti mentés és visszaállási forgatókönyv** – ha valami nem úgy sikerül, van visszaút.
- **Külön tesztkörnyezet** igény esetén – az új verzió először ott fut, csak utána élesben.
- **Biztonsági javítások** (operációs rendszer, adatbázis, futtatókörnyezet) folyamatosan, nem évente egyszer.
- **Változáskezelés** – minden lényeges beavatkozás dokumentált és visszakövethető.

### 3.7 Felügyelet és átláthatóság

- **Folyamatos szolgáltatásfigyelés** – elérhetőség, válaszidő, erőforrás-felhasználás, mentési állapot.
- **Rendszeres riport** az Ön alkalmazásáról: rendelkezésre állás, kapacitás, mentések, elvégzett beavatkozások.
- **Egy kapcsolattartó** – nem kell külön szoftverszállítót, hostingot és rendszergazdát összehangolni.
- **Naprakész dokumentáció** az architektúráról és a helyreállítási eljárásról.

### 3.8 Licenc: SPLA és CSP

- **SPLA (Services Provider License Agreement)** – a Windows Server, az SQL Server és a Remote Desktop Services licencei a szolgáltató nevén, **havi tényleges használat alapján** kerülnek elszámolásra.
- **Az SQL Server különösen hangsúlyos tétel** – egy megvásárolt adatbázis-licenc önmagában komoly beruházás. SPLA-ban ez havi díjjá alakul, a tényleges igénybevétel arányában.
- **Havonta le- és felskálázható** – ha egy hónapban kevesebb felhasználó dolgozik, az elszámolás ehhez igazodik.
- **Verziófrissítés joga benne van**, nem kell külön Software Assurance.
- **A licencaudit kockázata a szolgáltatót terheli.**
- **CSP (Cloud Solution Provider)** – a Microsoft 365 és a kapcsolódó felhőszolgáltatások ugyanezen a szerződésen, **egy számlán**, magyar nyelvű támogatással.
- **Az alkalmazás saját (gyártói) licencét** Ön hozza, vagy a szoftverszállítóval közösen rendezzük – ennek feltételeit a bevezetés előtt tisztázzuk.

---

## 4. Két tipikus ügyfél-helyzet

### A) A cég a saját üzleti alkalmazását szeretné szolgáltatásként használni

*„Van egy ügyviteli / könyvelő / gyártásirányító rendszerünk, ami ma egy szerveren fut az irodában."*

Mit old meg a SaaS-modell:

- A rendszer **bárhonnan elérhetővé válik** – irodából, otthonról, telephelyről, ügyfélnél.
- **Megszűnik a helyi szerver** és az összes hozzá tartozó költség.
- **Nincs több „a szerver nem indul el hétfő reggel"** helyzet.
- A frissítés, a mentés és a helyreállítás **átkerül hozzánk**, felelősséggel együtt.
- Új telephely vagy új munkatárs bevonása **percek kérdése**, nem beszerzésé.

### B) Szoftverfejlesztő cég a saját termékét szolgáltatja az ügyfeleinek

*„Fejlesztünk egy alkalmazást, és szeretnénk előfizetéses szolgáltatásként kiadni – de nem akarunk üzemeltetéssel foglalkozni."*

Mit ad ehhez a Triox:

- **A teljes futtatókörnyezet** – webréteg, adatbázis, gyorsítótár, háttérfeldolgozás, monitorozás – üzemeltetve.
- **Ügyfelenként elkülönített környezet** vagy közös, több bérlős (multi-tenant) architektúra, az Ön termékének felépítése szerint.
- **Növekedéssel skálázódó kapacitás** – nem kell előre szerverparkot venni egy még bizonytalan ügyfélszámra.
- **Fehércímkés (white-label) működés** – az Ön ügyfelei az Ön márkáját látják, a mi nevünk nem jelenik meg.
- **Kiszámítható egységköltség** – az üzemeltetés ügyfélre vetített költsége tervezhető, ami az árazás alapja lehet.
- **Ön a fejlesztésre koncentrál**, nem a szerverekre.

---

## 5. Mit nem kell megvennie és megcsinálnia?

| Kategória | Amit saját üzemeltetésnél biztosítania kellene |
|---|---|
| Hardver | Alkalmazásszerver, adatbázisszerver, tárolók, tartalék alkatrészek |
| Infrastruktúra | Szerverszoba, rack, UPS, hűtés, redundáns internetkapcsolat |
| Szoftverlicenc | Windows Server, CAL, RDS SAL, **SQL Server** (jellemzően a legnagyobb tétel), mentőszoftver |
| Adatbázis-üzemeltetés | Hangolás, indexkarbantartás, konzisztens mentés, helyreállítási eljárás |
| Tanúsítvány, domain | TLS-tanúsítvány beszerzése és **lejárat előtti megújítása** (klasszikus kiesési ok) |
| Frissítés | OS-, adatbázis- és futtatókörnyezet-javítások folyamatos követése |
| Felügyelet | Monitorozó rendszer kiépítése, riasztás, éjszakai és hétvégi készenlét |
| Helyreállítás | Kidolgozott és **kipróbált** visszaállítási forgatókönyv |
| Munkaerő | Rendszergazdai és adatbázis-üzemeltetői óradíj, helyettesítés szabadság és betegség idejére |

---

## 6. A pénzügyi és adózási előny: CAPEX helyett OPEX

### 6.1 Saját üzemeltetés: beruházás (CAPEX)

1. A **szerver, a tároló és a szoftverlicencek árát egy összegben ki kell fizetnie** – az adatbázis-licenc gyakran a hardvernél is drágább.
2. Az eszközöket **aktiválni kell**: a 100 ezer forint feletti egyedi értékű eszköz tárgyi eszközként kerül nyilvántartásba.
3. A költség **évekre elosztva, értékcsökkenési leírás formájában** jelenik meg.
4. **Kifizette ma, de az adóalapját csak évek alatt, részletekben csökkenti.**
5. Ehhez jön az eszköznyilvántartás, a leltározás, az értékcsökkenés-számítás és a selejtezés adminisztrációja.
6. Ha hitelből vagy lízingből finanszírozza: kamatteher és lekötött hitelkeret.
7. A negyedik–ötödik évben – amikor az eszközök kifutottak – **kezdheti elölről.**

### 6.2 Alkalmazás-hosting: működési költség (OPEX)

- ✅ **A havi díj az adott időszak költsége** – nem eszközbeszerzés, nincs aktiválás.
- ✅ **Teljes egészében, azonnal csökkenti az adóalapot** abban az évben, amelyben felmerül.
- ✅ **Az áfa havonta, folyamatosan levonható** – nem kell egy nagy beruházás áfáját megelőlegezni.
- ✅ **Nincs tárgyi eszköz nyilvántartás, leltár, értékcsökkenés-számítás, selejtezés.**
- ✅ **Felhasználószámhoz igazítható költség** – növekedéskor arányosan nő, visszaeséskor csökkenthető.
- ✅ **Kiszámítható, tervezhető cash-flow** – egyetlen ismétlődő tétel, egyszeri nagy kiadás nélkül.
- ✅ **Nem terheli a hitelképességet** – a hitelkerete üzletileg hasznosabb célra marad szabad.
- ✅ **Az üzemeltetési munkaerőköltség is beleépül** – nem kell külön rendszergazdai kapacitást fenntartania.
- ✅ **A technológiai avulás kockázata a szolgáltatóé.**

### 6.3 Összehasonlítás

| | Saját üzemeltetés (CAPEX) | Alkalmazás-hosting (OPEX) |
|---|---|---|
| Kifizetés | Egy összegben, előre | Havonta, egyenletesen |
| Költségelszámolás | Évekre elosztva, értékcsökkenéssel | **Azonnal, teljes egészében** |
| Adóalap-csökkentés | Részletekben, évek alatt | **A felmerülés évében, teljes összegben** |
| Áfa | Nagy összeg megelőlegezése | Havonta, folyamatosan levonva |
| Könyvviteli teher | Aktiválás, écs, leltár, selejtezés | Egy bejövő számla |
| Költség és használat viszonya | Független – fix, akkor is, ha nem használja | **Arányos a tényleges igénybevétellel** |
| Üzemeltetői munkaerő | Külön költség | A díjban |
| Avulási kockázat | Az Öné | A miénk |
| Licenckockázat | Az Öné (audit) | A miénk (SPLA-jelentés) |

> **Fontos:** Ez a tájékoztató általános ismertetés, nem minősül adótanácsadásnak. A konkrét elszámolás módját kérjük, egyeztesse könyvelőjével vagy adótanácsadójával.

---

## 7. Mikor éri meg különösen?

- **A munkatársak több helyről dolgoznak** – iroda, otthon, telephely, ügyfél – és mindenhonnan ugyanahhoz az adathoz kell hozzáférniük.
- **Az alkalmazás ma egyetlen szerveren fut**, aminek a kiesése azonnal megállítja a céget.
- **Van mentés, de senki nem próbálta még ki**, hogy vissza is lehet-e állítani belőle.
- **Az adatbázis lassul**, és nincs, aki érdemben foglalkozzon a hangolásával.
- **Egyetlen ember tudásától függ**, hogyan van összerakva a rendszer.
- **A szoftverszállító és a hosting két külön cég**, és probléma esetén egymásra mutogatnak.
- **Szoftverfejlesztőként** előfizetéses modellre állna át, de nem akar üzemeltetői csapatot építeni.
- **Adóalap-optimalizálás** szempontjából előnyösebb a folyó költség a többéves amortizációnál.

---

## 8. Hogyan zajlik a bevezetés?

1. **Alkalmazás-felmérés** – milyen komponensekből áll a rendszer, mekkora az adatmennyiség, hány felhasználó dolgozik vele, mik a teljesítményigények, milyen integrációi vannak más rendszerekkel.
2. **A szoftverszállító bevonása** – ha az alkalmazást harmadik fél fejlesztette, egyeztetjük vele a támogatott futtatási környezetet és a licencfeltételeket.
3. **Célarchitektúra és RPO/RTO egyeztetés** – mennyi állásidő és mennyi adatvesztés fogadható el; ez határozza meg a mentési és rendelkezésre állási tervet.
4. **Ajánlat** – tételes havi díj: erőforrás, tárhely, mentési szint, licencek, üzemeltetési és támogatási szint.
5. **Szerződés és SLA** – rendelkezésre állás, reakcióidő, karbantartási ablakok, mentési és megőrzési szabályok írásban.
6. **Teszttelepítés** – az alkalmazás először tesztkörnyezetben áll fel, valós adattal, hogy a működés és a teljesítmény ellenőrizhető legyen.
7. **Éles átállás** – egyeztetett időablakban, végleges adatátvétellel, visszaállási forgatókönyvvel.
8. **Átadás és üzemeltetés** – hozzáférések, dokumentáció, felhasználói tájékoztató, riportolási rend, eszkalációs útvonal.

---

## 9. Gyakori kérdések

**Kinél van az adat tulajdonjoga?**
Az adat minden esetben az Öné. Mi tárolási, futtatási és védelmi szolgáltatást nyújtunk hozzá.

**Ki tudom kérni az adataimat?**
Igen. A szerződésben rögzített formátumban és rendszerességgel adatexportot biztosítunk – szolgáltatás közben és a szolgáltatás megszűnésekor egyaránt.

**Mi történik, ha leáll az alkalmazás?**
A leállást jellemzően a monitorozó rendszerünk észleli előbb, nem a felhasználó. A reakcióidőt és a helyreállítási célértéket az SLA rögzíti; kritikus rendszereknél futásra kész replika is fenntartható.

**Az adatbázisom közösben fut más ügyfelekkel?**
Nem. Az Ön alkalmazása és adatbázisa elkülönített környezetben működik, dedikált hálózati szegmensben. Fokozottan érzékeny adat esetén teljesen izolált környezetet alakítunk ki.

**Mi van, ha a szoftverszállítóm nem támogatja a hostingot?**
A bevezetés előtt ezt tisztázzuk. A legtöbb ügyviteli rendszer gond nélkül futtatható szolgáltatói környezetben; ahol a gyártó külön feltételt szab, azt előre egyeztetjük.

**Én is hozzáférek a szerverhez?**
SaaS-modellben jellemzően nem szükséges, mert az üzemeltetést mi végezzük. Ha az Ön oldalán van saját IT-munkatárs vagy fejlesztő, számára korlátozott, dokumentált hozzáférés biztosítható.

**Mi történik, ha hirtelen megnő a felhasználószám?**
Az erőforrás bővítése a szolgáltatás része: több processzormag, memória vagy tárhely beszerzés és leállás nélkül biztosítható, a havi díj arányos módosításával.

---

## 10. Kapcsolat

Ajánlatkéréshez elegendő nagyságrendileg megadni:

- milyen alkalmazásról van szó (megnevezés, gyártó, verzió),
- hány felhasználó dolgozik vele, és hány helyszínről,
- mekkora az adatbázis mérete, és milyen ütemben nő,
- milyen elérési mód szükséges (böngésző, terminál, kliensprogram),
- mennyi állásidő és mennyi adatvesztés fogadható el,
- milyen más rendszerekkel kell együttműködnie.

Ezek alapján tételes, összehasonlítható ajánlatot készítünk – a jelenlegi saját üzemeltetés becsült teljes költségével egy táblázatban.

*Ez a dokumentum tájékoztató jellegű, nem minősül adótanácsadásnak, és nem helyettesíti az egyedi szerződéses feltételeket.*
