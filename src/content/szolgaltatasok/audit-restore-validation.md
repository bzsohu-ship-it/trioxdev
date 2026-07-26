---
cim: Audit Restore Validation és Visszaállítási Tesztek
osszefoglalo: Dokumentált visszaállítási tesztek, amelyekkel igazolható, hogy mentései kritikus helyzetben valóban használhatók.
sorrend: 5
cimke: audit compliance
szelesLayout: true
---

## A mentés nem bizonyíték. A visszaállítás az.

Egyre több audit, szabályozói vizsgálat és ügyfél-elvárás írja elő a mentések rendszeres visszaállítási tesztjének igazolását. Mi elvégezzük — és jegyzőkönyvet adunk róla.

---

## Miért fontos a visszaállítási teszt?

Egy sikeres biztonsági mentés önmagában még nem garantálja, hogy rendszerhiba vagy kibertámadás esetén az adatok ténylegesen visszaállíthatók. A mentési rendszer valódi értékét nem a sikeres mentések száma, hanem a sikeres visszaállítás bizonyítja.

**A szolgáltatásunkkal Ön:**

- megfelel az audit- és compliance előírásoknak
- igazolja a mentési folyamat működőképességét
- csökkenti az üzleti kockázatokat
- időben feltárja a mentési rendszer hiányosságait
- dokumentált bizonyítékot kap a visszaállítás sikerességéről

---

## Szolgáltatási csomagok

| Csomag | Mikor ajánlott? | Becsült idő |
|---|---|---|
| **Audit Restore Validation** | Ha az auditor kizárólag azt várja el, hogy a mentésekből az adatok visszaállíthatók | 4–6 mérnökóra |
| **Irodai infrastruktúra teszt** | Active Directory és szerver infrastruktúra teljes működésének ellenőrzésére | 8–12 mérnökóra |
| **Solarsoft rendszer teszt** | Solarsoft alkalmazás és adatbázis mentéseinek ellenőrzésére | 4–6 mérnökóra |
| **Microsoft 365 teszt** | Exchange Online, SharePoint, OneDrive helyreállításának ellenőrzésére | 6–10 mérnökóra |
| **Teljes Disaster Recovery teszt** | Ha teljes infrastruktúra-helyreállítási próbára van szükség | 24–40 mérnökóra |

---

### 1. Audit Restore Validation

Audit célú visszaállítási validáció. Akkor a megfelelő választás, ha az auditor kizárólag annak igazolását várja el, hogy a mentésekből sikeresen visszaállíthatók az adatok.

**A szolgáltatás tartalma**

- mentési feladatok áttekintése
- mentési naplók ellenőrzése
- visszaállítási pont kiválasztása
- mintavételes visszaállítás
- konzisztencia vizsgálat
- adatintegritás ellenőrzése
- audit-kompatibilis jegyzőkönyv készítése
- tesztkörnyezet eltávolítása

**Mintavételes visszaállítás — jellemző objektumok:** virtuális szerver · fájlszerver könyvtár · SQL adatbázis · Microsoft 365 mailbox · OneDrive · SharePoint adatok

**Becsült idő:** 4–6 mérnökóra

---

### 2. Irodai infrastruktúra visszaállítási teszt

Active Directory és szerver infrastruktúra teljes működésének ellenőrzése.

**Tartalma**

- Active Directory visszaállítása
- fájlszerver visszaállítása
- infrastruktúra szerverek
- alap szolgáltatások ellenőrzése
- működési tesztek
- audit jegyzőkönyv

**Becsült idő:** 8–12 mérnökóra

---

### 3. Solarsoft rendszer visszaállítási teszt

A Solarsoft alkalmazás és adatbázis mentéseinek ellenőrzése.

**Tartalma**

- alkalmazás visszaállítása
- adatbázis visszaállítása
- szolgáltatás működésének ellenőrzése
- szükség esetén a Solarsoft alkalmazásszállító bevonása

**Becsült idő:** 4–6 mérnökóra

> **Megjegyzés:** Az alkalmazásszállító támogatási díja nem része a szolgáltatásunknak.

---

### 4. Microsoft 365 visszaállítási teszt

A Microsoft 365 környezet helyreállításának ellenőrzése.

**Tartalma**

- Exchange Online
- SharePoint Online
- OneDrive
- egyéb mentett Microsoft 365 objektumok

**Becsült idő:** 6–10 mérnökóra

---

### 5. Teljes Disaster Recovery teszt

Komplex üzletmenet-folytonossági teszt azoknak a szervezeteknek, ahol teljes infrastruktúra-helyreállítási próbára van szükség.

**Tartalma**

- teljes infrastruktúra visszaállítása
- Active Directory
- alkalmazásszerverek
- adatbázisok
- Microsoft 365
- működés igazolása
- részletes audit jegyzőkönyv

**Becsült idő:** 24–40 mérnökóra

---

## Hogyan zajlik? — Az Audit Restore Validation folyamata

### 1. Mentések ellenőrzése

Áttekintjük a mentési feladatokat, ellenőrizzük a sikeres mentéseket és a mentési naplókat, majd kiválasztjuk a visszaállítási pontot.

### 2. Mintavételes visszaállítás

Az auditorral vagy a kijelölt felelőssel egyeztetett objektumokat visszaállítjuk egy **elkülönített tesztkörnyezetbe** — az éles rendszer érintése nélkül.

### 3. Konzisztencia vizsgálat

Ellenőrizzük a visszaállított rendszert: operációs rendszer indíthatósága, fájlrendszer konzisztenciája, szolgáltatások indulása, alkalmazásfájlok megléte, adatbázis csatlakoztathatósága, eseménynaplók.

### 4. Adatintegritás vizsgálata

Ellenőrizzük, hogy az adatok olvashatók, a fájlok sértetlenek, a könyvtárszerkezet megfelelő, és — ahol releváns — a jogosultságok rendelkezésre állnak.

### 5. Audit jegyzőkönyv

Részletes, audit-kompatibilis dokumentáció készül, amely tartalmazza a teszt időpontját, a felhasznált mentési pontot, a visszaállított objektumokat, a végrehajtott lépéseket, az ellenőrzések eredményét, az esetleges hibákat és a javítási javaslatokat.

**A teszt minősítése:** Megfelelt · Megfelelt javítási javaslatokkal · Nem felelt meg

---

## Mit nem tartalmaz a szolgáltatás?

Az Audit Restore Validation nem minősül teljes üzletmenet-folytonossági tesztnek. Nem tartalmazza:

- a teljes infrastruktúra helyreállítását
- a teljes Active Directory újraépítését
- az üzleti alkalmazások teljes funkcionális tesztelését
- a felhasználói elfogadási teszteket (UAT)
- a teljes Business Continuity tesztet
- a teljes Disaster Recovery próbát

*Ha ezekre van szüksége, a Teljes Disaster Recovery teszt csomagunkat ajánljuk.*

---

## Miért a Triox Informatika?

- **Több mint 20 év** vállalati IT üzemeltetési tapasztalat
- Microsoft és virtualizációs infrastruktúrák üzemeltetése
- Audit-kompatibilis dokumentáció
- Elkülönített tesztkörnyezet használata
- Tapasztalat kritikus rendszerek helyreállításában
- Gyors és átlátható szolgáltatási folyamat

---

## Kérjen ajánlatot

Minden környezet egyedi, ezért a végleges ajánlat elkészítéséhez előzetesen felmérjük:

- mely rendszerekre terjed ki a visszaállítási teszt
- milyen mentési technológia működik
- milyen auditkövetelményeknek kell megfelelni
- milyen határidő áll rendelkezésre

> **A visszaállítási teszt nem költség — hanem annak bizonyítéka, hogy egy kritikus helyzetben a vállalkozása adatai valóban visszaállíthatók.**
