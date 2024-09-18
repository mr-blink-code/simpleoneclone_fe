import React from 'react'
import './Home.css'
import { Col, Container,Row } from 'react-bootstrap'

export default function Home() {
  return (
    <div className='home'>
      <Container className='home-container'>
      <Row className='font-light fs-5 fw-semibold'>Say hello to the change you desire,</Row>
      <Row className='header_content'></Row>
      </Container>
      <Container>
      <Row className='d-flex align-items-center'>
        <Col md="auto">
          <Row className='flag-saffron'></Row>
          <Row className='flag-white'></Row>
          <Row className='flag-green'></Row>
        </Col>
        <Col md="auto" className='font-light'>
          India's first super EV.
          <br />
          Proudly made in India, by Indians, for the world.
        </Col>
      </Row>
      </Container>
    </div>
  )
}
