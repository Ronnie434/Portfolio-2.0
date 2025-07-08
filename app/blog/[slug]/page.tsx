import { notFound } from 'next/navigation'
import { BlogPost } from '@/components/sections/BlogPost'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog-supabase'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found'
    }
  }

  return {
    title: post.title,
    description: post.subtitle,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BlogPost post={post} />
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  // Static list of blog post slugs for build-time generation
  // This avoids needing to connect to Supabase during build
  const slugs = [
    'scalable-react-nextjs-14',
    'microservices-nodejs-docker',
    'advanced-typescript-patterns-better-code',
    'state-management-react-redux-zustand-context',
    'implementing-cicd-pipelines-github-actions',
    'database-optimization-high-traffic-applications'
  ]
  
  return slugs.map(slug => ({
    slug
  }))
} 