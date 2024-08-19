import React from 'react'
import "./goal.css"
import { Container, Row , Col} from 'react-bootstrap'
import goal from "../../assets/goal-img.png"

const Goal = () => {
  return (
    <section id='goal'>
        <Container>
            <Row>
                <Col lg={6}>
                <div className="goal-div-l">
                <h6>Who we are</h6>
                <h2>Goal focussed</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
               
                </div>
                </Col>
                <Col lg={6}>
                <div className="goal-div-r">
                <h2>Continuous improvement</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </div>
                </Col>
            </Row>
            <div className="goal-img">
                <img src={goal} alt="" />
            </div>
        </Container>
    </section>
  )
}

export default Goal