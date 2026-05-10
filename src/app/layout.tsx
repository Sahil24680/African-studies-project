import type { Metadata } from 'next'
import { Inter, Syne, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ClickSpark from '@/components/animations/ClickSpark'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['700', '800'],
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Policing, Violence & the Black Mind',
    template: '%s | Policing, Violence & the Black Mind',
  },
  description:
    'Examining how police violence shapes the mental health of Black individuals and families across the United States, United Kingdom, and Brazil.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-canvas text-ink font-sans antialiased min-h-screen flex flex-col">
        <ClickSpark />
        <Navigation />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
