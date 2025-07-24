// components/sections/ProjectsGrid.tsx
"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Filter } from 'lucide-react'
import type { Project } from '@/types'

const projects: Project[] = [
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
    title: "DevOps Dashboard",
    description: "Real-time monitoring dashboard for cloud infrastructure with automated deployment tracking, performance metrics, and alerting system.",
    tech: ["React", "Node.js", "AWS", "Docker", "GraphQL"],
    github: "https://github.com/Ronnie434/devops-dashboard",
    live: "https://devops-dashboard.ronakpatel.dev",
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
  },
  {
    id: "4",
    title: "Task Management API",
    description: "RESTful API for task management with authentication, real-time updates, and team collaboration features. Built with Node.js and MongoDB.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
    github: "https://github.com/Ronnie434/Task-Mangement-API",
    featured: false
  },
  {
    id: "5",
    title: "Real-time Chat App",
    description: "WebSocket-based chat application with rooms, file sharing, and message history. Includes mobile-responsive design and push notifications.",
    tech: ["React", "Socket.io", "Node.js", "Redis", "MongoDB"],
    github: "https://github.com/Ronnie434/chat-app",
    live: "https://chat-app.ronakpatel.dev",
    featured: false
  },
  {
    id: "6",
    title: "GraphQL Blog CMS",
    description: "Headless CMS for managing blog content with GraphQL API, rich text editor, and multi-author support. Built with modern React patterns.",
    tech: ["React", "GraphQL", "Prisma", "PostgreSQL", "Apollo"],
    github: "https://github.com/Ronnie434/blog-cms",
    featured: false
  },
  {
    id: "7",
    title: "Cloud Infrastructure Monitor",
    description: "Infrastructure monitoring tool with automated scaling, cost optimization, and performance analytics for AWS resources.",
    tech: ["Python", "AWS", "CloudWatch", "Lambda", "DynamoDB"],
    github: "https://github.com/Ronnie434/cloud-monitor",
    featured: false
  },
  {
    id: "8",
    title: "Mobile-First Portfolio",
    description: "Responsive portfolio website with dark mode, animations, and optimized performance. Built with Next.js and deployed on Vercel.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "https://github.com/Ronnie434/portfolio",
    live: "https://ronakpatel.dev",
    featured: false
  }
]

const categories = ["All", "Full-Stack", "Frontend", "Backend", "Mobile", "DevOps"]

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    
    if (category === "All") {
      setFilteredProjects(projects)
    } else {
      const filtered = projects.filter(project => {
        switch (category) {
          case "Full-Stack":
            return project.tech.some(tech => 
              ["Next.js", "React", "Node.js", "Express"].includes(tech)
            )
          case "Frontend":
            return project.tech.some(tech => 
              ["React", "Next.js", "Vue.js", "Angular"].includes(tech)
            )
          case "Backend":
            return project.tech.some(tech => 
              ["Node.js", "Express", "Python", "GraphQL"].includes(tech)
            )
          case "Mobile":
            return project.tech.some(tech => 
              ["React Native", "Flutter", "Swift"].includes(tech)
            )
          case "DevOps":
            return project.tech.some(tech => 
              ["AWS", "Docker", "Kubernetes", "CI/CD"].includes(tech)
            )
          default:
            return false
        }
      })
      setFilteredProjects(filtered)
    }
  }

  return (
    <div className="space-y-8">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
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
            
            <p className="text-muted-foreground mb-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
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

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">
            No projects found for the selected category.
          </p>
        </div>
      )}
    </div>
  )
} 