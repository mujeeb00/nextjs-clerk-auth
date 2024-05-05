import React from 'react'
import { SignIn } from '@clerk/nextjs'
const SigninPage = () => {
  return (
    <div className='flex justify-center p-4'>
        <SignIn/>
    </div>
  )
}

export default SigninPage