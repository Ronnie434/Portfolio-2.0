// app/admin/add-blog/page.tsx
'use client'

import { useState } from 'react'

export default function AddBlogPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const addBlogPost = async (slug: string) => {
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch('/api/add-blog-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug }),
      })

      const data = await response.json()

      if (response.ok) {
        setResult(data)
      } else {
        setError(data.error || 'Failed to add blog post')
      }
    } catch (err) {
      setError('Network error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Add Blog Post to Supabase</h1>
        
        <div className="bg-card p-6 rounded-lg border mb-6">
          <h2 className="text-xl font-semibold mb-4">AI Agents Developer Productivity Blog</h2>
          <p className="text-muted-foreground mb-4">
            Click the button below to add the "How AI Agents can help to improve productivity of Developer" blog post to your Supabase database.
          </p>
          
          <button
            onClick={() => addBlogPost('ai-agents-developer-productivity')}
            disabled={loading}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 disabled:opacity-50 mr-4"
          >
            {loading ? 'Adding Blog Post...' : 'Add AI Agents Blog Post'}
          </button>
        </div>

        <div className="bg-card p-6 rounded-lg border mb-6">
          <h2 className="text-xl font-semibold mb-4">n8n Workflow Automation Blog</h2>
          <p className="text-muted-foreground mb-4">
            Click the button below to add the "Automate Anything: Building Smart Workflows with n8n" blog post to your Supabase database.
          </p>
          
          <button
            onClick={() => addBlogPost('automate-anything-building-smart-workflows-n8n')}
            disabled={loading}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? 'Adding Blog Post...' : 'Add n8n Blog Post'}
          </button>
        </div>

        {loading && (
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
            <p className="text-blue-800">Adding blog post to Supabase...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-red-800 mb-2">Error</h3>
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {result && (
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Success!</h3>
            <div className="text-green-700">
              <p><strong>Post ID:</strong> {result.postId}</p>
              <p><strong>Slug:</strong> {result.slug}</p>
              <p><strong>Title:</strong> {result.title}</p>
              <p><strong>Tags:</strong> {result.tags?.join(', ')}</p>
              <p><strong>Read Time:</strong> {result.readTime}</p>
            </div>
            <p className="mt-4 text-green-600">
              The blog post has been successfully added to your Supabase database!
            </p>
          </div>
        )}

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">Important Note</h3>
          <p className="text-yellow-700">
            Make sure your Supabase environment variables are properly configured in your .env.local file:
          </p>
          <ul className="list-disc list-inside mt-2 text-yellow-700">
            <li>NEXT_PUBLIC_SUPABASE_URL</li>
            <li>NEXT_PUBLIC_SUPABASE_ANON_KEY</li>
            <li>SUPABASE_SERVICE_ROLE_KEY</li>
          </ul>
          <p className="mt-2 text-yellow-700">
            After successfully adding the blog post, you can delete this admin page for security.
          </p>
        </div>
      </div>
    </div>
  )
}