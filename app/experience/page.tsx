// app/experience/page.tsx
import type { Metadata } from 'next'
import { ExperienceList } from '@/components/sections/ExperienceList'

export const metadata: Metadata = {
  title: 'Experience - Ronak Patel',
  description: 'Professional work experience and career history of Ronak Patel, Senior Software Engineer with expertise in full-stack development and team leadership.',
}

export default function Experience() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Professional Experience
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my career journey, highlighting key achievements 
            and contributions in software engineering and team leadership.
          </p>
        </div>
        
        <ExperienceList />
      </div>
    </div>
  )
} 