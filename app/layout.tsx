import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nim-fawn.vercel.app/'),
  title: {
    default: 'Guitar Bùi Ngọc Sơn',
    template: '%s | Guitar Bùi Ngọc Sơn',
  },
  description: 'Địa chỉ học đàn guitar DỄ HIỂU và NHANH',
  openGraph: {
    title: 'Guitar Bùi Ngọc Sơn',
    description: 'Địa chỉ học đàn guitar DỄ HIỂU và NHANH',
    url: 'https://nim-fawn.vercel.app/',
    siteName: 'Guitar Bùi Ngọc Sơn',
    images: [
      {
        url: '/cover.jpg', // Path to your image in the public folder
        width: 1200,
        height: 630,
        alt: 'Lớp học guitar của thầy Bùi Ngọc Sơn',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guitar Bùi Ngọc Sơn',
    description: 'Địa chỉ học đàn guitar DỄ HIỂU và NHANH',
    images: ['/cover.jpg'], // Path to your image in the public folder
  },
  alternates: {
    canonical: '/',
  },
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
