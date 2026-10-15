---
cim: "How long can your company last without its systems?"
leiras: "The question is not whether there will be an outage, but what it will cost when there is one. Two numbers worth working out in advance—and that nobody at most companies can answer."
datum: 2026-08-13
---

<div class="osszefoglalo">

In brief

- An outage is not a question of “if” but of “when”—because of a hardware failure, ransomware, a power cut or a botched update.
- Two numbers decide what it costs: **how long the company is down**, and **how much work is lost**.
- At most places there is no answer to these. Yet they are not technical questions: they are business decisions that have to be made separately for each system.
- Having a backup is not proof. Only a completed restore is.

</div>

Ask yourself: if you walked into the office tomorrow morning and the systems
would not start, **how many hours would it take for the company to grind to a halt?** Not IT—the company.
Invoicing, shipping, production, customer service.

Most executives cannot give a precise answer to this. Not out of negligence: nobody
has ever put the question to them this way. Yet this answer tells you how much
is worth spending on prevention—and how much is not.

## Two numbers worth knowing

The industry uses two abbreviations for them, but what they mean is everyday.

The first: **how long a system can be down** while that is still tolerable. This is the
time that passes until it is back up and running. The second: **how much work can be lost**—that is,
how far back in time we go when we recover. If we restore from the nightly backup,
that day's work is lost.

<figure class="abra">
<svg viewBox="0 0 880 236" role="img" aria-labelledby="abra-idovonal">
<title id="abra-idovonal">The timeline has three points: the last backup, the event itself, and getting back up and running. The stretch between the last backup and the event is the lost work, and the stretch between the event and the restart is the time the company is down.</title>
<path class="abra__vonal" d="M60 118 H820" />
<path class="abra__nyil" d="M834 118 L818 111 L818 125 Z" />
<path class="abra__vonal" d="M150 96 V140" />
<path class="abra__vonal" d="M450 88 V148" />
<path class="abra__vonal" d="M760 96 V140" />
<rect class="abra__kiemelt" x="370" y="42" width="160" height="34" rx="4" />
<text class="abra__cimke" x="450" y="65" text-anchor="middle">The event</text>
<text class="abra__cimke" x="150" y="34" text-anchor="middle">Last backup</text>
<text class="abra__kicsi" x="150" y="54" text-anchor="middle">all data up to here</text>
<text class="abra__cimke" x="760" y="34" text-anchor="middle">Back online</text>
<text class="abra__kicsi" x="760" y="54" text-anchor="middle">work continues</text>
<path class="abra__vonal" stroke-dasharray="4 4" d="M150 176 H450" />
<path class="abra__nyil" d="M150 176 L164 170 L164 182 Z" />
<path class="abra__nyil" d="M450 176 L436 170 L436 182 Z" />
<text class="abra__mono" x="300" y="170" text-anchor="middle">WORK THAT IS LOST</text>
<text class="abra__kicsi" x="300" y="196" text-anchor="middle">set by how often you back up</text>
<path class="abra__vonal" stroke-dasharray="4 4" d="M450 176 H760" />
<path class="abra__nyil" d="M760 176 L746 170 L746 182 Z" />
<text class="abra__mono" x="605" y="170" text-anchor="middle">COMPANY DOWNTIME</text>
<text class="abra__kicsi" x="605" y="196" text-anchor="middle">set by how you restore</text>
<text class="abra__mono" x="440" y="224" text-anchor="middle">THE TWO CAN BE PLANNED—AND PRICED—SEPARATELY</text>
</svg>
</figure>

The two numbers can be planned separately, and each has its own cost. The lost work is decided
by how **often** you back up; the length of the outage by **how** the system
is brought back.

## Not every system is equally important

This is where the conversation usually goes off track. If we try to give a single number for the
whole company, it ends up either unrealistically expensive or pointlessly weak.

In reality, the spread within a single company is huge. A few hours of downtime of the invoicing system
is serious; a one-day outage of the internal document store is inconvenient, but work does not
stop because of it.

| Example system | How long it can be down | How much work can be lost |
|---|---|---|
| Production control, plant operations | Minutes to an hour | Almost none |
| Invoicing, business management system | A few hours | A few hours' worth at most |
| Email | A few hours | A few hours' worth |
| Internal document store, archive | A day | A day's worth |
| Test environment, developer machines | Days | Possibly more |

This table is not a prescription: **it is an example of what the thinking looks like.**
Every company has to fill in the actual rows for itself—that is half an hour of
work in one meeting, and afterwards it is much easier to decide on any IT
spending.

> **If there is a single number for the whole company, it is certainly wrong. Either too expensive, or it does not protect you.**

## Backup and restore are not the same thing

The most common mistake is “we have a backup, so we're fine.” But a backup
is just a file somewhere. Whether it turns into a **working system** is a separate
question—and that is where it comes to light if something is wrong.

That is why it pays to distinguish between two things. A **backup** can be
restored from, but that takes a machine to load it onto, and it takes time. A
**replica**, on the other hand, is a ready-made copy on standby: it does not
need to be loaded back, only started.

The two also differ in cost and benefit. Not every system needs a replica either—only
those that fall into the top rows of the table above.

## What most places forget

There are three recurring gaps, and none of them is a hardware question.

The first is that **the backup is in the same place as the production system**—in the same
room, on the same network. In the event of a fire, water damage or encrypting
ransomware, both are lost.

The second is that **nothing is written down about what needs to be done**. As long as the process exists
only in one person's head, the plan is really that this person happens to be available.

The third is that **nobody has ever tried it**. This is the most common one, and it comes
to light at the worst possible moment.

> **Having a backup is not proof. Only one thing proves it: a completed, documented restore.**

## How to get started

<ol class="lepesek">
<li><strong>List what the business needs to operate.</strong> Not a list of servers, but of processes: invoicing, shipping, production, customer service. Then see which system each one runs on.</li>
<li><strong>Put a number on each one.</strong> How long it can be down, and how much work can be lost. This is a business decision, not an IT one—the managing director and the business side set it, and IT tells you what it costs.</li>
<li><strong>See where the gap is biggest.</strong> Typically one or two systems turn out to have a current solution that is orders of magnitude weaker than what is expected. That is where spending is worth it, and nowhere else.</li>
<li><strong>Take one copy of the backup off-site.</strong> This is the single step that on its own covers most disaster scenarios.</li>
<li><strong>Test it, and write it down.</strong> A single restore test is worth more than any plan. At the end, there should be a document that an auditor or an insurer will also accept—and that another colleague can use to work through the steps.</li>
</ol>

<details>
<summary>Technical details</summary>

- **RTO/RPO defined per system**—not one number for the whole company, but a value agreed for each service
- **3-2-1 rule:** 3 copies, on 2 different media, 1 off-site
- **Application-aware backup:** database- and mail-system-consistent backups, not just file-level copies
- **Off-site replica** for critical workloads, so that recovery means starting, not reloading
- **Retention policy** with multiple generations—ransomware often gets in weeks before the encryption
- **Immutable backup copy**, so that the backup itself cannot be encrypted or deleted either
- **Documented recovery procedure**, with named owners and contact details
- **Regular restore testing** in an isolated environment, with an audit-compatible report

</details>

## The numbers are not set by IT

This article may look technical, but at its core it is not. The two numbers
discussed here are **business decisions**: they say how much disruption the company can tolerate. That is
something the managing director and the business side know, not the system administrator.

IT's job comes after that: to say what it costs to meet those numbers, and to
build the solution for it. It works in this order—not the other way around.

<div class="zaras">

**Let's start by looking at where you stand today.** At the end of the assessment, you receive a
documented picture of your current state and a list of risks—even if you do not continue
working with us. [Request an assessment](/en/contact/), or read about how
we verify recoverability:
[Audit Restore Validation and restore testing](/en/services/audit-restore-validation/).

</div>
