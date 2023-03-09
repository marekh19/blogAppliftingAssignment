'use client'
import { SessionProvider } from 'next-auth/react'
import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Provider: FC<Props> = ({ children }) => {
  return (
    <SessionProvider refetchInterval={0} refetchOnWindowFocus={false}>
      {children}
    </SessionProvider>
  )
}
