import { defineCollection, reference, z } from 'astro:content';
import { file, glob } from 'astro/loaders';
import type { ZodRawShape } from 'astro/zod';

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
    ]).optional(),

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

    part: z.number().int().min(0).optional(),
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

// Modules taught, one entry per module with a year-by-year role history.
// Tutorials stay in their own collection and appear as a section of Teaching.
const teaching = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/teaching',
  }),
  schema: z.object({
    title: z.string(),
    code: z.string().optional(),
    description: z.string().optional(),
    kind: z
      .enum(['module', 'course', 'lecture', 'workshop', 'supervision', 'other'])
      .default('module'),
    institution: z.string(),
    level: z.string().optional(),
    // Academic years as written, e.g. "2024–25", newest last.
    roles: z
      .array(
        z.object({
          year: z.string(),
          role: z.string(),
        }),
      )
      .min(1),
    current: z.boolean().default(false),
    // Slides, handouts and other material: files under public/ or external links.
    materials: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        }),
      )
      .default([]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Supervision, technical support, outreach and recognition that sit alongside
// module teaching. One YAML list; each item needs a unique id.
const teachingActivities = defineCollection({
  loader: file('./src/content/teaching-activities.yaml'),
  schema: z.object({
    category: z.enum(['supervision', 'support', 'outreach', 'recognition']),
    title: z.string(),
    detail: z.string().optional(),
    years: z.array(z.string()).min(1),
  }),
});

// A book is a reader-facing front door onto a system's Build Guide: the
// chapters stay with the system, the book adds the title and framing.
const books = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/books',
  }),
  schema: baseSchema.extend({
    subtitle: z.string().optional(),
    status: z
      .enum(['planned', 'drafting', 'published'])
      .default('drafting'),
    system: z.string(),
  }),
});

// 3D printing database. Records link to each other by entry ID (the file name
// without its extension), and a link to a missing entry fails the build.
function printingCollection<T extends ZodRawShape>(folder: string, shape: T) {
  return defineCollection({
    loader: glob({
      pattern: '**/*.{md,mdx}',
      base: `./src/content/printing/${folder}`,
    }),
    schema: z.object({
      ...shape,
      added: z.coerce.date(),
      updated: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
  });
}

const range = z.object({
  min: z.number(),
  max: z.number(),
});

const brands = printingCollection('brands', {
  name: z.string(),
  website: z.string().url().optional(),
  country: z.string().optional(),
});

const filaments = printingCollection('filaments', {
  name: z.string(),
  brand: reference('brands'),
  material: z.string(),
  finish: z.string().optional(),
  colour: z.object({
    name: z.string(),
    hex: z.string().regex(/^#[0-9a-fA-F]{6}$/).optional(),
  }),
  diameter: z.number().default(1.75),
  density: z.number().optional(),
  spoolWeight: z.number().optional(),
  // The manufacturer's recommendations, as printed on the spool or datasheet.
  nozzleTemp: range.optional(),
  bedTemp: range.optional(),
  drying: z
    .object({
      temp: z.number(),
      hours: z.number(),
    })
    .optional(),
  td: z.number().optional(),
  url: z.string().url().optional(),
  spools: z
    .array(
      z.object({
        purchased: z.coerce.date(),
        weight: z.number().optional(),
        opened: z.coerce.date().optional(),
        finished: z.coerce.date().optional(),
        notes: z.string().optional(),
      }),
    )
    .default([]),
});

const printers = printingCollection('printers', {
  name: z.string(),
  manufacturer: z.string(),
  model: z.string(),
  kinematics: z.string().optional(),
  buildVolume: z
    .object({
      x: z.number(),
      y: z.number(),
      z: z.number(),
    })
    .optional(),
  firmware: z.string().optional(),
  hotend: z.string().optional(),
  extruder: z.string().optional(),
  nozzles: z.array(z.string()).default([]),
  bedSurfaces: z.array(z.string()).default([]),
  enclosure: z.boolean().optional(),
  mods: z.array(z.string()).default([]),
  status: z.enum(['active', 'planned', 'retired']).default('active'),
  acquired: z.coerce.date().optional(),
  order: z.number().int().default(0),
});

const configurations = printingCollection('configurations', {
  name: z.string(),
  printer: reference('printers'),
  nozzle: z.string().optional(),
  plate: z.string().optional(),
  multiMaterial: z
    .array(
      z.object({
        unit: z.string(),
        slots: z.number().int().positive().optional(),
        notes: z.string().optional(),
      }),
    )
    .default([]),
  accessories: z.array(z.string()).default([]),
  active: z.boolean().default(true),
  // Slicer files for the setup as a whole: the machine preset and the
  // process (print) presets, which are not tied to a single filament.
  machineFile: z.string().optional(),
  // Folder name under src/firmware/ holding this setup's firmware config.
  firmware: z.string().optional(),
  presets: z
    .array(
      z.object({
        name: z.string(),
        layerHeight: z.number().optional(),
        purpose: z.string().optional(),
        file: z.string(),
      }),
    )
    .default([]),
});

const profiles = printingCollection('profiles', {
  name: z.string(),
  filament: reference('filaments'),
  configuration: reference('configurations'),
  purpose: z.string().optional(),
  slicer: z.string(),
  slicerVersion: z.string().optional(),
  layerHeight: z.number().optional(),
  nozzleTemp: z
    .object({
      firstLayer: z.number().optional(),
      other: z.number().optional(),
    })
    .optional(),
  bedTemp: z
    .object({
      firstLayer: z.number().optional(),
      other: z.number().optional(),
    })
    .optional(),
  maxVolumetricSpeed: z.number().optional(),
  flowRatio: z.number().optional(),
  pressureAdvance: z.number().optional(),
  retraction: z
    .object({
      length: z.number(),
      speed: z.number().optional(),
    })
    .optional(),
  fan: range.optional(),
  // Path to the exported slicer profile under public/, e.g. /printing/profiles/x.json.
  file: z.string().optional(),
});

export const collections = {
  projects,
  tutorials,
  research,
  prints,
  publications,
  systems,
  books,
  teaching,
  teachingActivities,
  brands,
  filaments,
  printers,
  configurations,
  profiles,
};