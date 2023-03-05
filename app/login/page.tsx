'use client'
import type { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import type { FormEvent } from 'react'
import { useState } from 'react'

import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { Routes } from '~/constants/routes'
import { loginValidators } from '~/utils/validators/loginValidation'

const LoginPage: NextPage = () => {
  //router
  const router = useRouter()

  // user data
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //errors
  const [emailError, setEmailError] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // submitting state
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const errors = {
      email: loginValidators.email(email),
      password: loginValidators.password(password),
    }

    if (errors.email) setEmailError(errors.email)
    if (errors.password) setPasswordError(errors.password)

    if (!emailError && !passwordError && email && password) {
      setSubmitError(null)
      setIsSubmitting(true)

      const result = await signIn('credentials', {
        username: email,
        password: password,
        redirect: false,
      })
      if (result?.error) {
        switch (result.status) {
          case 401:
            setSubmitError('Invalid credentials')
            break
          default:
            setSubmitError('Something went wrong')
            break
        }
      }
      if (result?.ok) {
        void router.push(Routes.HOME)
      }

      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto max-w-[23rem] rounded-lg p-8 shadow-normal">
      <h3 className="text-[28px] font-medium">Log In</h3>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleLogin} className="mt-6 text-right">
        <Input
          className="text-left"
          label="Email"
          type="email"
          name="email"
          placeholder="me@example.com"
          value={email}
          error={emailError}
          onChange={(event) => {
            setEmailError(null)
            setEmail(event.target.value)
          }}
        />
        <Input
          className="mt-4 text-left"
          label="Password"
          type="password"
          name="password"
          placeholder="**********"
          value={password}
          error={passwordError}
          onChange={(event) => {
            setPasswordError(null)
            setPassword(event.target.value)
          }}
        />
        {submitError ? <p className="text-error">{submitError}</p> : null}
        <Button
          content={isSubmitting ? 'Logging In' : 'Log In'}
          isSubmit
          className="ml-full mt-8 mr-0"
          isDisabled={isSubmitting}
        />
      </form>
    </div>
  )
}

export default LoginPage
