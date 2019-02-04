import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import './../components/Menu.css'

const NavigationNonAuth = (props) => {
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
        "label": "Sign Up",
        "route": "/signup"
      },{
        "label": "Sign In",
        "route": "/signin"
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
    </div>
  )
}

export default withRouter(NavigationNonAuth)
