import React from 'react'
import SignUp from '../components/account/SignUp'
import Stepper from '../components/layouts/Stepper'

const SignUpView = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center bg-gris">
    <Stepper/>
    <SignUp className="" />
</div>
  )
}

export default SignUpView