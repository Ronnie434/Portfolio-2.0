// app/projects/page.tsx
import type { Metadata } from 'next'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'

export const metadata: Metadata = {
  title: 'Projects - Ronak Patel',
  description: 'View my portfolio of full-stack web applications, mobile apps, and open-source projects built with React, Next.js, Node.js, and modern technologies.',
}

export default function Projects() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            My Projects
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my work showcasing expertise in full-stack development, 
            cloud architecture, and modern web technologies.
          </p>
        </div>
        
        <ProjectsGrid />
      </div>
    </div>
  )
} 