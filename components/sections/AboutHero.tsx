// components/sections/AboutHero.tsx
"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Award } from 'lucide-react'

export function AboutHero() {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            <div className="inline-block rounded-full bg-secondary/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-foreground mb-8 w-fit border border-white/10">
              Senior Software Engineer
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-foreground leading-[1.1] mb-8">
              About <span className="text-muted-foreground italic">Me.</span>
            </h1>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground max-w-xl">
              <p>
                I&apos;m Ronak Patel, a Senior Software Engineer with over 8 years of experience
                building scalable web applications and leading development teams.
              </p>
              <p>
                I&apos;m passionate about creating elegant solutions to complex problems and staying at the forefront 
                of technology trends. My journey began with a Computer Science degree and has led me to work with 
                innovative startups and Fortune 500 companies.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center sm:items-start p-4 rounded-2xl bg-card/30 backdrop-blur-sm border border-white/5">
                <MapPin className="h-6 w-6 mb-2 text-primary" />
                <span className="font-medium text-foreground">San Francisco</span>
                <span className="text-sm text-muted-foreground">Location</span>
              </div>
              <div className="flex flex-col items-center sm:items-start p-4 rounded-2xl bg-card/30 backdrop-blur-sm border border-white/5">
                <Calendar className="h-6 w-6 mb-2 text-primary" />
                <span className="font-medium text-foreground">8+ Years</span>
                <span className="text-sm text-muted-foreground">Experience</span>
              </div>
              <div className="flex flex-col items-center sm:items-start p-4 rounded-2xl bg-card/30 backdrop-blur-sm border border-white/5">
                <Award className="h-6 w-6 mb-2 text-primary" />
                <span className="font-medium text-foreground">Certified</span>
                <span className="text-sm text-muted-foreground">React Developer</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[600px] flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-md aspect-[4/5]">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-primary/20 to-secondary/20 rotate-6 blur-2xl opacity-60" />
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Ronak Patel"
                  fill
                  className="object-cover object-center scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 p-6 rounded-2xl bg-card/80 backdrop-blur-md border border-white/10 shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-medium">Open to opportunities</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 