import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Tulisan blog ada di src/content/blog/<lang>/<slug>.md
 * Pakai slug (nama file) yang sama di id/ dan en/ agar tombol ganti bahasa
 * mengarah ke terjemahan yang sesuai.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
