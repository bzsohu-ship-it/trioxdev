/**
 * Kétnyelvű útvonaltérkép: minden magyar oldal angol párja.
 *
 * Ez az egyetlen igazságforrás a nyelvváltóhoz, a hreflang-linkekhez és az
 * angol tartalomgyűjtemények slugjaihoz. Új oldal vagy blogbejegyzés esetén
 * ide is fel kell venni a párt — a `npm run check:nyelv` szól, ha kimaradt.
 * Fordítási útmutató: docs/angol-forditasi-utmutato.md
 */

export type Nyelv = 'hu' | 'en';

/** Fix oldalak: magyar útvonal → angol útvonal. */
const OLDALAK: Record<string, string> = {
  '/': '/en/',
  '/szolgaltatasok/': '/en/services/',
  '/technologia/': '/en/technology/',
  '/partnerek/': '/en/partners/',
  '/biztonsag/': '/en/security/',
  '/esettanulmanyok/': '/en/case-studies/',
  '/rolunk/': '/en/about/',
  '/kapcsolat/': '/en/contact/',
  '/tamogatas/': '/en/support/',
  '/gyik/': '/en/faq/',
  '/blog/': '/en/blog/',
};

/** Szolgáltatások: magyar slug → angol slug. */
export const SZOLGALTATAS_SLUG: Record<string, string> = {
  iaas: 'iaas',
  dcaas: 'dcaas',
  saas: 'saas',
  'menedzselt-it-uzemeltetes': 'managed-it-operations',
  'helyi-uzemeltetes': 'on-premises-and-hybrid-it',
  'audit-restore-validation': 'audit-restore-validation',
};

/** Blogbejegyzések: magyar slug → angol slug. */
export const BLOG_SLUG: Record<string, string> = {
  'ai-az-irodaban-jogosultsagok': 'ai-in-the-office-permissions',
  'ai-csalas-hangklonozas': 'ai-voice-cloning-fraud',
  'ai-ugynokok-cselekvo-mi': 'ai-agents-that-act',
  'arnyek-ai-ingyenes-eszkozok': 'shadow-ai-free-tools',
  'biztonsagtudatossag-knowbe4-nis2-dora': 'security-awareness-knowbe4-nis2-dora',
  'mcp-az-ai-usb-c-je': 'mcp-the-usb-c-of-ai',
  'mennyi-ideig-birja-rendszer-nelkul': 'how-long-without-your-systems',
  'microsoft-365-mentes-felelosseg': 'microsoft-365-backup-responsibility',
  'passkey-jelszo-nelkuli-belepes': 'passkeys-passwordless-sign-in',
  'uj-honlap': 'new-website',
};

/** Az összes pár egy listában: [magyar útvonal, angol útvonal]. */
export const UTPAROK: [string, string][] = [
  ...Object.entries(OLDALAK),
  ...Object.entries(SZOLGALTATAS_SLUG).map(
    ([hu, en]): [string, string] => [`/szolgaltatasok/${hu}/`, `/en/services/${en}/`]
  ),
  ...Object.entries(BLOG_SLUG).map(
    ([hu, en]): [string, string] => [`/blog/${hu}/`, `/en/blog/${en}/`]
  ),
];

const HU_EN = new Map(UTPAROK);
const EN_HU = new Map(UTPAROK.map(([hu, en]) => [en, hu]));

/** Perjellel zárt alak, hogy a `/rolunk` és a `/rolunk/` ugyanaz legyen. */
function normal(ut: string): string {
  return ut.endsWith('/') ? ut : `${ut}/`;
}

export function nyelvAz(ut: string): Nyelv {
  return ut === '/en' || ut.startsWith('/en/') ? 'en' : 'hu';
}

/**
 * Az adott oldal párja a másik nyelven. Ha nincs pár (pl. 404), a másik nyelv
 * kezdőlapja — a nyelvváltó így sosem visz nem létező oldalra.
 */
export function parja(ut: string): string {
  const n = normal(ut);
  if (nyelvAz(n) === 'en') return EN_HU.get(n) ?? '/';
  return HU_EN.get(n) ?? '/en/';
}

/** Van-e az oldalnak valódi párja (a hreflang csak ilyenkor kerül ki). */
export function vanParja(ut: string): boolean {
  const n = normal(ut);
  return HU_EN.has(n) || EN_HU.has(n);
}
