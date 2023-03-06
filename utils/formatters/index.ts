export const prettifyDate = (dateString: string): string => {
  const dateObj = new Date(dateString)
  const year = dateObj.getFullYear().toString()
  const formattedDate = `${
    dateObj.getMonth() + 1
  }/${dateObj.getDate()}/${year.slice(-2)}`
  return formattedDate
}
