import { createClient } from '@supabase/supabase-js'
import type { BlogPostData } from '@/types'

// Direct admin client with hardcoded credentials (TEMPORARY FOR MIGRATION)
const supabaseAdmin = createClient(
  'https://voqvlwcncnqizjizzvrw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvcXZsd2NuY25xaXpqaXp6dnJ3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MTkzMjg4NCwiZXhwIjoyMDY3NTA4ODg0fQ.XN_jJa2fFMvJkjd2HurZDsUYM0KnwvbW0sNhabCp6T0',
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

// Direct migration function
export async function createBlogPostDirect(
  blogPost: BlogPostData,
  metadata: {
    slug: string
    date: string
    readTime: string
    tags: string[]
    excerpt: string
    featured?: boolean
  }
): Promise<string | null> {
  try {
    console.log('Creating blog post (direct):', metadata.slug)

    // Insert the blog post
    const { data: post, error: postError } = await supabaseAdmin
      .from('blog_posts')
      .insert({
        slug: metadata.slug,
        title: blogPost.title,
        subtitle: blogPost.subtitle,
        estimated_read_time: blogPost.estimated_read_time,
        audience: blogPost.audience,
        overview: blogPost.overview,
        date: metadata.date,
        read_time: metadata.readTime,
        tags: metadata.tags,
        excerpt: metadata.excerpt,
        featured: metadata.featured || false
      })
      .select('id')
      .single()

    if (postError || !post) {
      console.error('Error creating blog post (direct):', postError)
      return null
    }

    console.log('Blog post created with ID (direct):', post.id)

    // Insert the sections
    const sectionsToInsert = blogPost.sections.map((section, index) => ({
      post_id: post.id,
      title: section.title,
      content: section.content || null,
      type: section.type || null,
      order_index: index,
      metadata: {
        code: section.code,
        code_samples: section.code_samples,
        benefits: section.benefits,
        tips: section.tips,
        options: section.options,
        tools: section.tools,
        note: section.note,
        advice: section.advice,
        use_case: section.use_case,
        patterns: section.patterns,
        checklist: section.checklist,
        bullet_points: section.bullet_points,
        best_practices: section.best_practices,
        docker_compose: section.docker_compose,
        methods: section.methods,
        k8s_yaml: section.k8s_yaml,
        suggestions: section.suggestions,
        examples: section.examples,
        real_world_use_case: section.real_world_use_case,
        benefit: section.benefit,
        use_cases: section.use_cases,
        pros: section.pros,
        cons: section.cons,
        example: section.example,
        tip: section.tip,
        decision_matrix: section.decision_matrix,
        scaling_strategies: section.scaling_strategies
      }
    }))

    console.log(`Inserting ${sectionsToInsert.length} sections (direct)`)

    const { error: sectionsError } = await supabaseAdmin
      .from('blog_sections')
      .insert(sectionsToInsert)

    if (sectionsError) {
      console.error('Error creating blog sections (direct):', sectionsError)
      // Rollback: delete the created post
      await supabaseAdmin.from('blog_posts').delete().eq('id', post.id)
      return null
    }

    console.log('Sections created successfully (direct)')
    return post.id
  } catch (error) {
    console.error('Error in createBlogPostDirect:', error)
    return null
  }
} 