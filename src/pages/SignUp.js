import React from 'react'
import BackButtonHeader from '../components/BackButtonHeader.js'
import Footer from '../features/Footer.js'
import SignUpForm from './../components/SignUpForm.js'

const SignUp = props => {
  return(
    <div>
      <BackButtonHeader />
      <div className="basic">
        <div className="basicHeader">{props.header}</div>
        <p className="basicContent">{props.content}</p>
        <SignUpForm />
      </div>
      <Footer />
    </div>
  )
}

export default SignUp
