'use client'
import Link from 'next/link'
import type { FC } from 'react'
import { useState } from 'react'

import { Routes } from '~/constants/routes'

import { LoginIcon } from './parts/LoginIcon'

export const UserLogin: FC = () => {
  const [isLoggedIn] = useState<boolean>(false)

  return (
    <div>
      {!isLoggedIn ? (
        <Link href={Routes.LOGIN}>
          <button type="button">
            <span className="text-blue-secondary">
              Log in&nbsp;
              <LoginIcon className="inline-block" />
            </span>
          </button>
        </Link>
      ) : (
        <p>Hi User</p>
      )}
    </div>
  )
}
