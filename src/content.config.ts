import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const szolgaltatasok = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/szolgaltatasok' }),
  schema: z.object({
    cim: z.string(),
    osszefoglalo: z.string(),
    sorrend: z.number().default(99),
    cimke: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    cim: z.string(),
    leiras: z.string(),
    datum: z.coerce.date(),
    szerzo: z.string().default('Triox Informatika'),
    piszkozat: z.boolean().default(false),
  }),
});

export const collections = { szolgaltatasok, blog };
