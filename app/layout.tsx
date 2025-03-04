import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from './client-layout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="pt-16 sm:pt-20 md:pt-24">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
