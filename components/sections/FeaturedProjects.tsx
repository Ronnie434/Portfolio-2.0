// components/sections/FeaturedProjects.tsx
"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const featuredProjects = [
  {
    id: "1",
    title: "Renvo",
    description: "Smart expense tracker with monthly summaries, renewal reminders, analytics dashboard, and synchronized data across devices via Supabase.",
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "Push Notifications", "iOS", "Android"],
    github: "https://github.com/Ronnie434/The-Renvo",
    live: "https://therenvo.com",
    featured: true
  },
  {
    id: "2",
    title: "Investment Portfolio Tracker",
    description: "Comprehensive investment portfolio tracker that fetches and displays Robinhood personal investment data including stocks, options, dividends, and advanced analytics with real-time monitoring.",
    tech: ["Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "Redis", "Prisma"],
    github: "https://github.com/Ronnie434/IPT",
    live: "https://ipt-gilt.vercel.app",
    featured: true
  },
  {
    id: "3",
    title: "Asteron",
    description: "An AI companion that remembers, tracks, and warns you about what's coming — before it becomes a problem. Stop getting surprised by life.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/Ronnie434/AI-Companion",
    live: "https://asteron.app",
    featured: true
  }
]

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight">
            Selected Works
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            A curated list of projects that demonstrate my passion for building scalable and user-centric applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-3xl border bg-card/50 p-6 md:p-8 hover:bg-card/80 transition-all duration-500"
            >
              <div className="lg:col-span-8 flex flex-col justify-center">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((t) => (
                       <span key={t} className="text-xs font-medium uppercase tracking-wider text-muted-foreground border px-2 py-0.5 rounded-full">
                         {t}
                       </span>
                    ))}
                  </div>
                  <div className="flex gap-3 lg:hidden">
                    <Link href={project.github} target="_blank" className="p-2 rounded-full hover:bg-accent transition-colors">
                      <Github className="h-5 w-5" />
                    </Link>
                    {project.live && (
                      <Link href={project.live} target="_blank" className="p-2 rounded-full hover:bg-accent transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl md:text-4xl font-medium mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8 max-w-2xl">
                  {project.description}
                </p>

                <div className="flex items-center gap-4">
                  {project.live && (
                    <Link 
                      href={project.live} 
                      target="_blank"
                      className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5"
                    >
                      Visit Website <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  )}
                  <Link 
                    href={project.github} 
                    target="_blank"
                    className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5"
                  >
                    View Source
                  </Link>
                </div>
              </div>
              
              {/* Minimal decoration or image placeholder if wanted for layout balance, 
                  for now we keep it text heavy as requested "focusing on typography" 
                  if no images. We can add a large subtle number or icon */}
              <div className="hidden lg:flex col-span-4 items-center justify-end opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="font-serif text-[120px] leading-none select-none">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-6 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
} 