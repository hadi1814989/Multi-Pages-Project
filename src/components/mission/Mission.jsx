import React from 'react'
import "./mission.css"
import { Col, Container, Row } from 'react-bootstrap'
import mission from "../../assets/mission-img1.png"
import mission2 from "../../assets/mission-img2.png"

const Mission = () => {
  return (
  <section id='mission'>
    <Container>
        <Row>
            <Col lg={6}>
           <div className="misson-div-l">
           <span>Our Mission </span>
            <h2>Inspire, Innovate, Share</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </div>
            </Col>
            <Col lg={{span: 5, offset: 1}}>
            <img src={mission} alt="" />
            </Col>
        </Row>
        <Row>
            <Col lg={5}>
            <img src={mission2} alt="" />
          
            </Col>
            <Col lg={{span: 6, offset: 1}}>
            <div className="misson-div-r">
           <span>Our Mission </span>
            <h2>Inspire, Innovate, Share</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default Mission