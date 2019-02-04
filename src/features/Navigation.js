import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthUserContext from './../containers/AuthUserContext.js'
import withAuthentication from './../HOCs/withAuthentication.js'
import NavigationAuth from './../components/NavigationAuth.js'
import NavigationNonAuth from './../components/NavigationNonAuth.js'

import SignOutButton from './../components/SignOutButton.js'

import './../components/Menu.css'

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
)

export default withAuthentication(Navigation)
