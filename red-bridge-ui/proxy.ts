import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

// next-intl middleware handles locale detection and redirection.
// In Next.js 16, middleware is exported as a named `proxy` function.
export const proxy = createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except for internal Next.js paths and static files
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'
  ]
};
