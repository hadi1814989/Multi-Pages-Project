import React from 'react'
import "./Features.css"
import img1 from "../../assets/featureimg1.png"
import img2 from "../../assets/featureimg2.png"
import img3 from "../../assets/featureimg3.png"
import img4 from "../../assets/featureimg4.png"
import img5 from "../../assets/featureimg5.png"
import img6 from "../../assets/featureimg6.png"
import { Col, Container, Row } from 'react-bootstrap'
import ProjectReusable from '../reusable/ProjectReusable'

const Features = () => {
  return (
   <section id='features'>
    <p>features</p>
    <h2>Design that solves <br /> problems, one product at <br /> a time</h2>
   <Container>
   <Row>
        <Col lg={4}>
        <ProjectReusable title="Uses Client First" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. " img={img1}></ProjectReusable>
        </Col>
        <Col lg={4}>
        <ProjectReusable title="Uses Client First" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. " img={img2}></ProjectReusable>
        </Col>
        <Col lg={4}>
        <ProjectReusable title="Uses Client First" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. " img={img3}></ProjectReusable>
        </Col>
        <Col lg={4}>
        <ProjectReusable  title="Uses Client First" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. " img={img4}></ProjectReusable>
        </Col>
        <Col lg={4}>
        <ProjectReusable title="Uses Client First" para="Euismod faucibus turpis eu gravida mi. 
         Pellentesque et velit aliquam sed faucib  
         turpis eu gravida mi. Pellentesque et 
          velit aliquam sed mi. " img={img5}></ProjectReusable>
        </Col>
        <Col lg={4}>
        <ProjectReusable title="Uses Client First" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. " img={img6}></ProjectReusable>
        </Col>
    </Row>
   </Container>
   </section>
  )
}

export default Features