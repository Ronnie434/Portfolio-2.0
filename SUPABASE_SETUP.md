# Supabase Blog Integration Setup Guide

This guide will help you set up Supabase database integration for your portfolio blog system.

## Prerequisites

✅ Supabase account created
✅ Supabase project created
✅ `@supabase/supabase-js` package installed

## Step 1: Get Your Supabase Credentials

1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to **Settings** → **API**
4. Copy the following credentials:
   - **Project URL** (starts with `https://`)
   - **Anon public key** (starts with `eyJ`)
   - **Service role key** (starts with `eyJ`) - **Keep this secret!**

## Step 2: Set Up Environment Variables

Create a `.env.local` file in your project root and add:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

**Important:** Replace the placeholder values with your actual Supabase credentials.

## Step 3: Create Database Schema

1. Go to your Supabase Dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `lib/database-schema.sql`
4. Click **Run** to create the tables and policies

The schema includes:
- `blog_posts` table for storing blog metadata
- `blog_sections` table for storing blog content sections
- Row Level Security (RLS) policies
- Indexes for performance
- Automatic timestamp updates

## Step 4: Run the Migration

There are two ways to migrate your existing blog data:

### Option A: Using the Admin Page (Recommended)

1. Start your development server: `npm run dev`
2. Navigate to `http://localhost:3000/admin/migrate`
3. Click **Start Migration**
4. Wait for the migration to complete
5. **Delete the admin page** after successful migration

### Option B: Using Node.js Script

Create a migration script:

```javascript
// scripts/migrate.js
const { migrateBlogData } = require('./lib/migrate-blog-data');

migrateBlogData()
  .then(() => console.log('Migration completed!'))
  .catch(console.error);
```

Run: `node scripts/migrate.js`

## Step 5: Verify the Integration

1. Check your Supabase Dashboard → **Table Editor**
2. Verify that `blog_posts` and `blog_sections` tables have data
3. Test your blog pages:
   - Visit `/blog` to see the blog list
   - Click on individual blog posts to verify they load correctly

## File Structure Overview

```
lib/
├── supabase.ts              # Supabase client configuration
├── blog-supabase.ts         # Database helper functions
├── database-schema.sql      # Database schema
├── migrate-blog-data.ts     # Migration utilities
└── blog-data.ts            # Original static data (can be kept for reference)

components/sections/
├── BlogList.tsx            # Server component for blog list
├── BlogListClient.tsx      # Client component for filtering
└── BlogPost.tsx           # Blog post display component

app/
├── blog/page.tsx          # Blog listing page
├── blog/[slug]/page.tsx   # Individual blog post page
└── admin/migrate/page.tsx # Migration admin page (delete after use)
```

## Key Features

✅ **Server-side rendering** - Blog data is fetched on the server for better SEO
✅ **Static generation** - Blog posts are statically generated at build time
✅ **Tag filtering** - Client-side filtering by tags
✅ **Search optimization** - Indexed database queries for fast lookups
✅ **Type safety** - Full TypeScript support with database types
✅ **Security** - Row Level Security policies for public read access

## Database Functions Available

### Read Functions
- `getAllBlogPosts()` - Get all blog post metadata
- `getBlogPost(slug)` - Get full blog post with sections
- `getBlogPostMeta(slug)` - Get blog post metadata only
- `getFeaturedBlogPosts()` - Get featured blog posts
- `getBlogPostsByTag(tag)` - Get posts filtered by tag

### Write Functions
- `createBlogPost(blogPost, metadata)` - Create new blog post

## Troubleshooting

### Common Issues

1. **Environment variables not loaded**
   - Restart your development server after adding `.env.local`
   - Ensure variable names match exactly

2. **Database connection errors**
   - Verify your Supabase project URL and keys
   - Check that your Supabase project is active

3. **Migration fails**
   - Ensure database schema is created first
   - Check browser console for detailed error messages
   - Verify RLS policies allow inserts

4. **Blog posts not displaying**
   - Check Supabase Table Editor for data
   - Verify RLS policies allow public read access
   - Check browser network tab for API errors

### Performance Considerations

- Database queries are optimized with proper indexes
- Blog posts are statically generated at build time
- Only metadata is loaded for the blog list page
- Full content is only loaded for individual post pages

## Security Notes

- The `SUPABASE_SERVICE_ROLE_KEY` should only be used server-side
- Row Level Security (RLS) is enabled for all tables
- Public read access is allowed for blog content
- Write operations require proper authentication (not implemented in this basic setup)

## Next Steps (Optional Enhancements)

1. **Admin Panel**: Create a full admin interface for managing blog posts
2. **Authentication**: Add admin authentication for blog management
3. **Rich Text Editor**: Integrate a WYSIWYG editor for easier content creation
4. **Image Uploads**: Add support for uploading and managing blog images
5. **Comments System**: Implement a commenting system for blog posts
6. **Analytics**: Track blog post views and engagement

## Cleanup

After successful migration:

1. ✅ Delete `/app/admin/migrate/page.tsx`
2. ✅ Remove migration-related imports if not needed
3. ✅ Optionally keep `lib/blog-data.ts` as a backup
4. ✅ Update `.gitignore` to exclude `.env.local`

---

**Congratulations!** Your blog is now powered by Supabase and ready for production use. 