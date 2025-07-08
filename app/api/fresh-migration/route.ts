import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { migrateBlogData } from '@/lib/migrate-blog-data'

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

    console.log('🧹 Starting fresh migration - cleaning up existing data...')

    // Clean up existing data
    const { error: sectionsDeleteError } = await adminClient
      .from('blog_sections')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000') // Delete all

    if (sectionsDeleteError) {
      console.error('Error deleting sections:', sectionsDeleteError)
    }

    const { error: postsDeleteError } = await adminClient
      .from('blog_posts')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000') // Delete all

    if (postsDeleteError) {
      console.error('Error deleting posts:', postsDeleteError)
    }

    console.log('✅ Cleanup completed')

    // Run migration
    console.log('🚀 Starting fresh migration...')
    const results = await migrateBlogData()

    // Check final counts
    const { data: finalPosts } = await adminClient
      .from('blog_posts')
      .select('id, slug, title')

    const { data: finalSections } = await adminClient
      .from('blog_sections')
      .select('id')

    console.log('📊 Migration completed')
    console.log(`Posts created: ${finalPosts?.length || 0}`)
    console.log(`Sections created: ${finalSections?.length || 0}`)

    return NextResponse.json({
      success: true,
      message: 'Fresh migration completed!',
      results: {
        migrationResults: results,
        finalCounts: {
          posts: finalPosts?.length || 0,
          sections: finalSections?.length || 0
        },
        posts: finalPosts || []
      }
    })

  } catch (error) {
    console.error('Fresh migration error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
  }
} 