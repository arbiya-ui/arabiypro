import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Fix common mistake where URL includes /rest/v1 or trailing slashes
if (supabaseUrl) {
  try {
    const parsedUrl = new URL(supabaseUrl);
    // For standard Supabase Cloud, we only need the origin (protocol + domain)
    // The SDK appends /rest/v1 internally.
    if (parsedUrl.hostname.endsWith('supabase.co')) {
      supabaseUrl = parsedUrl.origin;
    } else {
      // For self-hosted or other providers, remove /rest/v1 if present at the end
      supabaseUrl = supabaseUrl.replace(/\/rest\/v1\/?$/i, '');
      // Ensure no trailing slash
      supabaseUrl = supabaseUrl.replace(/\/+$/, '');
    }
  } catch (e) {
    // If it's not a full URL, attempt basic cleaning
    supabaseUrl = supabaseUrl.replace(/\/rest\/v1\/?$/i, '');
    supabaseUrl = supabaseUrl.replace(/\/+$/, '');
    if (!supabaseUrl.startsWith('http')) {
      supabaseUrl = `https://${supabaseUrl}`;
    }
  }
}

let client: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  try {
    client = createClient(supabaseUrl, supabaseAnonKey);
  } catch (err) {
    console.error('Failed to initialize Supabase client:', err);
  }
}

export const supabase = client as SupabaseClient;
export const isSupabaseConfigured = !!client;
