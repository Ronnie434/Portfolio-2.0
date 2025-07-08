import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  try {
    // Check server-side environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    const envCheck = {
      url: supabaseUrl ? 'SET' : 'NOT_SET',
      anonKey: supabaseAnonKey ? 'SET' : 'NOT_SET',
      serviceKey: supabaseServiceKey ? 'SET' : 'NOT_SET',
      urlValue: supabaseUrl || 'undefined'
    }

    console.log('Server-side env check:', envCheck)

    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json({
        success: false,
        error: 'Missing required environment variables',
        envCheck
      })
    }

    // Test with service role key
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })

    // Try to query the blog_posts table
    const { data, error } = await supabaseAdmin
      .from('blog_posts')
      .select('count')
      .limit(1)

    if (error) {
      console.error('Supabase query error:', error)
      return NextResponse.json({
        success: false,
        error: error.message,
        envCheck
      })
    }

    // Try a test insert
    const testSlug = 'test-' + Date.now()
    const { data: insertData, error: insertError } = await supabaseAdmin
      .from('blog_posts')
      .insert({
        slug: testSlug,
        title: 'Test Post',
        subtitle: 'Test Subtitle',
        estimated_read_time: '1 min',
        audience: ['Test'],
        overview: 'Test overview',
        date: '2024-01-01',
        read_time: '1 min',
        tags: ['test'],
        excerpt: 'Test excerpt',
        featured: false
      })
      .select()

    if (insertError) {
      console.error('Insert test error:', insertError)
      return NextResponse.json({
        success: false,
        error: `Insert failed: ${insertError.message}`,
        envCheck
      })
    }

    // Clean up test post
    if (insertData && insertData[0]) {
      await supabaseAdmin
        .from('blog_posts')
        .delete()
        .eq('id', insertData[0].id)
    }

    return NextResponse.json({
      success: true,
      message: 'Server-side Supabase connection working!',
      envCheck
    })

  } catch (error) {
    console.error('Server test error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      envCheck: {
        url: 'ERROR',
        anonKey: 'ERROR', 
        serviceKey: 'ERROR'
      }
    })
  }
} 