import type { CollectionEntry } from 'astro:content';

export type SystemEntry = CollectionEntry<'systems'>;

export type DocumentRole = 'overview' | 'chapter' | 'reference';

// Entry IDs follow `<system>/<section>/<slug>`, so the folder decides a
// document's role rather than its frontmatter.
export function getDocumentRole(entry: SystemEntry): DocumentRole {
  const [, section] = entry.id.split('/');

  if (section === 'build-guide') return 'chapter';
  if (section === 'reference') return 'reference';
  return 'overview';
}

export function getSystemId(entry: SystemEntry): string {
  return entry.id.split('/')[0];
}

// Build Guide Part titles, keyed by system ID then by the `part` number used
// in chapter frontmatter. Part 0 holds unnumbered front matter.
export const buildGuideParts: Record<string, Record<number, string>> = {
  'home-lab': {
    0: 'Front Matter',
    1: 'Foundations',
    2: 'The Platform',
    3: 'Services',
    4: 'Operations',
  },
};
