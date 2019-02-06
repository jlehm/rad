import React from 'react'
import BackButtonHeader from './../components/BackButtonHeader.js'
import Footer from './../features/Footer.js'
import SignInForm from './../components/SignInForm.js'
import ReusableInput from './../components/ReusableInput.js'
import ReusableButton from './../components/ReusableButton.js'
import ReusableLink from './../components/ReusableLink.js'

import './../components/SignInForm.css'
import './../components/SignInForm.css'


class SignIn extends React.Component {
  render() {
    return(
      <div>
        <BackButtonHeader />
          <SignInForm />
        <Footer />
      </div>
    )
  }
}

export default SignIn
