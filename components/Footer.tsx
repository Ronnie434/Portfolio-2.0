"use client"

import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8 text-foreground">
            Let&apos;s create something <br className="hidden sm:block" />
            <span className="text-muted-foreground italic">extraordinary</span> together.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 font-light">
            I&apos;m currently open to new opportunities and collaborations. 
            Have a project in mind? Let&apos;s discuss how we can bring it to life.
          </p>

          <Link
            href="/contact"
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-10 font-medium text-primary-foreground transition-all duration-300 hover:w-56 hover:bg-primary/90 shadow-lg hover:shadow-primary/25"
          >
            <span className="mr-2 text-lg">Get in touch</span>
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <div className="w-full h-px bg-border/50 my-16 max-w-4xl" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-16 text-left md:text-center w-full max-w-4xl">
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-lg font-medium text-foreground">Navigation</h3>
              <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
              <Link href="/experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-lg font-medium text-foreground">Socials</h3>
              <Link href="https://github.com/Ronnie434" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">GitHub</Link>
              <Link href="https://www.linkedin.com/in/ronniepatel/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</Link>
              <Link href="https://twitter.com/ronakpatel434" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">Twitter</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-lg font-medium text-foreground">Contact</h3>
              <Link href="mailto:p.ronak0000@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">Email</Link>
              <Link href="tel:+16692859198" className="text-muted-foreground hover:text-primary transition-colors">Phone</Link>
              <Link href="https://calendly.com/ronakpatel" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">Schedule Call</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-lg font-medium text-foreground">Resources</h3>
              <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Resume</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Newsletter</Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl text-sm text-muted-foreground/60 gap-4">
            <p>© {currentYear} Ronak Patel. Crafted with ❤️ and Next.js.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 