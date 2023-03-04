import type { FC } from 'react'

type Props = {
  className: string
}

export const LoginIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="10"
      fill="none"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.33.27a.75.75 0 1 0-1.06 1.06l2.92 2.92H1a.75.75 0 0 0 0 1.5h10.19L8.27 8.67a.75.75 0 0 0 1.06 1.06l4.2-4.2a.747.747 0 0 0 0-1.06L9.33.27Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
