# KnowBe4-cikk — megerősítendő tételek

**Belső jegyzet. Nem publikus** — ez a mappa nincs a buildben.

Vonatkozik: [`src/content/blog/biztonsagtudatossag-knowbe4-nis2-dora.md`](../src/content/blog/biztonsagtudatossag-knowbe4-nis2-dora.md)

A cikk `piszkozat: true` állapotban van, dátuma **2026-08-20 (csütörtök)**, a heti
ritmus következő pontja. Élesítés: a `piszkozat` sor törlése vagy `false`-ra állítása.

## Amit a cikk szándékosan NEM állít

| Tétel | Miért nincs benne |
|---|---|
| **A Triox KnowBe4-partner / viszonteladó** | Nincs megerősítve. A KnowBe4 nem szerepel a `partnerek.astro` gyártói között, és a fájl kommentje kimondja: formális partnerfokozatot csak Zsolt megerősítésével írunk ki. A cikk ezért az **eszközkategóriáról** beszél, és a KnowBe4-et annak legismertebb képviselőjeként említi. |
| **„Bevezetjük Önnek a KnowBe4-et”** | Ugyanaz az ok. A záró CTA a felmérésre hivatkozik, ami már kiadott szolgáltatás. |
| **NIS2- vagy DORA-megfelelés mint vállalás** | `biztonsag-megerositendo.md`: konkrét NIS2-megfelelési vállalásunk nincs. A cikk kimondja, hogy nem jogi tanácsadás, és a konkrét kötelezettség tisztázását szakértőhöz utalja. |
| **Ár, licencdíj, felhasználószám** | Nincs megadva, és a honlapon amúgy sem írunk árat. |
| **Saját bevezetési referencia, ügyfélszám, kattintási arány** | Nincs valós adatunk. A cikk ezért nem hoz statisztikát — a „tapasztalat szerint” fordulat általános szakmai megfigyelésre utal, nem mérésünkre. |

## Ha Zsolt megerősíti a partnerséget

Ha van élő viszonteladói vagy bevezetési kapcsolat, a cikk két ponton bővíthető:

1. A záró (`.zaras`) blokk kiegészíthető azzal, hogy a bevezetést mi is elvégezzük.
2. A KnowBe4 felvehető a `partnerek.astro` „licenc” csoportjába — de csak logóhasználati
   engedéllyel, a fájl kommentjében leírtak szerint.

**Fontos:** a KnowBe4 hivatalos magyarországi forgalmazója a Human Hacking Kft. Ha a
Trioxnak nincs saját szerződése, a helyes megfogalmazás a „segítünk kiválasztani és
bevezetni”, nem a „mi forgalmazzuk”.

## A cikkben szereplő jogszabályi hivatkozások

Ezek külső, ellenőrizhető tények, két-két független forrásból ellenőrizve
(2026-08-14). Ha a cikk hetekkel később jelenik meg, érdemes újranézni.

| Hivatkozás | Amit a cikk állít |
|---|---|
| **2024. évi LXIX. törvény** (Kiberbiztonsági tv.) | A NIS2 hazai átültetése, hatályos 2025. január 1-jétől. Versenyszférában a felügyelet az SZTFH. |
| **17/2025. (VII. 24.) EM rendelet** | A vezető tisztségviselők és az információbiztonsági felelősök képzési kötelezettségét rögzíti; a 2025 vége előtt kinevezetteknek átmeneti határidőt ad. **A cikk szándékosan nem ír ki óraszámot** — az forrásonként eltérően összegzett, és szervezettípustól függ. |
| **DORA — (EU) 2022/2554** | Pénzügyi szektor, 2025. január 17-e óta alkalmazandó. A 13. cikk minden munkavállalóra és a felső vezetésre előírja az IKT-biztonsági tudatossági programot. |

A cikk azt a különbségtételt teszi meg, amit a legtöbb marketinganyag elmos: a hazai
Kiberbiztonsági tv. végrehajtási rendelete a **vezetőkre és a felelősökre** ír elő
tételes képzést, míg a DORA 13. cikke **minden munkavállalóra**. Ha ezt valaki
egyszerűsíti („a NIS2 kötelezővé teszi minden dolgozó képzését”), az félrevezető.

## Nyitott kérdés

- Van-e saját tapasztalatunk KnowBe4-bevezetésből, amit esettanulmányként ki lehetne
  adni? Ha igen, az `esettanulmanyok.astro` a helye — lásd `esettanulmanyok-megerositendo.md`.
