// according to NextAuth docs
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Session {
    user: {
      access_token: string
    }
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  //eslint-disable-next-line @typescript-eslint/naming-convention
  interface JWT {
    access_token: string
    expires_in: number
    token_type: string
  }
}
