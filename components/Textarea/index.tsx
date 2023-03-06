import type { FC, TextareaHTMLAttributes } from 'react'
import { forwardRef } from 'react'

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  error?: string | null
  className?: string
  height: string
}

export const TextArea: FC<Props> = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, name, error, placeholder, className, height, ...rest }, ref) => {
    return (
      <div className={className}>
        {error ? <p className="text-error">{error}</p> : null}
        <label>
          {label}
          <textarea
            placeholder={placeholder}
            name={name}
            ref={ref}
            {...rest}
            className={`${height} mt-2 w-full rounded-md border ${
              error ? 'border-error' : 'border-gray-100'
            } px-3 py-[6px] placeholder-secondary outline-none focus:border-blue focus:shadow-focus`}
          />
        </label>
      </div>
    )
  }
)

TextArea.displayName = 'Textarea'
