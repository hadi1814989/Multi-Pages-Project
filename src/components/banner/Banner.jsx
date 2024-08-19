import React from 'react'
import "./banner.css"
import { Button, Col, Container, Row } from 'react-bootstrap'
import img1 from "../../assets/ban-img.png"


const Banner = () => {
  return (
   <section id='banner'>
     
   <Container>
     <Row>
      <Col lg={5}>
     <div className="padding-banner-l">
     <h2 >Building stellar websites for early startups</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <Button>View our work</Button>
      <span>View Pricing</span>
     </div>
   

    </Col>
     <Col lg={{ span: 6, offset: 1 }}>

     <div className="padding-banner-r">
     <img className='ban-img' src={img1} alt="" />
     </div>

    </Col> 
   </Row>
   </Container>
   </section>
   
      
      
      
     

  )
}

export default Banner