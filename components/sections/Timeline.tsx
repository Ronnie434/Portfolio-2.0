// components/sections/Timeline.tsx
"use client"

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Award, Users } from 'lucide-react'

const timelineEvents = [
  {
    year: "2020",
    title: "Senior Software Engineer",
    company: "Apple Inc.",
    description: "Leading a team of 6 engineers, Next.js Developer, and mentoring junior developers.",
    icon: Users,
    type: "work"
  },
  {
    year: "2021",
    title: "Full-Stack Developer",
    company: "GCML Herbal",
    description: "Built and deployed multiple React/Node.js applications serving 100K+ users. Implemented CI/CD pipelines and improved performance by 40%.",
    icon: Briefcase,
    type: "work"
  },
  {
    year: "2020",
    title: "Computer Engineering Degree",
    company: "International Technological University",
    description: "Master's degree in Computer Science with focus on algorithms, data structures, and software engineering principles.",
    icon: GraduationCap,
    type: "work"
  },
  {
    year: "2019-2020",
    title: "React JS Developer (Freelancer)",
    company: "SCIF",
    description: "Developed responsive React.js applications with Material Design components. Implemented Redux for state management, worked with RESTful services, and ensured cross-browser compatibility. Focused on accessibility standards and mobile-responsive design.",
    icon: Briefcase,
    type: "work"
  },
  {
    year: "2018-2019",
    title: "Frontend Developer",
    company: "Dell Technologies",
    description: "Created efficient user interaction screens using HTML5, CSS3, JavaScript, and Angular.js. Developed responsive websites for smart devices, implemented CI/CD pipelines with Jenkins, and worked with clients to refine software requirements.",
    icon: Briefcase,
    type: "work"
  },
  {
    year: "2018",
    title: "Computer Engineering Degree",
    company: "Gujarat Technological University",
    description: "Bachelor's degree in Computer Science with focus on algorithms, data structures, and software engineering principles.",
    icon: GraduationCap,
    type: "education"
  },
  {
    year: "2017-2018",
    title: "Frontend Developer",
    company: "Samsung Engineering",
    description: "Converted design pages into HTML, CSS, and JavaScript. Developed responsive web applications and mobile apps, analyzed UI/UX designs for improved usability, and collaborated with cross-functional teams throughout the development cycle.",
    icon: Briefcase,
    type: "work"
  },
  {
    year: "2016-2017",
    title: "Software Engineer",
    company: "Gold coin multitrade limited",
    description: "Involved in complete SDLC including analysis, development, and implementation. Developed user interfaces using HTML, CSS, JavaScript, and AngularJS. Created web authentication modules and worked extensively with databases and eCommerce platforms.",
    icon: Briefcase,
    type: "work"
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