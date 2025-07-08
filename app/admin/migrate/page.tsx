'use client'

import { useState } from 'react'
import { migrateBlogData } from '@/lib/migrate-blog-data'

export default function MigrationPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const handleMigration = async () => {
    setIsLoading(true)
    setError(null)
    setResults(null)

    try {
      const migrationResults = await migrateBlogData()
      setResults(migrationResults)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Blog Data Migration</h1>
      
      <div className="bg-card p-6 rounded-lg border">
        <h2 className="text-xl font-semibold mb-4">Migrate Blog Data to Supabase</h2>
        <p className="text-muted-foreground mb-6">
          This will transfer all existing blog posts from the static data file to your Supabase database. 
          Make sure you have set up your environment variables and database schema before running this migration.
        </p>

        <button
          onClick={handleMigration}
          disabled={isLoading}
          className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Migrating...' : 'Start Migration'}
        </button>

        {error && (
          <div className="mt-6 p-4 bg-destructive/10 border border-destructive text-destructive rounded-md">
            <h3 className="font-semibold mb-2">Error occurred during migration:</h3>
            <p>{error}</p>
          </div>
        )}

        {results && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-md">
            <h3 className="font-semibold mb-2">Migration completed!</h3>
            <div className="space-y-2">
              <p>Total posts processed: {results.length}</p>
              <p>Successful migrations: {results.filter((r: any) => r.success).length}</p>
              <p>Failed migrations: {results.filter((r: any) => !r.success).length}</p>
              
              {results.filter((r: any) => !r.success).length > 0 && (
                <div className="mt-4">
                  <h4 className="font-medium">Failed migrations:</h4>
                  <ul className="list-disc list-inside">
                    {results.filter((r: any) => !r.success).map((r: any) => (
                      <li key={r.key}>{r.key}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 bg-yellow-50 border border-yellow-200 p-4 rounded-md">
        <h3 className="font-semibold text-yellow-800 mb-2">Important Notes:</h3>
        <ul className="text-yellow-700 space-y-1 list-disc list-inside">
          <li>Make sure your Supabase environment variables are set correctly</li>
          <li>Ensure the database schema has been created (run the SQL in database-schema.sql)</li>
          <li>This migration should only be run once</li>
          <li>Remove this admin page after migration is complete</li>
        </ul>
      </div>
    </div>
  )
} 