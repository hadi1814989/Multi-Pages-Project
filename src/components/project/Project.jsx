import React from 'react'
import "./project.css"
import { Container, Row, Col } from 'react-bootstrap'
import project1 from "../../assets/project-img1.png"
import project2 from "../../assets/project-img2.png"
import project3 from "../../assets/project-img3.png"

const Project = () => {
  return (
   <section id='project'>
    <Container>
      <Row>
        <Col lg={8}>
       <div className="pro-l">
       <h2>View our projects</h2>
       <img src={project1} alt="" />
       </div>
        </Col>
        <Col lg={4}>
        <Row>
        <Col lg={12}>
       <div className="pro-r mb-4">
       <p>View More</p>
      <div className="pro-r1">
      <img src={project2} alt="" />
      </div>
       </div>
        </Col>
        <Col lg={12}>
       <div className="pro-r">
       <div className="pro-r2">
       <img src={project3} alt="" />
       </div>
       </div>
        </Col>
         
        </Row>
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default Project