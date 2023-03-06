import axios from 'axios'

import { apiUrl, apiKey } from './lib'

type LoginCredentials = {
  username: string
  password: string
}

// POST /login
export const loginAndGetUserData = async ({
  username,
  password,
}: LoginCredentials) => {
  try {
    const res = await axios.post(
      `${apiUrl}/login`,
      {
        username,
        password,
      },
      {
        headers: {
          'X-API-KEY': apiKey,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    )
    return res
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
    return null
  }
}
