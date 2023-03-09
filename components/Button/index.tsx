import type { FC, ReactNode } from 'react'

type Props = {
  isSubmit?: boolean
  children: ReactNode
  className?: string
  isDisabled?: boolean
  isWithIcon?: boolean
  onClick?: () => void
}

export const Button: FC<Props> = ({
  isSubmit,
  children,
  className,
  isDisabled,
  isWithIcon,
  onClick,
}) => {
  return (
    <button
      className={`cursor-pointer rounded-[4px] bg-blue px-3 py-[6px] text-white disabled:cursor-default disabled:bg-secondary ${className} ${
        isWithIcon ? 'flex gap-2' : ''
      }`}
      type={isSubmit ? 'submit' : 'button'}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
