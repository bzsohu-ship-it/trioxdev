---
cim: Windows 11 26H2 — mi változik, és mi az, amit egy cégnek nem szabad kihagynia
leiras: Ősszel érkezik az idei nagy Windows-frissítés. Kevés a látványos újdonság, annál több a csendes változás, ami a céges gépeken számít — és egy határidő, ami sok Pro gépet érint.
datum: 2026-09-10
---

<div class="osszefoglalo">

Röviden

- A 26H2 **nem új Windows**. Ugyanarra az alapra épül, mint a 25H2, és egy kis „engedélyező csomagként” érkezik: egyetlen újraindítás, nem egy órás telepítés.
- A legfontosabb hozam nem egy funkció, hanem az **idő**: a frissítés újraindítja a támogatási órát — Home és Pro kiadáson 24, Enterprise-on 36 hónapra.
- Ami látszik: a tálca végre áthelyezhető, a Start menü és a keresés kevésbé tolakodó, a jobbklikk-menü gyorsabb.
- Ami nem látszik, de céges gépen számít: **végleg kikerül a WMIC**, a beállítások felhőmentése céges gépeken alapból bekapcsol (az EU-ban nem), és ott a rendszergazdai védelem, amit érdemes bekapcsolni.
- A valódi határidő nem a 26H2, hanem a **24H2 támogatásának vége**: 2026. október 13. a Home és Pro kiadásokon.

</div>

A Microsoft augusztus végén kiadta a Windows 11 idei őszi verzióját, a 26H2-t,
az utolsó tesztkörre. Az éles kiadás a korábbi évek mintája alapján
szeptember végén vagy októberben indul, fokozatosan. Ha átfutja a hírek
címsorait, könnyen arra juthat, hogy „nincs benne semmi”. Ez félig igaz — és
épp a másik fele az, amit egy cégvezetőnek érdemes tudnia.

## Mi ez a frissítés valójában

A Windows 11 évente egy nagy verziót kap, a második félévben. A név is ezt
jelenti: 26H2, vagyis a 2026-os év második fele. A 26H2 azonban nem egy új
rendszer telepítése. A Microsoft ugyanazt az alapot használja, mint a tavalyi
25H2-nél, és a friss funkciók már hónapok óta ott vannak a gépeken, csak
kikapcsolva. A frissítés lényegében egy kapcsoló: bekapcsolja őket.

A gyakorlatban ez azt jelenti, hogy egy naprakész 25H2-es gépen a 26H2
telepítése annyi, mint egy átlagos havi frissítés. Egy újraindítás, és kész.
Nincs több órás felmásolás, nincs újratelepített illesztőprogram, a programok
és a beállítások a helyükön maradnak.

> **A 26H2 nem azért fontos, amit hoz. Azért fontos, amit meghosszabbít.**

## A legfontosabb szám: mennyi ideig kap még frissítést a gép

Minden Windows-verziónak lejárati ideje van. Home és Pro kiadáson a
megjelenéstől számított 24 hónap, Enterprise és Education kiadáson 36 hónap.
Amikor ez lejár, a gép továbbra is elindul és működik, de **nem kap többé
biztonsági javítást**. Ez az a pillanat, amikor egy egyébként rendben lévő
gép csendben kockázattá válik.

A 26H2 telepítése ezt az órát indítja újra. Ezért mondjuk, hogy a frissítés
hozama nem egy funkció, hanem az idő.

És itt jön a valódi határidő. A két éve megjelent 24H2 verzió támogatása a
Home és Pro kiadásokon **2026. október 13-án lejár**. Enterprise kiadáson még
egy évig fut. Ez egy vegyes gépparkban alattomos helyzet: két gép ugyanazt a
verziószámot mutatja, de az egyik jövő hónaptól nem kap javítást, a másik
igen. Ha a cégnél nem tudják pontosan, melyik gépen milyen kiadás fut, akkor
októbertől lesznek olyan gépek, amikről senki nem tudja, hogy védtelenek.

## Ami látszik: a kényelmi újdonságok

Ezek azok, amikről a legtöbb cikk szól. Hasznosak, de nem ezek miatt kell
frissíteni.

**A tálca áthelyezhető.** A Windows 11 megjelenése óta a tálca csak a képernyő
alján lehetett. A 26H2-vel visszatér a lehetőség, hogy felülre vagy oldalra
kerüljön, és van egy kisebb tálcaméret is a kis kijelzős laptopokhoz. Aki
Windows 10-ről váltott és négy éve hiányolja, annak ez a kedvenc pontja lesz.

**A Start menü szabályozhatóbb.** A menü egyes szakaszai ki-be kapcsolhatók,
így nem kell megtűrni az ajánlott tartalmakat, ha valaki csak a programjait
akarja látni.

**A keresés a gépen keres.** Beállítható, hogy a Start menü keresője csak a
helyi találatokat mutassa, webes és áruházi ajánlatok nélkül. Céges gépen ez
kifejezetten hasznos: kevesebb zaj, és kevesebb véletlen kattintás kifelé.

**Gyorsabb jobbklikk-menü.** A Fájlkezelő helyi menüje kevesebb tétellel,
gyorsabban nyílik. Apróság, de naponta százszor számít.

**Kevesebb Copilot a felületen.** A Microsoft visszavett a mesterséges
intelligencia tolakodó elhelyezéséből a rendszer felületén. Aki használja,
megtalálja. Aki nem, annak nem ugrik elé.

**Alkalmazásműveletek a tálcáról.** A rögzített ikonokról közvetlenül
indíthatók egyes műveletek, anélkül, hogy előbb az ablakot kellene megnyitni.

## Ami nem látszik, de céges gépen számít

Ez a rész az, amit a rendszergazdának — vagy annak, aki ezt a szerepet
betölti — érdemes végigolvasnia.

### A WMIC végleg kikerül

A WMIC egy parancssori eszköz, amivel scriptek és régi felügyeleti programok
kérdezték le a gép állapotát. Húsz évig ott volt minden Windowsban. A
Microsoft évek óta jelzi a kivezetését, eddig azonban vissza lehetett
kapcsolni, ha valami mégis rá épült. **A 26H2-vel ez a lehetőség megszűnik.**

Miért döntött így a Microsoft? Mert a zsarolóvírusok és a kártevők ugyanezt az
eszközt használták a gépek felderítésére és a védelem kikapcsolására. A
kivezetés tehát biztonsági nyereség. A gyakorlati oldala viszont az, hogy ha a
cégnél van egy régi leltározó script, egy monitorozó ügynök vagy egy házon
belül írt telepítő, ami a WMIC-re épül, az októbertől hiba nélkül, csendben
nem fog működni. Ezt a frissítés **előtt** érdemes felderíteni, nem utána.

### A beállítások felhőmentése céges gépeken alapból bekapcsol — de nem nálunk

A 26H2-vel a Microsoft a céges Entra-fiókkal bejelentkezett gépeken alapból
bekapcsolja a Windows-beállítások felhőbe mentését. Ez a funkció azt tudja,
hogy egy cserélt vagy újratelepített gépen a felhasználó visszakapja a saját
beállításait. A visszaállítás nem automatikus, ahhoz rendszergazdai beállítás
kell, és a funkció Intune-ból vagy csoportházirendből bármikor kikapcsolható.

Van azonban egy fontos részlet: a Microsoft közlése szerint az alapértelmezett
bekapcsolás **nem vonatkozik az EU digitális piacokról szóló rendelete alá
tartozó országokra** — így Magyarországra sem. Nálunk tehát ez a funkció
ugyanúgy szándékos döntést igényel, mint eddig. Ha kell, be kell kapcsolni.
Ha nem kell, nincs teendő. Csak azt ne higgye senki, hogy „a Microsoft majd
elintézi”.

### Rendszergazdai védelem — ott van, de be kell kapcsolni

A Windows 11 újabb verzióiban elérhető egy funkció, amit a Microsoft
rendszergazdai védelemnek (Administrator Protection) hív. A lényege: amikor
egy művelethez rendszergazdai jog kell, nem elég egy „Igen” gombra kattintani,
hanem Windows Hello-val — ujjlenyomattal, arccal vagy PIN-nel — kell
jóváhagyni, és a rendszer csak arra az egy műveletre ad emelt jogot. Nincs
állandóan nyitva hagyott rendszergazdai ablak, amit egy kártevő
kihasználhatna.

Ez a funkció **alapból nincs bekapcsolva**, és a 26H2 sem kapcsolja be. Céges
gépeken viszont érdemes elgondolkodni rajta: az elmúlt évek támadásainak jó
része pontosan azon múlt, hogy a felhasználó megszokásból rányomott az
„Igen”-re. Kipróbálni előbb egy kisebb csoporton érdemes, mert néhány régi
program nem szereti.

## Mit érdemes tenni az elkövetkező hetekben

<details>
<summary>Ellenőrzőlista a 26H2 előtt</summary>

- **Verzióleltár.** Gépenként tudni kell, hogy 23H2, 24H2 vagy 25H2 fut-e rajta, és hogy Home, Pro vagy Enterprise kiadás. A 24H2 Home és Pro gépek október 13-án kiesnek a támogatásból.
- **A 25H2 legyen mindenütt fent.** A 26H2 ugyanarra az alapra épül, ezért aki már 25H2-n van, annál a váltás egy újraindítás. Aki még 24H2-n vagy régebbin, annál ez egy nagyobb frissítés, amit érdemes időben ütemezni.
- **WMIC-keresés.** A saját scriptekben, ütemezett feladatokban, leltározó és monitorozó eszközökben érdemes rákeresni a `wmic` hívásokra, és átírni őket PowerShellre.
- **Felhőmentés döntés.** Céges Entra-fiókos gépeken dönteni kell arról, hogy kell-e a beállítások felhőmentése. Magyarországon ez nem kapcsol be magától.
- **Rendszergazdai védelem próbaüzem.** Egy kis csoporton bekapcsolva kiderül, mely programok akadnak fenn rajta.
- **Szakaszos bevezetés.** Ha a cég Windows Update for Businesst, Intune-t vagy WSUS-t használ, a 26H2-t szakaszosan érdemes engedni, előbb egy tesztcsoportnak.

</details>

## A kérdés, amit érdemes feltenni

Ha bizonytalan abban, hogy ez érinti-e Önöket, egyetlen kérdés eldönti:

**Meg tudják mondani ma, hány gépen fut olyan Windows, ami október 13. után
már nem kap biztonsági frissítést?**

Ha a válasz egy pontos szám, akkor rendben vannak. Ha a válasz az, hogy „meg
kellene nézni”, akkor ez a megnézés a legjobban megtérülő félóra ebben a
hónapban.

<div class="zaras">

**Nézzük meg együtt a gépparkot.** Egy felmérés végén kap egy listát arról,
melyik gép milyen verzión fut, mi esik ki októberben, és mi az, ami a 26H2
előtt átírást igényel. [Kérjen felmérést](/kapcsolat/), vagy olvasson arról,
hogyan tartjuk naprakészen ügyfeleink gépeit:
[Menedzselt IT üzemeltetés](/szolgaltatasok/menedzselt-it-uzemeltetes/).

</div>
