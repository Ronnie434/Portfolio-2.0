// scripts/add-ai-blog-post.ts
import { createBlogPost } from '../lib/blog-supabase'
import { getBlogPost, getBlogPostMeta } from '../lib/blog-data'

async function addAIBlogPost() {
  try {
    console.log('Starting to add AI agents blog post to Supabase...')
    
    // Get the blog post data from local data
    const blogPostData = getBlogPost('ai-agents-developer-productivity')
    const blogPostMeta = getBlogPostMeta('ai-agents-developer-productivity')
    
    if (!blogPostData || !blogPostMeta) {
      console.error('Blog post data not found in local data')
      return
    }
    
    console.log('Blog post data loaded:', blogPostData.title)
    console.log('Sections count:', blogPostData.sections.length)
    
    // Create the blog post in Supabase
    const postId = await createBlogPost(blogPostData, {
      slug: blogPostMeta.slug,
      date: blogPostMeta.date,
      readTime: blogPostMeta.readTime,
      tags: blogPostMeta.tags,
      excerpt: blogPostMeta.excerpt,
      featured: false // Set to true if you want it featured
    })
    
    if (postId) {
      console.log('✅ Successfully added AI agents blog post to Supabase!')
      console.log('Post ID:', postId)
      console.log('Slug:', blogPostMeta.slug)
      console.log('Title:', blogPostData.title)
      console.log('Tags:', blogPostMeta.tags.join(', '))
      console.log('Read Time:', blogPostMeta.readTime)
    } else {
      console.error('❌ Failed to add blog post to Supabase')
    }
    
  } catch (error) {
    console.error('Error adding blog post:', error)
  }
}

// Run the script
addAIBlogPost()
  .then(() => {
    console.log('Script completed')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Script failed:', error)
    process.exit(1)
  })