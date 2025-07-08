// types/index.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  tech: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

// Blog types
export interface BlogPostData {
  title: string
  subtitle: string
  estimated_read_time: string
  audience: string[]
  overview: string
  sections: BlogSection[]
}

export interface BlogSection {
  title: string
  content?: string
  type?: 'table' | 'code' | 'text'
  code?: CodeBlock
  code_samples?: CodeBlock[]
  benefits?: string[]
  tips?: string[]
  options?: string[]
  tools?: string[]
  note?: string
  advice?: string
  use_case?: string
  patterns?: Pattern[]
  checklist?: string[]
  bullet_points?: string[]
  best_practices?: string[]
  docker_compose?: CodeBlock
  methods?: ServiceMethod[]
  k8s_yaml?: CodeBlock
  suggestions?: string[]
  examples?: TypeScriptExample[]
  real_world_use_case?: string
  benefit?: string
  use_cases?: string[]
  pros?: string[]
  cons?: string[]
  example?: CodeBlock | string
  tip?: string
  decision_matrix?: DecisionItem[]
  scaling_strategies?: string[]
}

export interface CodeBlock {
  language: string
  content: string
  file?: string
}

export interface Pattern {
  title: string
  code?: CodeBlock
  tool?: string
  command?: string
  tip?: string
}

export interface TableRow {
  feature: string
  purpose?: string
  use?: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  subtitle: string
  date: string
  readTime: string
  tags: string[]
  excerpt: string
} 

export interface ServiceMethod {
  method: string
  benefit: string
  drawback: string
}

export interface ServiceOption {
  tool: string
  feature: string
} 

export interface TypeScriptExample {
  type: string
  use_case: string
  code: string
}

export interface DecisionItem {
  scenario: string
  recommendation: string
} 