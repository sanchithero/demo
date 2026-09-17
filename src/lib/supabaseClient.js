import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 
  process.env.NEXT_PUBLIC_SUPABASE_URL || 
  import.meta.env?.VITE_SUPABASE_URL || 
  'https://oydoqecxnwnupidgfmgi.supabase.co';

const supabaseKey = 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 
  import.meta.env?.VITE_SUPABASE_ANON_KEY || 
  import.meta.env?.VITE_SUPABASE_PUBLISHABLE_KEY || 
  'sb_publishable_NdZ758JniegTDI6ZMN-kdQ_Oy5Uvwf1';

export const supabase = createClient(supabaseUrl, supabaseKey);
