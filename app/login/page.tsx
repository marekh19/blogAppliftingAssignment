'use client'
import type { NextPage } from 'next'
import type { FormEvent } from 'react'
import { useState } from 'react'

import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { loginValidators } from '~/utils/auth/loginValidation'

const LoginPage: NextPage = () => {
  // user data
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //errors
  const [emailError, setEmailError] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // submitting state
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
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

      // send login request and persist user
    }
  }

  return (
    <div className="mx-auto max-w-[23rem] rounded-lg p-8 shadow-normal">
      <h3 className="text-[28px] font-medium">Log In</h3>
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
        {submitError ? <p>{submitError}</p> : null}
        <Button
          content="Log In"
          isSubmit
          className="ml-full mt-8 mr-0"
          isDisabled={isSubmitting}
        />
      </form>
    </div>
  )
}

export default LoginPage
