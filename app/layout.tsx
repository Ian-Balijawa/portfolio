'use client'
import { GlobalProvider } from '@/context/store'
import './globals.css'
import { Inter } from 'next/font/google'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Providers } from '@/context/themeProvider'

// Inter font family
const inter = Inter({
   subsets: ['latin'],
   variable: '--font-inter',
   display: 'swap',
})

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en" suppressHydrationWarning className={inter.variable}>
         <body className="bg-base-200">
            <Providers>
               <GlobalProvider>{children}</GlobalProvider>
            </Providers>
         </body>
      </html>
   )
}
