import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import withAuthentication from './HOCs/withAuthentication.js'

import './App.css'

import Header from './features/Header.js'
import Home from './pages/Home.js'
import Basic from './pages/Basic.js'
import TOS from './pages/TOS.js'
import AddYourBusiness from './pages/AddYourBusiness.js'
import SignUp from './pages/SignUp.js'
import SignIn from './pages/SignIn.js'
import Profile from './pages/Profile.js'

const App = () => (
  <div>
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route
            path="/" exact
            render={(props)=><Home />}
          />
          <Route
            path="/help"
            render={(props)=><Basic header="Help" content="This is example help content" />}
          />
          <Route
            path="/tos"
            render={(props)=><TOS />}
          />
          <Route
            path="/about"
            render={(props)=><Basic header="About" content="This is example about content" />}
          />
          <Route
            path="/addyourbusiness"
            render={(props)=><AddYourBusiness />}
          />
          <Route
            path="/signup"
            render={(props)=><SignUp />}
          />
          <Route
            path="/signin"
            render={(props)=><SignIn />}
          />
          <Route
            path="/profile"
            render={(props)=><Profile />}
          />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </div>
)

export default withAuthentication(App)
