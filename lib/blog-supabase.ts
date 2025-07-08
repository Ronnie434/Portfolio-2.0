import { supabase } from './supabase'
import { createClient } from '@supabase/supabase-js'
import type { BlogPostData, BlogPostMeta, BlogSection } from '@/types'

// Create admin client for server-side operations
function getAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  console.log('Environment check in getAdminClient:')
  console.log('URL:', supabaseUrl ? 'SET' : 'NOT_SET')
  console.log('Service Key:', supabaseServiceKey ? 'SET' : 'NOT_SET')
  
  if (!supabaseUrl) {
    throw new Error('NEXT_PUBLIC_SUPABASE_URL is required')
  }
  
  if (!supabaseServiceKey) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is required')
  }
  
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}

// Helper function to transform database rows to BlogPostData
function transformToBlogPostData(
  post: any, 
  sections: any[]
): BlogPostData {
  const transformedSections: BlogSection[] = sections
    .sort((a, b) => a.order_index - b.order_index)
    .map(section => ({
      title: section.title,
      content: section.content,
      type: section.type,
      ...section.metadata // Spread any additional metadata
    }))

  return {
    title: post.title,
    subtitle: post.subtitle,
    estimated_read_time: post.estimated_read_time,
    audience: post.audience,
    overview: post.overview,
    sections: transformedSections
  }
}

// Helper function to transform database row to BlogPostMeta
function transformToBlogPostMeta(post: any): BlogPostMeta {
  return {
    slug: post.slug,
    title: post.title,
    subtitle: post.subtitle,
    date: post.date,
    readTime: post.read_time,
    tags: post.tags,
    excerpt: post.excerpt
  }
}

// Get all blog posts metadata
export async function getAllBlogPosts(): Promise<BlogPostMeta[]> {
  try {
    // Create fresh client instance for reliable server-side execution
    const freshClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    
    const { data, error } = await freshClient
      .from('blog_posts')
      .select('*')
      .order('date', { ascending: false })

    if (error) {
      console.error('Error fetching blog posts:', error)
      return []
    }

    return data.map(transformToBlogPostMeta)
  } catch (error) {
    console.error('Error in getAllBlogPosts:', error)
    return []
  }
}

// Get a single blog post with its sections
export async function getBlogPost(slug: string): Promise<BlogPostData | null> {
  try {
    // Create fresh client instance for reliable server-side execution
    const freshClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    // Get the blog post
    const { data: post, error: postError } = await freshClient
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .single()

    if (postError || !post) {
      console.error('Error fetching blog post:', postError)
      return null
    }

    // Get the sections for this post
    const { data: sections, error: sectionsError } = await freshClient
      .from('blog_sections')
      .select('*')
      .eq('post_id', post.id)
      .order('order_index', { ascending: true })

    if (sectionsError) {
      console.error('Error fetching blog sections:', sectionsError)
      return null
    }

    return transformToBlogPostData(post, sections || [])
  } catch (error) {
    console.error('Error in getBlogPost:', error)
    return null
  }
}

// Get blog post metadata by slug
export async function getBlogPostMeta(slug: string): Promise<BlogPostMeta | null> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('slug, title, subtitle, date, read_time, tags, excerpt')
      .eq('slug', slug)
      .single()

    if (error || !data) {
      console.error('Error fetching blog post meta:', error)
      return null
    }

    return transformToBlogPostMeta(data)
  } catch (error) {
    console.error('Error in getBlogPostMeta:', error)
    return null
  }
}

// Get featured blog posts
export async function getFeaturedBlogPosts(): Promise<BlogPostMeta[]> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('slug, title, subtitle, date, read_time, tags, excerpt')
      .eq('featured', true)
      .order('date', { ascending: false })

    if (error) {
      console.error('Error fetching featured blog posts:', error)
      return []
    }

    return data.map(transformToBlogPostMeta)
  } catch (error) {
    console.error('Error in getFeaturedBlogPosts:', error)
    return []
  }
}

// Get blog posts by tag
export async function getBlogPostsByTag(tag: string): Promise<BlogPostMeta[]> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('slug, title, subtitle, date, read_time, tags, excerpt')
      .contains('tags', [tag])
      .order('date', { ascending: false })

    if (error) {
      console.error('Error fetching blog posts by tag:', error)
      return []
    }

    return data.map(transformToBlogPostMeta)
  } catch (error) {
    console.error('Error in getBlogPostsByTag:', error)
    return []
  }
}

// Create a new blog post (for admin functionality)
export async function createBlogPost(
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
    // Use admin client for server-side operations
    console.log('Creating admin client...')
    const adminClient = getAdminClient()
    console.log('Admin client created successfully')

    console.log('Creating blog post:', metadata.slug)

    // Check if post already exists
    const { data: existingPost } = await adminClient
      .from('blog_posts')
      .select('id')
      .eq('slug', metadata.slug)
      .single()

    if (existingPost) {
      console.log('Blog post already exists, skipping:', metadata.slug)
      return existingPost.id
    }

    // Insert the blog post
    const { data: post, error: postError } = await adminClient
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
      console.error('Error creating blog post:', postError)
      return null
    }

    console.log('Blog post created with ID:', post.id)

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

    console.log(`Inserting ${sectionsToInsert.length} sections for post ${post.id}`)

    const { error: sectionsError } = await adminClient
      .from('blog_sections')
      .insert(sectionsToInsert)

    if (sectionsError) {
      console.error('Error creating blog sections:', sectionsError)
      // Rollback: delete the created post
      await adminClient.from('blog_posts').delete().eq('id', post.id)
      return null
    }

    console.log('Sections created successfully')
    return post.id
  } catch (error) {
    console.error('Error in createBlogPost:', error)
    return null
  }
} 