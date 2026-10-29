import { getCollection, type CollectionEntry } from 'astro:content';

export type SystemEntry = CollectionEntry<'systems'>;

export type DocumentRole = 'overview' | 'chapter' | 'reference';

type ReferenceType = NonNullable<SystemEntry['data']['referenceType']>;

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

// `<system>/overview.md` is the system's hub page.
export function isSystemHub(entry: SystemEntry): boolean {
  return entry.id === `${getSystemId(entry)}/overview`;
}

export function getEntryUrl(entry: SystemEntry): string {
  if (isSystemHub(entry)) return `/systems/${getSystemId(entry)}/`;
  return `/systems/${entry.id}/`;
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

// Reference groups, in display order.
export const referenceGroups: { type: ReferenceType; title: string }[] = [
  { type: 'architecture', title: 'Architecture' },
  { type: 'inventory', title: 'Inventory' },
  { type: 'host', title: 'Hosts' },
  { type: 'network', title: 'Networking' },
  { type: 'storage', title: 'Storage' },
  { type: 'software', title: 'Software' },
  { type: 'operations', title: 'Operations' },
  { type: 'validation', title: 'Validation' },
  { type: 'glossary', title: 'Glossary' },
];

export function getReferenceTypeTitle(type: ReferenceType | undefined): string {
  return referenceGroups.find((group) => group.type === type)?.title ?? 'Other';
}

const romanNumerals = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

export function getPartLabel(systemId: string, part: number): string {
  const title = buildGuideParts[systemId]?.[part] ?? `Part ${part}`;
  return part === 0 ? title : `Part ${romanNumerals[part] ?? part} · ${title}`;
}

export function getChapterLabel(entry: SystemEntry): string {
  return entry.data.chapter ? `Chapter ${entry.data.chapter}` : entry.data.title;
}

function byOrderThenTitle(a: SystemEntry, b: SystemEntry): number {
  return a.data.order - b.data.order || a.data.title.localeCompare(b.data.title);
}

export async function getSystemEntries(systemId?: string): Promise<SystemEntry[]> {
  const entries = await getCollection('systems', ({ data }) => !data.draft);
  return systemId
    ? entries.filter((entry) => getSystemId(entry) === systemId)
    : entries;
}

export async function getSystemHubs(): Promise<SystemEntry[]> {
  return (await getSystemEntries()).filter(isSystemHub).sort(byOrderThenTitle);
}

export async function getSystemHub(systemId: string): Promise<SystemEntry> {
  const hub = (await getSystemEntries(systemId)).find(isSystemHub);
  if (!hub) throw new Error(`System "${systemId}" has no overview.md hub page.`);
  return hub;
}

// Chapters in reading order. Fails the build when a chapter is missing the
// metadata navigation depends on, rather than silently misplacing it.
export function getChapters(entries: SystemEntry[]): SystemEntry[] {
  const chapters = entries.filter((entry) => getDocumentRole(entry) === 'chapter');

  for (const { id, data } of chapters) {
    if (data.part === undefined) {
      throw new Error(`Build Guide chapter "${id}" is missing \`part\`.`);
    }
    if (data.part > 0 && data.chapter === undefined) {
      throw new Error(`Build Guide chapter "${id}" is missing \`chapter\`.`);
    }
  }

  return chapters.sort(byOrderThenTitle);
}

export function groupChaptersByPart(systemId: string, chapters: SystemEntry[]) {
  const parts = new Map<number, SystemEntry[]>();

  for (const chapter of chapters) {
    const part = chapter.data.part ?? 0;
    parts.set(part, [...(parts.get(part) ?? []), chapter]);
  }

  return [...parts.entries()]
    .sort(([a], [b]) => a - b)
    .map(([part, entries]) => ({
      part,
      title: getPartLabel(systemId, part),
      entries,
    }));
}

export function getReferences(entries: SystemEntry[]): SystemEntry[] {
  return entries
    .filter((entry) => getDocumentRole(entry) === 'reference')
    .sort(byOrderThenTitle);
}

export function groupReferences(references: SystemEntry[]) {
  const groups = referenceGroups.map(({ type, title }) => ({
    type: type as ReferenceType | undefined,
    title,
    entries: references.filter(({ data }) => data.referenceType === type),
  }));

  groups.push({
    type: undefined,
    title: 'Other',
    entries: references.filter(({ data }) => !data.referenceType),
  });

  return groups.filter((group) => group.entries.length > 0);
}

// Overview-style pages other than the hub, such as Architecture and Roadmap.
export function getOverviewPages(entries: SystemEntry[]): SystemEntry[] {
  return entries
    .filter((entry) => getDocumentRole(entry) === 'overview' && !isSystemHub(entry))
    .sort(byOrderThenTitle);
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export type BookEntry = CollectionEntry<'books'>;

// The book, if any, built on a system's Build Guide.
export async function getBookForSystem(systemId: string): Promise<BookEntry | undefined> {
  const books = await getCollection('books', ({ data }) => !data.draft);
  return books.find(({ data }) => data.system === systemId);
}
