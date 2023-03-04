export const loginValidators = {
  email: (value: string) => {
    if (typeof value !== 'string') return 'Invalid e-mail value type'
    if (!value) return 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(value)) return 'Invalid e-mail'
  },
  password: (value: string) => {
    if (typeof value !== 'string') return 'Invalid password value type'
    if (!value) return 'Password is required'
  },
}
