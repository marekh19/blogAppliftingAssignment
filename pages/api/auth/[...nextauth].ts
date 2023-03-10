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
  providers: [
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

            if (user && res.status === 200) {
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
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    // eslint-disable-next-line @typescript-eslint/require-await
    async session({ session, token }) {
      session.user = token as UserData
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
  // for production deployment
  secret: process.env.NEXTAUTH_SECRET ?? 'secret',
}

export default NextAuth(authOptions)
