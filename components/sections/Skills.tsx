// components/sections/Skills.tsx
"use client"

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Wrench, Users, Zap } from 'lucide-react'

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ]
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express/Nest.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "GraphQL", level: 85 },
      { name: "REST APIs", level: 95 },
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 85 },
      { name: "Terraform", level: 70 },
    ]
  },
  {
    title: "Database & Tools",
    icon: Wrench,
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Git", level: 95 },
      { name: "Testing", level: 85 },
    ]
  },
  {
    title: "Leadership & Soft Skills",
    icon: Users,
    skills: [
      { name: "Team Leadership", level: 90 },
      { name: "Mentoring", level: 85 },
      { name: "Code Review", level: 95 },
      { name: "Architecture Design", level: 85 },
      { name: "Problem Solving", level: 95 },
    ]
  },
  {
    title: "Performance & Optimization",
    icon: Zap,
    skills: [
      { name: "Code Optimization", level: 90 },
      { name: "Database Tuning", level: 85 },
      { name: "Caching Strategies", level: 80 },
      { name: "Load Balancing", level: 75 },
      { name: "Monitoring", level: 85 },
    ]
  }
]

export function Skills() {
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
            Skills & Expertise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive technical skills developed through years of hands-on experience
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center mb-6">
                <category.icon className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-card-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-card-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-primary h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 