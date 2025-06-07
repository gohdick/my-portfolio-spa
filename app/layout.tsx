
import './globals.css'
import { Geist } from 'next/font/google'

const geist = Geist({
    subsets: ['latin'],
})

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={geist.className}>
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          <main>{children}</main>
        </body>
      </html>
    )
}