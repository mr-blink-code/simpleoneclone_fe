import React from 'react'
import './Simpleone.css'
import { Container,Col,Row } from 'react-bootstrap'

export default function Simpleone() {
  return (
    <div className='bg-dark d-flex'>
      <Container className='simpleone'>
      <Container id='tag-1'className='d-flex'>
        <Col md='auto'className='line'></Col>
        <Col md='auto'><h2 className='font-light ms-2'>1</h2></Col>
        <Col md='auto' className='ms-1 mt-1 simpleone_line fw-lighter font-light'>SIMPLE<br/>ONE</Col>
      </Container>
        </Container>
        <Container className='d-flex-block align-self-center'>
        <Row md='auto'>
           <p className='font-light fs-4'> Reclaim your world by being an agent of change.<br/>
           Take your first step towords <span className='fw-semibold'>Simple One.</span></p>
          </Row>
          <Row className='align-items-center mt-5'>
            <Col md='auto' className='tech-l'></Col>
            <Col md='auto' className='simple_one'>212</Col>
            <Col md='auto' className='simple_km'>km</Col>
          </Row>
          <Row className='simple_range'>Certified Range</Row>
          <Row className='align-items-center mt-5'>
            <Col md='auto' className='tech-l'></Col>
            <Col md='auto' className='simple_one'>2.77</Col>
            <Col md='auto' className='simple_sec'>S</Col>
          </Row>
          <Row className='simple_range'>0-40 km/h</Row>
          <Row className='align-items-center mt-5'>
            <Col md='auto' className='tech-l'></Col>
            <Col md='auto' className='simple_one'>105</Col>
            <Col md='auto' className='simple_km'>km/h</Col>
          </Row>
          <Row className='simple_range'>Top Speed</Row>
          <Row md='auto' className='mt-5 pt-5'>
           <p className='font-light fs-4'> The Simple One is a complex mecha-biology<br/> of <span className='fw-semibold'>passionately</span> designed and crafted elements.</p>
          </Row>
        </Container>
    </div>
  )
}
