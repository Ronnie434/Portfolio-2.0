// components/sections/BlogList.tsx
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { getAllBlogPosts } from '@/lib/blog-supabase'
import type { BlogPostMeta } from '@/types'
import { BlogListClient } from './BlogListClient'

export async function BlogList() {
  // Check if environment variables are available
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  // If no environment variables, return empty state (build time)
  if (!supabaseUrl || !supabaseAnonKey) {
    return <BlogListClient blogPosts={[]} allTags={[]} />
  }

  const blogPosts = await getAllBlogPosts()
  
  const allTags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  ).sort()

  return <BlogListClient blogPosts={blogPosts} allTags={allTags} />
} 