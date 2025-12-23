import { notFound } from 'next/navigation'
import { BlogPost } from '@/components/sections/BlogPost'
import { getBlogPost as getBlogPostFromSupabase } from '@/lib/blog-supabase'
import { getFallbackBlogPost, getFallbackBlogPostMeta } from '@/lib/blog-data-minimal'

// Force dynamic rendering to prevent build-time static generation
export const dynamic = 'force-dynamic'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  // Try to get metadata from fallback data first
  const fallbackMeta = getFallbackBlogPostMeta(params.slug)
  
  if (fallbackMeta) {
    return {
      title: fallbackMeta.title,
      description: fallbackMeta.excerpt,
    }
  }

  // Fallback to generic metadata
  return {
    title: 'Blog Post Not Found',
    description: 'The requested blog post could not be found.'
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Check if environment variables are available
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  let post = null
  
  // Try to use Supabase first if env vars exist
  if (supabaseUrl && supabaseAnonKey) {
    try {
      post = await getBlogPostFromSupabase(params.slug)
    } catch (error) {
      console.log('Failed to fetch from Supabase:', error)
    }
  }
  
  // If no post found from Supabase (or connection failed), try fallback data
  if (!post) {
    console.log(`Supabase fetch failed or returned null for '${params.slug}', trying fallback...`)
    const fallbackPost = getFallbackBlogPost(params.slug)
    
    if (fallbackPost) {
      console.log(`Using fallback content for '${params.slug}'`)
      post = fallbackPost
    }
  }
  
  // If still no post, show 404
  if (!post) {
    console.log(`Blog post '${params.slug}' not found in database or fallback`)
    notFound()
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BlogPost post={post} />
      </div>
    </div>
  )
}