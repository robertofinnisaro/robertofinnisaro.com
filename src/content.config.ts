import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  published: z.coerce.date(),
  updated: z.coerce.date().optional(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional()
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: baseSchema.extend({
    status: z.enum(['planned', 'in-progress', 'complete']).default('complete'),
    disciplines: z.array(z.string()).default([]),
    repository: z.string().url().optional()
  })
});

const tutorials = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tutorials' }),
  schema: baseSchema.extend({
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
    duration: z.string().optional()
  })
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: baseSchema.extend({
    topic: z.string(),
    status: z.enum(['note', 'study', 'published']).default('note')
  })
});

const prints = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/prints' }),
  schema: baseSchema.extend({
    printer: z.string(),
    material: z.string(),
    layerHeight: z.string().optional(),
    printTime: z.string().optional()
  })
});

export const collections = { projects, tutorials, research, prints };
