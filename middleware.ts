import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { NextRequestWithAuth, withAuth } from "next-auth/middleware";

let locales = ["en", "hu"];

// Get the preferred locale, similar to the above or using a library.
function getLocale(request: NextRequest) {
  const localeFromCookie = request.cookies.get("NEXT_LOCALE")?.value;
  const preferredLocale =
    localeFromCookie ||
    request.headers.get("accept-language")?.split(",")[0].split("-")[0] ||
    "hu";
  const locale = locales.includes(preferredLocale) ? preferredLocale : "hu";
  return locale;
}

export function middleware(request: NextRequest) {
  const localeCookie = request.cookies.get("NEXT_LOCALE");

  if (!localeCookie) {
    // Redirect if there is no locale.
    const locale = getLocale(request);
    const response = NextResponse.redirect(new URL(`/${locale}`, request.url));
    response.cookies.set("NEXT_LOCALE", locale);
    return response;
  }

  return withAuth(request as NextRequestWithAuth);
}

export const config = {
  matcher: ["/((?!api|auth|_next/static|_next/image|favicon.ico).*)"],
};
