import React from 'react'
import BackButtonHeader from './../components/BackButtonHeader.js'
import Footer from './../features/Footer.js'
import SignInForm from './../components/SignInForm.js'

class SignIn extends React.Component {
  render() {
    return(
      <div>
        <BackButtonHeader />
        <div className="signInFormWrapper">
          <SignInForm />
        </div>
        <Footer />
      </div>
    )
  }
}

export default SignIn
