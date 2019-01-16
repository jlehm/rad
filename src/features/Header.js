import React from 'react'
import Brand from './../components/Brand.js'
import Menu from './../components/Menu.js'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <Brand />
      <Menu />
    </div>
  )
}

export default Header
