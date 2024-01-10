import React from 'react'
import SignIn from '../../Component/Signin/SignIn'
import SignUp from '../../Component/SignUp/SignUp'

import './SigninAndSignup.scss'

function SigninAndSignup() {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn/>
      <SignUp/>
    </div>
  )
}

export default SigninAndSignup
