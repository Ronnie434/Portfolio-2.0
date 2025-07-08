-- Database schema for Blog Posts
-- Run this in your Supabase SQL editor

-- Enable UUID extension if not already enabled
create extension if not exists "uuid-ossp";

-- Blog Posts table
create table if not exists blog_posts (
  id uuid default uuid_generate_v4() primary key,
  slug text unique not null,
  title text not null,
  subtitle text not null,
  estimated_read_time text not null,
  audience text[] not null default '{}',
  overview text not null,
  date text not null,
  read_time text not null,
  tags text[] not null default '{}',
  excerpt text not null,
  featured boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Blog Sections table
create table if not exists blog_sections (
  id uuid default uuid_generate_v4() primary key,
  post_id uuid references blog_posts(id) on delete cascade,
  title text not null,
  content text,
  type text, -- 'table', 'code', 'text', etc.
  order_index integer not null,
  metadata jsonb default '{}', -- Store additional section data like code blocks, tips, etc.
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add RLS (Row Level Security) policies
alter table blog_posts enable row level security;
alter table blog_sections enable row level security;

-- Allow public read access to blog posts
create policy "Blog posts are publicly readable"
  on blog_posts for select
  using (true);

-- Allow public read access to blog sections
create policy "Blog sections are publicly readable"
  on blog_sections for select
  using (true);

-- Allow public insert access for migration (TEMPORARY - remove after migration)
create policy "Allow public insert for migration"
  on blog_posts for insert
  with check (true);

-- Allow public insert access for migration (TEMPORARY - remove after migration)  
create policy "Allow public insert for sections migration"
  on blog_sections for insert
  with check (true);

-- Create indexes for better performance
create index if not exists blog_posts_slug_idx on blog_posts(slug);
create index if not exists blog_posts_featured_idx on blog_posts(featured);
create index if not exists blog_posts_tags_idx on blog_posts using gin(tags);
create index if not exists blog_sections_post_id_idx on blog_sections(post_id);
create index if not exists blog_sections_order_idx on blog_sections(post_id, order_index);

-- Function to automatically update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Create trigger for blog_posts
create trigger update_blog_posts_updated_at
  before update on blog_posts
  for each row
  execute function update_updated_at_column(); 