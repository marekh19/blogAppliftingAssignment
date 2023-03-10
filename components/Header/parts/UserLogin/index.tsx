'use client'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import type { FC } from 'react'
import { useState } from 'react'

import { Routes } from '~/constants/routes'

import { DropdownIcon } from './parts/DropdownIcon'
import { DropdownMenu } from './parts/DropdownMenu'
import { LoginIcon } from './parts/LoginIcon'
import { UserIcon } from './parts/UserIcon'

export const UserLogin: FC = () => {
  const { data: session } = useSession()
  const [isDropMenuVisible, setIsDropMenuVisible] = useState<boolean>(false)

  const handleDropdownMenu = () => {
    setIsDropMenuVisible((prev) => !prev)
  }

  return (
    <div>
      {session?.user ? (
        <div className="flex items-center gap-10">
          <Link href={Routes.MY_ARTICLES}>My Articles</Link>
          <Link href={Routes.CREATE_ARTICLE} className="text-blue">
            Create Article
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative">
              <DropdownIcon
                className="h-6 w-6 cursor-pointer"
                onClick={handleDropdownMenu}
              />
              {isDropMenuVisible ? <DropdownMenu /> : null}
            </div>
            <Link
              href={Routes.MY_ARTICLES}
              aria-label="User Articles"
              title="User Articles"
            >
              <UserIcon className="h-8 w-8 rounded-full bg-gray-100" />
            </Link>
          </div>
        </div>
      ) : (
        <Link href={Routes.LOGIN}>
          <button type="button">
            <span className="text-blue-secondary">
              Log in&nbsp;
              <LoginIcon className="inline-block" />
            </span>
          </button>
        </Link>
      )}
    </div>
  )
}
