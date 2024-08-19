import React from 'react'
import { Card } from 'react-bootstrap'


const BlogReusable = ({img, title1, parat}) => {
  return (
    <div>
         <Card className='blog-card'>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{title1}</Card.Title>
        <h3>{parat}</h3>
        <Card.Text>
        See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
        </Card.Text>
        <span>Read More</span>
      </Card.Body>
    </Card>
    </div>
  )
}

export default BlogReusable