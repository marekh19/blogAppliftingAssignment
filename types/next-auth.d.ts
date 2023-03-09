// according to NextAuth docs
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth'

declare module 'next-auth' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Session {
    user: {
      access_token: string
      expires_in: number
      token_type: string
    }
  }
}
