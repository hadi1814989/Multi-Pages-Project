import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import FooterEnd from '../footerend/FooterEnd'

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <FooterEnd></FooterEnd>
    </div>
  )
}

export default Layout