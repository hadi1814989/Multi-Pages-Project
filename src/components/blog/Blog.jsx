import React from 'react'
import "./blog.css"
import { Container ,Row, Col } from 'react-bootstrap'
import BlogReusable from '../reusable/BlogReusable'
import img1 from "../../assets/blog-img1.png"
import img2 from "../../assets/blog-img2.png"
import img3 from "../../assets/blog-img3.png"

const Blog = () => {
  return (
   <section id='blog'>
   <Container>
   <h2>Our blog</h2>
   <Row>
    <Col lg={4}>
    <BlogReusable img={img1} title1="19 Jan 2022" parat="How one Webflow user grew his single person consultancy from $0-100K in 14 months"></BlogReusable>
    </Col>
    <Col lg={4}>
    <BlogReusable img={img2}title1="19 Jan 2022" parat="How one Webflow user grew his single person consultancy from $0-100K in 14 months"></BlogReusable>
    </Col>
    <Col lg={4}>
    <BlogReusable img={img3}title1="19 Jan 2022" parat="How one Webflow user grew his single person consultancy from $0-100K in 14 months"></BlogReusable>
    </Col>
   </Row>
   </Container>
   </section>
  )
}

export default Blog