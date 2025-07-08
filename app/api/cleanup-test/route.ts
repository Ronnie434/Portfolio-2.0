import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
    
    const adminClient = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })

    // Delete test posts (those with slugs starting with 'test-')
    const { data: deletedPosts, error } = await adminClient
      .from('blog_posts')
      .delete()
      .like('slug', 'test-%')
      .select()

    if (error) {
      console.error('Error cleaning up test posts:', error)
      return NextResponse.json({
        success: false,
        error: error.message
      })
    }

    console.log('Cleaned up test posts:', deletedPosts?.length || 0)
    
    return NextResponse.json({
      success: true,
      message: 'Test posts cleaned up successfully',
      deletedCount: deletedPosts?.length || 0
    })

  } catch (error) {
    console.error('Cleanup error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
} 