import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type definitions for our database tables
export interface Database {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          id: string
          slug: string
          title: string
          subtitle: string
          estimated_read_time: string
          audience: string[]
          overview: string
          date: string
          read_time: string
          tags: string[]
          excerpt: string
          featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          title: string
          subtitle: string
          estimated_read_time: string
          audience: string[]
          overview: string
          date: string
          read_time: string
          tags: string[]
          excerpt: string
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          subtitle?: string
          estimated_read_time?: string
          audience?: string[]
          overview?: string
          date?: string
          read_time?: string
          tags?: string[]
          excerpt?: string
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      blog_sections: {
        Row: {
          id: string
          post_id: string
          title: string
          content: string | null
          type: string | null
          order_index: number
          metadata: any
          created_at: string
        }
        Insert: {
          id?: string
          post_id: string
          title: string
          content?: string | null
          type?: string | null
          order_index: number
          metadata?: any
          created_at?: string
        }
        Update: {
          id?: string
          post_id?: string
          title?: string
          content?: string | null
          type?: string | null
          order_index?: number
          metadata?: any
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 