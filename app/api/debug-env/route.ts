import { NextResponse } from 'next/server'

export async function GET() {
  return new Response(JSON.stringify({
    hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    supabaseUrlValue: process.env.NEXT_PUBLIC_SUPABASE_URL || 'undefined',
    timestamp: new Date().toISOString()
  }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
} 