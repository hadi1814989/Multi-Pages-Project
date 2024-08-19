import React from 'react'
import "./footer.css"
import { Col, Container, Row } from 'react-bootstrap'
import footerImg from "../../assets/foot-logo.png"
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
  <section
  id='footer'>
    <Container>
      <Row>
        <Col lg={5}>
        <img src={footerImg} alt="" />
        <h6>We are always open to discuss your project and improve your online presence.</h6>
        <div className="footer-div">
          <div className="footer-div-l">
            <h4>Email me at</h4>
            <p>contact@website.com</p>
          </div>
          <div className="footer-div-r ms-3">
            <h4>Call us</h4>
            <p>0927 6277 28525</p>
          </div>
        </div>
        </Col>
        <Col lg={{span: 4, offset: 1}}>
        <h2>Lets Talk!</h2>
        <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
       <div className="footer-icons">
       <div className="fb"><BsFacebook /></div>
        <div className="fb"><FaTwitter /></div>
       <div className="fb"> <FaInstagram /></div>
       <div className="fb"> <BsLinkedin /></div>
       </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default Footer