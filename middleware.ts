import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only skip middleware for static files and specific system paths
  if (
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt' ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/_vercel') ||
    pathname.startsWith('/api') ||
    /\.(?:ico|png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|otf|css|js)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!_next|_vercel).*)'],
};
