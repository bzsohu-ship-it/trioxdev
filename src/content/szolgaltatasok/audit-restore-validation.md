---
cim: Audit Restore Validation és Visszaállítási Tesztek
osszefoglalo: Dokumentált visszaállítási tesztek, amelyekkel igazolható, hogy mentései kritikus helyzetben valóban használhatók.
sorrend: 6
cimke: audit compliance
szelesLayout: true
---

## A mentés nem bizonyíték. A visszaállítás az.

Egyre több audit, szabályozói vizsgálat és ügyfél-elvárás írja elő a mentések rendszeres visszaállítási tesztjének igazolását. Mi elvégezzük — és jegyzőkönyvet adunk róla.

<figure class="abra">
<svg viewBox="0 0 880 130" role="img" aria-labelledby="abra-arv">
<title id="abra-arv">A visszaállítási teszt öt lépése: a mentési pont kiválasztása, elkülönített tesztkörnyezet felépítése, a visszaállítás elvégzése, az adatok ellenőrzése, végül az audit-kompatibilis jegyzőkönyv.</title>
<text class="abra__mono" x="78" y="24" text-anchor="middle">01</text>
<rect class="abra__doboz" x="0" y="34" width="156" height="62" rx="4" />
<text class="abra__cimke" x="78" y="70" text-anchor="middle">Mentési pont</text>
<text class="abra__kicsi" x="78" y="116" text-anchor="middle">egyeztetett időpontról</text>
<path class="abra__nyil" d="M164 59 L176 65 L164 71 Z" />
<text class="abra__mono" x="259" y="24" text-anchor="middle">02</text>
<rect class="abra__doboz" x="181" y="34" width="156" height="62" rx="4" />
<text class="abra__cimke" x="259" y="70" text-anchor="middle">Tesztkörnyezet</text>
<text class="abra__kicsi" x="259" y="116" text-anchor="middle">az élestől elkülönítve</text>
<path class="abra__nyil" d="M345 59 L357 65 L345 71 Z" />
<text class="abra__mono" x="440" y="24" text-anchor="middle">03</text>
<rect class="abra__doboz" x="362" y="34" width="156" height="62" rx="4" />
<text class="abra__cimke" x="440" y="70" text-anchor="middle">Visszaállítás</text>
<text class="abra__kicsi" x="440" y="116" text-anchor="middle">teljes vagy részleges</text>
<path class="abra__nyil" d="M526 59 L538 65 L526 71 Z" />
<text class="abra__mono" x="621" y="24" text-anchor="middle">04</text>
<rect class="abra__doboz" x="543" y="34" width="156" height="62" rx="4" />
<text class="abra__cimke" x="621" y="70" text-anchor="middle">Ellenőrzés</text>
<text class="abra__kicsi" x="621" y="116" text-anchor="middle">olvashatóság, integritás</text>
<path class="abra__nyil" d="M707 59 L719 65 L707 71 Z" />
<text class="abra__mono" x="802" y="24" text-anchor="middle">05</text>
<rect class="abra__kiemelt" x="724" y="34" width="156" height="62" rx="4" />
<text class="abra__cimke" x="802" y="70" text-anchor="middle">Jegyzőkönyv</text>
<text class="abra__kicsi" x="802" y="116" text-anchor="middle">audit-kompatibilis</text>
</svg>
</figure>

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
| **Külső szállító rendszer teszt** | Külső szállító alkalmazás és adatbázis mentéseinek ellenőrzésére | 4–6 mérnökóra |
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

### 3. Külső szállító rendszer visszaállítási teszt

A külső szállító alkalmazás és adatbázis mentéseinek ellenőrzése.

**Tartalma**

- alkalmazás visszaállítása
- adatbázis visszaállítása
- szolgáltatás működésének ellenőrzése
- szükség esetén a külső szállító bevonása

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
