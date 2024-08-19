import React from 'react'
import "./header.css"
import navImg from "../../assets/nav-img.png"
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar expand="lg" className="menu-bg">
      <Container>
        <Navbar.Brand href="#home"><img src={navImg}alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto menu-padding" >
            <Link className='menu-router' to="/">Home</Link>
            <Link className='menu-router' to="/about">About</Link>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link> */}
            <Nav.Link href="#home">Features</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#home">FAQ</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
          </Nav>
            <Button className='nav-btn'>Contact us</Button>
        </Navbar.Collapse>
    </Container>
       </Navbar>
  )
}

export default Header