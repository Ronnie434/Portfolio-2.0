// components/sections/AboutHero.tsx
"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Award } from 'lucide-react'

export function AboutHero() {
  return (
    <section className="pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About Me
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I'm Ronak Patel, a Senior Software Engineer with over 8 years of experience 
              building scalable web applications and leading development teams. I'm passionate 
              about creating elegant solutions to complex problems and staying at the forefront 
              of technology trends.
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              My journey in software development began with a Computer Science degree, 
              where I developed a strong foundation in algorithms, data structures, and 
              software architecture. Since then, I've had the privilege of working with 
              startups and Fortune 500 companies, helping them build products that serve 
              millions of users.
            </p>
            <div className="mt-8 flex flex-col space-y-4">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-5 w-5 mr-2" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-5 w-5 mr-2" />
                <span>8+ years of experience</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Award className="h-5 w-5 mr-2" />
                <span>AWS Certified Solutions Architect</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="relative h-96 w-80 overflow-hidden rounded-3xl shadow-2xl border-4 border-background">
                <Image
                  src="/profile.jpg"
                  alt="Ronak Patel"
                  fill
                  className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                {/* Gradient overlay for better visual appeal */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>
              {/* Enhanced decorative elements */}
              <div className="absolute -top-6 -right-6 h-80 w-72 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 -z-10 blur-sm" />
              <div className="absolute -bottom-6 -left-6 h-80 w-72 rounded-3xl bg-gradient-to-tr from-secondary/30 to-secondary/10 -z-10 blur-sm" />
              {/* Additional accent element */}
              <div className="absolute top-4 right-4 h-4 w-4 rounded-full bg-primary/60 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 