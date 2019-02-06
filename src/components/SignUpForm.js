import React from 'react'
import { withFirebase } from './../containers/FirebaseContext.js'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'


import ReusableInput from './../components/ReusableInput.js'
import ReusableButton from './../components/ReusableButton.js'
import './SignUpForm.css'

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

class SignUpForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {...INITIAL_STATE}
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          });
      })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE })
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  }
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === ''
    return (
      <form
        className="signUpForm"
        onSubmit={this.onSubmit}>
        <div className="signUpFormLabel">Sign Up</div>
        <div className="signInFormInputWrapper">
          <input
            className="signUpFormInput"
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="signInFormInputWrapper">
          <input
            className="signUpFormInput"
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="signInFormInputWrapper">
          <input
            className="signUpFormInput"
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="signInFormInputWrapper">
          <input
            className="signUpFormInput"
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="signInFormInputWrapper">
          <button
            className="signUpFormButton"
            disabled={isInvalid}
            type="submit">Sign Up
          </button>
        </div>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignUpFormWithFirebase = compose(
withRouter,
withFirebase,
)(SignUpForm)

export { SignUpFormWithFirebase }
