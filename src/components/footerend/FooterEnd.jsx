import React from 'react'
import "./footerend.css"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FooterEnd = () => {
  return (
    <section id='footerend'>
      <Container>
      <div className="footer-end">
        <div className="footer-end-l"><p>Copyright 2022, Finsweet.com</p></div>
        <div className="footer-end-r">
          <ul>
            <Link className='footer-router' to="/">Home</Link>
            <Link className='footer-router' to="/about">About us</Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
        </Container>
    </section>
  )
}

export default FooterEnd