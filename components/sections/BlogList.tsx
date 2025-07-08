// components/sections/BlogList.tsx
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { getAllBlogPosts } from '@/lib/blog-supabase'
import type { BlogPostMeta } from '@/types'
import { BlogListClient } from './BlogListClient'

export async function BlogList() {
  const blogPosts = await getAllBlogPosts()
  
  const allTags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  ).sort()

  return <BlogListClient blogPosts={blogPosts} allTags={allTags} />
} 