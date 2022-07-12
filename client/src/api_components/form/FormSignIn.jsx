import React from 'react'
import { SignIn } from '../user/SignIn'
import './formStyle.css'

export const FormSignIn = () => {
  return (
    <section className = 'form'>
      <SignIn title = 'Sign In' />
    </section>
  )
}
