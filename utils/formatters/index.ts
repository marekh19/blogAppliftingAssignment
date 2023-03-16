import { lightFormat, formatDistance } from 'date-fns'

export const prettifyDate = (dateString: string): string => {
  const dateFormat = 'M/d/yy'
  const date = new Date(dateString)
  return lightFormat(date, dateFormat)
}

export const getTimeAgo = (dateString: string): string => {
  const baseDate = new Date()
  const createdAt = new Date(dateString)
  return formatDistance(createdAt, baseDate, { addSuffix: true })
}

export const prefixScore = (score: number): string => {
  return score > 0 ? `+${score}` : score.toString()
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface ObjectWithCreatedAt {
  createdAt: string
}
// eslint-disable-next-line @typescript-eslint/naming-convention
export const sortObjectsByCreatedAt = <T extends ObjectWithCreatedAt>(
  objects: T[]
): T[] =>
  objects.sort((a, b) => {
    const dateA = new Date(a.createdAt)
    const dateB = new Date(b.createdAt)
    return dateB.getTime() - dateA.getTime()
  })
