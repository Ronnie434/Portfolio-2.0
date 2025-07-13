// components/sections/ContactInfo.tsx
"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Calendar } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "p.ronak0000@gmail.com",
    href: "mailto:p.ronak0000@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (669) 285-9198",
    href: "tel:+16692859198"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Oakley, CA",
    href: "https://maps.google.com/?q=Oakley,+CA"
  },
  {
    icon: Calendar,
    label: "Schedule a Call",
    value: "Book a meeting",
    href: "https://calendly.com/ronakpatel"
  }
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Ronnie434",
    username: "@Ronnie434"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ronniepatel/",
    username: "@RonniePatel"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/ronakpatel434",
    username: "@ronakpatel434"
  }
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Let's Connect
        </h2>
        <p className="text-muted-foreground">
          Whether you have a project in mind, want to discuss opportunities, 
          or just want to say hello, I'd love to hear from you.
        </p>
      </motion.div>

      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center p-4 rounded-lg border bg-card hover:bg-accent transition-colors group"
            >
              <method.icon className="h-5 w-5 text-primary mr-3 group-hover:text-accent-foreground" />
              <div>
                <p className="text-sm font-medium text-card-foreground group-hover:text-accent-foreground">
                  {method.label}
                </p>
                <p className="text-sm text-muted-foreground group-hover:text-accent-foreground">
                  {method.value}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="border-t pt-8"
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Follow Me
        </h3>
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-lg border bg-card hover:bg-accent transition-colors group"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
            </Link>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {socialLinks.map((link) => (
            <p key={link.label} className="text-sm text-muted-foreground">
              <span className="font-medium">{link.label}:</span> {link.username}
            </p>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="rounded-lg border bg-card p-6"
      >
        <h3 className="text-lg font-semibold text-card-foreground mb-2">
          Current Status
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          I'm currently open to new opportunities and interesting projects. 
          Feel free to reach out if you'd like to collaborate!
        </p>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-green-600 dark:text-green-400">
            Available for work
          </span>
        </div>
      </motion.div>
    </div>
  )
} 