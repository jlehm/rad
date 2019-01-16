import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import './Brand.css'

const Brand = (props) => {
  return (props.location.pathname === "/")?
  (
    <div to={"/"} className="brand">
      Rad Dad
    </div>
  ):
  (
    <NavLink to={"/"} className="brand">
      Rad Dad
    </NavLink>
  )
}

export default withRouter(Brand)
