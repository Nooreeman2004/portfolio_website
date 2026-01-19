import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { NavigationProvider } from '@/context/NavigationContext'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Abdullah Aamir | Data Science & Marketing Specialist',
  description: 'Portfolio of Abdullah Aamir - Specializing in Data Science, AI, and Brand Marketing.',
  keywords: ['Data Science', 'Marketing', 'AI', 'Python', 'Machine Learning', 'Brand Strategy'],
  authors: [{ name: 'Abdullah Aamir' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Abdullah Aamir | Data Science & Marketing Specialist',
    description: 'Portfolio showcasing expertise in Data Science, AI, and Marketing',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.className} bg-primary antialiased`}>
        <NavigationProvider>
          {children}
        </NavigationProvider>
      </body>
    </html>
  )
}
