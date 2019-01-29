import React from 'react'
import BackButtonHeader from '../components/BackButtonHeader.js'
import Footer from '../features/Footer.js'
import { SignUpFormWithFirebase } from './../components/SignUpForm.js'

const SignUp = props => {
  return(
    <div >
      <BackButtonHeader />
      <div className="signUpFormWrapper">
        <SignUpFormWithFirebase />
      </div>
      <Footer />
    </div>
  )
}

export default SignUp
