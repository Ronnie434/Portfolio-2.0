# Portfolio 2.0 - Ronak Patel

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with dark/light mode toggle
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Built with Next.js 14 App Router for optimal performance
- **TypeScript**: Fully typed for better development experience
- **Animations**: Smooth animations with Framer Motion
- **SEO Optimized**: Proper metadata and structured data
- **Accessibility**: WCAG compliant with proper semantic HTML

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: Next Themes

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio-2.0
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
Portfolio-2.0/
├── app/                    # Next.js 14 App Router
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── sections/          # Page sections
│   ├── Footer.tsx         # Footer component
│   ├── Header.tsx         # Header component
│   └── ThemeToggle.tsx    # Theme toggle
├── lib/                   # Utility functions
├── types/                 # TypeScript types
├── public/                # Static assets
└── ...config files
```

## Customization

### Personal Information
Update the following files with your information:
- `app/layout.tsx` - Site metadata
- `components/sections/Hero.tsx` - Hero section content
- `components/sections/AboutHero.tsx` - About page content
- `components/Footer.tsx` - Social links

### Projects
Add your projects in:
- `components/sections/FeaturedProjects.tsx` - Featured projects
- `components/sections/ProjectsGrid.tsx` - All projects

### Experience
Update your work experience in:
- `components/sections/ExperienceList.tsx`
- `components/sections/Timeline.tsx`

### Blog Posts
Add your blog posts in:
- `components/sections/BlogList.tsx`

### Styling
- Modify `tailwind.config.js` for custom colors and themes
- Update `app/globals.css` for custom CSS variables

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean

## Performance Optimization

The portfolio includes several performance optimizations:
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized fonts with next/font
- Efficient CSS with Tailwind CSS
- Minimal JavaScript bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Ronak Patel - [ronak@ronakpatel.dev](mailto:ronak@ronakpatel.dev)

Project Link: [https://github.com/Ronnie434/Portfolio-2.0](https://github.com/Ronnie434/Portfolio-2.0) 