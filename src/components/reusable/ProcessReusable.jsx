import React from 'react'
import { Card } from 'react-bootstrap'


const ProcessReusable = ({title,para}) => {
  return (
    <div>
         <div className="position-precess">
         <div className="cercle"></div>
         <div className="line"></div>
         </div>
         <Card className='process-card'>
      <Card.Body className='card-bg'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {para}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProcessReusable