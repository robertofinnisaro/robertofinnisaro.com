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
  cover: z.string().optional(),
});

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects',
  }),
  schema: baseSchema.extend({
    status: z
      .enum(['planned', 'in-progress', 'complete'])
      .default('complete'),
    disciplines: z.array(z.string()).default([]),
    repository: z.string().url().optional(),
  }),
});

const tutorials = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/tutorials',
  }),
  schema: baseSchema.extend({
    difficulty: z
      .enum(['beginner', 'intermediate', 'advanced'])
      .default('beginner'),
    duration: z.string().optional(),
  }),
});

const research = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/research',
  }),
  schema: baseSchema.extend({
    topic: z.string(),
    status: z
      .enum(['note', 'study', 'published'])
      .default('note'),
  }),
});

const prints = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/prints',
  }),
  schema: baseSchema.extend({
    printer: z.string(),
    material: z.string(),
    layerHeight: z.string().optional(),
    printTime: z.string().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/publications',
  }),

  schema: baseSchema.extend({
    abstract: z.string(),

    authors: z.array(z.string()).min(1),

    publicationType: z.enum([
      'Journal Article',
      'Conference Paper',
      'Preprint',
      'Technical Report',
      'Book Chapter',
      'Thesis',
      'Dataset',
      'Poster',
      'Other',
    ]),

    venue: z.string().optional(),
    publisher: z.string().optional(),
    volume: z.string().optional(),
    issue: z.string().optional(),
    pages: z.string().optional(),

    doi: z.string().optional(),
    url: z.string().url().optional(),
    pdf: z.string().optional(),
    repository: z.string().url().optional(),

    citation: z.string().optional(),
    bibtex: z.string().optional(),
  }),
});

const systems = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/systems',
  }),

  schema: baseSchema.extend({
    systemType: z.enum([
      'infrastructure',
      'compute',
      'network',
      'storage',
      '3d-printer',
      'fabrication',
      'automation',
      'electronics',
      'workshop',
      'software',
      'operations',
      'other',
    ]),

    contentType: z.enum([
      'overview',
      'documentation',
      'chapter',
      'reference',
      'diagram',
    ])
    .default('documentation'),
    
    referenceType: z.enum([
      'architecture',
      'inventory',
      'host',
      'network',
      'storage',
      'software',
      'operations',
      'validation',
      'glossary',
    ]).optional(),

    status: z
      .enum([
        'planned',
        'building',
        'active',
        'maintenance',
        'retired',
      ])
      .default('active'),

    order: z.number().int().default(0),

    chapter: z.number().int().positive().optional(),
    series: z.string().optional(),
    section: z.string().optional(),

    estimatedTime: z.string().optional(),

    difficulty: z
      .enum([
        'Beginner',
        'Intermediate',
        'Advanced',
      ])
      .optional(),

    hardware: z.array(z.string()).default([]),
    software: z.array(z.string()).default([]),

    parent: z.string().optional(),

    repository: z.string().url().optional(),
    documentation: z.string().url().optional(),
  }),
});

export const collections = {
  projects,
  tutorials,
  research,
  prints,
  publications,
  systems,
};