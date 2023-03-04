import { Inter } from '@next/font/google'
import type { FC, PropsWithChildren } from 'react'

import { Header } from '@components/Header'
import '~/styles/globals.css'

export const metadata = {
  title: 'Applifting Blog',
  description:
    'Blog assignment built with Next.js 13 and React Server Components',
}

const inter = Inter({
  variable: '--body-font',
})

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Header />
        <main className="mx-auto mt-16 max-w-6xl">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
