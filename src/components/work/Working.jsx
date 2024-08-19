import React from 'react'
import "./working.css"
import { Col, Container, Row } from 'react-bootstrap'
import img1 from "../../assets/working1.png"
import img2 from "../../assets/working2.png"
import img3 from "../../assets/working3.png"
import img4 from "../../assets/working4.png"
import WorkReusable from '../reusable/WorkReusable'


const Working = () => {
  return (
              <section id="work">
      <Container>
    <Row>
        <Col lg={4}>
        <h2>How we work</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <span>Get in touch with us</span>
        </Col>
        <Col lg={{span: 6, offset: 1}}>
        <Row>
          <Col lg={6}>
        <WorkReusable img={img1} titel="Strategy"></WorkReusable>
           </Col>
          <Col lg={6}>
        <WorkReusable img={img2} titel="Wireframing"></WorkReusable>
           </Col>
          <Col lg={6}>
        <WorkReusable img={img3} titel="Design"></WorkReusable>
           </Col>
          <Col lg={6}>
        <WorkReusable img={img4} titel="Development"></WorkReusable>
           </Col>
        </Row>
        </Col>
       </Row>
  </Container>
        </section>
  )
}

export default Working