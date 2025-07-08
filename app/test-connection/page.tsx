'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TestConnection() {
  const [status, setStatus] = useState<string>('Ready to test')
  const [error, setError] = useState<string | null>(null)
  const [envVars, setEnvVars] = useState<any>({})

  const testConnection = async () => {
    setStatus('Testing connection...')
    setError(null)

    try {
      // Check environment variables
      const env = {
        url: process.env.NEXT_PUBLIC_SUPABASE_URL || 'NOT_SET',
        anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'SET' : 'NOT_SET',
        serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY ? 'SET' : 'NOT_SET'
      }
      setEnvVars(env)

      // Test basic connection
      const { data, error: connectionError } = await supabase
        .from('blog_posts')
        .select('count')
        .limit(1)

      if (connectionError) {
        setError(`Connection error: ${connectionError.message}`)
        setStatus('Connection failed')
        return
      }

      setStatus('✅ Connection successful!')
      
      // Check if tables exist
      const { data: tableData, error: tableError } = await supabase
        .from('blog_posts')
        .select('*')
        .limit(1)

      if (tableError) {
        setError(`Table error: ${tableError.message}`)
      } else {
        setStatus('✅ Connection and tables working!')
      }

    } catch (err) {
      setError(`Unexpected error: ${err instanceof Error ? err.message : 'Unknown error'}`)
      setStatus('❌ Test failed')
    }
  }

  const testInsert = async () => {
    setStatus('Testing insert...')
    setError(null)

    try {
      const testPost = {
        slug: 'test-post-' + Date.now(),
        title: 'Test Post',
        subtitle: 'Test Subtitle',
        estimated_read_time: '1 min',
        audience: ['Test'],
        overview: 'Test overview',
        date: '2024-01-01',
        read_time: '1 min',
        tags: ['test'],
        excerpt: 'Test excerpt',
        featured: false
      }

      const { data, error: insertError } = await supabase
        .from('blog_posts')
        .insert(testPost)
        .select()

      if (insertError) {
        setError(`Insert error: ${insertError.message}`)
        setStatus('❌ Insert failed')
        return
      }

      setStatus('✅ Insert successful!')
      
      // Clean up test post
      if (data && data[0]) {
        await supabase
          .from('blog_posts')
          .delete()
          .eq('id', data[0].id)
      }

    } catch (err) {
      setError(`Insert test error: ${err instanceof Error ? err.message : 'Unknown error'}`)
      setStatus('❌ Insert test failed')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Supabase Connection Test</h1>
      
      <div className="space-y-6">
        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Environment Variables</h2>
          <div className="space-y-2 font-mono text-sm">
            <div>NEXT_PUBLIC_SUPABASE_URL: <span className={envVars.url === 'NOT_SET' ? 'text-red-500' : 'text-green-500'}>{envVars.url}</span></div>
            <div>NEXT_PUBLIC_SUPABASE_ANON_KEY: <span className={envVars.anonKey === 'NOT_SET' ? 'text-red-500' : 'text-green-500'}>{envVars.anonKey}</span></div>
            <div>SUPABASE_SERVICE_ROLE_KEY: <span className={envVars.serviceKey === 'NOT_SET' ? 'text-red-500' : 'text-green-500'}>{envVars.serviceKey}</span></div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Connection Test</h2>
          <p className="mb-4">Status: <span className="font-semibold">{status}</span></p>
          
          <div className="space-x-4">
            <button
              onClick={testConnection}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
            >
              Test Connection
            </button>
            
            <button
              onClick={testInsert}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Test Insert
            </button>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-destructive/10 border border-destructive text-destructive rounded-md">
              <h3 className="font-semibold mb-2">Error Details:</h3>
              <pre className="text-sm whitespace-pre-wrap">{error}</pre>
            </div>
          )}
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
          <h3 className="font-semibold text-yellow-800 mb-2">Common Issues:</h3>
          <ul className="text-yellow-700 space-y-1 list-disc list-inside text-sm">
            <li>Make sure .env.local file exists in project root</li>
            <li>Restart dev server after creating .env.local</li>
            <li>Verify Supabase project is active and accessible</li>
            <li>Check that database schema has been created</li>
            <li>Ensure RLS policies allow public access</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 