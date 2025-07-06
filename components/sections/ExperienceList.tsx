// components/sections/ExperienceList.tsx
"use client"

import { motion } from 'framer-motion'
import { CalendarDays, MapPin, Users, TrendingUp } from 'lucide-react'
import type { Experience } from '@/types'

const experiences: Experience[] = [
  {
    id: "1",
    company: "TechCorp",
    position: "Senior Software Engineer",
    duration: "2023 - Present",
    description: "Leading a team of 6 engineers in developing next-generation cloud-native applications. Architected and implemented microservices solutions serving 500K+ users with 99.9% uptime. Mentored junior developers and established engineering best practices.",
    tech: ["React", "Next.js", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes", "MongoDB"]
  },
  {
    id: "2",
    company: "InnovateTech",
    position: "Full-Stack Developer",
    duration: "2021 - 2023",
    description: "Built and deployed multiple React/Node.js applications serving 100K+ users. Implemented CI/CD pipelines reducing deployment time by 60%. Improved application performance by 40% through optimization and caching strategies.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "AWS", "Docker", "Jest", "TypeScript"]
  },
  {
    id: "3",
    company: "StartupXYZ",
    position: "Tech Lead",
    duration: "2020 - 2021",
    description: "Led the development of a SaaS platform from MVP to $1M ARR. Managed a team of 4 developers and established engineering culture. Designed scalable architecture supporting 10x user growth.",
    tech: ["Vue.js", "Node.js", "MongoDB", "Redis", "AWS", "Stripe", "GraphQL"]
  },
  {
    id: "4",
    company: "DevSolutions",
    position: "Software Engineer",
    duration: "2019 - 2020",
    description: "Developed scalable web applications using modern frameworks. Collaborated with cross-functional teams to deliver high-quality software on time. Implemented automated testing increasing code coverage to 95%.",
    tech: ["React", "Node.js", "Express", "MySQL", "Docker", "Jest", "GitHub Actions"]
  },
  {
    id: "5",
    company: "WebTech Agency",
    position: "Junior Developer",
    duration: "2017 - 2019",
    description: "Started career building client websites and web applications. Learned full-stack development fundamentals and modern web technologies. Contributed to multiple successful project deliveries.",
    tech: ["JavaScript", "HTML", "CSS", "PHP", "MySQL", "WordPress", "jQuery"]
  }
]

const achievements = [
  {
    metric: "500K+",
    description: "Users served across applications"
  },
  {
    metric: "99.9%",
    description: "Application uptime achieved"
  },
  {
    metric: "15+",
    description: "Developers mentored"
  },
  {
    metric: "$1M",
    description: "ARR growth contributed to"
  }
]

export function ExperienceList() {
  return (
    <div className="space-y-16">
      {/* Achievements */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.metric}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-lg border bg-card"
          >
            <div className="text-3xl font-bold text-primary mb-2">
              {achievement.metric}
            </div>
            <p className="text-sm text-muted-foreground">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Experience List */}
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {experience.position}
                </h3>
                <p className="text-lg text-primary font-medium">
                  {experience.company}
                </p>
              </div>
              <div className="flex items-center text-muted-foreground mt-2 lg:mt-0">
                <CalendarDays className="h-4 w-4 mr-1" />
                <span className="text-sm">{experience.duration}</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">
              {experience.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {experience.tech.map((tech) => (
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

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="rounded-lg border bg-card p-8">
          <h3 className="text-2xl font-semibold text-card-foreground mb-4">
            Key Strengths
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center justify-center p-4 rounded-lg bg-secondary">
              <Users className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-medium">Team Leadership</span>
            </div>
            <div className="flex items-center justify-center p-4 rounded-lg bg-secondary">
              <TrendingUp className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-medium">Performance Optimization</span>
            </div>
            <div className="flex items-center justify-center p-4 rounded-lg bg-secondary">
              <MapPin className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-medium">Scalable Architecture</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 