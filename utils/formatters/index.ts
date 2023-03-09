export const prettifyDate = (dateString: string): string => {
  const dateObj = new Date(dateString)
  const year = dateObj.getFullYear().toString()
  const formattedDate = `${
    dateObj.getMonth() + 1
  }/${dateObj.getDate()}/${year.slice(-2)}`
  return formattedDate
}

export const getTimeAgo = (dateString: string): string => {
  const now = new Date()
  const date = new Date(dateString)

  const diffMs = now.getTime() - date.getTime()
  const diffMinutes = Math.round(diffMs / (1000 * 60))
  const diffHours = Math.round(diffMs / (1000 * 60 * 60))
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24))
  const diffMonths = Math.round(diffMs / (1000 * 60 * 60 * 24 * 30.5))
  const diffYears = Math.round(diffMs / (1000 * 60 * 60 * 24 * 365))

  if (diffMinutes < 60) {
    return `${diffMinutes} minutes ago`
  } else if (diffHours < 24) {
    return `${diffHours} hours ago`
  } else if (diffDays < 30) {
    return `${diffDays} days ago`
  } else if (diffMonths < 12) {
    return `${diffMonths} months ago`
  } else {
    return `${diffYears} years ago`
  }
}

export const prefixScore = (score: number): string => {
  return score > 0 ? `+${score}` : score.toString()
}
