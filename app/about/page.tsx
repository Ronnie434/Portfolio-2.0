// app/about/page.tsx
import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";

export const metadata: Metadata = {
  title: "About - Ronak Patel",
  description:
    "Learn more about Ronak Patel, Senior Software Engineer with 8+ years of experience in full-stack development, cloud architecture, and team leadership.",
};

export default function About() {
  return (
    <div className="space-y-16">
      <AboutHero />
      <Skills />
      <Timeline />
    </div>
  );
}
