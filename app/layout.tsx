'use client'
import { Inter } from 'next/font/google'
import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import type { FC, ReactNode } from 'react'

import { Header } from '@components/Header'

import '~/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

type Props = {
  children: ReactNode
  session: Session | null | undefined
}

const RootLayout: FC<Props> = ({ children, session }) => {
  return (
    <html lang="en">
      <head>
        <title>Applifting Blog</title>
        <meta
          name="description"
          content="Blog assignment built with Next.js 13 and React Server Components"
        />
      </head>
      <SessionProvider session={session}>
        <body className={`${inter.variable} font-inter`}>
          <Header />
          <main className="mx-auto mt-16 max-w-6xl">{children}</main>
        </body>
      </SessionProvider>
    </html>
  )
}

export default RootLayout
