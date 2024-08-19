import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./process.css"
import ProcessReusable from '../reusable/ProcessReusable'

const Process = () => {
  return (
   <section id='process'>
    <Container>
      <Row>
        <Col lg={{span: 6, offset: 3}}>
        <h2>The process we follow</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
        <ProcessReusable title="Planning" para="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."></ProcessReusable>
        </Col>
        <Col lg={3}>
        <ProcessReusable title="Conception" para="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."></ProcessReusable>
        </Col>
        <Col lg={3}>
        <ProcessReusable title="Design" para="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."></ProcessReusable>
        </Col>
        <Col lg={3}>
        <ProcessReusable title="Development" para="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."></ProcessReusable>
        </Col>
      </Row>
     </Container>
   </section>
  )
}

export default Process