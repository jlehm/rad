import React from 'react'
import { withRouter } from 'react-router-dom'
import { withFirebase } from './../containers/FirebaseContext.js'
import AuthUserContext from './../containers/AuthUserContext.js'
import { compose } from 'recompose'

const withAuthorization = condition => Component => {
  class withAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push('/signin')
        }
      })
    }

    componentWillUnmount() {
      this.listener()
    }
    render() {
      return(
        <AuthUserContext.Consumer>
          {authUser =>
          condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      )
    }
  }
  return compose(
    withRouter,
    withFirebase,
  )(withAuthorization)
}

export default withAuthorization
