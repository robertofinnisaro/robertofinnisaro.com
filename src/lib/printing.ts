import { getCollection, type CollectionEntry } from 'astro:content';

export type Brand = CollectionEntry<'brands'>;
export type Filament = CollectionEntry<'filaments'>;
export type Printer = CollectionEntry<'printers'>;
export type Configuration = CollectionEntry<'configurations'>;
export type Profile = CollectionEntry<'profiles'>;

export interface PrintingData {
  brands: Brand[];
  filaments: Filament[];
  printers: Printer[];
  configurations: Configuration[];
  profiles: Profile[];
}

const published = ({ data }: { data: { draft: boolean } }) => !data.draft;

// Loads the whole database once; pages then join records in memory.
export async function getPrintingData(): Promise<PrintingData> {
  const [brands, filaments, printers, configurations, profiles] = await Promise.all([
    getCollection('brands', published),
    getCollection('filaments', published),
    getCollection('printers', published),
    getCollection('configurations', published),
    getCollection('profiles', published),
  ]);

  return {
    brands: brands.sort((a, b) => a.data.name.localeCompare(b.data.name)),
    filaments: filaments.sort((a, b) => getFilamentLabel(a).localeCompare(getFilamentLabel(b))),
    printers: printers.sort((a, b) => a.data.order - b.data.order || a.data.name.localeCompare(b.data.name)),
    configurations: configurations.sort((a, b) => a.data.name.localeCompare(b.data.name)),
    profiles: profiles.sort((a, b) => a.data.name.localeCompare(b.data.name)),
  };
}

export function getFilamentLabel(filament: Filament): string {
  return `${filament.data.name} ${filament.data.colour.name}`;
}

export function findById<T extends { id: string }>(entries: T[], id: string): T | undefined {
  return entries.find((entry) => entry.id === id);
}

export function getProfilesForFilament(data: PrintingData, filament: Filament): Profile[] {
  return data.profiles.filter(({ data: profile }) => profile.filament.id === filament.id);
}

export function getConfigurationsForPrinter(data: PrintingData, printer: Printer): Configuration[] {
  return data.configurations.filter(({ data: config }) => config.printer.id === printer.id);
}

export function getProfilesForPrinter(data: PrintingData, printer: Printer): Profile[] {
  const configIds = new Set(getConfigurationsForPrinter(data, printer).map(({ id }) => id));
  return data.profiles.filter(({ data: profile }) => configIds.has(profile.configuration.id));
}

// Printers that have at least one profile for this filament.
export function getPrintersForFilament(data: PrintingData, filament: Filament): Printer[] {
  const printerIds = new Set(
    getProfilesForFilament(data, filament)
      .map(({ data: profile }) => findById(data.configurations, profile.configuration.id)?.data.printer.id)
      .filter((id): id is string => Boolean(id)),
  );
  return data.printers.filter(({ id }) => printerIds.has(id));
}

export function formatRange(range: { min: number; max: number } | undefined, unit: string): string | undefined {
  if (!range) return undefined;
  return range.min === range.max ? `${range.min} ${unit}` : `${range.min}–${range.max} ${unit}`;
}

export function formatLayerTemp(temp: { firstLayer?: number; other?: number } | undefined): string | undefined {
  if (!temp || (temp.other === undefined && temp.firstLayer === undefined)) return undefined;
  if (temp.other === undefined) return `First layer ${temp.firstLayer} °C`;
  return temp.firstLayer && temp.firstLayer !== temp.other
    ? `${temp.other} °C (first layer ${temp.firstLayer} °C)`
    : `${temp.other} °C`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function getSpoolStatus(spool: Filament['data']['spools'][number]): string {
  if (spool.finished) return 'Finished';
  if (spool.opened) return 'In use';
  return 'Sealed';
}
