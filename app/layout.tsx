import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeProvider from './components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[url('/bg-mobile-light.jpg')] dark:bg-[url('/bg-mobile.jpg')] bg-cover bg-center" >
        <ThemeProvider>
        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
