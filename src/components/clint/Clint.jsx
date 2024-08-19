import React from 'react'
import "./clint.css"
import { Container, Row , Col } from 'react-bootstrap'
import clint from "../../assets/clint-img.png"

const Clint = () => {
  return (
   <section id='clint'>
    <Container>
        <Row>
            <Col lg={3}>
            <h2>What our clients say about us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
            </Col>
            <Col lg={{span: 8, offset: 1}}>
            <h4>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h4>
             <div className="clint-mini-div">
                <div className="clint-img">
                    <img src={clint} alt="" />
                </div>
                <div className="clint-text">
                  <p>Jenny Wilson</p>
                  <span>Vice President</span>
                </div>
             </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Clint