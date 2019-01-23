import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'

import Header from './features/Header.js'
import Home from './pages/Home.js'
import Basic from './pages/Basic.js'
import TOS from './pages/TOS.js'
import AddYourBusiness from './pages/AddYourBusiness.js'
import SignUp from './pages/SignUp.js'
import SignIn from './pages/SignIn.js'
import Profile from './pages/Profile.js'

const components = {
  "Activity" : {
    ideal: 200,
    min: 120,
    max: 300
  }
}

const specs = {
  "App": {
    "min": 300,
    "max": 800,
    "style": {
      "margin": 0,
      "padding": 20
    },
    "children": {}
  },
  "Categories": [{
    "range": {
      "min": 300,
      "max": 450
    },
    "style": {
      "margin": 0,
      "padding": 20
    },
    "children": {
      "Activity" : {
        "fit": 1,
        "style": {
          "margin": 0,
          "padding": 10
        }
      }
    }
  },
  ]
}

class App extends React.Component {
  constructor(props) {
  super(props)
    this.state = {
      height: 0,
      width: 0,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header  />
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
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
