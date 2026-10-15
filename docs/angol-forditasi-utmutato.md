# English (US) version — translation guide

**Internal note. Not public** (the `docs/` folder is not part of the build).

The English site lives under `/en/`. It must show **exactly the same content, layout and visuals** as the
Hungarian site, translated into natural, professional **American English**. Nothing is added, nothing is left
out, no fact is changed.

## 1. Route map (Hungarian → English)

Every internal link in an English file must point to the English route. Keep `#anchor` fragments and all
`id="…"` attributes **unchanged** (e.g. `/szolgaltatasok/helyi-uzemeltetes/#platform-katalogus` →
`/en/services/on-premises-and-hybrid-it/#platform-katalogus`).

| Hungarian | English |
|---|---|
| `/` | `/en/` |
| `/szolgaltatasok/` | `/en/services/` |
| `/szolgaltatasok/iaas/` | `/en/services/iaas/` |
| `/szolgaltatasok/dcaas/` | `/en/services/dcaas/` |
| `/szolgaltatasok/saas/` | `/en/services/saas/` |
| `/szolgaltatasok/menedzselt-it-uzemeltetes/` | `/en/services/managed-it-operations/` |
| `/szolgaltatasok/helyi-uzemeltetes/` | `/en/services/on-premises-and-hybrid-it/` |
| `/szolgaltatasok/audit-restore-validation/` | `/en/services/audit-restore-validation/` |
| `/technologia/` | `/en/technology/` |
| `/partnerek/` | `/en/partners/` |
| `/biztonsag/` | `/en/security/` |
| `/esettanulmanyok/` | `/en/case-studies/` |
| `/rolunk/` | `/en/about/` |
| `/kapcsolat/` | `/en/contact/` |
| `/tamogatas/` | `/en/support/` |
| `/gyik/` | `/en/faq/` |
| `/blog/` | `/en/blog/` |
| `/blog/ai-az-irodaban-jogosultsagok/` | `/en/blog/ai-in-the-office-permissions/` |
| `/blog/ai-csalas-hangklonozas/` | `/en/blog/ai-voice-cloning-fraud/` |
| `/blog/ai-ugynokok-cselekvo-mi/` | `/en/blog/ai-agents-that-act/` |
| `/blog/arnyek-ai-ingyenes-eszkozok/` | `/en/blog/shadow-ai-free-tools/` |
| `/blog/biztonsagtudatossag-knowbe4-nis2-dora/` | `/en/blog/security-awareness-knowbe4-nis2-dora/` |
| `/blog/mcp-az-ai-usb-c-je/` | `/en/blog/mcp-the-usb-c-of-ai/` |
| `/blog/mennyi-ideig-birja-rendszer-nelkul/` | `/en/blog/how-long-without-your-systems/` |
| `/blog/microsoft-365-mentes-felelosseg/` | `/en/blog/microsoft-365-backup-responsibility/` |
| `/blog/passkey-jelszo-nelkuli-belepes/` | `/en/blog/passkeys-passwordless-sign-in/` |
| `/blog/uj-honlap/` | `/en/blog/new-website/` |

The single source of truth in code is `src/i18n/utak.ts`. External links (`https://…`, `mailto:`) stay as they are.

## 2. Style

- **American English** spelling and usage: *center, color, license (noun and verb), organization, catalog,
  sign-in, backup (noun) / back up (verb), data center*.
- Hungarian *Ön* → *you*. Professional, direct, plain. Short sentences, concrete statements, no hype words
  (*cutting-edge, seamless, world-class, leverage, robust*). Same tone as the Hungarian: calm, factual, slightly dry.
- Translate the **meaning**, not the word order. It must read as if written in English, but every claim,
  number, list item and nuance of the original must be there.
- Dashes: em dash **without spaces** (`word—word`) where the Hungarian uses ` — `. Ranges with en dash (`8–17`).
- Numbers: decimal point (`99.9%`, not `99,9 %`), thousands separator comma (`10,000`). Units unchanged
  (`2×10 Gbps`, `60 s` for `60 mp`). Hungarian forint amounts: keep the figure, write `HUF` (`165,000 HUF`) —
  never convert currency.
- Dates: `October 15, 2026`. Times: keep 24-hour as in the source (`08:00–17:00`).
- Headings: sentence case, like the Hungarian (`Who we are`, not `Who We Are`). Menu items and page titles too.
- Do **not** add facts, numbers, certifications, client names or promises that are not in the Hungarian
  source. Do not drop any either. If the Hungarian is Hungary-specific (Hungarian law, Hungarian-language
  support, Hungarian holidays, HUF prices), translate it faithfully — do not localize it away.

## 3. Glossary

| Hungarian | English |
|---|---|
| Triox Informatika Kft. / triox informatika | unchanged |
| Tudjuk hogyan segíthetünk önnek (slogan) | We know how to help you |
| Mi tudjuk, hogyan segíthetünk Önnek. | We know how to help you. |
| üzemeltetés / IT-üzemeltetés | operations / IT operations (managing and running systems) |
| menedzselt IT üzemeltetés | managed IT operations |
| Helyi és hibrid IT-üzemeltetés | On-premises and hybrid IT operations |
| IaaS – Bérelt (virtuális) infrastruktúra | IaaS – Leased (virtual) infrastructure |
| DCaaS – Bérelt adatközpont | DCaaS – Leased data center |
| SaaS – Alkalmazás-hosting | SaaS – Application hosting |
| Audit Restore Validation és Visszaállítási Tesztek | Audit Restore Validation and Restore Testing |
| adatközpont / gépterem | data center / data hall |
| szerverszoba | server room |
| mentés / visszaállítás / visszaállítási teszt | backup / restore / restore test |
| replika | replica |
| ügyfél | client |
| partner (ügyfél értelemben) | client; (gyártói értelemben) vendor/partner |
| ügyfelenként dedikált, izolált | dedicated and isolated per client |
| hálózati szegmens / szegmentálás | network segment / segmentation |
| átjáró, gateway | gateway |
| menedzsment-sík, out-of-band management | management plane, out-of-band management |
| végpont / végpontvédelem | endpoint / endpoint protection |
| frissítéskezelés | patch management |
| felügyelet / monitoring | monitoring |
| hibajegy / hibabejelentés | ticket / reporting an issue |
| Távsegítség | Remote assistance |
| Támogatás | Support |
| Kapcsolat / Kapcsolati űrlap | Contact / Contact form |
| Rólunk | About us |
| GYIK | FAQ |
| Esettanulmányok | Case studies |
| Partnerek — gyártói háttér | Partners—vendor background |
| Szolgáltatások | Services |
| Technológia | Technology |
| Biztonság | Security |
| Kérjen ajánlatot / Ajánlatot kérek | Request a quote |
| részletek → | details → |
| munkanap | business day |
| 2 munkanapon belül | within 2 business days |
| felmérés | assessment |
| átvilágítás | review / audit (context) |
| SLA, SPLA, CSP, NIS2, DORA, GDPR, ITIL | unchanged |
| Cégjegyzékszám / Adószám | Company registration no. / Tax ID |
| havidíj / átalánydíj | monthly fee / flat monthly fee |
| kis- és középvállalat (KKV) | small and mid-sized business (SMB) |
| megszólalásig hiteles | indistinguishable from the real thing |

Addresses stay in Hungarian form (`1106 Budapest, Kada utca 133.`). Product and vendor names unchanged.

## 4. Technical rules for translators

- **Copy the Hungarian file and translate in place.** Keep every line of markup, every class, every `id`,
  every attribute, the frontmatter keys, the imports (adjusted for the deeper `/en/` path), the data
  structures and their keys, and the **entire `<style>` block byte-for-byte**. A check script compares the
  `<style>` blocks of each HU/EN page pair and fails on any difference.
- Translate everything a visitor can see or hear: text, `title`, `alt`, `aria-label`, `<title>` and text
  inside inline SVGs, `cim`/`leiras` props, table headers, button labels, `<summary>`.
- **Inline SVG text** must fit the same box. Keep the English at most as long as the Hungarian (count
  characters); shorten wording if needed. Do not change coordinates or `viewBox`.
- Code comments (`//`, `/* */`, `{/* */}`) stay in Hungarian, unchanged — they are for maintainers.
  HTML comments (`<!-- -->`) are published as-is: translate their text.
- **Markdown frontmatter:** always wrap `cim`, `leiras`, `osszefoglalo`, `cimke` values in double quotes
  (English text often contains `: `, which breaks YAML otherwise). Escape inner double quotes as `\"`.
  Keep `datum`, `sorrend`, `szelesLayout`, `piszkozat` values unchanged.
- Keep raw HTML blocks inside markdown (`<div class="osszefoglalo">`, `<ol class="lepesek">`, `<details>`…)
  with the same classes; translate only the text.
- Hungarian quotation marks „…” → “…” (straight `"` inside code/frontmatter).
