// components/sections/TechStack.tsx
"use client"

import { motion } from 'framer-motion'

const techStack = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Nest.js", "Python", "Go", "GraphQL"]
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma", "TypeORM"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Vercel"]
  },
  {
    category: "Tools",
    items: ["Git", "VS Code", "Figma", "Postman", "Jest", "Cypress"]
  }
]

export function TechStack() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight mb-4">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border bg-card/40 backdrop-blur-sm p-6 hover:bg-card/60 transition-all duration-300"
            >
              <h3 className="text-xl font-serif font-medium mb-4 text-foreground/90">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-md bg-secondary/50 px-3 py-1 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80 hover:scale-105 transform duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 