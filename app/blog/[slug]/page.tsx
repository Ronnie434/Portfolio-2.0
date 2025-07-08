import { notFound } from 'next/navigation'
import { BlogPost } from '@/components/sections/BlogPost'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog-supabase'

// Force dynamic rendering to prevent build-time static generation
export const dynamic = 'force-dynamic'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  // Static metadata for build-time generation
  // This avoids needing to connect to Supabase during build
  const staticMetadata: Record<string, { title: string; description: string }> = {
    'scalable-react-nextjs-14': {
      title: 'Building Scalable React Applications with Next.js 14',
      description: 'Learn how to build and scale React applications with Next.js 14\'s new features including App Router, Server Components, and performance optimizations.'
    },
    'microservices-nodejs-docker': {
      title: 'Microservices Architecture with Node.js and Docker',
      description: 'A comprehensive guide to building and deploying microservices using Node.js, Docker, and Kubernetes with focus on scalability and maintainability.'
    },
    'advanced-typescript-patterns-better-code': {
      title: 'Advanced TypeScript Patterns for Better Code',
      description: 'Master advanced TypeScript patterns and techniques to write more maintainable, type-safe, and elegant code in your applications.'
    },
    'state-management-react-redux-zustand-context': {
      title: 'State Management in React: Redux vs Zustand vs Context',
      description: 'Compare different state management solutions in React - Redux, Zustand, Context API, and more. Learn when to use each approach.'
    },
    'implementing-cicd-pipelines-github-actions': {
      title: 'Implementing CI/CD Pipelines with GitHub Actions',
      description: 'Build robust CI/CD pipelines using GitHub Actions. Learn deployment strategies, testing automation, and best practices for modern development workflows.'
    },
    'database-optimization-high-traffic-applications': {
      title: 'Database Optimization for High-Traffic Applications',
      description: 'Learn advanced database optimization techniques for high-traffic applications including indexing strategies, query optimization, and caching.'
    }
  }

  const metadata = staticMetadata[params.slug]
  
  if (!metadata) {
    return {
      title: 'Blog Post Not Found'
    }
  }

  return {
    title: metadata.title,
    description: metadata.description,
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

// Remove generateStaticParams to make pages dynamic and avoid build-time DB access
// This ensures the pages are generated at request time, not build time
// export async function generateStaticParams() {
//   return []
// } 