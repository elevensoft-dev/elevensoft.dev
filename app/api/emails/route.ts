import { supabase } from "@/utils/supabase";
import { NextRequest, NextResponse } from "next/server";

export interface Subject {
  name: string;
  email: string;
  subject: string;
  phone: string;
  description: string;
}

export async function POST(request: Request) {
  try {
    const data = await request.json(); // Parse JSON data
    const { data: insertedData, error } = await supabase
      .from("emails")
      .insert([data]);

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, data: insertedData });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
