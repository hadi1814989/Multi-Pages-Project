import React from 'react'
import { Card } from 'react-bootstrap'

const BenefitReusable = ({para,title,img}) => {
  return (
    <div>
        <Card className='benefit-card'>
      <Card.Img className='benefit-img' variant="top" src={img} />
      <Card.Body className='benefit-card-bg'>
        <Card.Title className='title-font'>{title}</Card.Title>
        <Card.Text>
          {para}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default BenefitReusable