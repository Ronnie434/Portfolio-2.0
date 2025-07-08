import { NextResponse } from 'next/server'
import { createBlogPost } from '@/lib/blog-supabase'
import { blogPosts } from '@/lib/blog-data'

export async function GET() {
  try {
    console.log('Testing single blog post migration...')
    
    // Test with just the first blog post
    const firstPost = blogPosts['scalable-react-nextjs-14']
    
    if (!firstPost) {
      return NextResponse.json({
        success: false,
        error: 'No blog post found to test'
      })
    }

    console.log('Found blog post:', firstPost.title)
    console.log('Sections count:', firstPost.sections.length)

    const metadata = {
      slug: 'test-scalable-react-nextjs-14',
      date: '2024-01-15',
      readTime: '12-15 min',
      tags: ['React', 'Next.js', 'Performance', 'Architecture'],
      excerpt: 'Test excerpt for React Next.js post',
      featured: true
    }

    console.log('Calling createBlogPost...')
    const result = await createBlogPost(firstPost, metadata)

    if (result) {
      console.log('✅ Test migration successful, post ID:', result)
      return NextResponse.json({
        success: true,
        message: 'Test migration successful!',
        postId: result,
        sectionsCount: firstPost.sections.length
      })
    } else {
      console.log('❌ Test migration failed')
      return NextResponse.json({
        success: false,
        error: 'createBlogPost returned null'
      })
    }

  } catch (error) {
    console.error('Test migration error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
  }
} 