import { notFound } from 'next/navigation'
import { BlogPost } from '@/components/sections/BlogPost'
import { getBlogPost } from '@/lib/blog-data'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)
  
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

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

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

export function generateStaticParams() {
  return [
    { slug: 'building-scalable-react-applications-nextjs-14' },
    { slug: 'microservices-architecture-nodejs-docker' },
    { slug: 'advanced-typescript-patterns-better-code' },
    { slug: 'state-management-react-redux-zustand-context' },
    { slug: 'implementing-cicd-pipelines-github-actions' },
    { slug: 'database-optimization-high-traffic-applications' }
  ]
} 