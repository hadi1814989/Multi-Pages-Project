import React from 'react'
import "./team.css"
import { Container, Row,Col } from 'react-bootstrap'
import team1 from "../../assets/meet-img1.png"
import team2 from "../../assets/meet-img2.png"
import team3 from "../../assets/meet-img3.png"
import team4 from "../../assets/meet-img4.png"
import TeamReusable from '../reusable/TeamReusable'

const Team = () => {
  return (
 <section id='team'>
    <h2>Meet our team</h2>
    <Container>
        <Row>
          <Col lg={3}>
          <TeamReusable img={team1}name="John Smith"position="CEO"></TeamReusable>
          </Col>
          <Col lg={3}>
          <TeamReusable img={team2}name="Simon Adams"position="CTO"></TeamReusable>
          </Col>
          <Col lg={3}>
          <TeamReusable img={team3}name="Paul Jones"position="Design Lead"></TeamReusable>
          </Col>
          <Col lg={3}>
          <TeamReusable img={team4}name="Sara Hardin"position="Project Manager"></TeamReusable>
          </Col>
        </Row>
    </Container>
 </section>
  )
}

export default Team