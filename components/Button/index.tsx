import type { FC, ReactNode } from 'react'

type Props = {
  isSubmit?: boolean
  content: ReactNode
  className?: string
  disabled?: boolean
}

export const Button: FC<Props> = ({ isSubmit, content, className }) => {
  return (
    <button
      className={`cursor-pointer rounded-[4px] bg-blue px-3 py-[6px] text-white disabled:cursor-default disabled:bg-secondary ${className}`}
      type={isSubmit ? 'submit' : 'button'}
    >
      {content}
    </button>
  )
}
