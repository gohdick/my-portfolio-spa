import './globals.css'
import { Geist } from 'next/font/google'
import { IBM_Plex_Sans_Thai_Looped } from 'next/font/google'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Goh-Dik Portfolio',
  description: 'My personal developer portfolio',
  icons: {
    icon: '/favicon.ico',
  },
}

const geist = Geist({
    subsets: ['latin'],
})

const ibmPlexSansThaiLooped = IBM_Plex_Sans_Thai_Looped({
    weight: ['400', '700'],
    subsets: ['thai', 'latin'],
    variable: '--font-ibm-plex-thai-looped',
})

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" className={ibmPlexSansThaiLooped.variable}>
        <body className={geist.className}>
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          <main>{children}</main>
        </body>
      </html>
    )
}