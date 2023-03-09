import type { FC } from 'react'

import { Button } from '@components/Button'

import { EyeIcon } from './parts/EyeIcon'
import { PencilIcon } from './parts/PencilIcon'

type TogglePreviewProps = {
  isToggled: boolean
  className?: string
  onClick: () => void
}

export const TogglePreview: FC<TogglePreviewProps> = ({
  className,
  isToggled,
  onClick,
}) => {
  return (
    <div className={className}>
      {isToggled ? (
        <Button isWithIcon onClick={onClick}>
          <p>Edit</p>
          <PencilIcon className="w-4" />
        </Button>
      ) : (
        <Button isWithIcon onClick={onClick}>
          <p>Preview</p>
          <EyeIcon className="w-4" />
        </Button>
      )}
    </div>
  )
}
