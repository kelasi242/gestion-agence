import { createClient } from '@supabase/supabase-js';

// Valeurs publiques de secours : le build Netlify reste fonctionnel même sans .env.
const DEFAULT_URL = 'https://cnmnqfeihfrwtixjjwpi.supabase.co';
const DEFAULT_KEY = 'sb_publishable_iVoNU6d1oIc-O5g96gXtdA_nT9WPxj_';
const url = import.meta.env.VITE_SUPABASE_URL || DEFAULT_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_KEY;
export const cloudConfigured = Boolean(url && key);
export const supabase = createClient(url, key);
