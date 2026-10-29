import { getCollection, type CollectionEntry } from 'astro:content';

export type TeachingEntry = CollectionEntry<'teaching'>;
export type TeachingActivity = CollectionEntry<'teachingActivities'>;

export const position = 'Graduate Teaching Assistant';
export const institution = 'University of Hull';

export const kindLabels: Record<TeachingEntry['data']['kind'], string> = {
  module: 'Module',
  course: 'Course',
  lecture: 'Lecture',
  workshop: 'Workshop',
  supervision: 'Supervision',
  other: 'Teaching',
};

export const activityGroups: { category: TeachingActivity['data']['category']; title: string }[] = [
  { category: 'supervision', title: 'Supervision' },
  { category: 'support', title: 'Teaching support and technical leadership' },
  { category: 'outreach', title: 'Outreach and events' },
  { category: 'recognition', title: 'Recognition' },
];

// "2024–25" sorts by its starting year.
export function yearKey(year: string): number {
  return Number(year.match(/\d{4}/)?.[0] ?? 0);
}

const newestYear = ({ data }: TeachingEntry) => Math.max(...data.roles.map(({ year }) => yearKey(year)));

// Current teaching first, then by most recent year taught, then title.
export async function getTeaching(): Promise<TeachingEntry[]> {
  const entries = await getCollection('teaching', ({ data }) => !data.draft);
  return entries.sort(
    (a, b) =>
      Number(b.data.current) - Number(a.data.current) ||
      newestYear(b) - newestYear(a) ||
      a.data.title.localeCompare(b.data.title),
  );
}

// The teaching record as academic years, newest first, each listing the
// modules taught that year with the role held.
export function getTeachingByYear(entries: TeachingEntry[]) {
  const years = [...new Set(entries.flatMap(({ data }) => data.roles.map(({ year }) => year)))]
    .sort((a, b) => yearKey(b) - yearKey(a));

  return years.map((year) => ({
    year,
    items: entries
      .flatMap((entry) =>
        entry.data.roles
          .filter((role) => role.year === year)
          .map(({ role }) => ({ entry, role })),
      )
      .sort((a, b) => (a.entry.data.code ?? a.entry.data.title).localeCompare(b.entry.data.code ?? b.entry.data.title)),
  }));
}

export async function getTeachingActivities() {
  const activities = await getCollection('teachingActivities');
  const newest = ({ data }: TeachingActivity) => Math.max(...data.years.map(yearKey));

  return activityGroups
    .map(({ category, title }) => ({
      title,
      entries: activities
        .filter(({ data }) => data.category === category)
        .sort((a, b) => newest(b) - newest(a) || a.data.title.localeCompare(b.data.title)),
    }))
    .filter(({ entries }) => entries.length > 0);
}

export function formatYears(years: string[]): string {
  return [...years].sort((a, b) => yearKey(a) - yearKey(b)).join(', ');
}

export function getTeachingContext({ data }: TeachingEntry): string {
  return [data.code, data.institution, data.level].filter(Boolean).join(' · ');
}
