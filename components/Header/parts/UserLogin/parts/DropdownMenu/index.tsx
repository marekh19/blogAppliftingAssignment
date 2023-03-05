import { signOut } from 'next-auth/react'
import type { FC } from 'react'

import { LogoutIcon } from './parts/LogoutIcon'

export const DropdownMenu: FC = () => {
  return (
    <div className="absolute top-10 right-0 mx-auto w-36 rounded-br-lg rounded-bl-lg bg-gray-50 p-2 text-center">
      <button type="button" onClick={() => void signOut()}>
        <div className="text-blue-secondary">
          <span>Log out&nbsp;</span>
          <LogoutIcon className="inline-block h-4 w-4" />
        </div>
      </button>
    </div>
  )
}
