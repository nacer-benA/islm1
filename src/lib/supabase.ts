import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  created_at: string;
  updated_at: string;
};

export type Recipe = {
  id: string;
  title: string;
  description: string | null;
  ingredients: string[];
  instructions: string[];
  image_url: string | null;
  author_id: string;
  created_at: string;
  updated_at: string;
};

export type Product = {
  id: string;
  name: string;
  description: string | null;
  benefits: string[];
  image_url: string | null;
  created_at: string;
  updated_at: string;
};

export type NewsletterSubscriber = {
  id: string;
  email: string;
  created_at: string;
};