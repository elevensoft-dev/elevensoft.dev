import { supabase } from "@/utils/supabase";

export async function getEmails() {
  const { data } = await supabase.from("emails").select();
  
  return { data };
}
