// components/sections/ExperienceList.tsx
"use client"

import { motion } from 'framer-motion'
import { CalendarDays, MapPin, Users, TrendingUp } from 'lucide-react'
import type { Experience } from '@/types'

const experiences: Experience[] = [
  {
    id: "1",
    company: "Apple Inc.",
    position: "Senior Software Engineer",
    duration: "2020 - Present",
    description: "Leading a team of 6 engineers, specializing in Next.js development, and mentoring junior developers. Architecting scalable solutions and implementing best practices for modern web applications.",
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
    metric: "5+",
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
              <span className="text-sm font-medium">React.js, Next.js, & Frontend</span>
            </div>
            <div className="flex items-center justify-center p-4 rounded-lg bg-secondary">
              <TrendingUp className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-medium">Cross-browser Compatibility</span>
            </div>
            <div className="flex items-center justify-center p-4 rounded-lg bg-secondary">
              <MapPin className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-medium">Responsive Design</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
