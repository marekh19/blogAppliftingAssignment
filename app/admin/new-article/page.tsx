'use client'
import type { NextPage } from 'next'

import { Button } from '@components/Button'

const CreateArticlePage: NextPage = () => {
  const handleSubmit = () => {
    // handle article creation
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-medium">Create New Article</h1>
        <Button
          content="Publish Article"
          isSubmit
          className=""
          isDisabled={false}
        />
      </form>
      <p>...</p>
    </>
  )
}

export default CreateArticlePage