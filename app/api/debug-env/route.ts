import { NextResponse } from 'next/server'

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  return NextResponse.json({
    hasSupabaseUrl: !!supabaseUrl,
    hasSupabaseAnonKey: !!supabaseAnonKey,
    supabaseUrlPreview: supabaseUrl ? `${supabaseUrl.substring(0, 20)}...` : 'NOT_SET',
    supabaseAnonKeyPreview: supabaseAnonKey ? `${supabaseAnonKey.substring(0, 20)}...` : 'NOT_SET',
    timestamp: new Date().toISOString()
  })
} 