// components/sections/BlogList.tsx
"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import type { BlogPost } from '@/types'

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications with Next.js 14",
    excerpt: "Learn how to leverage Next.js 14's new features to build performant and scalable React applications with the App Router, Server Components, and advanced caching strategies.",
    content: "Full content would go here...",
    date: "2024-01-15",
    tags: ["Next.js", "React", "Performance"],
    slug: "building-scalable-react-applications-nextjs-14"
  },
  {
    id: "2",
    title: "Microservices Architecture with Node.js and Docker",
    excerpt: "A comprehensive guide to building and deploying microservices using Node.js, Docker, and Kubernetes. Learn best practices for service communication and data consistency.",
    content: "Full content would go here...",
    date: "2024-01-08",
    tags: ["Node.js", "Docker", "Microservices"],
    slug: "microservices-architecture-nodejs-docker"
  },
  {
    id: "3",
    title: "State Management in React: Redux vs Zustand vs Context",
    excerpt: "Compare different state management solutions for React applications. When to use Redux, Zustand, or React Context, with practical examples and performance considerations.",
    content: "Full content would go here...",
    date: "2024-01-01",
    tags: ["React", "State Management", "Redux"],
    slug: "state-management-react-redux-zustand-context"
  },
  {
    id: "4",
    title: "Advanced TypeScript Patterns for Better Code",
    excerpt: "Explore advanced TypeScript patterns and techniques that will make your code more type-safe, maintainable, and self-documenting. From utility types to conditional types.",
    content: "Full content would go here...",
    date: "2023-12-25",
    tags: ["TypeScript", "JavaScript", "Code Quality"],
    slug: "advanced-typescript-patterns-better-code"
  },
  {
    id: "5",
    title: "Database Optimization for High-Traffic Applications",
    excerpt: "Learn database optimization techniques for handling high-traffic applications. Covering indexing strategies, query optimization, and database scaling patterns.",
    content: "Full content would go here...",
    date: "2023-12-18",
    tags: ["Database", "Performance", "PostgreSQL"],
    slug: "database-optimization-high-traffic-applications"
  },
  {
    id: "6",
    title: "Implementing CI/CD Pipelines with GitHub Actions",
    excerpt: "Step-by-step guide to setting up robust CI/CD pipelines using GitHub Actions. Automated testing, deployment, and monitoring for modern web applications.",
    content: "Full content would go here...",
    date: "2023-12-11",
    tags: ["DevOps", "GitHub Actions", "CI/CD"],
    slug: "implementing-cicd-pipelines-github-actions"
  }
]

const allTags = Array.from(
  new Set(blogPosts.flatMap(post => post.tags))
).sort()

export function BlogList() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  
  const filteredPosts = selectedTag
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts

  return (
    <div className="space-y-8">
      {/* Tags filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedTag === null
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
        >
          All Posts
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedTag === tag
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Blog posts grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center text-sm text-muted-foreground mb-3">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{formatDate(post.date)}</span>
              <span className="mx-2">•</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>5 min read</span>
            </div>
            
            <h2 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            
            <p className="text-muted-foreground mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Read more
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </motion.article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No posts found for the selected tag.
          </p>
        </div>
      )}
    </div>
  )
} 