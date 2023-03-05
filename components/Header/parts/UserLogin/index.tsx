// import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import type { FC } from 'react'

// import { Routes } from '~/constants/routes'

import { LoginIcon } from './parts/LoginIcon'

export const UserLogin: FC = () => {
  const { data: session } = useSession()

  return (
    <div>
      {session?.user ? (
        <button type="button" onClick={() => void signOut()}>
          Sign Out
        </button>
      ) : (
        // <Link href={Routes.LOGIN}>
        <button type="button" onClick={() => void signIn()}>
          <span className="text-blue-secondary">
            Log in&nbsp;
            <LoginIcon className="inline-block" />
          </span>
        </button>
        // </Link>
      )}
    </div>
  )
}
