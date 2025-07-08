import { getAllBlogPosts } from '@/lib/blog-supabase'

export async function GET() {
  try {
    const posts = await getAllBlogPosts()
    return new Response(JSON.stringify({
      success: true,
      postsCount: posts?.length || 0,
      posts: posts || [],
      timestamp: new Date().toISOString()
    }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 