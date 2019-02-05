import React from 'react'
import withAuthorization from './../HOCs/withAuthorization.js'

import PasswordForgetForm from './../components/PasswordForget.js'
import PasswordChangeForm from './../components/PasswordChange.js'

const AccountPage = () => (
  <div>
    <h1>Account Page</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
)

const condition = authUser => !!authUser

export default withAuthorization(condition)(AccountPage)
