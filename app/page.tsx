// app/page.tsx
import { Hero } from '@/components/sections/Hero'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { TechStack } from '@/components/sections/TechStack'

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <TechStack />
      <FeaturedProjects />
    </div>
  )
} 