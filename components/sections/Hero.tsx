// components/sections/Hero.tsx
"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground mb-4 animate-fade-in">
              Available for new opportunities
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground max-w-4xl mx-auto leading-[1.1]">
              Crafting digital <br className="hidden md:block" />
              <span className="text-muted-foreground italic">experiences</span> that matter.
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl font-light leading-relaxed"
          >
            Senior Software Engineer specialized in building scalable, human-centric web applications with React, Next.js, and modern cloud architecture.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <Link
              href="/projects"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-medium text-primary-foreground transition-all duration-300 hover:w-40 hover:bg-primary/90"
            >
              <span className="mr-2">View Work</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background/50 backdrop-blur-sm px-8 font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-slow-spin -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl animate-float -z-10 delay-1000" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl animate-float -z-10 delay-2000" />
    </section>
  )
} 