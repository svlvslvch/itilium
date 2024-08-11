import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { locales } from './navigation';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const handleI18nRouting = createMiddleware({
    locales: locales,
    defaultLocale: 'ru',
    localePrefix: 'as-needed',
  });

  const token = request.cookies.get('accessToken')?.value;

  const allowedRoutes = ['/', '/ru'];

  const isRouteAllowed = allowedRoutes.some((prefix) => pathname === prefix);

  if (!token) {
    if (isRouteAllowed) {
      return handleI18nRouting(request);
    }

    return NextResponse.redirect(new URL('/', request.url));
  }

  if (token) {
    const response = handleI18nRouting(request);
    return response;
  }
}

export const config = {
  // Исключения для интернационализации
  matcher: [
    '/((?!api|_next|shared|store|services|providers|hooks|utils|config|.*\\..*).*)',
  ],
};
