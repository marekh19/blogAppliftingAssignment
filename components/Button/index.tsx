import type { FC, ReactNode } from 'react'

type Props = {
  isSubmit?: boolean
  content: ReactNode
  className?: string
  isDisabled?: boolean
}

export const Button: FC<Props> = ({
  isSubmit,
  content,
  className,
  isDisabled,
}) => {
  return (
    <button
      className={`cursor-pointer rounded-[4px] bg-blue px-3 py-[6px] text-white disabled:cursor-default disabled:bg-secondary ${className}`}
      type={isSubmit ? 'submit' : 'button'}
      disabled={isDisabled}
    >
      {content}
    </button>
  )
}
