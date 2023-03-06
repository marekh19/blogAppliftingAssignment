export const articleValidators = {
  title: (value: string) => {
    if (typeof value !== 'string') return 'Invalid title value type'
    if (!value) return 'Title is required'
  },
  perex: (value: string) => {
    if (typeof value !== 'string') return 'Invalid perex value type'
    if (!value) return 'Perex is required'
  },
  content: (value: string) => {
    if (typeof value !== 'string') return 'Invalid content value type'
    if (!value) return 'Content is required'
  },
}
