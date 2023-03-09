import { Inter } from 'next/font/google'
import type { FC, ReactNode } from 'react'

import { Header } from '@components/Header'

import { Provider } from './Provider'
import '~/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

type Props = {
  children: ReactNode
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Applifting Blog</title>
        <meta
          name="description"
          content="Blog assignment built with Next.js 13 and React Server Components"
        />
      </head>
      <Provider>
        <body className={`${inter.variable} font-inter`}>
          <Header />
          <main className="mx-auto mt-16 max-w-6xl">{children}</main>
        </body>
      </Provider>
    </html>
  )
}

export default RootLayout
