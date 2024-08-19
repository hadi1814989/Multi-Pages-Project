import React from 'react'
import { Card, } from 'react-bootstrap'

import "./bannerreusable.css"

const WorkReusable = ({titel, img}) => {
  return (
 
    <div>
         <Card className='work-card' >
      <Card.Img className='work-img' variant="top" src={img} />
      <Card.Body className='work-card'>
        <Card.Title>{titel}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      
    </div>
      
       
      
    
  )
}

export default WorkReusable