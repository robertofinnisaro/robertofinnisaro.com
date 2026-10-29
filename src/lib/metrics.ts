import { owner } from './site';

export interface Metrics {
  citations: number;
  hIndex: number;
  i10Index: number;
  works: number;
  asOf: Date;
  live: boolean;
}

// Used when OpenAlex can't be reached at build time. Update these from the
// last successful build (or from Google Scholar) when they drift.
const fallback: Metrics = {
  citations: 16,
  hIndex: 1,
  i10Index: 1,
  works: 1,
  asOf: new Date('2026-10-29'),
  live: false,
};

const API = 'https://api.openalex.org';
const TIMEOUT_MS = 8000;

async function fetchJson(url: string): Promise<any | undefined> {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    return response.ok ? await response.json() : undefined;
  } catch {
    return undefined;
  }
}

// Fetched once per build and shared by every page that shows metrics.
let metrics: Promise<Metrics> | undefined;

export function getMetrics(): Promise<Metrics> {
  metrics ??= fetchJson(`${API}/authors/${owner.openalex}`).then((author) => {
    if (!author?.summary_stats) return fallback;
    return {
      citations: author.cited_by_count ?? 0,
      hIndex: author.summary_stats.h_index ?? 0,
      i10Index: author.summary_stats.i10_index ?? 0,
      works: author.works_count ?? 0,
      asOf: new Date(),
      live: true,
    };
  });
  return metrics;
}

const citationCounts = new Map<string, Promise<number | undefined>>();

// Citation count for a single paper, looked up by DOI.
export function getCitationCount(doi: string | undefined): Promise<number | undefined> {
  if (!doi) return Promise.resolve(undefined);
  const key = doi.toLowerCase();
  if (!citationCounts.has(key)) {
    citationCounts.set(
      key,
      fetchJson(`${API}/works/doi:${encodeURIComponent(key)}`).then((work) => work?.cited_by_count),
    );
  }
  return citationCounts.get(key)!;
}

export function formatAsOf(date: Date): string {
  return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
}
