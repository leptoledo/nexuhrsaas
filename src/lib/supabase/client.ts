import { createBrowserClient } from '@supabase/ssr';

export function getSanitizedSupabaseCredentials() {
  let url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  let anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  // Ensure URL is a valid http/https string
  if (!url || (!url.startsWith('http://') && !url.startsWith('https://'))) {
    if (url && url.includes('.')) {
      url = `https://${url}`;
    } else {
      url = 'https://placeholder-project.supabase.co';
    }
  }

  // Ensure anonKey is a non-empty string
  if (!anonKey || anonKey.length < 10) {
    anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.placeholder-anon-key';
  }

  return { url, anonKey };
}

export function createClient() {
  const { url, anonKey } = getSanitizedSupabaseCredentials();
  return createBrowserClient(url, anonKey);
}
