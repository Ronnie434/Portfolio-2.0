// components/sections/FeaturedProjects.tsx
"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const featuredProjects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Next.js, Stripe integration, and microservices architecture. Features include real-time inventory, admin dashboard, and mobile-responsive design.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/Ronnie434/ecommerce-platform",
    live: "https://ecommerce-demo.ronakpatel.dev",
    featured: true
  },
  {
    id: "2",
    title: "Investment Portfolio Tracker",
    description: "Comprehensive investment portfolio tracker that fetches and displays Robinhood personal investment data including stocks, options, dividends, and advanced analytics with real-time monitoring.",
    tech: ["Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "Redis", "Prisma"],
    github: "https://github.com/Ronnie434/investment-portfolio-tracker",
    live: "https://portfolio-tracker.ronakpatel.dev",
    featured: true
  },
  {
    id: "3",
    title: "AI Content Generator",
    description: "SaaS application that generates marketing content using OpenAI API. Features include user authentication, subscription management, and content optimization.",
    tech: ["Next.js", "Prisma", "OpenAI", "Stripe", "PostgreSQL"],
    github: "https://github.com/Ronnie434/ai-content-generator",
    live: "https://ai-content.ronakpatel.dev",
    featured: true
  }
]

export function FeaturedProjects() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of my recent work showcasing full-stack development expertise
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-card-foreground">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="View source code"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </div>
              
              <p className="mt-4 text-muted-foreground">
                {project.description}
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 