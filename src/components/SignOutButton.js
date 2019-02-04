import React from 'react'

import { withFirebase } from './../containers/FirebaseContext.js'

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
)

export default withFirebase(SignOutButton)
