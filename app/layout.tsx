// app/layout.tsx
import type { Metadata } from 'next'
import { Playfair_Display, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const space = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Ronak Patel - Senior Software Engineer',
  description: 'Full-stack developer specializing in Next.js, React, Node.js, and modern web technologies. Building scalable applications with clean architecture.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'Next.js', 'React', 'Node.js', 'TypeScript', 'MongoDB', 'SQL'],
  authors: [{ name: 'Ronak Patel' }],
  creator: 'Ronak Patel',
  publisher: 'Ronak Patel',
  openGraph: {
    title: 'Ronak Patel - Senior Software Engineer',
    description: 'Full-stack developer specializing in Next.js, React, Node.js, and modern web technologies.',
    url: 'https://ronakpatel.dev',
    siteName: 'Ronak Patel Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ronak Patel - Senior Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ronak Patel - Senior Software Engineer',
    description: 'Full-stack developer specializing in Next.js, React, Node.js, and modern web technologies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${space.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 