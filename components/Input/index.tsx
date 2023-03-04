import type { FC, InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string | null
  className?: string | ''
}

export const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ label, name, type, error, placeholder, className, ...rest }, ref) => {
    return (
      <div className={className}>
        <label>
          {label}
          <input
            placeholder={placeholder}
            name={name}
            type={type}
            ref={ref}
            {...rest}
            className={`mt-2 h-[36px] w-full rounded-md border ${
              error ? 'border-error' : 'border-gray-100'
            } px-3 py-[6px] placeholder-secondary outline-none focus:border-blue focus:shadow-focus`}
          />
        </label>
        {error ? <p className="text-error">{error}</p> : null}
      </div>
    )
  }
)

Input.displayName = 'Input'
