import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import SignOutButton from './../components/SignOutButton.js'

import './../components/Menu.css'

const NavigationAuth = (props) => {
  const routesObj = {
    "routes": [
      {
        "label": "Add your business",
        "route": "/addyourbusiness"
      },{
        "label": "About",
        "route": "/about"
      },{
        "label": "Help",
        "route": "/help"
      },{
        "label": "Account",
        "route": "/account"
      },{
        "label": "Admin",
        "route": "/admin"
      }
    ]
  }
  return (
    <div className="Menu">
      {routesObj.routes.map((route) => {
        return (
          route.route === props.location.pathname ) ? (null) : (<NavLink className="Menu-item" key={route.route.toString()} to={route.route}>{route.label}</NavLink>)
        })
      }
      <SignOutButton />
    </div>
  )
}

export default withRouter(NavigationAuth)
