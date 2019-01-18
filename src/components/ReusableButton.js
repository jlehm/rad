import React from 'react'
import './ReusableButton.css'

const ReusableButton = ({label, type, onClick}) => (
  <button className="reusableButton" type={type} onClick={onClick}>
    {label}
  </button>
)

export default ReusableButton
