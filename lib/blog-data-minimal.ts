import type { BlogPostMeta } from '@/types'

// Minimal fallback data - only metadata for development/build time
// This serves as emergency fallback when Supabase is unavailable
export const blogPostMetaFallback: Record<string, BlogPostMeta> = {
  'scalable-react-nextjs-14': {
    slug: 'scalable-react-nextjs-14',
    title: "Building Scalable React Applications with Next.js 14",
    subtitle: "Leverage App Router, Server Components, and Performance Optimization Techniques",
    date: "2024-01-15",
    readTime: "12-15 min read",
    tags: ["Next.js", "React", "Performance", "Architecture"],
    excerpt: "Discover how to build scalable React applications using Next.js 14's latest features including App Router, Server Components, and advanced caching strategies."
  },
  'microservices-nodejs-docker': {
    slug: 'microservices-nodejs-docker',
    title: "Microservices Architecture with Node.js and Docker",
    subtitle: "A comprehensive guide to building and deploying microservices using Node.js, Docker, and Kubernetes",
    date: "2024-01-15",
    readTime: "12-15 min read",
    tags: ["Node.js", "Docker", "Kubernetes", "Microservices"],
    excerpt: "Learn how to design, containerize, and orchestrate microservices using Node.js, Docker, and Kubernetes for scalable backend systems."
  },
  'advanced-typescript-patterns-better-code': {
    slug: 'advanced-typescript-patterns-better-code',
    title: "Advanced TypeScript Patterns for Better Code",
    subtitle: "Explore advanced TypeScript patterns and techniques that will make your code more type-safe, maintainable, and self-documenting.",
    date: "2024-01-15",
    readTime: "12-14 min read",
    tags: ["TypeScript", "Patterns", "Architecture"],
    excerpt: "Discover advanced TypeScript patterns that will make your code more type-safe, maintainable, and self-documenting."
  },
  'state-management-react-redux-zustand-context': {
    slug: 'state-management-react-redux-zustand-context',
    title: "State Management in React: Redux vs Zustand vs Context",
    subtitle: "Compare different state management solutions for React applications. When to use Redux, Zustand, or React Context, with practical examples and performance considerations.",
    date: "2024-01-15",
    readTime: "10-12 min read",
    tags: ["React", "State Management", "Performance"],
    excerpt: "Compare different state management solutions for React applications. When to use Redux, Zustand, or React Context, with practical examples and performance considerations."
  },
  'implementing-cicd-pipelines-github-actions': {
    slug: 'implementing-cicd-pipelines-github-actions',
    title: "Implementing CI/CD Pipelines with GitHub Actions",
    subtitle: "Step-by-step guide to setting up robust CI/CD pipelines using GitHub Actions. Automated testing, deployment, and monitoring for modern web applications.",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["CI/CD", "GitHub Actions", "DevOps"],
    excerpt: "Step-by-step guide to setting up robust CI/CD pipelines using GitHub Actions. Automated testing, deployment, and monitoring for modern web applications."
  },
  'database-optimization-high-traffic-applications': {
    slug: 'database-optimization-high-traffic-applications',
    title: "Database Optimization for High-Traffic Applications",
    subtitle: "Learn database optimization techniques for handling high-traffic applications. Covering indexing strategies, query optimization, and database scaling patterns.",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Database", "Performance", "Optimization"],
    excerpt: "Learn database optimization techniques for handling high-traffic applications. Covering indexing strategies, query optimization, and database scaling patterns."
  },
  'ai-agents-developer-productivity': {
    slug: 'ai-agents-developer-productivity',
    title: "How AI Agents can help to improve productivity of Developer",
    subtitle: "Discover how AI agents are revolutionizing software development by automating repetitive tasks, enhancing code quality, and accelerating development workflows.",
    date: "2024-01-20",
    readTime: "10-12 min read",
    tags: ["AI", "Productivity", "Development", "Automation"],
    excerpt: "Discover how AI agents are revolutionizing software development by automating repetitive tasks, enhancing code quality, and accelerating development workflows."
  },
  'automate-anything-building-smart-workflows-n8n': {
    slug: 'automate-anything-building-smart-workflows-n8n',
    title: "Automate Anything: Building Smart Workflows with n8n",
    subtitle: "Master the art of workflow automation using n8n's powerful visual interface. Learn to build complex integrations, automate business processes, and create intelligent workflows that save time and reduce errors.",
    date: "2024-01-22",
    readTime: "15-18 min read",
    tags: ["Automation", "n8n", "Workflows", "Integration", "DevOps"],
    excerpt: "Master the art of workflow automation using n8n's powerful visual interface. Learn to build complex integrations, automate business processes, and create intelligent workflows that save time and reduce errors."
  }
}

export function getFallbackBlogPosts(): BlogPostMeta[] {
  return Object.values(blogPostMetaFallback)
}

export function getFallbackBlogPostMeta(slug: string): BlogPostMeta | null {
  return blogPostMetaFallback[slug] || null
}

// Helper function to check if we have fallback data for a slug
export function hasFallbackData(slug: string): boolean {
  return slug in blogPostMetaFallback
}