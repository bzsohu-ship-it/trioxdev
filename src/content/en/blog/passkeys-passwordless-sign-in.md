---
cim: "The password that can't be stolen"
leiras: "The major providers are switching on passwordless sign-in one after another. In plain terms: what it is, why it is more secure than even an SMS code, and when it makes sense for a company to make the move."
datum: 2026-07-07
---

<div class="osszefoglalo">

In brief

- Passwords fail again and again because they **can be told to someone**—and whatever can be told can also be tricked out of you.
- A code received by SMS helps a lot, but it does not solve everything: it, too, can be handed over to a well-made fake site.
- The point of a passkey is that **the secret never leaves your device**. There is nothing to steal and nothing to trick out of you.
- Companies do not have to switch overnight. The order matters: critical accounts first, then the rest.

</div>

In recent years, most companies have had the same password rule: it must be long,
contain a number and a capital letter, and be changed every three months. The result is well
known: `Spring2026!`, then `Summer2026!`, stuck to the corner of the monitor.

It is not that colleagues are careless. The expectation is unrealistic. Nobody can keep
thirty different, complex passwords in their head—so they don't.

## Passwords always fail at the same point

The password has a structural flaw: it is a **shared secret**. You know it, and the
provider knows it too. This means that when you sign in, you have to hand it
over—and anything that can be handed over can be tricked out of you.

That is where most attacks come from. Nobody cracks the password; they simply ask for it. They send
an email that looks like the sign-in page of your bank or your email system,
you type in the password, and from then on two people know it.

The other scenario is even more mundane: the database of some website you used long ago
leaks. If you used the same password there as for your company
email, the attacker does not even have to trick anything out of you.

## “But we use SMS codes”

That is already a serious step forward, and on its own it rules out most attacks.
It is worth knowing where its limits are, though.

If the fake site is well made, it asks not only for the password but also for the code—and
passes them on to the real site in real time. You sign in, and so does the attacker.
Besides, a phone number is not untouchable either: SIM-swap fraud is a long-known
method. And then there is the most human risk: if someone gets an approval prompt
popping up ten times a day, sooner or later they will tap it even when they did not
initiate it.

> **SMS codes are not bad. They are just vulnerable at the same point as the password: you have to pass something on.**

## What is a passkey—in simple terms

With a passkey, signing in does not work by
you telling a secret. Instead, your device **proves** that it holds
the key—without showing it.

Take an analogy. A password is like calling out the watchword at the
gate: anyone who hears it can get in from then on. A passkey is like
a seal stamp: the gatekeeper sees the impression, recognizes it and lets you in—but the
stamp stays in your pocket the whole time.

In practice, this means that when you sign in, your phone or
computer asks for your fingerprint, your face or your PIN, and that's it. The
key stored on the device does the rest.

<figure class="abra">
<svg viewBox="0 0 880 268" role="img" aria-labelledby="abra-passkey">
<title id="abra-passkey">With a password sign-in, the secret travels over the network, so it can be intercepted or entered on a fake site, and reused later. With a passkey, the key stays on the device; only a signature is sent, which is valid solely for that particular site.</title>
<text class="abra__mono" x="10" y="14">PASSWORD</text>
<rect class="abra__doboz" x="10" y="26" width="230" height="76" rx="4" />
<text class="abra__cimke" x="125" y="58" text-anchor="middle">Your device</text>
<text class="abra__kicsi" x="125" y="80" text-anchor="middle">has the secret</text>
<path class="abra__vonal" d="M240 64 H324" />
<path class="abra__nyil" d="M332 64 L322 58 L322 70 Z" />
<text class="abra__mono" x="286" y="50" text-anchor="middle">SECRET IS SENT</text>
<rect class="abra__doboz" x="335" y="26" width="180" height="76" rx="4" />
<text class="abra__cimke" x="425" y="58" text-anchor="middle">The provider</text>
<text class="abra__kicsi" x="425" y="80" text-anchor="middle">knows the secret too</text>
<path class="abra__vonal" stroke-dasharray="5 5" d="M515 64 H599" />
<path class="abra__nyil" d="M607 64 L597 58 L597 70 Z" />
<rect class="abra__doboz" x="610" y="26" width="260" height="76" rx="4" />
<text class="abra__cimke" x="740" y="58" text-anchor="middle">Can be stolen, relayed</text>
<text class="abra__kicsi" x="740" y="80" text-anchor="middle">and reused from anywhere</text>
<text class="abra__mono" x="10" y="146">PASSKEY</text>
<rect class="abra__kiemelt" x="10" y="158" width="230" height="76" rx="4" />
<text class="abra__cimke" x="125" y="190" text-anchor="middle">Your device</text>
<text class="abra__kicsi" x="125" y="212" text-anchor="middle">the key never leaves</text>
<path class="abra__vonal" d="M240 196 H324" />
<path class="abra__nyil" d="M332 196 L322 190 L322 202 Z" />
<text class="abra__mono" x="286" y="182" text-anchor="middle">ONLY A SIGNATURE</text>
<rect class="abra__doboz" x="335" y="158" width="180" height="76" rx="4" />
<text class="abra__cimke" x="425" y="190" text-anchor="middle">The provider</text>
<text class="abra__kicsi" x="425" y="212" text-anchor="middle">only verifies</text>
<path class="abra__vonal" d="M515 196 H599" />
<path class="abra__nyil" d="M607 196 L597 190 L597 202 Z" />
<rect class="abra__kiemelt" x="610" y="158" width="260" height="76" rx="4" />
<text class="abra__cimke" x="740" y="190" text-anchor="middle">Nothing to steal</text>
<text class="abra__kicsi" x="740" y="212" text-anchor="middle">and invalid on other sites</text>
</svg>
</figure>

This leads to its most important property: **a passkey is bound to the one
site where it was created**. If a deceptively similar fake site
asks you to sign in, the key simply does not work there. Not because you
spot the fraud—but because the technology does not even allow it.

## The three options side by side

| | Password | Password + SMS code | Passkey |
|---|---|---|---|
| Can be phished with a fake site | Yes | Typically yes | No |
| Can be obtained from a leaked database | Yes | Partly | No |
| Can be reused on another site | Yes | Yes | No |
| Requires remembering something | Yes | Yes | No |
| Sign-in speed | Slow | Slower | Fast |

## “And what if the phone gets lost?”

This is the most common—and entirely fair—question. The answer is that the same thing
happens as with your bank card: it gets blocked, and you get a new one.

In practice, there are two ways to prepare for this. Either keys are put on several devices
(phone and laptop too), or the keys sync to your account and
become available on the new device. At companies, there is also an administrator who
can register a new device—just as today they are the one who can reset a password.

What does have to be done **in advance**, though, is the recovery process: who
verifies the colleague's identity, and through which channel. If this has not been
worked out, this is exactly where the attacker will try.

## When does it make sense to start?

Not all at once, and not everywhere. The rollout succeeds if it happens
in order, and the old sign-in method stays in place until the new one has bedded in.

<ol class="lepesek">
<li><strong>Critical accounts first.</strong> Administrator access, email and financial systems. This is where the damage would be greatest, and where the fewest people are affected.</li>
<li><strong>Have a fallback sign-in method.</strong> Everyone should have at least two registered methods, and there should be an emergency administrator account that still gets you in if something gets stuck.</li>
<li><strong>Prepare the recovery process.</strong> Write down what happens when a device is lost or replaced, and who approves it. If it has not been worked out, this process will be the weakest point of the system.</li>
<li><strong>Then the rest of the staff can follow.</strong> Group by group, with a short briefing. Experience shows that resistance is low: signing in gets faster, and there are no more password changes.</li>
<li><strong>Tighten up at the end.</strong> Once the keys work for everyone, the weaker sign-in methods can be gradually turned off—otherwise the attacker will simply use the old route.</li>
</ol>

<details>
<summary>Technical details</summary>

- **FIDO2 / WebAuthn standard**—a passkey is not one vendor's product but an open standard; the major platforms and browsers support it
- **Device-bound or synced key**: in stricter environments a device-bound key (hardware key), in everyday ones a key synced to the account is the practical choice
- **Windows Hello for Business** and a mobile authenticator app in passwordless mode—in a corporate device fleet, this is typically the first step
- **Hardware security keys** (USB/NFC) for privileged, administrator access
- **Conditional access policies**: based on device compliance, location and risk, so that exceptions do not become loopholes
- **Emergency (“break-glass”) account**: separately stored, strictly logged access for the case where authentication becomes unavailable
- **Blocking legacy protocols**: disabling the old access paths that allow single-factor sign-in—without this, the rollout protects only partially
- **Logging**: tracking successful and failed sign-ins and key registrations

</details>

## What you can do today

If the switch does not fit in right now, two things still improve the situation. One is
introducing a password manager—so that every account has its own long password
that nobody has to keep in their head. The other is to favor longer passwords
instead of forced password changes: regular forced changes have been
shown to lead to weaker passwords.

> **The goal is not for your colleagues to take better care of their passwords. It is for signing in not to require anything that needs taking care of.**

<div class="zaras">

**Rolling out passwordless sign-in is not a project that takes weeks**—but
the order and the recovery process are worth thinking through in advance. If you
would like to see where your company's authentication stands today, [get in touch](/en/contact/),
or read about [our approach to security](/en/security/).

</div>
