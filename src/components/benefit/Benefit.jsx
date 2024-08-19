import React from 'react'
import "./benefit.css"
import { Col, Container, Row } from 'react-bootstrap'
import BenefitReusable from '../reusable/BenefitReusable'
import benefit1 from "../../assets/benefit-img1.png"
import benefit2 from "../../assets/benefit-img2.png"
import benefit3 from "../../assets/benefit-img3.png"
import logos from "../../assets/benefit-logos.png"

const Benefit = () => {
  return (
    <section id='benefit'>
     <Container>
        <h2>The benefits of working with us</h2>
        <Row>
            <Col lg={4}>
            <BenefitReusable img={benefit1} para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim." title="Customize with ease"></BenefitReusable>
            </Col>
            <Col lg={4}>
            <BenefitReusable img={benefit2} para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim." title="Perfectly Responsive"></BenefitReusable>
            </Col>
            <Col lg={4}>
            <BenefitReusable img={benefit3} para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim." title="Friendly Support"></BenefitReusable>
            </Col>
        </Row>
        <div className="benefit-logos">
            <img className='benefit-logos' src={logos} alt="" />
        </div>
     </Container>
    </section>
  )
}

export default Benefit