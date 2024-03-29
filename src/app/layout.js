import { Inter } from 'next/font/google'
import './globals.css'
import Navy from '@/components/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Navy />
        {children}</body>
    </html>
  )
}
