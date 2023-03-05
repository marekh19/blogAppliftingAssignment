import type { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth'
// eslint-disable-next-line import/no-named-as-default
import CredentialsProvider from 'next-auth/providers/credentials'

import { Routes } from '~/constants/routes'

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL ?? ''
const apiKey = process.env.NEXT_PUBLIC_API_KEY ?? ''

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
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      // credentials: {
      //   username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
      //   password: { label: 'Password', type: 'password' },
      // },
      async authorize(credentials) {
        if (credentials) {
          const { username, password } = credentials

          const res = await fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
              'X-API-KEY': apiKey,
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              password,
              username,
            }),
          })
          const user = (await res.json()) as UserData

          if (res.ok && user) {
            console.log({ user })
            return user
          } else return null
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
      session.user = token
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
  secret: process.env.NEXTAUTH_SECRET ?? undefined,
}

export default NextAuth(authOptions)
