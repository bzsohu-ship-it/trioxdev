---
cim: Mennyi ideig bírja a cége a rendszerei nélkül?
leiras: Nem az a kérdés, lesz-e leállás, hanem hogy mennyibe kerül, amikor lesz. Két szám, amit érdemes előre kiszámolni — és amiről a legtöbb cégnél senki nem tud válaszolni.
datum: 2026-08-13
---

<div class="osszefoglalo">

Röviden

- A leállás nem „ha”, hanem „mikor” kérdése — hardverhiba, zsarolóvírus, áramszünet vagy egy elrontott frissítés miatt.
- Két szám dönti el, mennyibe kerül: **mennyi ideig áll a cég**, és **mennyi munka veszik el**.
- A legtöbb helyen ezekre nincs válasz. Pedig nem technikai kérdések: üzleti döntések, amiket rendszerenként külön kell meghozni.
- A mentés megléte nem bizonyíték. Csak egy elvégzett visszaállítás az.

</div>

Kérdezze meg magától: ha holnap reggel bemenne az irodába, és a rendszerek nem
indulnának el, **hány óra múlva állna meg a cég?** Nem az informatika — a cég.
A számlázás, a szállítás, a gyártás, az ügyfélkiszolgálás.

A legtöbb cégvezető erre nem tud pontos választ adni. Nem hanyagságból: soha
senki nem tette fel neki így a kérdést. Pedig ez a válasz mondja meg, mennyit
érdemes költeni a megelőzésre — és mennyit nem.

## Két szám, amit érdemes tudni

A szakma két rövidítést használ rá, de a jelentésük hétköznapi.

Az egyik: **mennyi ideig állhat a rendszer**, amíg az még elviselhető. Ez az
újraindulásig eltelt idő. A másik: **mennyi munka veszhet el** — vagyis
meddig megyünk vissza az időben, amikor helyreállunk. Ha az éjszakai mentésből
állunk vissza, akkor az aznapi munka elveszett.

<figure class="abra">
<svg viewBox="0 0 880 236" role="img" aria-labelledby="abra-idovonal">
<title id="abra-idovonal">Az idővonalon három pont van: az utolsó mentés, maga az esemény, és az újraindulás. Az utolsó mentés és az esemény közötti szakasz az elveszett munka, az esemény és az újraindulás közötti szakasz pedig az az idő, ameddig a cég áll.</title>
<path class="abra__vonal" d="M60 118 H820" />
<path class="abra__nyil" d="M834 118 L818 111 L818 125 Z" />
<path class="abra__vonal" d="M150 96 V140" />
<path class="abra__vonal" d="M450 88 V148" />
<path class="abra__vonal" d="M760 96 V140" />
<rect class="abra__kiemelt" x="370" y="42" width="160" height="34" rx="4" />
<text class="abra__cimke" x="450" y="65" text-anchor="middle">Az esemény</text>
<text class="abra__cimke" x="150" y="34" text-anchor="middle">Utolsó mentés</text>
<text class="abra__kicsi" x="150" y="54" text-anchor="middle">eddig van meg minden</text>
<text class="abra__cimke" x="760" y="34" text-anchor="middle">Újraindulás</text>
<text class="abra__kicsi" x="760" y="54" text-anchor="middle">megy tovább a munka</text>
<path class="abra__vonal" stroke-dasharray="4 4" d="M150 176 H450" />
<path class="abra__nyil" d="M150 176 L164 170 L164 182 Z" />
<path class="abra__nyil" d="M450 176 L436 170 L436 182 Z" />
<text class="abra__mono" x="300" y="170" text-anchor="middle">AMENNYI MUNKA ELVESZIK</text>
<text class="abra__kicsi" x="300" y="196" text-anchor="middle">ezt a mentés gyakorisága dönti el</text>
<path class="abra__vonal" stroke-dasharray="4 4" d="M450 176 H760" />
<path class="abra__nyil" d="M760 176 L746 170 L746 182 Z" />
<text class="abra__mono" x="605" y="170" text-anchor="middle">AMEDDIG ÁLL A CÉG</text>
<text class="abra__kicsi" x="605" y="196" text-anchor="middle">ezt a visszaállítás módja dönti el</text>
<text class="abra__mono" x="440" y="224" text-anchor="middle">A KETTŐ KÜLÖN TERVEZHETŐ — ÉS KÜLÖN IS KERÜL PÉNZBE</text>
</svg>
</figure>

A két szám külön tervezhető, és külön is kerül pénzbe. Az elveszett munkát a
mentés **gyakorisága** dönti el; a leállás hosszát az, **hogyan** áll vissza a
rendszer.

## Nem minden rendszer egyformán fontos

Itt szokott elcsúszni a beszélgetés. Ha egyetlen számot próbálunk mondani az
egész cégre, akkor vagy irreálisan drága lesz, vagy értelmetlenül gyenge.

A valóságban egy cégen belül óriási a szórás. A számlázó rendszer néhány órás
kiesése súlyos; a belső dokumentumtár egynapos kiesése kellemetlen, de nem áll
meg tőle a munka.

| Példa rendszer | Mennyit bír állni | Mennyi munka veszhet el |
|---|---|---|
| Gyártásvezérlés, üzemi kiszolgálás | Perceket–órát | Szinte semennyit |
| Számlázás, ügyviteli rendszer | Néhány órát | Legfeljebb néhány órányit |
| Levelezés | Néhány órát | Néhány órányit |
| Belső dokumentumtár, archívum | Napot | Egy napnyit |
| Tesztkörnyezet, fejlesztői gépek | Napokat | Akár többet is |

Ez a táblázat nem elírás helyett áll: **példa arra, hogyan néz ki a gondolkodás.**
A konkrét sorokat minden cégnél saját magának kell kitöltenie — ez fél óra
munka egy megbeszélésen, és utána sokkal könnyebb bármilyen informatikai
költségről dönteni.

> **Ha egyetlen szám van az egész cégre, az biztosan rossz. Vagy túl drága, vagy nem véd meg.**

## A mentés és a visszaállítás nem ugyanaz

A leggyakoribb tévedés, hogy „van mentés, tehát rendben vagyunk”. A mentés
azonban csak egy fájl valahol. Az, hogy abból **működő rendszer** lesz, külön
kérdés — és ott derül ki, ha valami nem stimmel.

Ezért éri meg különbséget tenni két dolog között. Egy **mentésből** vissza
lehet állítani, de kell hozzá gép, amire visszatöltjük, és kell hozzá idő. Egy
**replika** viszont egy már kész, készenlétben álló másolat: azt nem
visszatölteni kell, hanem elindítani.

A kettő ára és haszna is más. Nem is kell minden rendszernek replika — csak
azoknak, amelyek a fenti táblázat felső soraiba esnek.

## Amiről a legtöbb helyen elfelejtkeznek

Három visszatérő hiányosság van, és egyik sem hardverkérdés.

Az első, hogy **a mentés ugyanott van, ahol az éles rendszer** — ugyanabban a
helyiségben, ugyanazon a hálózaton. Tűz, beázás vagy egy titkosító
zsarolóvírus esetén mindkettő odavész.

A második, hogy **nincs leírva, mit kell csinálni**. Amíg a folyamat egyetlen
ember fejében van, addig a terv valójában az, hogy ő éppen elérhető legyen.

A harmadik, hogy **soha senki nem próbálta ki**. Ez a leggyakoribb, és ez derül
ki a legrosszabbkor.

> **A mentés megléte nem bizonyíték. Egyetlen dolog bizonyít: egy elvégzett, dokumentált visszaállítás.**

## Hogyan álljon neki

<ol class="lepesek">
<li><strong>Írják össze, mi kell a működéshez.</strong> Nem szerverek listája, hanem folyamatoké: számlázás, szállítás, gyártás, ügyfélkiszolgálás. Utána nézzék meg, melyik rendszeren futnak.</li>
<li><strong>Mondjanak számot mindegyikre.</strong> Mennyit bír állni, és mennyi munka veszhet el. Ez üzleti döntés, nem informatikai — az ügyvezető és a szakterület mondja meg, az informatika pedig megmondja, mibe kerül.</li>
<li><strong>Nézzék meg, hol a legnagyobb a szakadék.</strong> Jellemzően egy-két rendszernél derül ki, hogy a mai megoldás nagyságrendekkel gyengébb az elvárásnál. Ott érdemes költeni, máshol nem.</li>
<li><strong>Vigyék ki a mentés egy példányát a telephelyről.</strong> Ez az egyetlen lépés, ami önmagában a legtöbb katasztrófa-forgatókönyvet lefedi.</li>
<li><strong>Próbálják ki, és írják le.</strong> Egyetlen visszaállítási teszt többet ér minden tervnél. A végén legyen egy dokumentum, amit egy auditor vagy egy biztosító is elfogad — és amiből egy másik kolléga is végig tud menni a lépéseken.</li>
</ol>

<details>
<summary>Technikai részletek</summary>

- **Rendszerenkénti RTO/RPO meghatározás** — nem egy szám az egész cégre, hanem szolgáltatásonként egyeztetett érték
- **3-2-1 elv:** 3 példány, 2 különböző médián, 1 telephelyen kívül
- **Alkalmazás-tudatos mentés:** adatbázis- és levelezőrendszer-konzisztens mentés, nem csak fájlszintű másolat
- **Off-site replika** a kritikus terhelésekhez, hogy a visszaállás indítás legyen, ne visszatöltés
- **Megőrzési politika** több generációval — a zsarolóvírus gyakran hetekkel a titkosítás előtt bejut
- **Módosíthatatlan (immutable) mentési példány**, hogy a mentést se lehessen titkosítani vagy törölni
- **Dokumentált helyreállítási eljárásrend**, névvel megjelölt felelősökkel és elérhetőségekkel
- **Rendszeres visszaállítási teszt** elkülönített környezetben, audit-kompatibilis jegyzőkönyvvel

</details>

## A számokat nem az informatika mondja meg

Ez a cikk technikainak tűnhet, pedig a lényege nem az. A két szám, amiről szó
volt, **üzleti döntés**: azt mondja meg, mennyi kiesést visel el a cég. Ezt az
ügyvezető és a szakterület tudja, nem a rendszergazda.

Az informatika dolga utána következik: megmondani, mibe kerül ezt tartani, és
felépíteni hozzá a megoldást. Ebben a sorrendben működik — fordítva nem.

<div class="zaras">

**Kezdjük ott, hogy megnézzük, ma hol tart.** A felmérés végén kap egy
dokumentált állapotképet és egy kockázati listát — akkor is, ha nem velünk
dolgozik tovább. [Kérjen felmérést](/kapcsolat/), vagy olvasson arról, hogyan
igazoljuk a visszaállíthatóságot:
[Audit Restore Validation és visszaállítási tesztek](/szolgaltatasok/audit-restore-validation/).

</div>
