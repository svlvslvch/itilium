import createMiddleware from 'next-intl/middleware';

import { locales } from './navigation';

export default createMiddleware({
  locales,
  defaultLocale: 'ru',
  localePrefix: 'as-needed',
});

export const config = {
  // Исключения для интернационализации
  matcher: [
    '/((?!api|_next|shared|store|services|providers|hooks|utils|config|.*\\..*).*)',
  ],
};
