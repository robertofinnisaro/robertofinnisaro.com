import type { APIRoute } from 'astro';

import { getFirmware, getFirmwareIds } from '../../../../lib/firmware';

// Serves each config file as plain text so it can be downloaded or linked.
export function getStaticPaths() {
  return getFirmwareIds().flatMap((config) =>
    (getFirmware(config)?.groups ?? []).flatMap(({ files }) =>
      files.map(({ path, source }) => ({ params: { config, path }, props: { source } })),
    ),
  );
}

export const GET: APIRoute = ({ props }) =>
  new Response(props.source, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
