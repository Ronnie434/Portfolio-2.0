"use client"

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, CheckCircle, Users, Code, Database } from 'lucide-react'
import Link from 'next/link'
import type { BlogPostData, BlogSection, CodeBlock, TableRow, ServiceMethod, TypeScriptExample, DecisionItem } from '@/types'

interface BlogPostProps {
  post: BlogPostData
}

function CodeBlockComponent({ code }: { code: CodeBlock }) {
  const getLanguageLabel = (lang: string) => {
    const labels = {
      'tsx': 'TypeScript React',
      'ts': 'TypeScript', 
      'js': 'JavaScript',
      'jsx': 'React',
      'bash': 'Bash',
      'json': 'JSON',
      'css': 'CSS',
      'html': 'HTML'
    }
    return labels[lang as keyof typeof labels] || lang.toUpperCase()
  }

  return (
    <div className="my-6">
      {code.file && (
        <div className="bg-muted border border-b-0 rounded-t-lg px-4 py-2 text-sm font-mono text-muted-foreground flex items-center justify-between">
          <span>{code.file}</span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
            {getLanguageLabel(code.language)}
          </span>
        </div>
      )}
      <div className={`bg-gray-900 dark:bg-gray-800 border rounded-lg ${code.file ? 'rounded-t-none' : ''} relative`}>
        {!code.file && (
          <div className="absolute top-3 right-3 text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
            {getLanguageLabel(code.language)}
          </div>
        )}
        <pre className="p-4 overflow-x-auto text-gray-100 text-sm leading-relaxed">
          <code>{code.content}</code>
        </pre>
      </div>
    </div>
  )
}

function TableComponent({ content }: { content: string }) {
  const tableData: any[] = JSON.parse(content)
  
  // Handle different table formats
  const firstRow = tableData[0]
  const isStateManagementTable = firstRow && ('Redux' in firstRow || 'Zustand' in firstRow || 'Context' in firstRow)
  
  if (isStateManagementTable) {
    return (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border border-border rounded-lg">
          <thead>
            <tr className="bg-muted">
              <th className="border-b border-border px-4 py-3 text-left font-semibold">Criteria</th>
              <th className="border-b border-border px-4 py-3 text-left font-semibold">Redux</th>
              <th className="border-b border-border px-4 py-3 text-left font-semibold">Zustand</th>
              <th className="border-b border-border px-4 py-3 text-left font-semibold">Context</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="border-b border-border last:border-b-0">
                <td className="px-4 py-3 font-medium">{row.feature}</td>
                <td className="px-4 py-3">{row.Redux}</td>
                <td className="px-4 py-3">{row.Zustand}</td>
                <td className="px-4 py-3">{row.Context}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  
  // Default table format (feature/purpose or feature/use)
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border border-border rounded-lg">
        <thead>
          <tr className="bg-muted">
            <th className="border-b border-border px-4 py-3 text-left font-semibold">Feature</th>
            <th className="border-b border-border px-4 py-3 text-left font-semibold">
              {firstRow?.purpose ? 'Purpose' : 'Use'}
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="border-b border-border last:border-b-0">
              <td className="px-4 py-3">{row.feature}</td>
              <td className="px-4 py-3">{row.purpose || row.use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ListComponent({ items, type = 'bullet' }: { items: string[], type?: 'bullet' | 'check' }) {
  const Icon = type === 'check' ? CheckCircle : null
  
  return (
    <ul className="my-4 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          {Icon ? (
            <Icon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
          ) : (
            <span className="text-primary mr-3 mt-1">•</span>
          )}
          <span className="text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function PatternComponent({ patterns }: { patterns: any[] }) {
  return (
    <div className="my-6 space-y-6">
      {patterns.map((pattern, index) => (
        <div key={index} className="border border-border rounded-lg p-6">
          <h4 className="font-semibold text-lg mb-4">{pattern.title}</h4>
          {pattern.code && <CodeBlockComponent code={pattern.code} />}
          {pattern.tool && (
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 my-4">
              <div className="flex items-center">
                <Database className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium">Tool: {pattern.tool}</span>
              </div>
              {pattern.command && (
                <code className="block mt-2 bg-black text-green-400 px-3 py-2 rounded text-sm">
                  {pattern.command}
                </code>
              )}
            </div>
          )}
          {pattern.tip && (
            <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-yellow-800 dark:text-yellow-200">{pattern.tip}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function SectionComponent({ section }: { section: BlogSection }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-foreground mb-6">{section.title}</h2>
      
      {section.content && section.type !== 'table' && (
        <p className="text-muted-foreground mb-6 leading-relaxed">{section.content}</p>
      )}
      
      {section.type === 'table' && section.content && (
        <TableComponent content={section.content} />
      )}
      
      {section.code && <CodeBlockComponent code={section.code} />}
      
      {section.code_samples && (
        <div className="space-y-4">
          {section.code_samples.map((code, index) => (
            <CodeBlockComponent key={index} code={code} />
          ))}
        </div>
      )}
      
      {section.docker_compose && (
        <div className="my-6">
          <h4 className="font-semibold mb-3">Docker Compose:</h4>
          <CodeBlockComponent code={section.docker_compose} />
        </div>
      )}
      
      {section.k8s_yaml && (
        <div className="my-6">
          <h4 className="font-semibold mb-3">Kubernetes Deployment:</h4>
          <CodeBlockComponent code={section.k8s_yaml} />
        </div>
      )}
      
      {section.bullet_points && (
        <div className="my-6">
          <ListComponent items={section.bullet_points} />
        </div>
      )}
      
      {section.best_practices && (
        <div className="my-6">
          <h4 className="font-semibold mb-3">Best Practices:</h4>
          <ListComponent items={section.best_practices} type="check" />
        </div>
      )}
      
      {section.methods && (
        <div className="my-6">
          <div className="space-y-4">
            {section.methods.map((method, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <h4 className="font-semibold text-lg mb-2">{method.method}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded p-3">
                    <span className="font-medium text-green-800 dark:text-green-200">✓ Benefit: </span>
                    <span className="text-green-700 dark:text-green-300">{method.benefit}</span>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded p-3">
                    <span className="font-medium text-red-800 dark:text-red-200">⚠ Drawback: </span>
                    <span className="text-red-700 dark:text-red-300">{method.drawback}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {section.suggestions && (
        <div className="my-6">
          <h4 className="font-semibold mb-3">Suggestions:</h4>
          <ListComponent items={section.suggestions} />
        </div>
      )}
      
      {section.examples && (
        <div className="my-6">
          <div className="space-y-4">
            {section.examples.map((example, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-lg">{example.type}</h4>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    TypeScript Utility
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">{example.use_case}</p>
                <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
                  <pre className="text-gray-100 text-sm"><code>{example.code}</code></pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {section.real_world_use_case && (
        <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg p-4 my-4">
          <h4 className="font-semibold mb-2">Real-world Use Case:</h4>
          <p className="text-purple-800 dark:text-purple-200">{section.real_world_use_case}</p>
        </div>
      )}
      
      {section.example && (
        <div className="my-6">
          <h4 className="font-semibold mb-3">Example:</h4>
          {typeof section.example === 'string' ? (
            <p className="text-muted-foreground">{section.example}</p>
          ) : (
            <CodeBlockComponent code={section.example} />
          )}
        </div>
      )}
      
      {section.pros && (
        <div className="my-6">
          <h4 className="font-semibold mb-3">Pros:</h4>
          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <ul className="space-y-2">
              {section.pros.map((pro, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-green-800 dark:text-green-200">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      {section.cons && (
        <div className="my-6">
          <h4 className="font-semibold mb-3">Cons:</h4>
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <ul className="space-y-2">
              {section.cons.map((con, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-3 mt-0.5 flex-shrink-0">✗</span>
                  <span className="text-red-800 dark:text-red-200">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      {section.decision_matrix && (
        <div className="my-6">
          <div className="space-y-4">
            {section.decision_matrix.map((item, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="mb-3">
                  <h4 className="font-medium text-foreground mb-2">Scenario:</h4>
                  <p className="text-muted-foreground">{item.scenario}</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded p-3">
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-1">Recommendation:</h4>
                  <p className="text-green-700 dark:text-green-300">{item.recommendation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {section.scaling_strategies && (
        <div className="my-6">
          <h4 className="font-semibold mb-3">Scaling Strategies:</h4>
          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <ul className="space-y-2">
              {section.scaling_strategies.map((strategy, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-0.5 flex-shrink-0">↗</span>
                  <span className="text-blue-800 dark:text-blue-200">{strategy}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      {section.benefits && (
        <div className="my-6">
          <h4 className="font-semibold mb-3">Benefits:</h4>
          <ListComponent items={section.benefits} type="check" />
        </div>
      )}
      
      {section.tips && (
        <div className="my-6">
          <h4 className="font-semibold mb-3">Tips:</h4>
          <ListComponent items={section.tips} />
        </div>
      )}
      
      {section.options && (
        <div className="my-6">
          <h4 className="font-semibold mb-3">Options:</h4>
          <ListComponent items={section.options} />
        </div>
      )}
      
      {section.tools && (
        <div className="my-6">
          <h4 className="font-semibold mb-3">Tools:</h4>
          <div className="flex flex-wrap gap-2">
            {section.tools.map((tool, index) => (
              <span
                key={index}
                className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {section.checklist && (
        <div className="my-6">
          <h4 className="font-semibold mb-3">Checklist:</h4>
          <ListComponent items={section.checklist} type="check" />
        </div>
      )}
      
      {section.patterns && <PatternComponent patterns={section.patterns} />}
      
      {section.use_case && (
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 my-4">
          <h4 className="font-semibold mb-2">Use Case:</h4>
          <p className="text-blue-800 dark:text-blue-200">{section.use_case}</p>
        </div>
      )}
      
      {section.note && (
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 my-4">
          <p className="text-amber-800 dark:text-amber-200">{section.note}</p>
        </div>
      )}
      
      {section.advice && (
        <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4 my-4">
          <p className="text-green-800 dark:text-green-200">{section.advice}</p>
        </div>
      )}
      
      {section.tip && (
        <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 my-4">
          <h4 className="font-semibold mb-2">💡 Tip:</h4>
          <p className="text-yellow-800 dark:text-yellow-200">{section.tip}</p>
        </div>
      )}
    </motion.section>
  )
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <Link
          href="/blog"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {post.title}
        </h1>
        
        <p className="text-xl text-muted-foreground mb-6">
          {post.subtitle}
        </p>
        
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            {post.estimated_read_time}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2" />
            {post.audience.join(', ')}
          </div>
        </div>
        
        {/* Overview */}
        <div className="bg-card border rounded-lg p-6 mb-12">
          <h2 className="text-lg font-semibold mb-3">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">{post.overview}</p>
        </div>
      </motion.div>
      
      {/* Content Sections */}
      <div className="prose prose-lg max-w-none">
        {post.sections.map((section, index) => (
          <SectionComponent key={index} section={section} />
        ))}
      </div>
      
      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 pt-8 border-t border-border"
      >
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Thanks for reading! Found this helpful?
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Read More Articles
          </Link>
        </div>
      </motion.div>
    </article>
  )
} 