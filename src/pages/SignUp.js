import React from 'react'
import BackButtonHeader from '../components/BackButtonHeader.js'
import Footer from '../features/Footer.js'
import SignUpForm from './../components/SignUpForm.js'

const SignUp = props => {
  return(
    <div >
      <BackButtonHeader />
      <div className="signUpFormWrapper">
        <SignUpForm />
      </div>
      <Footer />
    </div>
  )
}

export default SignUp
