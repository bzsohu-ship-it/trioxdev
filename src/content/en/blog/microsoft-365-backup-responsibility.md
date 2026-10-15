---
cim: "What Microsoft does not back up for you"
leiras: "Email and files are in the cloud, so they are safe—this is the most common misconception about Microsoft 365. In plain terms: where the provider's responsibility ends, and where yours begins."
datum: 2026-07-14
---

<div class="osszefoglalo">

In brief

- Microsoft commits to **keeping the service running**. Not to keeping your data.
- The recycle bin and built-in retention are not backup—they are convenience features, with a window of a few weeks or months.
- Replication is not backup either. What is deleted gets replicated as deleted.
- There are four everyday situations where this comes to light—and all four can be prevented with a separate backup.

</div>

“Everything we have is in the cloud, so it's safe.” We hear this sentence
often, and there is some truth to it: Microsoft 365 is backed by an
infrastructure that no Hungarian SMB could ever afford. The
server room, the redundancy, the uninterrupted operation—these really are
solved problems.

It's just that these are not what usually breaks.

## What Microsoft commits to, and what it doesn't

In the world of cloud services, this is called **shared responsibility**. The
idea is simple: the provider is responsible for the platform, the client for the data. This is
not a fine-print loophole but the foundation of the model—Microsoft communicates it openly.

<figure class="abra">
<svg viewBox="0 0 880 254" role="img" aria-labelledby="abra-felelosseg">
<title id="abra-felelosseg">The two sides of shared responsibility. Microsoft is responsible for the data center, for keeping the service running, for platform-level security and for replication between its sites. The client is responsible for the data itself, for who can access it, for how long it is retained, and for whether it can be restored.</title>
<text class="abra__mono" x="210" y="14" text-anchor="middle">WHAT MICROSOFT COVERS</text>
<rect class="abra__doboz" x="10" y="26" width="400" height="180" rx="4" />
<rect class="abra__sav" x="26" y="42" width="368" height="30" rx="2" />
<text class="abra__kicsi" x="210" y="62" text-anchor="middle">Data center, hardware, power</text>
<rect class="abra__sav" x="26" y="80" width="368" height="30" rx="2" />
<text class="abra__kicsi" x="210" y="100" text-anchor="middle">Running the service</text>
<rect class="abra__sav" x="26" y="118" width="368" height="30" rx="2" />
<text class="abra__kicsi" x="210" y="138" text-anchor="middle">Platform-level security</text>
<rect class="abra__sav" x="26" y="156" width="368" height="30" rx="2" />
<text class="abra__kicsi" x="210" y="176" text-anchor="middle">Replication between their sites</text>
<path class="abra__vonal" stroke-dasharray="5 5" d="M440 20 V212" />
<text class="abra__mono" x="670" y="14" text-anchor="middle">YOUR RESPONSIBILITY</text>
<rect class="abra__kiemelt" x="470" y="26" width="400" height="180" rx="4" />
<rect class="abra__sav" x="486" y="42" width="368" height="30" rx="2" />
<text class="abra__kicsi" x="670" y="62" text-anchor="middle">Your data</text>
<rect class="abra__sav" x="486" y="80" width="368" height="30" rx="2" />
<text class="abra__kicsi" x="670" y="100" text-anchor="middle">Who can access what</text>
<rect class="abra__sav" x="486" y="118" width="368" height="30" rx="2" />
<text class="abra__kicsi" x="670" y="138" text-anchor="middle">How long to keep it</text>
<rect class="abra__sav" x="486" y="156" width="368" height="30" rx="2" />
<text class="abra__kicsi" x="670" y="176" text-anchor="middle">Can it be restored</text>
<text class="abra__mono" x="440" y="238" text-anchor="middle">THE DIVIDING LINE—NOT FINE PRINT, THE BASIS OF THE MODEL</text>
</svg>
</figure>

In other words: if a fire breaks out in a Microsoft data center, that is their problem, and they
will solve it. But if a colleague accidentally deletes a folder, that is your problem.

## The recycle bin is not a backup

Microsoft 365 has a recycle bin, a Deleted Items folder, and retention
settings. These are useful, and they solve most everyday mistakes—but
for two reasons they do not replace backup.

The first is that **they keep things for a limited time**. The exact window varies by service and
by setting, but it is typically measured in a few weeks, at most a few months.
Whatever is beyond that is gone.

The second is that **replication is not backup**. Microsoft does copy your
data to several places—but if a file is deleted or encrypted, then it is copied
everywhere as deleted or encrypted. Replication protects against hardware failure,
not against mistakes.

> **Replication protects you against a failed disk. Not against someone deleting something.**

| What built-in retention protects against | What it does not |
|---|---|
| An email accidentally deleted yesterday | A folder deleted six months ago that, it now turns out, was needed |
| A failed disk at the provider | Ransomware that also encrypts the synced files |
| A brief service outage | A compromised account that an attacker uses to delete things deliberately |
| Undoing a change | A departed colleague's mailbox after the license is canceled |

## Four situations where this comes to light

These are not theoretical risks. These are the four cases you run into
in practice.

**The accidental deletion noticed too late.** Someone tidies up a
shared folder. Months later it turns out that an old contract has
disappeared too—by then the recycle bin was emptied long ago.

**The departing colleague.** The employee leaves, and the license is canceled so it no longer
has to be paid for. The mailbox disappears with it—along with the client correspondence in it.

**The compromised account.** If someone gets in without authorization, they don't just read: they can also delete,
and cover their tracks. We covered this risk and how to defend against it [in a separate, earlier post](/en/blog/passkeys-passwordless-sign-in/).

**The retroactive request.** A legal dispute, a tax audit or an audit
asks for two years of email. If the retention policy is shorter than that, there is nothing
to hand over—and that is no excuse.

## What this means in practice

Not that Microsoft 365 is a bad choice. Quite the opposite: for most
companies it is better than their own mail server. It only means that **backup
remains a separate task**, just as it was with your own server.

The good news is that this is not a big project. A backup solution built for
Microsoft 365 backs up mailboxes, OneDrive and SharePoint content, and Teams
messages to a separate storage location independent of Microsoft, from which
items can also be restored selectively.

<ol class="lepesek">
<li><strong>See what is where.</strong> Email, the shared document library, personal cloud storage, Teams conversations. At most companies, a good part of the important material lives in personal OneDrives, which nobody notices.</li>
<li><strong>Set a retention period.</strong> How far back do you need to be able to access an email or a document? This is a business and legal question, not an IT one—and it determines what needs to be configured.</li>
<li><strong>Keep the backup outside Microsoft.</strong> A separate, independent copy is valuable precisely because it is not managed by the same account, the same permissions or the same provider.</li>
<li><strong>Do not close departing colleagues' accounts by deleting them.</strong> Have a written procedure for what happens when someone leaves: what gets archived, what is handed over to another colleague, and when the license can be canceled.</li>
<li><strong>Test the restore.</strong> Ask for a specific file that was deleted six months ago to be restored. Until the answer comes back, you do not know whether the backup actually works.</li>
</ol>

<details>
<summary>Technical details</summary>

- **Data to back up:** Exchange Online mailboxes (including calendars and contacts), OneDrive for Business, SharePoint Online document libraries, Teams channels and files
- **Independent storage:** the copy should not be in the tenant being backed up, nor accessible with the same permissions
- **Retention policy** with multiple generations, for the period defined by the business
- **Selective restore:** at the level of a single email, a single file or an entire mailbox—a full reload is unusable in practice
- **Immutable copy**, so that the backup itself cannot be deleted or encrypted either
- **Backing up permissions matters too:** a restored document library without its sharing settings is only half a solution
- **Reported backup status:** a daily check that the job not only started but also completed

</details>

## The question worth asking

If you are unsure whether this affects you, a single question settles it:

**If it turned out tomorrow that the email correspondence for a client contract from last year had been deleted,
could you restore it—and how long would it take?**

If the answer is uncertain, then the question of backup is open. That is not a problem: it is like that at most
companies, typically because nobody has ever asked this question.

<div class="zaras">

**Let's look together at what is backed up today—and what is not.** At the end of the assessment, you receive a
documented picture of your current state and a list of risks, even if you do not continue
working with us. [Request an assessment](/en/contact/), or read about how
we verify recoverability:
[Audit Restore Validation and restore testing](/en/services/audit-restore-validation/).

</div>
