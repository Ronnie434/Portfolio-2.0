// app/api/add-blog-post/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createBlogPost } from '@/lib/blog-supabase'
import { getBlogPost, getBlogPostMeta } from '@/lib/blog-data'

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json()
    
    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
    }
    
    console.log('Adding blog post to Supabase:', slug)
    
    // Get the blog post data from local data
    const blogPostData = getBlogPost(slug)
    const blogPostMeta = getBlogPostMeta(slug)
    
    if (!blogPostData || !blogPostMeta) {
      return NextResponse.json({ error: 'Blog post not found in local data' }, { status: 404 })
    }
    
    console.log('Blog post data loaded:', blogPostData.title)
    console.log('Sections count:', blogPostData.sections.length)
    
    // Create the blog post in Supabase
    const postId = await createBlogPost(blogPostData, {
      slug: blogPostMeta.slug,
      date: blogPostMeta.date,
      readTime: blogPostMeta.readTime,
      tags: blogPostMeta.tags,
      excerpt: blogPostMeta.excerpt,
      featured: false
    })
    
    if (postId) {
      return NextResponse.json({
        success: true,
        message: 'Blog post added successfully',
        postId,
        slug: blogPostMeta.slug,
        title: blogPostData.title,
        tags: blogPostMeta.tags,
        readTime: blogPostMeta.readTime
      })
    } else {
      return NextResponse.json({ error: 'Failed to add blog post to Supabase' }, { status: 500 })
    }
    
  } catch (error) {
    console.error('Error adding blog post:', error)
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}