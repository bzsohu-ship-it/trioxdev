---
cim: "MCP—the USB-C of AI"
leiras: "An open standard that finally gives AI access to a company's systems. Eight finance and business processes that are cumbersome at almost every trading company and can now largely be automated—without replacing the existing systems."
datum: 2026-09-24
---

<div class="osszefoglalo">

In brief

- Until now, AI could not see a company's systems, so every piece of data had to be put in front of it by hand. An open standard called **MCP** changes that.
- **Platform-independent:** Claude, ChatGPT, Microsoft Copilot and Gemini all support it, and it can be connected to any invoicing system, bank or inventory system that offers programmatic access.
- Most of the time goes into **invoice processing, receivables, bank reconciliation, cash flow and management reports**. All eight processes described here can largely be automated.
- The rule is the same as with a new colleague: **the AI prepares, a person decides**.

</div>

At most companies, artificial intelligence today means that someone writes an email with ChatGPT or has it summarize a contract. Useful, but the real time sinks are elsewhere: entering invoices by hand, calling around about unpaid bills, matching bank transactions, and the Monday-morning Excel reports. Until now, AI had no access to any of these.

## Why is all this so cumbersome?

An average trading company keeps its data in five or six different places: the invoicing system, the bank, the inventory system or webshop, the accountant's system, a few Excel spreadsheets and the email accounts. The systems do not talk to each other. People connect them by copying, exporting, searching and remembering.

These processes are not slow because they are complicated, but because **they have to be pieced together from scattered data**. That is exactly the kind of work AI is unbeatable at—if it has access to the data.

## What is MCP, in short?

MCP (Model Context Protocol) is an open standard that describes how an AI assistant can connect to a company's systems. The easiest way to understand it is with an analogy: **MCP is to AI what USB-C is to a laptop.** A single connector that anything can plug into.

Each system gets a small “translator” that defines exactly what the AI may do in it: what it can see, what it can prepare, and what it must not touch. After that, the question is simply asked in plain Hungarian: *“Who owes us money past 30 days, and whose debt is growing?”* The AI collects the answer from the invoicing system and the bank on its own.

Where a task always runs the same way and at the same time (every morning, for example), a scheduled automation is added alongside the AI, and the work gets done without anyone asking.

**Platform-independent, in two senses.** First, since late 2025 MCP has been maintained by an independent foundation under the Linux Foundation, and today Claude, ChatGPT, Microsoft Copilot and Google Gemini all support it. A connection built once therefore does not tie you to any single AI provider. Second, the vendor of the ERP system, the invoicing system or the webshop does not matter either: if it offers programmatic access (most current systems do), it can be connected.

## Finance: four processes that eat up the month

### 1. Processing incoming invoices

**How it works today:** supplier invoices arrive by email, as PDFs, on paper. Someone downloads them, prints them, checks them against the purchase order, enters them, forwards them for approval and then to the accountant. If one gets lost, nobody notices until the payment reminder arrives.

**How it could work:** in Hungary, the data of invoices between businesses is also held in the NAV Online Számla system, and it can be queried from there programmatically. Every morning the AI retrieves the new incoming invoices, matches them to the purchase order and the goods received, flags discrepancies (a different price, a different quantity, a duplicate invoice), and prepares the ones in order for approval. Only the exceptions need human attention.

### 2. Managing receivables

**How it works today:** someone goes through the list of overdue invoices once a month, if they find the time. Reminders either never go out, or everyone gets the same template letter—the regular customer who has paid on time for ten years and the chronic late payer alike.

**How it could work:** according to Intrum's 2026 European survey, late payment affects an average of 12% of companies' revenue, and 57% of businesses missed their growth targets because of it. This is the area with the fastest payback. The AI tracks due dates day by day, words each reminder in a tone matched to the customer's payment history (polite for a good client, firm for a repeat late payer), and flags when someone's debt keeps growing. A person decides whether the letters go out.

### 3. Bank reconciliation

**How it works today:** someone matches the items on the bank statement to the issued invoices one by one. Partial payments, transfers that pay several invoices at once and mistyped payment references take hours, and at the end of the month there are always a few “unknown” items left.

**How it could work:** from the bank's electronic statement (or, where the bank offers it, a direct data connection), the AI automatically matches incoming payments to open invoices based on amount, client, payment reference and past payment patterns. It prepares the certain matches and hands the uncertain ones to a person, together with its reasoning.

### 4. Cash flow forecasting

**How it works today:** the liquidity picture is an Excel spreadsheet that someone updates by hand at the end of the month, and that is already out of date the moment it is updated.

**How it could work:** a continuously updated 30-, 60- and 90-day forecast is built from open customer and supplier invoices, fixed costs, and **how many days each customer actually takes to pay** (not the due date on the invoice). If a cash squeeze is expected in the coming weeks, the system flags it in time, instead of it coming to light on payroll day.

## Business and strategy: four areas where decisions are made

### 5. Management overview

**How it works today:** someone spends half a day putting the weekly management report together from four or five systems. By the time it is done, it is last week's news.

**How it could work:** sales, margin, inventory, receivables and open quotes on one page, automatically every Monday morning or at any time with a single question. And because the AI sees the connections, it can also answer what a fixed report cannot: *“Why did the margin drop last month?”*

### 6. Client checks and credit limits

**How it works today:** a new customer or an unusually large order is rarely checked by anyone before delivery. The problem comes to light with the first unpaid invoice.

**How it could work:** when a new client is added or an order exceeds a certain amount, an automatic check runs: public company data, NAV's database of taxpayers with no outstanding public debt, and the client's payment history with us so far. This produces a suggested credit limit, and the risky order gets flagged **before it is shipped.**

### 7. Pricing and margin

**How it works today:** supplier price lists change, but selling prices do not always follow. A product can run for months with an eroded or even negative margin before anyone notices. In trading, this is one of the biggest hidden sources of loss.

**How it could work:** the AI monitors changes in purchase prices and flags, item by item, where the margin has dropped below the target level. It also suggests prices, taking into account turnover rate and customer discounts. A person changes the price, but now knows where to look.

### 8. Inventory and quote follow-up

**How it works today:** reordering is based on gut feeling and habit, so some products run short while money has been tied up in others for years. Meanwhile, some of the quotes sent out never get an answer, because nobody follows up.

**How it could work:** reorder suggestions based on actual sales and supplier lead times, with slow-moving and dead stock flagged separately. Alongside that, open quotes are monitored: who has not replied, whom it is worth checking in with and when, and the follow-up email is prepared as a draft.

## What all eight have in common

- **No new system needed.** The automation is built on top of the existing invoicing system, bank, inventory system and email.
- **No new interface to learn.** The question is asked in Hungarian, in natural language, even in the AI assistant you already use.
- **The person decides, the machine prepares.** The AI collects, matches, flags and suggests. Payments, price changes and emails to customers go out only with approval.

## What to watch out for

This is financial data, so a few rules are non-negotiable:

1. **We start with read-only access.** The first version only queries and suggests; it changes nothing.
2. **Every change requires approval.** The AI first shows exactly what it would do, and carries it out only after an explicit “yes.”
3. **Least privilege.** The AI can reach only what the task requires. It cannot initiate a bank transfer, for example, at all.
4. **Everything is logged.** It can be traced who asked what and what happened.

An honest note: for processing, the retrieved data is sent to the AI provider. That is why you should use a business subscription, review its data processing terms in advance, and think through what data should be put in front of the AI at all. For personal data, this is also a GDPR question.

## What not to expect from it

- **It does not replace the accountant or the finance staff.** It takes the mechanical work off their hands so they have time for what requires expertise.
- **It is not a magic wand for every system.** If there is no way at all to get data out of an old program, that has to be solved first, and that is not always worth it.
- **It is not flawless.** That is why every process includes human approval, and why exceptions always go to a person.

## Where to start

Not with all eight at once. The proven order:

1. **Pick one process** where the most time or money is lost. At a trading company, this is typically receivables or incoming invoices.
2. **A read-only pilot** for a few weeks, on real data. That is enough time to see how much time it saves in practice.
3. **Expansion:** actions with approval, more systems, scheduled automations.


<div class="zaras">

**Curious which of your processes is easiest to automate?**

If you have a question, a request or a specific need related to this topic, write to us. We will tell you where it is worth starting, and where it is not.

<a class="btn" href="mailto:info@triox.hu?subject=MCP%20and%20automation">Write to us</a>

*Triox Informatika Kft.*

</div>
