# Helyi és hibrid IT-üzemeltetés — megerősítendő tételek

**Belső jegyzet. Nem publikus** — ez a mappa nincs a buildben, csak a `src/pages` és a `public` kerül ki.

A [helyi-uzemeltetes.md](../src/content/szolgaltatasok/helyi-uzemeltetes.md) oldalra két körben kikerült a forrásdokumentum `⚠️` tételeinek nagy része. Az alábbi három **szándékosan maradt kint** — ezek addig ne kerüljenek be, amíg nincs mögöttük valós kompetencia és vállalás.

## Kimaradt platformok

| Tétel | Hova kerülne | Megjegyzés |
|---|---|---|
| **IBM Db2** | Adatbázis szerverek | |
| **WildFly / JBoss EAP** | Alkalmazás- és webszerverek | A Tomcat már kint van, ez a nehezebb Java EE alkalmazásszerver |
| **SAP** | Üzleti alkalmazások | A forrásdokumentum szerint is csak referenciával vállalható |

## Lezárt kérdések

- **Visszaállítási teszt elhatárolása** — eldöntve: **nem** része az üzemeltetési alapdíjnak. Az oldal mindhárom említésnél helyesen írja, hogy a szerződésben egyeztetett igényeknek megfelelően, önálló szolgáltatásként történik. Nincs teendő.
- **RTO / RPO** — kikerült az 5. kártyára, szám nélkül: „rendszerenként egyeztetve — nem egy szám az egész cégre". Ha később konkrét értéket is vállalnak, az csak akkor írható ki, ha szerződésben mérhetően tartható.

## Ha változik a kompetencia

Az itt felsorolt három tétel beszúrási helye a fenti táblázatban szerepel. A `helyi-uzemeltetes.md` katalógusa a forrásdokumentum sorrendjét követi, tehát érdemes oda visszailleszteni őket.
