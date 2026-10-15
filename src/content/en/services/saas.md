---
cim: "SaaS – Application hosting"
osszefoglalo: "Your business applications run in a managed environment—the server, the operating system and availability are our responsibility."
sorrend: 3
cimke: "managed hosting"
szelesLayout: true
---

## The application as a service, without a server

## 1. What does this mean in one sentence?

SaaS means that **you get neither a server nor an operating system, but the working application itself**—at one address, with one sign-in, available anytime, from anywhere.

No installation, no updates, no database maintenance, no backup system that someone has to operate. We run the entire technology layer behind the application—server, database, cache, certificate, backup, monitoring—and you **use it and get your work done**.

---

## 2. How is it different from IaaS and DCaaS?

The three services answer the same question at different depths: **where is the line between your responsibility and the provider's?**

| Layer | IaaS | DCaaS | **SaaS** |
|---|---|---|---|
| Physical hardware, data center | Triox | Triox | **Triox** |
| Virtualization, network | Triox | Triox | **Triox** |
| Operating system, directory | **Client** | Triox | **Triox** |
| Database, runtime | **Client** | Shared | **Triox** |
| Application installation, updates | **Client** | **Client** | **Triox** |
| Application monitoring, operation | **Client** | **Client** | **Triox** |
| Data and business process | Client | Client | **Client** |

**In short:**
- **IaaS**—you get leased virtual machines and run the system on them yourself.
- **DCaaS**—we take over your entire server room; we operate the infrastructure and the operating systems.
- **SaaS**—the question of a server doesn't even come up: you sign in at an address and work. **Only the data and the business process stay with you.**

---

## 3. What do you get, specifically?

### 3.1 The application, in an accessible form

| Access method | When it is the right fit |
|---|---|
| **From a browser, on your own domain** | For web applications—from any device, with no installation |
| **Through terminal services (RDS)** | For classic business management and accounting programs that need to be installed—users see the same familiar interface, it just doesn't run on their own computer |
| **From a client program, over VPN** | When the application is built on a thick client, but the database belongs in a central location |
| **From a mobile device** | Where the application supports it—same data, same permissions |

In every case: **your own domain name**, a valid, automatically renewed **TLS certificate** (https), and a clear, documented entry point.

### 3.2 Operating the full application stack

| Component | What it does | What we take on |
|---|---|---|
| **Web server** | Receives user requests | Configuration, performance tuning, certificate management |
| **Application server** | Runs the business logic | Runtime maintenance, version tracking |
| **Database** (SQL / PostgreSQL / MongoDB) | Stores the data | Installation, tuning, index maintenance, backup, recovery |
| **Cache** (e.g. Redis) | Speeds up operation | Operation, memory sizing |
| **Background processing, scheduled jobs** | Reports, imports, overnight closings | Run monitoring, error alerts |
| **File storage** | Documents, attachments, media files | Capacity monitoring, backup |
| **Monitoring layer** | Watches whether everything is up | Alerting, intervention |

If any layer stops, it becomes **a ticket on our side**, not your problem.

### 3.3 Availability, performance, publishing

- **Dedicated gateway and public IP**—the application appears on the internet the way you want it, on your own domain.
- **Firewall rules tailored to your application**—only the traffic that needs to get in gets in.
- **Restricted access as an option**—if the application doesn't need to be public, it can be reached only over VPN or from specified IP addresses.
- **Performance monitoring**—we don't just check whether “the server is running,” but whether **the application actually responds, and how fast**. We often notice a slowdown before the users do.
- **Scaling with load**—for seasonal peaks, campaign periods and start-of-month closings, resources can also be increased temporarily.

### 3.4 Security and access

- **Separate network segment**—the application doesn't run in a shared space with other clients' systems.
- **Multi-layer separation**—the publicly accessible components (web layer) and the database are in separate segments; the database cannot be reached directly from outside.
- **Encrypted connection** end to end (https, VPN).
- **Permission management**—who can see and change what, documented; tied to your directory on request.
- **Two-factor authentication (MFA)** available for sign-in.
- **Logging**—who signed in, when and from where; needed for audits and incident investigations alike.

### 3.5 Backup and restore

- **Application-consistent backup**—the database and the files together, consistent with each other.
- **Multi-tier backup**—regular full backups and more frequent database backups, on separate storage.
- **Point-in-time restore**—not just “yesterday's state”; on request, an earlier point in the same day can also be restored.
- **RPO and RTO targets in the contract:**
  - **RPO** = how much data loss is acceptable in the worst case (e.g. no more than 1 hour of work)
  - **RTO** = how quickly the application must be running again (e.g. within 4 hours)
- **Tested restores**—at an agreed frequency, we perform a test restore and give you the results in writing.

### 3.6 Updates, version management, test environment

- **Scheduled updates** in a pre-agreed maintenance window, not in the middle of the workday.
- **Pre-update backup and rollback plan**—if something doesn't go as planned, there is a way back.
- **Separate test environment** on request—the new version runs there first, and only then in production.
- **Security patches** (operating system, database, runtime) on an ongoing basis, not once a year.
- **Change management**—every significant intervention is documented and traceable.

### 3.7 Monitoring and transparency

- **Continuous service monitoring**—availability, response time, resource usage, backup status.
- **Regular reports** on your application: availability, capacity, backups, work performed.
- **One point of contact**—no need to coordinate a separate software vendor, hosting provider and system administrator.
- **Up-to-date documentation** of the architecture and the recovery procedure.

### 3.8 Licensing: SPLA and CSP

- **SPLA (Services Provider License Agreement)**—Windows Server, SQL Server and Remote Desktop Services licenses are billed in the provider's name, **based on actual monthly usage**.
- **SQL Server is an especially significant item**—a purchased database license is a serious investment on its own. Under SPLA, it becomes a monthly fee, in proportion to actual use.
- **Scales down and up monthly**—if fewer users work in a given month, billing adjusts accordingly.
- **Version upgrade rights are included**; no separate Software Assurance needed.
- **The license audit risk is borne by the provider.**
- **CSP (Cloud Solution Provider)**—Microsoft 365 and related cloud services under the same contract, **on one invoice**, with support in Hungarian.
- **The application's own (vendor) license** you bring yourself, or we arrange it together with the software vendor—we clarify the terms before rollout.

---

## 4. Two typical client situations

### A) A company wants to use its own business application as a service

*“We have a business management / accounting / production control system that runs on a server in the office today.”*

What the SaaS model solves:

- The system **becomes accessible from anywhere**—from the office, from home, from another site, at a client's location.
- **The local server goes away**, along with all of its costs.
- **No more “the server won't start on Monday morning”** situations.
- Updates, backup and recovery **move to us**, along with the responsibility for them.
- Adding a new site or a new employee is **a matter of minutes**, not a matter of procurement.

### B) A software company delivers its own product to its customers as a service

*“We develop an application and want to offer it as a subscription service—but we don't want to deal with operations.”*

What Triox provides for this:

- **The complete runtime environment**—web layer, database, cache, background processing, monitoring—operated for you.
- **A separate environment per customer** or a shared, multi-tenant architecture, depending on how your product is built.
- **Capacity that scales with growth**—no need to buy a server fleet up front for a customer count that is still uncertain.
- **White-label operation**—your customers see your brand; our name does not appear.
- **Predictable unit cost**—the per-customer cost of operations can be planned, which can serve as the basis for your pricing.
- **You focus on development**, not on servers.

---

## 5. What don't you have to buy and do?

| Category | What you would have to provide if you ran it yourself |
|---|---|
| Hardware | Application server, database server, storage, spare parts |
| Infrastructure | Server room, rack, UPS, cooling, redundant internet connection |
| Software licenses | Windows Server, CAL, RDS SAL, **SQL Server** (typically the largest item), backup software |
| Database operations | Tuning, index maintenance, consistent backup, recovery procedure |
| Certificate, domain | Obtaining a TLS certificate and **renewing it before it expires** (a classic cause of outages) |
| Updates | Keeping up with OS, database and runtime patches on an ongoing basis |
| Monitoring | Building a monitoring system, alerting, night and weekend on-call |
| Recovery | A worked-out and **tested** restore plan |
| Labor | System administrator and database administrator hourly fees, coverage during vacations and sick leave |

---

## 6. The financial and tax advantage: OPEX instead of CAPEX

### 6.1 Running it yourself: capital expenditure (CAPEX)

1. You have to **pay for the server, the storage and the software licenses in one lump sum**—the database license often costs more than the hardware.
2. The assets **must be capitalized**: an asset with an individual value above 100,000 HUF is recorded as a fixed asset.
3. The cost appears **spread over years, in the form of depreciation**.
4. **You paid today, but it reduces your tax base only over years, in installments.**
5. Add to this the administration of the asset register, inventory counts, depreciation calculations and disposal.
6. If you finance it with a loan or lease: interest costs and a tied-up credit line.
7. In the fourth or fifth year—when the assets have reached end of life—**you start over.**

### 6.2 Application hosting: operating expense (OPEX)

- ✅ **The monthly fee is an expense of that period**—not an asset purchase, no capitalization.
- ✅ **Reduces the tax base in full, immediately**, in the year it is incurred.
- ✅ **VAT can be deducted monthly, on an ongoing basis**—you don't have to pre-finance the VAT on a large investment.
- ✅ **No fixed-asset register, inventory, depreciation calculations or disposal.**
- ✅ **Cost that follows your user count**—it grows proportionally as you grow and can be reduced if you shrink.
- ✅ **Predictable, plannable cash flow**—a single recurring item, with no large one-time outlay.
- ✅ **Does not burden your creditworthiness**—your credit line stays free for more useful business purposes.
- ✅ **Operations labor costs are built in**—you don't have to maintain separate system administrator capacity.
- ✅ **The risk of technological obsolescence is the provider's.**

### 6.3 Comparison

| | Running it yourself (CAPEX) | Application hosting (OPEX) |
|---|---|---|
| Payment | In one lump sum, up front | Monthly, evenly |
| Cost accounting | Spread over years, through depreciation | **Immediately, in full** |
| Tax base reduction | In installments, over years | **In the year incurred, in full** |
| VAT | Pre-financing a large amount | Deducted monthly, on an ongoing basis |
| Bookkeeping burden | Capitalization, depreciation, inventory, disposal | One incoming invoice |
| Cost vs. usage | Independent—fixed, even if you don't use it | **Proportional to actual use** |
| Operations labor | Separate cost | Included in the fee |
| Obsolescence risk | Yours | Ours |
| License risk | Yours (audit) | Ours (SPLA reporting) |

> **Important:** This information is a general overview and does not constitute tax advice. Please consult your accountant or tax advisor about the specific accounting treatment.

---

## 7. When is it especially worthwhile?

- **Your staff work from several places**—office, home, other sites, client locations—and need access to the same data from everywhere.
- **The application runs on a single server today**, and if that server fails, the company stops immediately.
- **There is a backup, but nobody has tried yet** whether it can actually be restored.
- **The database is slowing down**, and there is nobody to give its tuning proper attention.
- **Only one person knows** how the system is put together.
- **The software vendor and the hosting provider are two separate companies**, and when there is a problem, they point fingers at each other.
- **As a software developer**, you would like to move to a subscription model but don't want to build an operations team.
- For **tax base optimization**, an ongoing expense is more advantageous than multi-year amortization.

---

## 8. How does the rollout work?

1. **Application assessment**—what components the system consists of, how much data there is, how many users work with it, what the performance requirements are, and what integrations it has with other systems.
2. **Involving the software vendor**—if the application was developed by a third party, we agree with them on the supported runtime environment and the licensing terms.
3. **Target architecture and RPO/RTO agreement**—how much downtime and how much data loss is acceptable; this determines the backup and availability plan.
4. **Quote**—itemized monthly fee: resources, storage, backup level, licenses, operations and support level.
5. **Contract and SLA**—availability, response time, maintenance windows, backup and retention rules in writing.
6. **Test deployment**—the application is first set up in a test environment, with real data, so that its operation and performance can be verified.
7. **Production cutover**—in an agreed time window, with final data migration and a rollback plan.
8. **Handover and operations**—access, documentation, user information, reporting schedule, escalation path.

---

## 9. Frequently asked questions

**Who owns the data?**
The data is always yours. We provide storage, hosting and protection services for it.

**Can I get my data out?**
Yes. We provide data exports in the format and at the frequency set out in the contract—both while the service is running and when it ends.

**What happens if the application goes down?**
Our monitoring system typically detects the outage before the users do. The response time and the recovery target are set in the SLA; for critical systems, a ready-to-run replica can also be maintained.

**Does my database share an environment with other clients?**
No. Your application and database run in a separate environment, in a dedicated network segment. For particularly sensitive data, we build a fully isolated environment.

**What if my software vendor doesn't support hosting?**
We clarify this before rollout. Most business management systems run without problems in a service provider environment; where the vendor sets specific conditions, we agree on them in advance.

**Do I also get access to the server?**
In the SaaS model this is usually not necessary, because we handle operations. If you have your own IT staff or developer, they can be given limited, documented access.

**What happens if the number of users suddenly grows?**
Expanding resources is part of the service: more processor cores, memory or storage can be provided without procurement or downtime, with a proportional adjustment to the monthly fee.

---

## 10. Contact

To request a quote, approximate figures are enough:

- which application it is (name, vendor, version),
- how many users work with it, and from how many locations,
- how large the database is, and how fast it is growing,
- what access method is needed (browser, terminal, client program),
- how much downtime and how much data loss is acceptable,
- what other systems it needs to work with.

Based on this, we prepare an itemized, comparable quote—in one table alongside the estimated total cost of your current in-house operation.

*This document is for information only. It does not constitute tax advice and does not replace individual contract terms.*
