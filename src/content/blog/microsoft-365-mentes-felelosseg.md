---
cim: Amit a Microsoft nem ment el Ön helyett
leiras: A levelezés és a fájlok a felhőben vannak, tehát biztonságban — ez a leggyakoribb tévhit a Microsoft 365 körül. Közérthetően arról, meddig tart a szolgáltató felelőssége, és hol kezdődik az Öné.
datum: 2026-07-14
---

<div class="osszefoglalo">

Röviden

- A Microsoft azt vállalja, hogy a **szolgáltatás működik**. Azt nem, hogy az Ön adata megmarad.
- A lomtár és a beépített megőrzés nem mentés — kényelmi funkció, néhány hetes vagy hónapos ablakkal.
- A replikáció sem mentés. Ami törölve van, az törölve replikálódik.
- Négy hétköznapi helyzet van, amikor ez kiderül — és mind a négy megelőzhető egy különálló mentéssel.

</div>

„Nálunk minden a felhőben van, tehát biztonságban van.” Ezt a mondatot
gyakran halljuk, és van benne igazság: a Microsoft 365 mögött olyan
infrastruktúra áll, amit egyetlen magyar kkv sem tudna megfizetni. A
szerverterem, a redundancia, a szüneteltetés nélküli üzem — ezek valóban
megoldott kérdések.

Csak épp nem ezek szoktak elromlani.

## Mit vállal a Microsoft, és mit nem

A felhőszolgáltatások világában ezt **megosztott felelősségnek** hívják. A
lényege egyszerű: a szolgáltató a platformért felel, az ügyfél az adatért. Ez
nem apró betűs kiskapu, hanem a modell alapja — a Microsoft nyíltan kommunikálja.

<figure class="abra">
<svg viewBox="0 0 880 254" role="img" aria-labelledby="abra-felelosseg">
<title id="abra-felelosseg">A megosztott felelősség két oldala. A Microsoft az adatközpontért, a szolgáltatás működéséért, a platformszintű biztonságért és a telephelyei közötti replikációért felel. Az ügyfél felel magáért az adatért, azért, hogy ki fér hozzá, meddig őrzik meg, és hogy visszaállítható-e.</title>
<text class="abra__mono" x="210" y="14" text-anchor="middle">AMIT A MICROSOFT VÁLLAL</text>
<rect class="abra__doboz" x="10" y="26" width="400" height="180" rx="4" />
<rect class="abra__sav" x="26" y="42" width="368" height="30" rx="2" />
<text class="abra__kicsi" x="210" y="62" text-anchor="middle">Adatközpont, hardver, áram</text>
<rect class="abra__sav" x="26" y="80" width="368" height="30" rx="2" />
<text class="abra__kicsi" x="210" y="100" text-anchor="middle">A szolgáltatás működése</text>
<rect class="abra__sav" x="26" y="118" width="368" height="30" rx="2" />
<text class="abra__kicsi" x="210" y="138" text-anchor="middle">Platformszintű biztonság</text>
<rect class="abra__sav" x="26" y="156" width="368" height="30" rx="2" />
<text class="abra__kicsi" x="210" y="176" text-anchor="middle">Replikáció a telephelyeik között</text>
<path class="abra__vonal" stroke-dasharray="5 5" d="M440 20 V212" />
<text class="abra__mono" x="670" y="14" text-anchor="middle">AMI AZ ÖN FELELŐSSÉGE</text>
<rect class="abra__kiemelt" x="470" y="26" width="400" height="180" rx="4" />
<rect class="abra__sav" x="486" y="42" width="368" height="30" rx="2" />
<text class="abra__kicsi" x="670" y="62" text-anchor="middle">Maga az adat</text>
<rect class="abra__sav" x="486" y="80" width="368" height="30" rx="2" />
<text class="abra__kicsi" x="670" y="100" text-anchor="middle">Ki fér hozzá és mihez</text>
<rect class="abra__sav" x="486" y="118" width="368" height="30" rx="2" />
<text class="abra__kicsi" x="670" y="138" text-anchor="middle">Meddig kell megőrizni</text>
<rect class="abra__sav" x="486" y="156" width="368" height="30" rx="2" />
<text class="abra__kicsi" x="670" y="176" text-anchor="middle">Vissza lehet-e állítani</text>
<text class="abra__mono" x="440" y="238" text-anchor="middle">A FELELŐSSÉGI HATÁR — NEM APRÓ BETŰ, HANEM A MODELL ALAPJA</text>
</svg>
</figure>

Vagyis: ha a Microsoft adatközpontjában tűz üt ki, az az ő gondjuk, és meg is
oldják. Ha viszont egy kolléga véletlenül kitöröl egy mappát, az az Ön gondja.

## A lomtár nem mentés

A Microsoft 365-ben van lomtár, van törölt elemek mappa, és vannak megőrzési
beállítások. Ezek hasznosak, és a hétköznapi hibák nagy részét megoldják — de
két okból nem helyettesítik a mentést.

Az egyik, hogy **véges ideig őriznek**. A pontos ablak szolgáltatásonként és
beállításonként eltér, de jellemzően néhány hétben, legfeljebb néhány hónapban
mérhető. Ami azon túl van, az nincs.

A másik, hogy **a replikáció nem mentés**. A Microsoft valóban több helyre
másolja az adatait — de ha egy fájl törlődik vagy titkosítva lesz, akkor
törölten, illetve titkosítva másolódik mindenhová. A replikáció a hardverhiba
ellen véd, nem a hiba ellen.

> **A replikáció azt védi ki, hogy elromoljon a lemez. Nem azt, hogy valaki kitöröljön valamit.**

| Amitől a beépített megőrzés megvéd | Amitől nem |
|---|---|
| Tegnap véletlenül törölt levél | Fél éve törölt mappa, amiről most derül ki, hogy kellett volna |
| Elromlott lemez a szolgáltatónál | Zsarolóvírus, ami a szinkronizált fájlokat is titkosítja |
| Rövid szolgáltatáskimaradás | Feltört fiók, amivel a támadó szándékosan töröl |
| Egy visszavont változtatás | Távozott kolléga postafiókja a licenc lemondása után |

## Négy helyzet, amikor ez kiderül

Nem elméleti kockázatokról van szó. Ez az a négy eset, amivel a gyakorlatban
találkozni.

**A véletlen törlés, amit későn vesznek észre.** Valaki rendet rak egy
megosztott mappában. Hónapokkal később derül ki, hogy egy régi szerződés is
eltűnt — addigra a lomtár rég kiürült.

**A távozó kolléga.** A munkatárs elmegy, a licencet lemondják, hogy ne fizessék
tovább. A postafiók ezzel eltűnik — a benne lévő ügyféllevelezéssel együtt.

**A feltört fiók.** Ha valaki illetéktelenül bejut, nemcsak olvas: törölhet is,
és a nyomokat is eltüntetheti. Erről a kockázatról és a védekezésről
[korábban külön írtunk](/blog/passkey-jelszo-nelkuli-belepes/).

**A visszamenőleges kérés.** Egy jogvita, egy adóellenőrzés vagy egy audit
kétéves levelezést kér. Ha a megőrzési szabály ennél rövidebb, akkor nincs mit
kiadni — és ez nem mentség.

## Mit jelent ez a gyakorlatban

Nem azt, hogy a Microsoft 365 rossz választás. Éppen ellenkezőleg: a legtöbb
cégnek jobb, mint egy saját levelezőszerver. Csak azt jelenti, hogy **a mentés
külön feladat marad**, ugyanúgy, ahogy egy saját szerver esetén is az volt.

A jó hír, hogy ez nem nagy projekt. Egy Microsoft 365-höz készült mentési
megoldás a postafiókokat, a OneDrive- és SharePoint-tartalmat és a Teams
üzeneteket egy önálló, a Microsofttól független tárhelyre menti, ahonnan
szelektíven is vissza lehet állítani.

<ol class="lepesek">
<li><strong>Nézzék meg, mi hol van.</strong> Levelezés, közös dokumentumtár, személyes felhőtárhelyek, Teams-beszélgetések. A legtöbb cégnél a fontos anyagok jó része a személyes OneDrive-okban lakik, ami senkinek nem tűnik fel.</li>
<li><strong>Mondjanak meg egy megőrzési időt.</strong> Meddig kell visszamenőleg elérni egy levelet vagy egy dokumentumot? Ez üzleti és jogi kérdés, nem informatikai — és ebből jön ki, mit kell beállítani.</li>
<li><strong>Legyen a mentés a Microsofton kívül.</strong> Egy önálló, független másolat pontosan azért ér valamit, mert nem ugyanaz a fiók, nem ugyanaz a jogosultság és nem ugyanaz a szolgáltató kezeli.</li>
<li><strong>A távozó kollégák fiókját ne törléssel zárják le.</strong> Legyen írott lépéssor arra, mi történik felmondáskor: mi kerül archívumba, mi kerül át másik kollégához, és mikor jöhet a licenc lemondása.</li>
<li><strong>Próbálják ki a visszaállítást.</strong> Kérjenek vissza egy konkrét, fél éve törölt fájlt. A válasz megérkezéséig nem tudni, hogy a mentés valóban működik-e.</li>
</ol>

<details>
<summary>Technikai részletek</summary>

- **Mentendő adatkörök:** Exchange Online postafiókok (naptár és névjegyek is), OneDrive for Business, SharePoint Online dokumentumtárak, Teams csatornák és fájlok
- **Független tárhely:** a másolat ne a mentett bérlőben (tenant) és ne ugyanazzal a jogosultsággal legyen elérhető
- **Megőrzési politika** több generációval, az üzletileg meghatározott időtávra
- **Szelektív visszaállítás:** egyetlen levél, egyetlen fájl vagy egy teljes postafiók szintjén — a teljes visszatöltés a gyakorlatban használhatatlan
- **Módosíthatatlan (immutable) másolat**, hogy a mentést se lehessen törölni vagy titkosítani
- **A jogosultságok mentése is számít:** egy visszaállított dokumentumtár a megosztási beállításai nélkül fél megoldás
- **Riportált mentési állapot:** napi ellenőrzés arról, hogy a feladat nemcsak elindult, hanem le is futott

</details>

## A kérdés, amit érdemes feltenni

Ha bizonytalan abban, hogy ez érinti-e Önöket, egyetlen kérdés eldönti:

**Ha holnap kiderülne, hogy egy tavalyi ügyfélszerződés levelezése törölve lett,
vissza tudnák állítani — és mennyi idő alatt?**

Ha a válasz bizonytalan, akkor a mentés kérdése nyitott. Ez nem baj: a legtöbb
cégnél így van, és jellemzően azért, mert soha senki nem tette fel ezt a kérdést.

<div class="zaras">

**Nézzük meg együtt, mi van ma mentve — és mi nincs.** A felmérés végén kap egy
dokumentált állapotképet és egy kockázati listát, akkor is, ha nem velünk
dolgozik tovább. [Kérjen felmérést](/kapcsolat/), vagy olvasson arról, hogyan
igazoljuk a visszaállíthatóságot:
[Audit Restore Validation és visszaállítási tesztek](/szolgaltatasok/audit-restore-validation/).

</div>
