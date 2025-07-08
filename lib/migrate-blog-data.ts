/**
 * Migration script to transfer existing blog data to Supabase
 * Run this once after setting up your Supabase database
 */

import { blogPosts } from './blog-data'
import { createBlogPost } from './blog-supabase'
import { createBlogPostDirect } from './blog-supabase-direct'

// Predefined metadata for existing blog posts
const blogMetadata = {
  'scalable-react-nextjs-14': {
    slug: 'scalable-react-nextjs-14',
    date: '2024-01-15',
    readTime: '12-15 min',
    tags: ['React', 'Next.js', 'Performance', 'Architecture'],
    excerpt: 'Learn how to build and scale React applications with Next.js 14\'s new features including App Router, Server Components, and performance optimizations.',
    featured: true
  },
  'microservices-nodejs-docker': {
    slug: 'microservices-nodejs-docker',
    date: '2024-01-10',
    readTime: '15-18 min',
    tags: ['Node.js', 'Docker', 'Microservices', 'DevOps'],
    excerpt: 'A comprehensive guide to building and deploying microservices using Node.js, Docker, and Kubernetes with focus on scalability and maintainability.',
    featured: true
  },
  'advanced-typescript-patterns-better-code': {
    slug: 'advanced-typescript-patterns-better-code',
    date: '2024-01-05',
    readTime: '10-12 min',
    tags: ['TypeScript', 'Design Patterns', 'Code Quality', 'Development'],
    excerpt: 'Master advanced TypeScript patterns and techniques to write more maintainable, type-safe, and elegant code in your applications.',
    featured: false
  },
  'state-management-react-redux-zustand-context': {
    slug: 'state-management-react-redux-zustand-context',
    date: '2023-12-28',
    readTime: '14-16 min',
    tags: ['React', 'State Management', 'Redux', 'Zustand', 'Context API'],
    excerpt: 'Compare different state management solutions in React - Redux, Zustand, Context API, and more. Learn when to use each approach.',
    featured: false
  },
  'implementing-cicd-pipelines-github-actions': {
    slug: 'implementing-cicd-pipelines-github-actions',
    date: '2023-12-20',
    readTime: '12-14 min',
    tags: ['CI/CD', 'GitHub Actions', 'DevOps', 'Automation'],
    excerpt: 'Build robust CI/CD pipelines using GitHub Actions. Learn deployment strategies, testing automation, and best practices for modern development workflows.',
    featured: false
  },
  'database-optimization-high-traffic-applications': {
    slug: 'database-optimization-high-traffic-applications',
    date: '2023-12-15',
    readTime: '16-18 min',
    tags: ['Database', 'Performance', 'Optimization', 'PostgreSQL', 'Scaling'],
    excerpt: 'Learn advanced database optimization techniques for high-traffic applications including indexing strategies, query optimization, and caching.',
    featured: false
  }
}

export async function migrateBlogData() {
  console.log('Starting blog data migration...')
  
  try {
    const results = []
    
    for (const [key, blogPost] of Object.entries(blogPosts)) {
      console.log(`Migrating blog post: ${blogPost.title}`)
      
      const metadata = blogMetadata[key as keyof typeof blogMetadata]
      if (!metadata) {
        console.warn(`No metadata found for blog post: ${key}`)
        continue
      }
      
      const result = await createBlogPost(blogPost, metadata)
      
      if (result) {
        console.log(`✅ Successfully migrated: ${blogPost.title}`)
        results.push({ key, success: true, id: result })
      } else {
        console.error(`❌ Failed to migrate: ${blogPost.title}`)
        results.push({ key, success: false, error: 'Migration failed' })
      }
    }
    
    console.log('\nMigration Summary:')
    console.log(`Total posts: ${Object.keys(blogPosts).length}`)
    console.log(`Successful: ${results.filter(r => r.success).length}`)
    console.log(`Failed: ${results.filter(r => !r.success).length}`)
    
    return results
  } catch (error) {
    console.error('Migration failed:', error)
    throw error
  }
}

// Function to add metadata for additional blog posts
export function generateBlogMetadata(
  slug: string,
  date: string,
  readTime: string,
  tags: string[],
  excerpt: string,
  featured: boolean = false
) {
  return {
    slug,
    date,
    readTime,
    tags,
    excerpt,
    featured
  }
}

// Helper function to run migration from command line or admin panel
export async function runMigration() {
  if (typeof window !== 'undefined') {
    console.error('This migration should only be run server-side')
    return
  }
  
  try {
    await migrateBlogData()
    console.log('Migration completed successfully!')
  } catch (error) {
    console.error('Migration failed:', error)
  }
} 