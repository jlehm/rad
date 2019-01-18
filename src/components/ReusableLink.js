import React from 'react'
import { NavLink } from 'react-router-dom'
import './ReusableLink.css'

const ReusableLink = ({label}) => (
  <NavLink to="/" className="">{label}</NavLink>
)

export default ReusableLink
