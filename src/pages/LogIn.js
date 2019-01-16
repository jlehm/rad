import React from 'react'
import BackButtonHeader from './../components/BackButtonHeader.js'
import Footer from './../features/Footer.js'

class LogIn extends React.Component {
  render() {
    return(
      <div>
        <BackButtonHeader />
        <div className="basic">
          <div className="basicHeader">{this.props.header}</div>
          <p className="basicContent">{this.props.content}</p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default LogIn
