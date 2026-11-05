import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import AnimatedBackground from '@/components/portfolio/animatedbackground'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const metadata: Metadata = {
  title: 'Developer Portfolio',
  description: 'Premium developer portfolio showcasing projects and expertise',
  generator: 'v0.app',
 icons: {
  icon: [
    {
      url: `${basePath}/icon-light-32x32.png`,
      media: '(prefers-color-scheme: light)',
    },
    {
      url: `${basePath}/icon-dark-32x32.png`,
      media: '(prefers-color-scheme: dark)',
    },
    {
      url: `${basePath}/icon.svg`,
      type: 'image/svg+xml',
    },
    ],
    apple: `${basePath}/apple-icon.png`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased dark">
        < AnimatedBackground />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        {process.env.VERCEL === '1' && process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
