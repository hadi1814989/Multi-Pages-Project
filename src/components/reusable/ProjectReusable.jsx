import React from 'react'
import { Card } from 'react-bootstrap'


const ProjectReusable = ({title,img , para}) => {
  return (
    <div>
          <Card className='card-pad' >
      <Card.Img className='feat-img' variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='feat-p'>
         {para}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProjectReusable