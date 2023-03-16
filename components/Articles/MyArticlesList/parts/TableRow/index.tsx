import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/constants/routes'

import { DeleteIcon } from './parts/DeleteIcon'
import { EditIcon } from './parts/EditIcon'

type Props = {
  title: string
  perex: string
  articleId: string
  onDelete: (id: string) => Promise<void>
  onEdit: (id: string) => void
}

export const TableRow: FC<Props> = ({
  title,
  perex,
  articleId,
  onDelete,
  onEdit,
}) => {
  return (
    <tr className="h-12 border-t-2 border-b-2 border-gray-100">
      <td className="h-full">
        <Link href={`${Routes.ARTICLE}/${articleId}`}>{title}</Link>
      </td>
      <td className="h-full">{perex}</td>
      <td className="flex h-full items-center justify-center gap-6">
        <button
          className="transition-colors duration-100 hover:text-blue"
          type="button"
          onClick={() => onEdit(articleId)}
          title="Edit"
          aria-label="Edit Article"
        >
          <EditIcon className="w-6" />
        </button>
        <button
          className="transition-colors duration-100 hover:text-error"
          type="button"
          onClick={async () => await onDelete(articleId)}
          title="Delete"
          aria-label="Delete Article"
        >
          <DeleteIcon className="w-6" />
        </button>
      </td>
    </tr>
  )
}
