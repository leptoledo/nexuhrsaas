import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { getSanitizedSupabaseCredentials } from './client';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const { url, anonKey } = getSanitizedSupabaseCredentials();

  try {
    const supabase = createServerClient(url, anonKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Route protection logic
    const isAuthRoute = request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/register');
    const isProtectedRoute = request.nextUrl.pathname.startsWith('/app');

    // If user is authenticated and tries to access login/register, redirect to dashboard
    if (user && isAuthRoute) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = '/app';
      return NextResponse.redirect(redirectUrl);
    }

    // If user is not authenticated and tries to access protected SaaS app routes
    const isPlaceholderKey = url.includes('placeholder') || anonKey.includes('placeholder');
    if (!user && isProtectedRoute && !isPlaceholderKey) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = '/login';
      redirectUrl.searchParams.set('redirectTo', request.nextUrl.pathname);
      return NextResponse.redirect(redirectUrl);
    }
  } catch {
    // If Supabase check fails during static generation or network interruption, proceed gracefully
    return supabaseResponse;
  }

  return supabaseResponse;
}
