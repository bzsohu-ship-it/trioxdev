---
cim: "Your boss calls and asks for a transfer. Except it isn't your boss."
leiras: "For most companies, the most tangible effect of artificial intelligence isn't efficiency—it's that fraud has become indistinguishable from the real thing. What you can do about it—mostly without software."
datum: 2026-07-21
---

<div class="osszefoglalo">

In brief

- Fraudsters use the same tools you do: artificial intelligence that writes text and imitates voices.
- That hasn't made them smarter. What made it dangerous is that **looking credible has become cheap**.
- The old warning signs—poor Hungarian, an odd greeting, a botched logo—are disappearing one by one.
- Defense, however, has stayed simple: a few rules that everyone in the company knows are worth more than any filter.

</div>

Picture a Monday afternoon. Someone in finance gets a phone call. On the other
end is the managing director's voice—with their own intonation, their usual
half-finished sentences. A supplier invoice has to be paid ahead of the normal
schedule, because a contract is stuck and has to be closed today. The employee
makes the transfer. Two days later it turns out that the managing director was
in negotiations all day and never made that call.

A few years ago this story belonged in a movie. Today a few minutes of public
recording—a conference video, a radio interview, a greeting shared on social
media—is enough for someone to convincingly imitate a person's voice. And
recordings of company executives are typically available online.

## What used to give fraud away no longer does

Over the past ten years, we mostly recognized phishing emails because you could
tell they had been made with a translation program. Odd word order, missing
accent marks, sentences straining for an official tone yet still sounding
foreign. Companies' security training was built on this too: “check the
spelling.”

That handhold is gone. Today's language models write flawless Hungarian, know
the phrasing of formal correspondence, and if they get a few samples of the
company's public communication, they get the style right too.

| How we used to recognize fraud | Why it doesn't work today |
|---|---|
| Bad spelling, sentences that don't sound like real Hungarian | The text is written by a machine, flawlessly |
| Generic greeting (“Dear Customer,”) | The name, the job title and the project name are all correct |
| Botched logo, off-brand look | A fake site can be copied pixel for pixel |
| “I'd recognize their voice live, anyway” | A voice can be imitated from a few minutes of recording |
| Unknown sender | The request may come from a compromised, genuine partner account |

> **Fraud hasn't become more dangerous by getting smarter. It has become more dangerous because looking credible has become cheap.**

## Why smaller companies in particular?

It's tempting to assume that attackers are interested in large corporations.
Practice shows otherwise: at a twenty-person company, a transfer is often
initiated by a single person, the decision chain is short, and everyone knows
the boss—so “the boss asked for it” is reason enough on its own.

On top of that, preparing an attack costs almost nothing today. There's no need
to research targets one by one: the model writes the email, generates the
voice, and copies the company details from the public company registry and the
website. What used to be a targeted, expensive attack against a few large
companies can now be sent out en masse.

## The chain can always be broken at the same point

The deception is almost always the same three steps. And it can almost always
be stopped at the same point: **between the second and the third step**, by
verifying the request through a different channel.

<figure class="abra">
<svg viewBox="0 0 880 226" role="img" aria-labelledby="abra-csalas">
<title id="abra-csalas">The three steps of fraud: a credible approach, then pressure and a request for secrecy, and finally the transfer or the handover of data. The chain breaks before the third step if the request is verified through a different, known channel.</title>
<text class="abra__mono" x="130" y="14" text-anchor="middle">1. APPROACH</text>
<rect class="abra__doboz" x="10" y="26" width="240" height="88" rx="4" />
<text class="abra__cimke" x="130" y="62" text-anchor="middle">Familiar voice &amp; style</text>
<text class="abra__kicsi" x="130" y="86" text-anchor="middle">call, email or voice message</text>
<path class="abra__vonal" d="M250 70 H294" />
<path class="abra__nyil" d="M302 70 L292 64 L292 76 Z" />
<text class="abra__mono" x="425" y="14" text-anchor="middle">2. PRESSURE</text>
<rect class="abra__doboz" x="305" y="26" width="240" height="88" rx="4" />
<text class="abra__cimke" x="425" y="62" text-anchor="middle">“Do it right now”</text>
<text class="abra__kicsi" x="425" y="86" text-anchor="middle">and “don't tell anyone”</text>
<path class="abra__vonal" d="M545 70 H622" />
<path class="abra__nyil" d="M630 70 L620 64 L620 76 Z" />
<text class="abra__mono" x="750" y="14" text-anchor="middle">3. LOSS</text>
<rect class="abra__doboz" x="630" y="26" width="240" height="88" rx="4" />
<text class="abra__cimke" x="750" y="62" text-anchor="middle">Wire or password</text>
<text class="abra__kicsi" x="750" y="86" text-anchor="middle">no way back from here</text>
<path class="abra__vonal" stroke-dasharray="5 5" d="M588 18 V150" />
<rect class="abra__kiemelt" x="438" y="150" width="300" height="60" rx="4" />
<text class="abra__mono" x="588" y="174" text-anchor="middle">CALLBACK TO KNOWN NUMBER</text>
<text class="abra__kicsi" x="588" y="196" text-anchor="middle">the chain breaks here</text>
</svg>
</figure>

The key to verification is **not to use the contact details given in the
request**. If the email includes a phone number, we don't call that number
back. We call the one in the address book, the contract or the partner records.

## Five rules that cost nothing

<ol class="lepesek">
<li><strong>Callback rule.</strong> Any request involving a transfer, a change of bank account number or a password is always verified—through a different channel, using contact details known from before.</li>
<li><strong>Four-eyes principle above a threshold.</strong> Above an amount agreed in advance, two people approve the transfer. This rule isn't about trust; it's about the fact that one person is easier to deceive than two.</li>
<li><strong>Urgency itself is the warning sign.</strong> Someone who asks for something right now and tells you not to mention it to anyone is trying to keep you from exactly that verification. A real executive won't be offended by a callback.</li>
<li><strong>Bank account numbers only change on paper.</strong> We never accept a change to a partner's bank account number by email—this is one of the most common types of fraud today, and it causes serious losses.</li>
<li><strong>Make it explicit that mistakes are allowed.</strong> The size of the loss almost always depends on how many hours pass between the suspicion and the report. If an employee is afraid of the consequences, they keep quiet—and that's what costs the most.</li>
</ol>

These five rules fit on a single page, and you don't need any software for
them. They work because everyone knows them, and the boss sticks to them too.

## What's worth doing on the systems side

It's worth backing the rules with a technical layer—not because it protects you
on its own, but because it keeps a good share of attacks out of the mailbox in
the first place, and makes the rest traceable.

<details>
<summary>Technical details</summary>

- **Multi-factor authentication (MFA)** on every account, especially email—most abuse starts with a stolen password
- **Email authentication set up** (SPF, DKIM, DMARC), so that it isn't easy to send email in the company's name
- **Visual tagging of external senders** in the email system—this breaks the illusion that a message “came from inside”
- **Anti-phishing and impersonation protection** turned on in the email platform, with a maintained list of partners
- **Logging and alerts** for unusual sign-ins and for the creation of mailbox rules—attackers typically create a forwarding rule to delay being found out
- **Regular review of permissions**: who has access to the online banking interface and the partner records

</details>

## If it happens anyway

At that point what matters is time, not explanations. Notify the bank
first—in some cases a freshly initiated transfer can still be recalled. In
parallel, change passwords and sign the accounts out of all sessions, because
the deception often doesn't end with the transfer. What happened has to be
documented, and a police report filed; the insurer and the auditor will ask for
this as well.

> **The question isn't whether your employees will “fall for it.” It's whether there's a habitual move that stops the process before the money goes out.**

<div class="zaras">

**Let's see where your company stands now.** It doesn't take a big project:
turning on MFA, getting email authentication in order and a half-page internal
rule together handle the vast majority of attacks. If you're curious which of
these you already have in place, [write to us](/en/contact/)—you can read more
about [our approach to security](/en/security/) here.

</div>
