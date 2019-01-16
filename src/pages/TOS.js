import React from 'react'
import BackButtonHeader from '../components/BackButtonHeader.js'
import Footer from '../features/Footer.js'
import './TOS.css'

const TOS = (props) => {
  return (
    <div>
      <BackButtonHeader />
      <div className="tosContent">
        <h2>Terms of Service</h2>
        <p>This is an example Terms of Service content.</p>
      </div>
      <Footer />
    </div>
  )
}

export default TOS
