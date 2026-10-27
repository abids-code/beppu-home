import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// One Markdown file per news post. Japanese is the source of truth.
// English files mirror the same post number; a missing English file means the
// post has not been translated yet and the English page shows a notice.
const newsSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  category: z.enum(['case', 'article']),
  originalUrl: z.url(),
  legacyNumber: z.number().int(),
  // Source date looks like a typo (2011 between 2021 entries); shown as unconfirmed.
  dateUnverified: z.boolean().default(false),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news/ja' }),
  schema: newsSchema,
});

const newsEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news/en' }),
  schema: newsSchema,
});

// Legal texts are taken from the published site. English pages show the Japanese text with a notice.
const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({}),
});

export const collections = { news, newsEn, legal };
