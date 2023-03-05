import type { FC } from 'react'

type Props = {
  className: string
  onClick: () => void
}

export const DropdownIcon: FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      onClick={onClick}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m16 10-4 3.996L8 10h8Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
