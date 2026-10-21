import { createClient } from '@supabase/supabase-js';
const url=import.meta.env.VITE_SUPABASE_URL, key=import.meta.env.VITE_SUPABASE_ANON_KEY;
export const cloudConfigured=Boolean(url&&key); export const supabase=cloudConfigured?createClient(url,key):null;
