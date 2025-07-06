// components/sections/Timeline.tsx
"use client"

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Award, Users } from 'lucide-react'

const timelineEvents = [
  {
    year: "2023",
    title: "Senior Software Engineer",
    company: "TechCorp",
    description: "Leading a team of 6 engineers, architecting microservices solutions, and mentoring junior developers.",
    icon: Users,
    type: "work"
  },
  {
    year: "2022",
    title: "AWS Solutions Architect Certification",
    company: "Amazon Web Services",
    description: "Achieved AWS Certified Solutions Architect - Professional certification, demonstrating expertise in cloud architecture.",
    icon: Award,
    type: "certification"
  },
  {
    year: "2021",
    title: "Full-Stack Developer",
    company: "InnovateTech",
    description: "Built and deployed multiple React/Node.js applications serving 100K+ users. Implemented CI/CD pipelines and improved performance by 40%.",
    icon: Briefcase,
    type: "work"
  },
  {
    year: "2020",
    title: "Tech Lead",
    company: "StartupXYZ",
    description: "Led the development of a SaaS platform from MVP to $1M ARR. Managed a team of 4 developers and established engineering best practices.",
    icon: Users,
    type: "work"
  },
  {
    year: "2019",
    title: "Software Engineer",
    company: "DevSolutions",
    description: "Developed scalable web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software.",
    icon: Briefcase,
    type: "work"
  },
  {
    year: "2016",
    title: "Computer Science Degree",
    company: "Stanford University",
    description: "Bachelor's degree in Computer Science with focus on algorithms, data structures, and software engineering principles.",
    icon: GraduationCap,
    type: "education"
  }
]

export function Timeline() {
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
            Career Timeline
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Key milestones and achievements in my professional journey
          </p>
        </motion.div>

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:ml-px" />
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 w-3 h-3 bg-primary rounded-full border-2 border-background md:left-1/2 md:ml-[-6px] z-10" />
                
                {/* Content */}
                <div className={`flex-1 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                } pl-12 md:pl-0 pr-0`}>
                  <div className="bg-card rounded-lg border p-6 shadow-sm">
                    <div className="flex items-center mb-2">
                      <event.icon className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm font-medium text-primary">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-1">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-3">
                      {event.company}
                    </p>
                    <p className="text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
                
                {/* Spacer for md screens */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 