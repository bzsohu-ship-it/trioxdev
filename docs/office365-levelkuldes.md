# Office 365 levélküldés — beállítás

A kapcsolati űrlap levelei a `functions/api/kapcsolat.ts` Cloudflare Pages
Functionből mennek ki, Microsoft Graph `sendMail` hívással, az Exchange Online
postafiókból. Ez a fájl a `docs/` alatt van, tehát nem kerül be a buildbe.

**Miért Graph és nem SMTP:** a Cloudflare Workers futtatókörnyezet nem tud nyers
TCP-kapcsolatot nyitni, így SMTP-t nem tud beszélni. A Microsoft ezen felül az
SMTP AUTH-ot (basic auth) kivezeti, új bérlőkben alapból tiltott.

## 1. Postafiók

Kell egy valódi, licencelt postafiók a küldéshez — a Graph `sendMail` nem tud
licenc nélküli fiókból küldeni.

A beállított értékek:

| Szerep | Cím | Hol állítjuk |
|---|---|---|
| feladó | `noreply@triox.hu` (`UserMailbox`) | `O365_FELADO` — ennek kell a 3.3 hatókörébe esnie |
| címzett | `support@triox.hu` | `O365_CIMZETT` — ide érkeznek a megkeresések, és ez a visszaigazoló `Reply-To` címe is |

A címzett szabadon átírható, jogosultsági hatása nincs. A feladó viszont nem: ha
megváltozik, a 3.3 `TrioxNoreplyHatokor` szűrőjét is át kell írni, különben a
küldés azonnal tiltásba fut.

## 2. Entra ID app-regisztráció

Microsoft Entra admin center → **Alkalmazásregisztrációk** → **Új regisztráció**.

1. Név: `triox.hu kapcsolati űrlap`. Támogatott fióktípus: *csak ebben a
   szervezeti címtárban*. Átirányítási URI nem kell.
2. **API-engedélyek** → *Engedély hozzáadása* → **Microsoft Graph** →
   **Alkalmazásengedélyek** → `Mail.Send`. Ezután **Rendszergazdai
   jóváhagyás megadása** — e nélkül a hívás 403-at ad.
3. **Tanúsítványok és titkos kulcsok** → *Új titkos ügyfélkulcs*. Az értéket
   csak egyszer mutatja meg, azonnal mentsd el. **Írd fel a lejárat dátumát** —
   ha lejár, az űrlap némán elhal (a Function 502-t ad, a látogató hibát lát).

   <!-- KITÖLTENDŐ: a titok lejárati dátuma, hogy naptárba kerüljön -->

## 3. Hozzáférés szűkítése egy postafiókra — fontos

A `Mail.Send` alkalmazásengedély alapból **a bérlő összes postafiókjából**
engedi a küldést. Ezt Exchange-oldali szabállyal szűkítjük a feladó fiókra.

**A működő út az RBAC for Applications** (3.3). A régebbi
`New-ApplicationAccessPolicy` ebben a bérlőben **nem működött**: a szabály
létrejött, a `Test-ApplicationAccessPolicy` `Granted`-et adott rá, a tényleges
Graph-hívás mégis tiltásba futott, és a szabály törlése után is tiltott. Ne azzal
kezdd. A részletek a hibakeresésben.

### 3.1 Az Exchange Online modul telepítése

Az Exchange cmdletek **nem beépítettek**, külön modulból jönnek. E nélkül a
`Connect-ExchangeOnline` „is not recognized as the name of a cmdlet" hibát ad.
Windows PowerShell 5.1 helyett **PowerShell 7-et** (`pwsh`) használj.

```powershell
Install-Module -Name ExchangeOnlineManagement -Scope CurrentUser -Force
Import-Module ExchangeOnlineManagement
Connect-ExchangeOnline -UserPrincipalName <a bérlő rendszergazdájának UPN-je>
```

A `Connect-ExchangeOnline` böngészőablakot nyit a bejelentkezéshez. Rendszergazdai
jogosultság kell hozzá; a `-Scope CurrentUser` miatt a telepítéshez viszont nem
kell emelt jogú ablak.

### 3.2 A vállalati alkalmazás objektumazonosítója

A következő lépéshez a **vállalati alkalmazás** (service principal)
objektumazonosítója kell — **nem** az app-regisztrációé. Ugyanahhoz az apphoz két
külön objektum tartozik, két külön azonosítóval; a regisztráció Áttekintés lapján
látható „Objektumazonosító" a rossz. A `New-ServicePrincipal` erre
`AADServicePrincipalNotFound` hibát ad.

Portálon: Entra admin center → Identitás → Alkalmazások → **Vállalati
alkalmazások** → az „Alkalmazás típusa" szűrő legyen **Minden alkalmazás** →
keresd meg az appot → Áttekintés → **Objektumazonosító**.

PowerShellből — **külön, friss ablakban**, ahol nem futott
`Connect-ExchangeOnline`. A két modul `Microsoft.Identity.Client` verziója
ütközik, együtt `Method not found: … WithLogging` hibát adnak:

```powershell
Install-Module Microsoft.Graph.Applications -Scope CurrentUser -Force
Connect-MgGraph -Scopes "Application.Read.All"
(Get-MgServicePrincipal -Filter "appId eq '<ALKALMAZAS_ID>'").Id
```

### 3.3 RBAC for Applications — ez a működő út

Vissza az Exchange-hez csatlakozott ablakba:

```powershell
# 1. Az app service principalja regisztrálódik az Exchange-ben.
New-ServicePrincipal -AppId <ALKALMAZAS_ID> `
  -ObjectId "<a vállalati alkalmazás objektumazonosítója>" `
  -DisplayName "triox.hu kapcsolati urlap"

# 2. Hatókör: csak a feladó postafiók.
New-ManagementScope -Name "TrioxNoreplyHatokor" `
  -RecipientRestrictionFilter "PrimarySmtpAddress -eq 'noreply@triox.hu'"

# 3. Szerepkör-hozzárendelés a hatókörre.
New-ManagementRoleAssignment -App <ALKALMAZAS_ID> `
  -Role "Application Mail.Send" `
  -CustomResourceScope "TrioxNoreplyHatokor"
```

Ellenőrzés — mindháromnak adnia kell kimenetet:

```powershell
Get-ServicePrincipal | Format-List DisplayName,AppId,ObjectId
Get-ManagementRoleAssignment -RoleAssigneeType ServicePrincipal | Format-List Name,Role,RoleAssignee,CustomResourceScope
# A hatókör tényleg a feladóra illeszkedik-e:
Get-Recipient -RecipientPreviewFilter "PrimarySmtpAddress -eq 'noreply@triox.hu'" | Format-List Name,PrimarySmtpAddress
```

**A hozzárendelés nem azonnal él.** Éles beállításnál a küldés a
szerepkör-hozzárendelés után **45 perccel** kezdett működni. Addig a Graph
ugyanazt a `[RAOP]` tiltást adja, mintha semmi nem lenne beállítva — ez nem hiba,
csak várni kell. Ne kezdj közben átállítgatni dolgokat: két párhuzamos változás
után nem lehet megmondani, melyik hatott.

## 4. Cloudflare Pages változók

Cloudflare dashboard → Workers & Pages → **`trioxdev`** → Settings →
**Environment variables**. Mind a **Production**, mind a **Preview**
környezetben vedd fel őket, különben az előnézeti ágakon nem működik az űrlap.

| Változó | Típus | Érték |
|---|---|---|
| `O365_TENANT_ID` | plain | a bérlő címtárazonosítója |
| `O365_CLIENT_ID` | plain | az app-regisztráció alkalmazásazonosítója |
| `O365_CLIENT_SECRET` | **Secret** (titkosított) | a 2. pontban kapott titok |
| `O365_FELADO` | plain | `noreply@triox.hu` |
| `O365_CIMZETT` | plain | `support@triox.hu` — ide érkeznek a megkeresések |

A változó felvétele után **új deploy kell**, hogy a Function lássa őket: a
Cloudflare csak az azután készült deployokba építi be a változókat, a meglévő
attól nem látja meg őket, hogy felvettük. Deployments fül → a legutóbbi deploy →
**Retry deployment**.

Ha a végpont ezután **500**-at ad (`A levélküldés jelenleg nem elérhető`), a
Function nem látja a változókat: elmaradt az új deploy, vagy csak a Preview
környezetbe kerültek. Ha **502**-t ad, a változók megvannak, de valamelyik érték
rossz — a Real-time logs megmondja, melyik.

## 5. SPF, DKIM, DMARC

A levél az Exchange Online-ból megy, tehát a `triox.hu` SPF-rekordjában benne
kell lennie az `include:spf.protection.outlook.com` résznek, és a DKIM-et be
kell kapcsolni a Microsoft Defender portálon. Ezek nélkül a visszaigazoló
levelek a levélszemét mappában landolnak.

<!-- KITÖLTENDŐ: a jelenlegi SPF/DKIM/DMARC állapot ellenőrzése -->

## 6. Visszaélés elleni védelem

A kódban: mézesbödön mező, mezőhossz-korlátok, azonos eredet (Origin) kényszer,
IP-nkénti sebességkorlát, és a visszaigazoló levél nem tartalmazza a beküldő
szövegét — így nem lehet vele idegen címekre kéretlen tartalmat küldetni.

### 6.1 Sebességkorlát — a KV névtér bekötése

**IP-nként 5 elküldött megkeresés / 10 perc.** A számlálók Cloudflare KV-ben
vannak. Csak az érvényes beküldés fogyasztja a keretet: az elgépelt e-mail miatt
visszadobott kísérlet nem.

A névteret a dashboardon kell létrehozni és bekötni:

1. Workers & Pages → **KV** → *Create a namespace* → név pl. `triox-sebessegkorlat`
2. Workers & Pages → `trioxdev` → Settings → **Functions** → *KV namespace bindings*
3. A kötés **neve pontosan `SEBESSEGKORLAT`** legyen, a névtér a fenti
4. Production **és** Preview alá is, majd **új deploy**

**Ha a kötés hiányzik, a végpont nem áll le, csak korlát nélkül fut** — egy
elfelejtett kötés ne okozzon kiesést az űrlapon. A hiányt a Function
`console.warn`-nal naplózza (`Nincs bekötve a SEBESSEGKORLAT KV`), és a korlát
csendben nem érvényesül. Ezt érdemes deploy után ellenőrizni.

A KV végső konzisztenciájú, tehát a korlát **közelítő**: egyszerre érkező kérések
ugyanazt a számlálót olvashatják. Spam ellen elég, precíz kvótának nem való.

### 6.2 WAF rate limiting — a DNS átállítása után

A kódbeli korlát a Function *belsejében* fut, tehát a kérés akkor is eljut a
Workerig, ha eldobjuk. Peremhálózati szűréshez WAF-szabály kell:
Security → WAF → **Rate limiting rules**, útvonal `/api/kapcsolat`,
5 kérés / 10 perc / IP, akció Block.

Ez **ma nem vehető fel hasznosan**: a WAF-szabályok zóna szintűek, a
`*.pages.dev` forgalomra nem vonatkoznak. A `triox.hu` már Cloudflare-zóna, de a
rekordja DNS-only módban a GoDaddyra mutat, tehát a forgalom nem megy át a
Cloudflare-en. A szabálynak akkor lesz értelme, amikor a `triox.hu` proxyzottan
(narancssárga felhő) a Pages projektet szolgálja ki.

<!-- KITÖLTENDŐ: a WAF rate limiting szabály felvétele a DNS átállítása után -->

## Helyi teszt

Az `astro dev` szerver nem futtat Pages Functiont, ott az űrlap hibát ad.
Helyi végponthoz:

```bash
cp .dev.vars.example .dev.vars   # töltsd ki
npm run build
npm run functions                # http://localhost:8788
```

A `functions` script `--kv SEBESSEGKORLAT` kapcsolóval indul, így a
sebességkorlát helyben is működik, saját helyi névtérrel. A korláthoz
`CF-Connecting-IP` fejléc kell — helyben kézzel add meg a curl-hívásban.

Gyors próba levélküldés nélkül (a mézesbödön miatt nem megy ki levél):

```bash
curl -s -X POST http://127.0.0.1:8788/api/kapcsolat -H 'Content-Type: application/json' -H 'Origin: http://127.0.0.1:8788' -d '{"nev":"Teszt","email":"teszt@pelda.hu","uzenet":"Proba uzenet a vegponthoz.","ceges_fax":"x"}'
```

## Hibakeresés

A Function `console.error` sorai **futásidejű** naplóba kerülnek, nem a build
naplójába. A build napló (ahol a „Compiled Worker successfully" áll) sosem
tartalmazza őket. Az élő naplóhoz: Deployments → a deploy `Details` linkje →
**Functions** → *Begin log stream*, és közben kell beküldeni egy kérést.

### A Graph-hívás reprodukálása PowerShellből

Ez gyorsabb, mint az élő naplót elkapni: ugyanazt csinálja, mint a Function, és
kiírja a Graph pontos hibáját.

```powershell
$tenant = "<O365_TENANT_ID>"; $appId = "<O365_CLIENT_ID>"; $secret = "<O365_CLIENT_SECRET>"
$token = (Invoke-RestMethod -Method Post -Uri "https://login.microsoftonline.com/$tenant/oauth2/v2.0/token" -Body @{client_id=$appId; client_secret=$secret; scope="https://graph.microsoft.com/.default"; grant_type="client_credentials"}).access_token
$level = @{ message = @{ subject = "Graph teszt"; body = @{ contentType = "Text"; content = "Ellenorzo level." }; toRecipients = @(@{ emailAddress = @{ address = "info@triox.hu" } }) }; saveToSentItems = $true } | ConvertTo-Json -Depth 6
try { Invoke-RestMethod -Method Post -Uri "https://graph.microsoft.com/v1.0/users/noreply@triox.hu/sendMail" -Headers @{ Authorization = "Bearer $token" } -ContentType "application/json" -Body $level; "SIKER" } catch { "HIBA:"; $_.ErrorDetails.Message }
```

### Tünettár

| Tünet | Valószínű ok |
|---|---|
| `Connect-ExchangeOnline ... is not recognized` | nincs telepítve az `ExchangeOnlineManagement` modul — lásd 3.1 |
| `Connect-MgGraph`: `Method not found: … WithLogging` | a Graph és az Exchange modul ütközik egy munkamenetben — friss ablak kell |
| `New-ServicePrincipal`: `AADServicePrincipalNotFound` | az app-regisztráció objektumazonosítóját adtuk meg a vállalati alkalmazásé helyett — lásd 3.2 |
| 403 `ErrorAccessDenied`, `Access is denied. Check credentials` | nincs rendszergazdai jóváhagyás a `Mail.Send`-re |
| 403 `ErrorAccessDenied`, `[RAOP] : Blocked by tenant configured AppOnly AccessPolicy settings` | app-only hozzáférés megtagadva — lásd alább |
| 401 a tokenkérésnél | lejárt vagy elgépelt `O365_CLIENT_SECRET` |
| `MailboxNotEnabledForRESTAPI` | a feladó fióknak nincs Exchange Online licence |
| A végpont 429-et ad | sebességkorlát: 5 elküldött megkeresés / 10 perc / IP — lásd 6.1 |
| A végpont 500-at ad | a Function nem látja a környezeti változókat: elmaradt az új deploy, vagy csak Preview alá kerültek |
| A végpont 502-t ad | a változók megvannak, de a token vagy a `sendMail` bukik — a fenti PowerShell megmondja, melyik |

### A `[RAOP]` blokk — amit az éles beüzemelés tanított

Ez az üzenet **nem mondja meg, mi hiányzik**. Ugyanezt kaptuk akkor is, amikor
egyáltalán nem volt beállítva semmi, akkor is, amikor a klasszikus
`ApplicationAccessPolicy` állt fenn, és akkor is, amikor az RBAC-hozzárendelés
már létezett, csak még nem érvényesült. Ezért ne az üzenetből próbáld kitalálni
az okot, hanem menj végig ezen a listán — mindegyik pont önállóan eldönthető:

```powershell
# 1. Van-e egyáltalán Mail.Send a tokenben? (offline, a tokenből olvasva)
$p = $token.Split('.')[1].Replace('-','+').Replace('_','/'); while ($p.Length % 4) { $p += '=' }
([Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($p)) | ConvertFrom-Json).roles

# 2. Regisztrálva van-e az app az Exchange-ben?
Get-ServicePrincipal | Format-List DisplayName,AppId,ObjectId

# 3. Van-e szerepkör-hozzárendelése?
Get-ManagementRoleAssignment -RoleAssigneeType ServicePrincipal | Format-List Name,Role,RoleAssignee,CustomResourceScope

# 4. A hatókör tényleg illeszkedik-e a feladóra?
Get-Recipient -RecipientPreviewFilter "PrimarySmtpAddress -eq 'noreply@triox.hu'" | Format-List PrimarySmtpAddress

# 5. Nincs-e EWS/OData korlátozás? (mindkettőnek üresnek vagy True-nak kell lennie)
Get-OrganizationConfig | Format-List EwsEnabled,EwsApplicationAccessPolicy,EwsAllowList,EwsBlockList
Get-CASMailbox "noreply@triox.hu" | Format-List EwsEnabled,EwsApplicationAccessPolicy,EwsAllowList,EwsBlockList

# 6. Nem maradt-e klasszikus szabály? (üres listánál „object … couldn't be found" a normális válasz)
Get-ApplicationAccessPolicy | Format-List AppId,AccessRight,ScopeName
```

Ha mind a hat rendben van, **akkor csak idő kérdése** — nálunk 45 perc volt.

Két csapda, ami sok időt vitt el:

- A `Test-ApplicationAccessPolicy` `Granted`-je **semmit nem bizonyít**. Az csak a
  régi mechanizmust nézi, és akkor is `Granted`-et ad, ha egyáltalán nincs
  szabály — miközben a tényleges hívás tilt.
- A `Get-ApplicationAccessPolicy` üres listánál nem üres kimenetet ad, hanem egy
  `object 'OU=…\*' couldn't be found` hibát. Ez **azt jelenti, hogy nincs
  szabály**, nem azt, hogy elromlott valami.
