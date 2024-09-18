import React, { useEffect, useState } from 'react';
import { viewCards } from '../../services/allApi';
import { Card, Stack, Col, Container, Row, Button } from 'react-bootstrap';
import './Intuitiveness.css';
import { motion } from 'framer-motion';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { div } from 'framer-motion/client';

export default function Intuitiveness() {
  const [showCard, setShowCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [positionIndexes,setPositionIndexes] = useState([0,1,2,3])

  const handleNext=()=>{
    setPositionIndexes((prevIndexes)=>{
      const updatedIndexes = prevIndexes.map((prevIndex)=>(prevIndex+1)%4)
      return updatedIndexes
    })
  }

const positions = [
  'first',
  'second',
  'third',
  'fourth'
]

const cardVariants = {
  first:{zIndex:4,opasity:1},
  second:{zIndex:3,opacity:0},
  third:{zIndex:2,opacity:0},
  fourth:{zIndex:1,opacity:0}
}

const imageVariants = {
  first:{x:'65%', scale:1,zIndex:4},
  second:{x:'35%', scale:0.7,zIndex:3,opacity:0.8},
  third:{x:'10%', scale:0.5,zIndex:2,opacity:0.4},
  fourth:{x:'-10%', scale:0.4,zIndex:1,opacity:0.2}
}

  const cardView = async () => {
    try {
      const result = await viewCards();
      const { data } = result;
      setShowCard(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cardView();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading cards: {error.message}</div>;

  return (
    <div className='intuitiveness'>
      <Row className='font-light fw-bold fs-1 p-2'>
        <Col>All Decked out.</Col>
        <Col>All Specced out.</Col>
      </Row>
      <Row className='mt-5'>
        {showCard.map((item,index) => (
          <motion.div 
            key={index} 
            initial='first'
             animate = {positions[positionIndexes[index]]}
             variants={imageVariants}
             transition={{duration:0.5}}
             style ={{width:'34vw',position:'absolute'}}
          className='card-row'>
            <Card className='card-style'>
              <Card.Img variant="top" className='card-style-img' src={item.image_url} />
              <Card.Body>
                <Stack direction="horizontal" gap={3}>
                  <Container>
                    <Row className='fs-1 fw-bold'>{item.text1}</Row>
                    <Row className='card-sub-text'>{item.text3}</Row>
                  </Container>
                  <Container>
                    <Row><div className="text-end pe-0 fs-1 fw-bold">{item.text2}</div></Row>
                    <Row><div className="text-end pe-0 card-sub-text">{item.text4}</div></Row>
                  </Container>
                </Stack>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </Row>
      <Button className='intuitiveness_btn' onClick={handleNext}><FontAwesomeIcon icon={faChevronRight} beatFade size="6x"/></Button>
      {showCard.map((item,index) => (
      <motion.div
      key={index} 
      initial='first'
     animate = {positions[positionIndexes[index]]}
     variants={cardVariants}
     transition={{duration:0.5}}
     style ={{height:'40vh',width:'30vw',marginLeft:'65vw',marginTop:'-20vh',position:'absolute'}} >
        <Card style={{height:'35vh'}}>
          <Card.Body>
            <Container>
              <h1 className='fw-bold fs-1'>{item.text5}</h1>
            </Container>
          </Card.Body>
        </Card>
        </motion.div>
        ))}
      <Container id='tag-2'className='d-flex'>
        <Col md='auto'className='line'></Col>
        <Col md='auto'><h2 className='font-light ms-2'>2</h2></Col>
        <Col md='auto' className='ms-1 mt-1 simpleone_line fw-lighter font-light'>TECH<br/>SPEC<br/>S</Col>
      </Container>
    </div>
    
  );
}
