// components/sections/ContactForm.tsx
"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Check, AlertCircle } from 'lucide-react'
import emailjs from 'emailjs-com'

interface FormData {
  name: string
  email: string
  title: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  title?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    title: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Use emailjs to send the form
      const result = await emailjs.sendForm(
        "service_e6avysv",      // Your Service ID
        "template_rvdz9ab",     // Your Template ID
        e.target as HTMLFormElement, // Form reference
        "AuZVqfm2MHP4UPtNK"     // Your Public Key
      )
      
      console.log('Email sent successfully:', result.text)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', title: '', message: '' })
      setErrors({})
    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-white/10 bg-card/40 backdrop-blur-sm p-8 md:p-10 shadow-sm"
    >
      <h2 className="font-serif text-3xl font-medium text-foreground mb-8">
        Send Me a Message
      </h2>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
          <div className="flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-3" />
            <p className="text-sm font-medium text-green-600 dark:text-green-400">
              Message sent successfully! I&apos;ll get back to you soon.
            </p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
            <p className="text-sm font-medium text-red-600 dark:text-red-400">
              Failed to send message. Please try again or contact me directly.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-b-2 border-border bg-transparent text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary focus:bg-accent/10 transition-colors rounded-t-lg ${
              errors.name ? 'border-red-500' : ''
            }`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-b-2 border-border bg-transparent text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary focus:bg-accent/10 transition-colors rounded-t-lg ${
              errors.email ? 'border-red-500' : ''
            }`}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-muted-foreground mb-2">
            Subject
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-b-2 border-border bg-transparent text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary focus:bg-accent/10 transition-colors rounded-t-lg ${
              errors.title ? 'border-red-500' : ''
            }`}
            placeholder="What's this about?"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 border-b-2 border-border bg-transparent text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary focus:bg-accent/10 transition-colors rounded-t-lg resize-none ${
              errors.message ? 'border-red-500' : ''
            }`}
            placeholder="Tell me about your project or idea..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5 mr-3" />
              Send Message
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
} 