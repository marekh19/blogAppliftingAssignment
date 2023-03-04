'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'

import { Routes } from '~/constants/routes'
import logo from '~/public/logo.png'

import { UserLogin } from './parts/UserLogin'

export const Header: FC = () => {
  const currentPath = usePathname()

  return (
    <header className="h-14 bg-gray-50">
      <nav className="mx-auto flex h-full max-w-6xl items-center justify-between">
        <ul className="flex items-center gap-10 text-secondary">
          <Link href={Routes.HOME}>
            <li>
              <Image
                src={logo}
                alt="Applifting Blog Logo"
                title="Go to homepage"
                aria-label="Go to homepage"
                className="mix-blend-multiply"
              />
            </li>
          </Link>
          <Link href={Routes.HOME}>
            <li className={currentPath === Routes.HOME ? 'text-body' : ''}>
              Recent Articles
            </li>
          </Link>
          <Link href={Routes.ABOUT}>
            <li className={currentPath === Routes.ABOUT ? 'text-body' : ''}>
              About
            </li>
          </Link>
        </ul>
        <UserLogin />
      </nav>
    </header>
  )
}
