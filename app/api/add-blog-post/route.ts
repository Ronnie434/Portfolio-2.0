// app/api/add-blog-post/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createBlogPost } from '@/lib/blog-supabase'
import { getBlogTemplate } from '@/lib/blog-templates'
import { getFallbackBlogPostMeta } from '@/lib/blog-data-minimal'

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json()
    
    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
    }
    
    console.log('Adding blog post to Supabase:', slug)
    
    // Get the blog post template and metadata
    const blogPostData = getBlogTemplate(slug)
    const blogPostMeta = getFallbackBlogPostMeta(slug)
    
    if (!blogPostData || !blogPostMeta) {
      return NextResponse.json({ 
        error: `Blog post template or metadata not found for slug: ${slug}`,
        available_templates: ['ai-agents-developer-productivity', 'automate-anything-building-smart-workflows-n8n']
      }, { status: 404 })
    }
    
    console.log('Blog post template loaded:', blogPostData.title)
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
        readTime: blogPostMeta.readTime,
        sectionsCount: blogPostData.sections.length
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