import React from 'react'
import "./aboutus.css"
import { Container, Row, Col } from 'react-bootstrap'
import img from "../../assets/aboutus-img.png"

const Aboutus = () => {
  return (
    <section id='aboutus'>
        <Container>
            <Row>
                <Col lg={5}>
                <span>About us</span>
                <h2>Our designs solve problems</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </Col>
                <Col lg={{span: 6, offset: 1}}>
                <img className='aboutus-img' src={img} alt="" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Aboutus