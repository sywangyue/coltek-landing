import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL =
  'https://jkxpnxzgoejjsmeaehhf.supabase.co/storage/v1/object/sign/sunnova/Sunnova_sample.ply?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NWMyODAxMi1jMjYxLTQ0N2UtODdiMC04OWRhNzI5MjYwMWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzdW5ub3ZhL1N1bm5vdmFfc2FtcGxlLnBseSIsImlhdCI6MTc3NjE1NDMwMSwiZXhwIjo0ODk4MjE4MzAxfQ.jY15ITEzwJksGB7VyGIDTlW9RxO99ZX_DhRcJfn-1WU';

export async function GET(req: NextRequest) {
  const range = req.headers.get('range');

  const headers: HeadersInit = {};
  if (range) headers['range'] = range;

  const upstream = await fetch(SUPABASE_URL, { headers });

  const responseHeaders = new Headers();
  responseHeaders.set('Content-Type', 'application/octet-stream');
  responseHeaders.set('Access-Control-Allow-Origin', '*');
  responseHeaders.set('Cache-Control', 'public, max-age=86400');

  const contentLength = upstream.headers.get('content-length');
  if (contentLength) responseHeaders.set('Content-Length', contentLength);

  const contentRange = upstream.headers.get('content-range');
  if (contentRange) responseHeaders.set('Content-Range', contentRange);
  if (range) responseHeaders.set('Accept-Ranges', 'bytes');

  return new NextResponse(upstream.body, {
    status: upstream.status,
    headers: responseHeaders,
  });
}
