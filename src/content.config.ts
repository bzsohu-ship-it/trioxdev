import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const szolgaltatasSema = z.object({
  cim: z.string(),
  osszefoglalo: z.string(),
  sorrend: z.number().default(99),
  cimke: z.string().optional(),
  szelesLayout: z.boolean().default(false),
});

const blogSema = z.object({
  cim: z.string(),
  leiras: z.string(),
  datum: z.coerce.date(),
  szerzo: z.string().default('Triox Informatika'),
  piszkozat: z.boolean().default(false),
});

const szolgaltatasok = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/szolgaltatasok' }),
  schema: szolgaltatasSema,
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: blogSema,
});

// Az angol (/en/) változat. A fájlnév az angol slug, a magyar párját a
// src/i18n/utak.ts rendeli hozzá — a séma szándékosan ugyanaz, mint a magyaré.
const szolgaltatasokEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/en/services' }),
  schema: szolgaltatasSema,
});

const blogEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/en/blog' }),
  schema: blogSema,
});

export const collections = { szolgaltatasok, blog, szolgaltatasokEn, blogEn };
