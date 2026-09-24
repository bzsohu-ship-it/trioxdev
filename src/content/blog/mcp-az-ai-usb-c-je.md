---
cim: MCP — az AI USB-C-je
leiras: Egy nyílt szabvány, amellyel az AI végre hozzáfér a cég rendszereihez. Nyolc pénzügyi és üzleti folyamat, ami szinte minden kereskedelmi cégnél nehézkes, és ma már jó részben automatizálható — a meglévő rendszerek lecserélése nélkül.
datum: 2026-09-24
---

<div class="osszefoglalo">

Röviden

- Az AI eddig nem látta a cég rendszereit, ezért minden adatot kézzel kellett elé tenni. Az **MCP** nevű nyílt szabvány ezen változtat.
- **Platformfüggetlen:** Claude, ChatGPT, Microsoft Copilot és Gemini is támogatja, és bármilyen számlázóhoz, bankhoz, készletkezelőhöz köthető, amelyhez van programozható hozzáférés.
- A legtöbb időt a **számlafeldolgozás, a kintlévőség, a banki egyeztetés, a cash-flow és a vezetői riportok** viszik el. Mind a nyolc bemutatott folyamat jó részben automatizálható.
- A szabály ugyanaz, mint egy új kollégánál: **az AI előkészít, az ember dönt**.

</div>

A legtöbb cégnél a mesterséges intelligencia ma annyit jelent, hogy valaki ChatGPT-vel ír e-mailt, vagy összefoglaltat vele egy szerződést. Hasznos, de a valódi időrablók máshol vannak: a számlák kézi rögzítésében, a tartozások utáni telefonálgatásban, a banki tételek párosításában és a hétfő reggeli Excel-riportokban. Ezekhez az AI-nak eddig nem volt hozzáférése.

## Miért olyan nehézkes mindez?

Egy átlagos kereskedelmi cég adatai öt-hat különböző helyen vannak: a számlázóban, a bankban, a készletkezelőben vagy a webshopban, a könyvelő rendszerében, néhány Excel-táblában és az e-mail-fiókokban. A rendszerek nem beszélnek egymással. Az összekötést emberek végzik másolással, exporttal, kereséssel és emlékezettel.

Ezek a folyamatok nem azért lassúak, mert bonyolultak, hanem mert **szétszórt adatokból kell őket összerakni**. Pontosan ez az a munka, amiben az AI verhetetlen, ha hozzáfér az adatokhoz.

## Mi az MCP, röviden?

Az MCP (Model Context Protocol) egy nyílt szabvány, amely leírja, hogyan kapcsolódhat egy AI-asszisztens a cég rendszereihez. A legkönnyebb egy hasonlattal megérteni: **az MCP olyan az AI-nak, mint az USB-C a laptopnak.** Egyetlen csatlakozó, amibe bármi bedugható.

Minden rendszer kap egy kis „fordítót”, amely pontosan meghatározza, mit tehet meg benne az AI: mit láthat, mit készíthet elő, és mit nem érinthet. Ezután a kérdés egyszerűen magyarul hangzik el: *„Kik tartoznak nekünk 30 napon túl, és közülük kinél nő a tartozás?”* Az AI a számlázóból és a bankból maga szedi össze a választ.

Ahol egy feladat mindig ugyanúgy és ugyanakkor fut (például minden reggel), ott az AI mellé ütemezett automatizmus kerül, és a munka kérdezés nélkül is elkészül.

**Platformfüggetlen, két értelemben is.** Egyrészt az MCP-t 2025 vége óta egy független alapítvány gondozza a Linux Foundation alatt, és ma a Claude, a ChatGPT, a Microsoft Copilot és a Google Gemini is támogatja. Egy egyszer elkészített kapcsolat tehát nem köti egyetlen AI-szolgáltatóhoz sem. Másrészt a vállalatirányítási rendszer, a számlázó vagy a webshop gyártója sem számít: ha van hozzá programozható hozzáférés (a legtöbb mai rendszernek van), akkor bekapcsolható.

## Pénzügy: négy folyamat, ahol elmegy a hónap

### 1. Bejövő számlák feldolgozása

**Ma így megy:** a szállítói számlák e-mailben, PDF-ben, papíron érkeznek. Valaki letölti, kinyomtatja, összeveti a megrendeléssel, rögzíti, továbbküldi jóváhagyásra, majd a könyvelőnek. Ha egy elveszik, csak a felszólításnál derül ki.

**Így lehetne:** Magyarországon a vállalkozások közötti számlák adatai a NAV Online Számla rendszerében is megvannak, és onnan programozottan lekérdezhetők. Az AI minden reggel lekéri az új bejövő számlákat, párosítja őket a megrendeléssel és a beérkezett áruval, jelzi az eltéréseket (más ár, más mennyiség, duplikált számla), a rendben lévőket pedig jóváhagyásra előkészíti. Emberi figyelmet csak a kivételek kapnak.

### 2. Kintlévőségek kezelése

**Ma így megy:** a lejárt számlák listáját valaki havonta egyszer átnézi, ha jut rá idő. Az emlékeztetők vagy el sem mennek, vagy mindenki ugyanazt a sablonlevelet kapja, a tíz éve pontos törzsvevő is és a krónikusan késő is.

**Így lehetne:** az Intrum 2026-os európai felmérése szerint a késedelmes fizetés a cégek bevételének átlagosan 12%-át érinti, és a vállalkozások 57%-a emiatt nem érte el a növekedési célját. Ezen a területen a leggyorsabb a megtérülés. Az AI napra készen követi a lejáratokat, a vevő fizetési múltjához igazított hangnemben fogalmazza meg az emlékeztetőt (a jó partnernek udvariasan, az ismétlődően későnek határozottan), és jelzi, ha valakinél a tartozás tartósan nő. A levelek kiküldéséről ember dönt.

### 3. Banki egyeztetés

**Ma így megy:** a bankszámlakivonat tételeit valaki egyenként párosítja a kiállított számlákkal. A részfizetés, a több számlát egyben fizető utalás és az elírt közlemény órákat visz el, és a hónap végén mindig marad néhány „ismeretlen” tétel.

**Így lehetne:** az AI a bank elektronikus kivonatából (vagy, ahol a bank ezt kínálja, közvetlen adatkapcsolatból) automatikusan párosítja a jóváírásokat a nyitott számlákkal: összeg, partner, közlemény és korábbi fizetési minták alapján. A biztos párosításokat előkészíti, a bizonytalanokat indoklással együtt emberhez adja.

### 4. Cash-flow előrejelzés

**Ma így megy:** a likviditási kép egy Excel-tábla, amit hónap végén valaki kézzel frissít, és ami a frissítés pillanatában már el is avult.

**Így lehetne:** a nyitott vevői és szállítói számlákból, a fix költségekből és abból, hogy **az egyes vevők valójában hány nap alatt fizetnek** (nem a számlán szereplő határidő szerint), folyamatosan frissülő 30, 60 és 90 napos előrejelzés készül. Ha a következő hetekben szűk keresztmetszet várható, azt a rendszer időben jelzi, és nem a bérfizetés napján derül ki.

## Üzlet és stratégia: négy terület, ahol a döntések születnek

### 5. Vezetői helyzetkép

**Ma így megy:** a heti vezetői riportot valaki fél napig rakja össze négy-öt rendszerből. Mire elkészül, múlt heti.

**Így lehetne:** értékesítés, árrés, készlet, kintlévőség és nyitott ajánlatok egy oldalon, minden hétfő reggel automatikusan vagy bármikor egyetlen kérdésre. És mivel az AI látja az összefüggéseket, olyat is meg tud válaszolni, amit egy fix riport nem: *„Miért esett az árrés a múlt hónapban?”*

### 6. Partnerellenőrzés és hitelkeret

**Ma így megy:** egy új vevőről vagy egy szokatlanul nagy rendelésről ritkán néz utána bárki a kiszállítás előtt. A probléma az első ki nem fizetett számlánál derül ki.

**Így lehetne:** új partner felvételénél vagy egy bizonyos összeg feletti rendelésnél automatikus ellenőrzés fut: nyilvános cégadatok, a NAV köztartozásmentes adózói adatbázisa és a partner eddigi fizetési múltja nálunk. Ebből hitelkeret-javaslat készül, és a kockázatos rendelés jelzést kap, **még a kiszállítás előtt.**

### 7. Árazás és árrés

**Ma így megy:** a beszállítói árlisták változnak, de az eladási árak nem mindig követik őket. Egy-egy termék hónapokig fut leolvadt vagy akár negatív árréssel, mire valaki észreveszi. A kereskedelemben ez az egyik legnagyobb rejtett veszteségforrás.

**Így lehetne:** az AI figyeli a beszerzési árak változását, és tételesen jelzi, hol csökkent az árrés a kívánt szint alá. Árazási javaslatot is tesz, figyelembe véve a forgási sebességet és a vevői kedvezményeket. Az árat ember módosítja, de már tudja, hol kell.

### 8. Készlet és ajánlatkövetés

**Ma így megy:** az utánrendelés megérzés és megszokás alapján történik, így egyes termékekből hiány van, másokban évek óta áll a pénz. Közben a kiküldött ajánlatok egy része válasz nélkül marad, mert senki nem kérdez rá.

**Így lehetne:** utánrendelési javaslat a valós fogyás és a beszállítói átfutási idő alapján, a lassan mozgó és álló készlet külön jelzéssel. Mellette a nyitott ajánlatok figyelése: ki nem válaszolt, kinek mikor érdemes ránézni, és a rákérdező levél is elkészül tervezetként.

## Ami mind a nyolcban közös

- **Nem kell új rendszer.** Az automatizálás a meglévő számlázó, bank, készletkezelő és levelezés fölé épül.
- **Nem kell új felületet megtanulni.** A kérdés magyarul, természetes nyelven hangzik el, akár a már használt AI-asszisztensben.
- **Az ember dönt, a gép előkészít.** Az AI összegyűjt, párosít, jelez és javasol. Kifizetés, árváltoztatás és ügyfélnek szóló levél csak jóváhagyással megy ki.

## Mire kell figyelni?

Pénzügyi adatokról van szó, ezért néhány szabály nem alku tárgya:

1. **Olvasással kezdünk.** Az első változat csak lekérdez és javasol, semmit nem módosít.
2. **Minden módosítás előtt jóváhagyás kell.** Az AI előbb megmutatja, pontosan mit tenne, és csak kifejezett „igen” után hajtja végre.
3. **Legkisebb jogosultság.** Az AI csak azt éri el, amire a feladathoz szükség van. Átutalást indítani például eleve nem tud.
4. **Minden naplózva van.** Visszakereshető, ki mit kérdezett, és mi történt.

Egy őszinte megjegyzés: a feldolgozáshoz a lekérdezett adatok az AI-szolgáltatóhoz kerülnek. Ezért üzleti előfizetést érdemes használni, előre átnézni az adatkezelési feltételeit, és végiggondolni, milyen adat kerülhet egyáltalán az AI elé. Személyes adatoknál ez GDPR-kérdés is.

## Mi az, amit ne várjon tőle?

- **Nem helyettesíti a könyvelőt vagy a pénzügyest.** Leveszi róluk a gépies munkát, hogy arra jusson idejük, amihez szakértelem kell.
- **Nem varázspálca minden rendszerhez.** Ha egy régi programból semmilyen módon nem nyerhető ki adat, azt először meg kell oldani, és ez nem mindig éri meg.
- **Nem hibátlan.** Ezért van minden folyamatban emberi jóváhagyás, és ezért a kivételek mindig emberhez kerülnek.

## Hol érdemes elkezdeni?

Nem a nyolcból mindet egyszerre. A bevált sorrend:

1. **Egy folyamat kiválasztása,** ahol a legtöbb idő vagy pénz megy el. Kereskedelmi cégnél ez jellemzően a kintlévőség vagy a bejövő számlák.
2. **Pilot csak olvasási joggal,** néhány hétig, valós adatokon. Ennyi idő alatt kiderül, mennyi időt spórol meg a gyakorlatban.
3. **Bővítés:** jóváhagyásos műveletek, további rendszerek, ütemezett automatizmusok.


<div class="zaras">

**Kíváncsi rá, melyik folyamatuk automatizálható a legkönnyebben?**

Ha a témával kapcsolatban kérdése, kérése vagy konkrét igénye van, írjon nekünk. Megmondjuk, hol érdemes kezdeni, és hol nem éri meg.

<a class="btn" href="mailto:info@triox.hu?subject=MCP%20%C3%A9s%20automatiz%C3%A1l%C3%A1s">Írjon nekünk</a>

*Triox Informatika Kft.*

</div>
