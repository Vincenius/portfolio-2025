import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      date: z.string(),
      headline: z.string().optional(),
      previewText: z.string().optional(),
      image: image().optional(),
    }),
});

export const collections = { blog };
