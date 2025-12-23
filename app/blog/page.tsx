// app/blog/page.tsx
import type { Metadata } from 'next'
import { BlogList } from '@/components/sections/BlogList'

// Force dynamic rendering to prevent build-time static generation
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blog - Ronak Patel',
  description: 'Technical articles and insights about software engineering, web development, and technology trends from Ronak Patel.',
}

export default function Blog() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Blog
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about software engineering, 
            web development, and the latest in technology.
          </p>
        </div>
        
        <BlogList />
      </div>
    </div>
  )
} 