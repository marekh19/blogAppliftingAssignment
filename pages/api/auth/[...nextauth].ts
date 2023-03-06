import type { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth'
// eslint-disable-next-line import/no-named-as-default
import CredentialsProvider from 'next-auth/providers/credentials'

import { Routes } from '~/constants/routes'
import { loginAndGetUserData } from '~/utils/api/login'

type UserData = {
  access_token: string
  expires_in: number
  token_type: string
}

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  providers: [
    // ...add more providers here
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      //@ts-ignore NextAuth has some issues with TS unfortunately
      async authorize(credentials) {
        if (credentials) {
          const { username, password } = credentials

          const res = await loginAndGetUserData({ username, password })
          if (res) {
            const user = (await res.data) as UserData

            if (res.status === 200 && user) {
              return user
            } else return null
          }
        }
      },
    }),
  ],
  callbacks: {
    // According to NextAuth docs
    // eslint-disable-next-line @typescript-eslint/require-await
    jwt({ token, user }) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return { ...token, ...user }
    },
    // eslint-disable-next-line @typescript-eslint/require-await
    session({ session, token }) {
      session.user.access_token = token.access_token
      return session
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60, // 1 hour to match the access token emitted from backend
  },
  pages: {
    signIn: Routes.LOGIN,
  },
  secret: process.env.NEXTAUTH_SECRET ?? 'secret',
}

export default NextAuth(authOptions)
