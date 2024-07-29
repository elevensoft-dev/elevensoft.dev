import { supabase } from "@/utils/supabase";
import { z } from "zod";

export async function getEmails() {
  try {
    const { data, error } = await supabase.from("emails").select();

    if (error) {
      console.error("Error fetching emails:", error.message);
      return { status: 500, body: { message: error.message } };
    }

    return { data };
  } catch (error) {
    console.error("Unexpected error:", error);
    return { status: 500, body: { message: "Unexpected error occurred" } };
  }
}

export interface Subject {
  name: string;
  email: string;
  subject: string;
  phone: string;
  description: string;
}

export async function createSubject(subject: Subject) {
  if (!subject) {
    return { status: 500, body: { message: "Unexpected error occurred" } };
  }
  try {
    await supabase.from("emails").insert(subject);
    return { status: 201, message: "Subject created" };
  } catch (error) {
    console.error("Unexpected error:", error);
    return { status: 500, body: { message: "Unexpected error occurred" } };
  }
}
