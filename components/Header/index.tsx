import Image from 'next/image'
import type { FC } from 'react'

import logo from '~/public/logo.png'

import { UserLogin } from './parts/UserLogin'

export const Header: FC = () => {
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
          <li>Recent Articles</li>
          <li>About</li>
        </ul>
        <UserLogin />
      </nav>
    </header>
  )
}
