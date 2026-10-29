// Firmware configuration published for a printer setup. Each setup has a
// folder under src/firmware/ holding the sanitised config files and a
// manifest.json that groups them for display.

interface Manifest {
  firmware: string;
  groups: { title: string; note?: string; files: string[] }[];
}

const manifests = import.meta.glob<Manifest>('/src/firmware/*/manifest.json', {
  eager: true,
  import: 'default',
});

const sources = import.meta.glob<string>('/src/firmware/**/*.cfg', {
  eager: true,
  query: '?raw',
  import: 'default',
});

export function getFirmwareIds(): string[] {
  return Object.keys(manifests).map((path) => path.split('/')[3]);
}

export function getFirmware(id: string) {
  const manifest = manifests[`/src/firmware/${id}/manifest.json`];
  if (!manifest) return undefined;

  const groups = manifest.groups.map((group) => ({
    ...group,
    files: group.files.map((path) => {
      const source = sources[`/src/firmware/${id}/${path}`];
      if (source === undefined) throw new Error(`Firmware file "${id}/${path}" is listed in manifest.json but missing.`);
      return { path, source, lines: source.split('\n').length };
    }),
  }));

  return {
    id,
    firmware: manifest.firmware,
    groups,
    fileCount: groups.reduce((count, { files }) => count + files.length, 0),
  };
}

export function getFirmwareFileUrl(id: string, path: string): string {
  return `/printing/firmware/${id}/${path}`;
}
