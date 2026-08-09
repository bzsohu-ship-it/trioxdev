# Office 365 levélküldés — beállítás

A kapcsolati űrlap levelei a `functions/api/kapcsolat.ts` Cloudflare Pages
Functionből mennek ki, Microsoft Graph `sendMail` hívással, az Exchange Online
postafiókból. Ez a fájl a `docs/` alatt van, tehát nem kerül be a buildbe.

**Miért Graph és nem SMTP:** a Cloudflare Workers futtatókörnyezet nem tud nyers
TCP-kapcsolatot nyitni, így SMTP-t nem tud beszélni. A Microsoft ezen felül az
SMTP AUTH-ot (basic auth) kivezeti, új bérlőkben alapból tiltott.

## 1. Postafiók

Kell egy valódi, licencelt postafiók a küldéshez — a Graph `sendMail` nem tud
licenc nélküli fiókból küldeni. Javaslat: `noreply@triox.hu` (Exchange Online
Plan 1 elég). Ha nem akarunk külön licencet, az `info@triox.hu` is lehet a
feladó; ekkor a saját fiókjában látszanak az Elküldött elemek között.

<!-- KITÖLTENDŐ: melyik postafiók legyen a feladó, és van-e rá licenc -->

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
engedi a küldést. Ezt Exchange Online alkalmazás-hozzáférési szabállyal
szűkítjük a feladó fiókra.

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

### 3.2 A szabály

```powershell
# A csoport a szabály hatókörét adja. A -Members fióknak már léteznie kell.
New-DistributionGroup -Name "SzkriptKuldok" -Type Security `
  -PrimarySmtpAddress "szkriptkuldok@triox.hu" `
  -Members "noreply@triox.hu"

New-ApplicationAccessPolicy -AppId <ALKALMAZAS_ID> `
  -PolicyScopeGroupId "szkriptkuldok@triox.hu" `
  -AccessRight RestrictAccess `
  -Description "A triox.hu urlap csak a noreply fiokbol kuldhet"

# Ellenőrzés: az elsőnek Granted, a másodiknak Denied a helyes válasz.
Test-ApplicationAccessPolicy -Identity "noreply@triox.hu" -AppId <ALKALMAZAS_ID>
Test-ApplicationAccessPolicy -Identity "info@triox.hu"    -AppId <ALKALMAZAS_ID>
```

A frissen létrehozott csoport nem azonnal használható a szabályhoz, és maga a
szabály életbe lépése is akár egy órát vehet. Ha a `New-ApplicationAccessPolicy`
azt mondja, nem találja a csoportot, várj pár percet és futtasd újra.

A Microsoft újabb, finomabb mechanizmusa ugyanerre az **RBAC for Applications**
(`New-ManagementRoleAssignment -App <appId> -Role "Application Mail.Send"
-CustomResourceScope <hatókör>`). Az `ApplicationAccessPolicy` egyszerűbb és
működik; ha egyszer megszűnne, arra kell átállni.

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
| `O365_CIMZETT` | plain | `info@triox.hu` |

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
és a visszaigazoló levél nem tartalmazza a beküldő szövegét — így nem lehet vele
idegen címekre kéretlen tartalmat küldetni.

Ami **nincs** a kódban: sebességkorlát. Ez Cloudflare oldalon a helye, kód
nélkül: Security → WAF → **Rate limiting rules**, útvonal `/api/kapcsolat`,
javaslat 5 kérés / 10 perc / IP, akció Block.

<!-- KITÖLTENDŐ: a rate limiting szabály felvétele a Cloudflare-en -->

## Helyi teszt

Az `astro dev` szerver nem futtat Pages Functiont, ott az űrlap hibát ad.
Helyi végponthoz:

```bash
cp .dev.vars.example .dev.vars   # töltsd ki
npm run build
npm run functions                # http://localhost:8788
```

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
| 403 `ErrorAccessDenied`, `Access is denied. Check credentials` | nincs rendszergazdai jóváhagyás a `Mail.Send`-re |
| 403 `ErrorAccessDenied`, `[RAOP] : Blocked by tenant configured AppOnly AccessPolicy settings` | a 3.2 hozzáférési szabálya tiltja a feladó fiókot — lásd alább |
| 401 a tokenkérésnél | lejárt vagy elgépelt `O365_CLIENT_SECRET` |
| `MailboxNotEnabledForRESTAPI` | a feladó fióknak nincs Exchange Online licence |
| A végpont 500-at ad | a Function nem látja a környezeti változókat: elmaradt az új deploy, vagy csak Preview alá kerültek |
| A végpont 502-t ad | a változók megvannak, de a token vagy a `sendMail` bukik — a fenti PowerShell megmondja, melyik |

### A `[RAOP]` blokk

Ez a hozzáférési szabály tiltása, **nem** a hiányzó jóváhagyásé. Megtévesztő,
hogy a `Test-ApplicationAccessPolicy` közben `Granted`-et adhat: a `Test-`
közvetlenül értékel ki, a tényleges levélküldési út viszont gyorsítótárból.

Két dolgot kell megnézni. Először, hogy van-e több szabály ugyanarra az appra —
ha van tiltó, az nyer:

```powershell
Get-ApplicationAccessPolicy | Format-List Identity,AppId,AccessRight,ScopeName,ScopeIdentity,Description
```

A `PolicyScopeGroupId` csak a létrehozó parancs *paramétere*, a visszaadott
objektumon `ScopeName` és `ScopeIdentity` néven szerepel — a rossz névre a
`Format-List` némán üres kimenetet ad.

Másodszor, hogy a feladó fiók valóban tagja-e a hatókör-csoportnak:

```powershell
Get-DistributionGroupMember -Identity "<ScopeName>" | Select-Object PrimarySmtpAddress
Add-DistributionGroupMember -Identity "<ScopeName>" -Member "noreply@triox.hu"   # ha hiányzik
```

Ha mindkettő rendben van, terjedési késés: a szabály és a csoporttagság
érvényesülése akár egy óra.
