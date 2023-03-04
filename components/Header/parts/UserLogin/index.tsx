'use client'
import type { FC } from 'react'
import { useState } from 'react'

import { LoginIcon } from './parts/LoginIcon'

export const UserLogin: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)

  const handleLogin = () => {
    setIsLoggedIn((prev) => (prev ? false : true))
  }

  return (
    <button type="button" onClick={handleLogin}>
      {!isLoggedIn ? (
        <p>Hi User</p>
      ) : (
        <span className="text-blue-secondary">
          Log in&nbsp;
          <LoginIcon className="inline-block" />
        </span>
      )}
    </button>
  )
}
