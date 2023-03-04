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
    <header className="bg-light-gray h-14">
      <nav className="max-w-6xl mx-auto flex justify-between items-center h-full">
        <ul className="flex items-center gap-10 text-secondary">
          <li>
            <Image
              src={logo}
              alt="Applifting Blog Logo"
              className="mix-blend-multiply"
            />
          </li>
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
