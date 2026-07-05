// components/sections/ExperienceList.tsx
"use client"

import { motion } from 'framer-motion'
import { CalendarDays, MapPin, Users, TrendingUp } from 'lucide-react'
import type { Experience } from '@/types'

const experiences: Experience[] = [
  {
    id: "0",
    company: "Uare.ai",
    position: "Senior Software Engineer",
    duration: "Jan 2026 - Present",
    description: "Building Uare.ai's Individual AI platform — \"Authentic, not Artificial\" personal AI that thinks, speaks, and evolves like you. Leading frontend architecture across the Build, Chat, and Discover experiences that turn a person's stories, voice, and knowledge into an evolving Human Life Model.",
    highlights: [
      "Spearheading the component-driven frontend with Next.js, React, and TypeScript, applying SSR/ISR rendering strategies to achieve sub-second page loads and strong Core Web Vitals across the Build, Chat, and Discover experiences.",
      "Developed AI-powered features leveraging LLM APIs to power each user's Human Life Model — individualized reasoning and voice-authentic responses grounded in their own stories, values, and decisions across seven dimensions of life.",
      "Engineered a browser-based voice-capture pipeline that turns a short 32-second memo into a personalized voice, preserving each user's tone, emotion, and personality.",
      "Built multi-source data ingestion and OAuth integrations (documents, videos, images, social, and website connectors) that continuously train each user's model, with robust error handling and rate-limit resilience.",
      "Integrated Stripe payment processing (subscriptions, one-time purchases, and webhook handling) to power creator monetization, revenue sharing, and customer lifecycle management.",
      "Designed and built a responsive, accessible UI with Tailwind CSS supporting complex workflows — bulk knowledge uploads, the Human Life Model dashboard, and the Discover community feed.",
      "Implemented CI/CD pipelines with GitHub Actions and Docker, streamlining deployments and reducing release cycles from days to hours."
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "LLM APIs", "Stripe", "Docker", "GitHub Actions", "OAuth", "REST APIs"]
  },
  {
    id: "1",
    company: "Apple Inc.",
    position: "Senior Software Engineer",
    duration: "2020 - Jan 2026",
    description: "Led a team of 6 engineers, specializing in Next.js development, and mentoring junior developers. Architected scalable solutions and implemented best practices for modern web applications.",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "AWS", "Docker", "Kubernetes", "MongoDB"]
  },
  {
    id: "3",
    company: "Dell Technologies",
    position: "Frontend Developer",
    duration: "Oct 2018 - Jul 2019",
    description: "Created efficient user interaction screens using modern web technologies. Developed responsive websites for smart devices, implemented CI/CD pipelines with Jenkins, and collaborated with clients to refine software requirements. Worked extensively with Angular.js and RESTful services.",
    tech: ["Angular.js", "HTML5", "CSS3", "JavaScript", "jQuery", "Node.js", "Jenkins", "MySQL", "AJAX", "JSON"]
  },
  {
    id: "4",
    company: "Samsung Engineering",
    position: "Frontend Developer",
    duration: "May 2017 - Jun 2018",
    description: "Converted design pages into responsive HTML, CSS, and JavaScript applications. Developed cross-platform web applications and mobile apps, analyzed UI/UX designs for improved usability, and collaborated with cross-functional teams throughout the development cycle.",
    tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Responsive Design", "Cross-browser Development", "UI/UX"]
  },
  {
    id: "5",
    company: "Gold coin multitrade limited",
    position: "Software Engineer",
    duration: "Jan 2016 - May 2017",
    description: "Involved in complete SDLC including analysis, development, and implementation. Developed user interfaces using modern web technologies, created web authentication modules, and worked extensively with databases and eCommerce platforms. Administered Linux systems and managed server configurations.",
    tech: ["AngularJS", "JavaScript", "HTML", "CSS", "jQuery", "Java Servlets", "JSP", "MySQL", "Linux", "Ajax", "JSON"]
  },
  {
    id: "6",
    company: "Tech Innovations Inc.",
    position: "Full Stack Developer",
    duration: "Jun 2015 - Dec 2015",
    description: "Developed full-stack web applications using modern JavaScript frameworks. Collaborated with design teams to implement responsive UI components and integrated RESTful APIs with backend services. Implemented automated testing and deployment pipelines.",
    tech: ["JavaScript", "Node.js", "Express", "React", "MongoDB", "HTML5", "CSS3", "Jest", "Git"]
  }
]

const achievements = [
  {
    metric: "8+",
    description: "Years of professional experience"
  },
  {
    metric: "6+",
    description: "Companies worked with"
  },
  {
    metric: "10+",
    description: "Technologies mastered"
  },
  {
    metric: "50+",
    description: "Projects delivered"
  }
]

export function ExperienceList() {
  return (
    <div className="space-y-24">
      {/* Achievements */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.metric}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center p-8 rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
              {achievement.metric}
            </div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Experience List */}
      <div className="relative space-y-12">
        {/* Timeline Line */}
        <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-border/0 via-border to-border/0 hidden md:block" />
        
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-0 md:pl-24"
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 top-8 w-3 h-3 rounded-full bg-primary border-4 border-background -ml-[5.5px] hidden md:block z-10" />
            
            <div className="rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm p-8 shadow-sm hover:shadow-lg transition-shadow group">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-serif font-medium text-foreground group-hover:text-primary transition-colors">
                    {experience.position}
                  </h3>
                  <p className="text-lg text-muted-foreground mt-1">
                    {experience.company}
                  </p>
                </div>
                <div className="flex items-center text-sm font-medium text-muted-foreground/80 bg-secondary/50 px-3 py-1 rounded-full mt-4 lg:mt-0 w-fit">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  <span>{experience.duration}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {experience.description}
              </p>

              {experience.highlights && experience.highlights.length > 0 && (
                <ul className="mb-6 space-y-3">
                  {experience.highlights.map((highlight, i) => (
                    <li key={i} className="flex text-muted-foreground leading-relaxed">
                      <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {experience.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-secondary/30 px-3 py-1 text-xs font-medium text-secondary-foreground border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
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
        className="mt-20"
      >
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-card/40 to-background p-10 backdrop-blur-sm text-center">
          <h3 className="text-3xl font-serif font-medium text-foreground mb-8">
            Key Strengths
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center justify-center p-6 rounded-xl bg-secondary/20 border border-white/5 hover:bg-secondary/40 transition-colors">
              <Users className="h-6 w-6 text-primary mr-3" />
              <span className="text-base font-medium">React.js, Next.js Ecosystem</span>
            </div>
            <div className="flex items-center justify-center p-6 rounded-xl bg-secondary/20 border border-white/5 hover:bg-secondary/40 transition-colors">
              <TrendingUp className="h-6 w-6 text-primary mr-3" />
              <span className="text-base font-medium">Performance Optimization</span>
            </div>
            <div className="flex items-center justify-center p-6 rounded-xl bg-secondary/20 border border-white/5 hover:bg-secondary/40 transition-colors">
              <MapPin className="h-6 w-6 text-primary mr-3" />
              <span className="text-base font-medium">Responsive & Accessible UI</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
