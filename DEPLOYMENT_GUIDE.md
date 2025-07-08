# Production Deployment Guide

## Environment Variables for Production

### Required Environment Variables

1. **NEXT_PUBLIC_SUPABASE_URL** - Your Supabase project URL
2. **NEXT_PUBLIC_SUPABASE_ANON_KEY** - Your Supabase anon/public key  
3. **SUPABASE_SERVICE_ROLE_KEY** - Your Supabase service role key (server-side only)
4. **NEXT_PUBLIC_SITE_URL** - Your production domain (e.g., https://ronakpatel.dev)

### Example .env.production

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Deployment Options

### 1. Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main

### 2. Netlify

1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables in Netlify dashboard

### 3. Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Database Setup (Supabase)

1. Your Supabase database should already have the blog posts and sections
2. Ensure Row Level Security policies are set for public read access
3. Verify your domain is allowed in Supabase settings

## Pre-deployment Checklist

- [ ] All environment variables configured
- [ ] Blog posts migrated to Supabase
- [ ] RLS policies configured for public read access
- [ ] Production domain configured in metadata
- [ ] All dependencies installed
- [ ] Build runs successfully locally (`npm run build`)

## Testing Production Build Locally

```bash
npm run build
npm start
```

Visit http://localhost:3000 to test the production build.

## Performance Optimizations

- ✅ Server Components for blog content
- ✅ Static generation for blog posts  
- ✅ Image optimization with Next.js
- ✅ Code splitting and lazy loading
- ✅ Caching with Supabase 