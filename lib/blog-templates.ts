import type { BlogPostData } from '@/types'

// Blog post templates for programmatic insertion
// This allows us to create new blog posts via code when needed
export const blogPostTemplates: Record<string, BlogPostData> = {
  'ai-agents-developer-productivity': {
    title: "How AI Agents can help to improve productivity of Developer",
    subtitle: "Discover how AI agents are revolutionizing software development by automating repetitive tasks, enhancing code quality, and accelerating development workflows.",
    estimated_read_time: "10-12 minutes",
    audience: ["Software Developers", "Engineering Teams", "Tech Leads", "DevOps Engineers"],
    overview: "AI agents are transforming the software development landscape by automating mundane tasks, providing intelligent code suggestions, and streamlining development workflows. This comprehensive guide explores how developers can leverage AI agents to boost productivity, improve code quality, and focus on high-value creative work.",
    sections: [
      {
        title: "The Rise of AI Agents in Software Development",
        content: "AI agents have evolved from simple code completion tools to sophisticated assistants capable of understanding context, generating complex code, debugging issues, and even architecting solutions. These intelligent systems are becoming indispensable partners in modern software development."
      },
      {
        title: "Key Areas Where AI Agents Boost Productivity",
        type: "table",
        content: JSON.stringify([
          { feature: "🤖 Code Generation", purpose: "Generate boilerplate code, functions, and entire modules from natural language descriptions" },
          { feature: "🔍 Code Review & Analysis", purpose: "Automated code review, bug detection, and security vulnerability scanning" },
          { feature: "📝 Documentation", purpose: "Auto-generate documentation, comments, and API specifications" },
          { feature: "🧪 Test Generation", purpose: "Create unit tests, integration tests, and test data automatically" },
          { feature: "🐛 Debugging & Troubleshooting", purpose: "Identify bugs, suggest fixes, and explain error messages" },
          { feature: "🔄 Refactoring", purpose: "Optimize code structure, improve performance, and modernize legacy code" }
        ])
      },
      // Add more sections as needed for programmatic insertion
      {
        title: "Popular AI Agent Tools for Developers",
        tools: [
          "GitHub Copilot - AI pair programmer",
          "ChatGPT/Claude - Code generation and debugging",
          "Tabnine - AI code completion",
          "Cursor - AI-powered code editor",
          "Replit Ghostwriter - Collaborative AI coding"
        ]
      },
      {
        title: "The Future of AI-Assisted Development",
        content: "AI agents will continue to evolve, becoming more sophisticated in understanding business requirements, architectural decisions, and complex problem-solving. The future developer will be one who effectively collaborates with AI to build better software faster, focusing on creativity, strategy, and user experience while AI handles the routine implementation details."
      }
    ]
  },
  'automate-anything-building-smart-workflows-n8n': {
    title: "Automate Anything: Building Smart Workflows with n8n",
    subtitle: "Master the art of workflow automation using n8n's powerful visual interface. Learn to build complex integrations, automate business processes, and create intelligent workflows that save time and reduce errors.",
    estimated_read_time: "15-18 minutes",
    audience: ["Developers", "DevOps Engineers", "Business Analysts", "Automation Enthusiasts"],
    overview: "n8n is a powerful, open-source workflow automation tool that enables you to connect different services and automate complex business processes. This comprehensive guide covers everything from basic setup to advanced workflow patterns, helping you build robust automation solutions.",
    sections: [
      {
        title: "What is n8n and Why Choose It?",
        content: "n8n (pronounced 'n-eight-n') is a free and open-source workflow automation tool that allows you to connect various services and automate tasks through a visual, node-based interface. Unlike other automation tools, n8n gives you complete control over your data and can be self-hosted, making it perfect for businesses with strict data privacy requirements."
      },
      {
        title: "Key Features and Advantages",
        type: "table",
        content: JSON.stringify([
          { feature: "🎨 Visual Workflow Builder", purpose: "Drag-and-drop interface for creating complex workflows without coding" },
          { feature: "🔗 400+ Integrations", purpose: "Pre-built nodes for popular services like Slack, Google Sheets, GitHub, etc." },
          { feature: "🏠 Self-Hosted Option", purpose: "Complete control over your data and workflows" },
          { feature: "🔄 Real-time Execution", purpose: "Workflows can be triggered by webhooks, schedules, or manual execution" },
          { feature: "🛠️ Custom Code Support", purpose: "JavaScript and Python code nodes for custom logic" },
          { feature: "📊 Workflow Analytics", purpose: "Built-in monitoring and execution history" }
        ])
      },
      {
        title: "Real-World Use Cases",
        use_cases: [
          "Customer Support Automation: Route support tickets based on priority and category",
          "Lead Management: Automatically add new leads from forms to CRM and send follow-up emails",
          "Content Publishing: Schedule and publish content across multiple social media platforms",
          "Data Synchronization: Keep customer data in sync between different business systems",
          "Monitoring and Alerts: Monitor application health and send alerts when issues occur",
          "E-commerce Automation: Process orders, update inventory, and send shipping notifications"
        ]
      },
      {
        title: "Future of Workflow Automation",
        content: "The future of workflow automation lies in intelligent, AI-powered workflows that can adapt and learn from data patterns. n8n is positioning itself at the forefront of this revolution by providing a flexible platform that can integrate with AI services and machine learning models. As businesses become more data-driven, tools like n8n will become essential for creating responsive, automated systems that can handle complex business logic and decision-making processes."
      }
    ]
  }
}

export function getBlogTemplate(slug: string): BlogPostData | null {
  return blogPostTemplates[slug] || null
}

export function getAllBlogTemplates(): string[] {
  return Object.keys(blogPostTemplates)
}