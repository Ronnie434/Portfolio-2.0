// app/contact/page.tsx
import type { Metadata } from 'next'
import { ContactForm } from '@/components/sections/ContactForm'
import { ContactInfo } from '@/components/sections/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact - Ronak Patel',
  description: 'Get in touch with Ronak Patel. Available for freelance projects, consulting, and full-time opportunities in software engineering.',
}

export default function Contact() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new opportunities, projects,
            or just connecting with fellow developers. Let&apos;s start a conversation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  )
} 