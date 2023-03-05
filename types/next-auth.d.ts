// according to NextAuth docs
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth'

type UserData = {
  access_token: string
  expires_in: number
  token_type: string
}

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: UserData
  }
}
