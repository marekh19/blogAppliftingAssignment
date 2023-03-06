'use client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import type { FC, ChangeEvent } from 'react'
import { useState } from 'react'

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL ?? ''
const apiKey = process.env.NEXT_PUBLIC_API_KEY ?? ''

const ImageUploader: FC = () => {
  // session data
  const session = useSession()
  const accessToken = session.data?.user.access_token ?? ''

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isFileUploaded, setIsFileUploaded] = useState<boolean>(false)

  const handleFileInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0])

      if (selectedFile) {
        const formData = new FormData()
        formData.append('image', selectedFile)

        try {
          const res = await axios.post(`${apiUrl}/images`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'X-API-KEY': apiKey,
              Authorization: accessToken,
            },
          })
          alert('Image uploaded successfully!')
          console.log(res)
          setIsFileUploaded(true)
        } catch (error) {
          if (error instanceof Error) {
            alert(`Error uploading image: ${error.message}`)
          }
        }
      }
    }
  }

  return (
    <div>
      {isFileUploaded ? (
        <>
          <h3>Featured image</h3>
          <input
            type="file"
            className=""
            onChange={void handleFileInputChange}
            accept="image/*"
          />
        </>
      ) : (
        <p>success</p>
      )}
    </div>
  )
}

export default ImageUploader
