import React from 'react'

import ReusableInput from './../components/ReusableInput.js'
import ReusableButton from './../components/ReusableButton.js'


const SignUpForm = () => (
  <div>
    <ReusableInput type="first name" label="first name" />
    <ReusableInput type="last name" label="last name" />
    <ReusableInput type="email" label="email" />
    <ReusableInput type="password" label="password" />
    <ReusableButton label="Submit" onClick={()=>console.log('do something!')} />
  </div>
)
export default SignUpForm
