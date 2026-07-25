import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Fix common mistake where URL includes /rest/v1
if (supabaseUrl && supabaseUrl.endsWith('/rest/v1')) {
  console.warn('Supabase: VITE_SUPABASE_URL should not end with /rest/v1. Automatically trimming.');
  supabaseUrl = supabaseUrl.replace('/rest/v1', '');
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
