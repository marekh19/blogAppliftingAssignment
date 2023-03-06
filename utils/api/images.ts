import axios from 'axios'

import { apiUrl, apiKey } from './lib'

type UploadImageParams = {
  access_token: string
  data: FormData
}

type UploadedImage = {
  imageId: string
  name: string
}

type ErrorMessage = {
  code: string
  message: string
}

export type UploadImageResponse = UploadedImage[] | ErrorMessage

export const uploadImage = async ({
  access_token,
  data,
}: UploadImageParams) => {
  try {
    const res = await axios.post(`${apiUrl}/images`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-API-KEY': apiKey,
        Authorization: access_token,
      },
    })
    return res
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
    return null
  }
}
