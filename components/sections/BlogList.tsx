// components/sections/BlogList.tsx
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { getAllBlogPosts as getAllBlogPostsFromSupabase } from '@/lib/blog-supabase'
import { getFallbackBlogPosts } from '@/lib/blog-data-minimal'
import type { BlogPostMeta } from '@/types'
import { BlogListClient } from './BlogListClient'

export async function BlogList() {
  // Check if environment variables are available
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  let blogPosts: BlogPostMeta[] = []
  
  // Try to use Supabase first, fallback to minimal local data
  if (supabaseUrl && supabaseAnonKey) {
    try {
      blogPosts = await getAllBlogPostsFromSupabase()
      
      // If no posts from Supabase, use fallback
      if (blogPosts.length === 0) {
        console.log('No posts found in Supabase, using fallback data')
        blogPosts = getFallbackBlogPosts()
      }
    } catch (error) {
      console.log('Failed to fetch from Supabase, using fallback data:', error)
      blogPosts = getFallbackBlogPosts()
    }
  } else {
    // Use fallback data when environment variables aren't available (build time)
    console.log('Supabase not configured, using fallback data')
    blogPosts = getFallbackBlogPosts()
  }
  
  const allTags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  ).sort()

  return <BlogListClient blogPosts={blogPosts} allTags={allTags} />
}