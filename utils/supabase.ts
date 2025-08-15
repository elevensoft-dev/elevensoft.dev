import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  // Supabase configuration loaded
  // Supabase configuration loaded

export const supabase = createClient(supabaseUrl, supabaseKey);
