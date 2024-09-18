import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './footer.css';
import MyDropdown from './MyDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className='footer-style fs-5'>
      <Container fluid>
        <Row className='pt-5'>
          <Col className='font-light container1' sm={12} md={4} lg={3}>
            <img
              src="https://se-prod-webapp-media.s3.amazonaws.com/assets/footer/simpleroundlogo.png"
              alt="Simple Energy Logo"
              height='25.79px'
              style={{ marginLeft: '-10px' }}
            />
            <div className='mt-4'>
              <div>Sign In</div>
              <div className='mt-4'>FAQs</div>
              <div className='mt-4'>Media</div>
              <div className='mt-4 font-grey'>Retail Partnerships</div>
              <div className='mt-4'>Privacy Policy</div>
              <div className='mt-4'>Terms of Use</div>
            </div>
          </Col>
          <Col className='font-light container2' sm={12} md={4} lg={3}>
            <div className='fw-semibold'>Simple</div>
            <div className='mt-4'>Simple One</div>
            <div className='mt-4'>Simple Dot One</div>
            <div className='mt-4'>Intuitiveness</div>
            <div className='mt-4'>Tech-Smart</div>
            <div className='mt-4'><MyDropdown/></div>
            <div className='mt-4'>Public Notice</div>
          </Col>
          <Col className='font-light container3' sm={12} md={4} lg={6}>
            <div className='fw-semibold'>Registered Office Address</div>
            <div className='mt-4'>
              9th floor, Wing A, No.2/2, North Gate Phase-2 Hobli, Venkatala Village, Yelahanka, Bengaluru, 560064.
            </div>
            <div className='mt-4 fw-semibold'>Corporate Identification Number (CIN)</div>
            <div className='mt-4'>U29309KA2019PTC127859</div>
            <div className='mt-5 mb-1 fw-semibold'>Get in Touch</div>
            <div className='no-border fs-5 row-h'>
              <ul>
                <li>Email: <span className='fw-light'>care@simpleenergy.in</span></li>
                <li>Phone: <span className='fw-light'>892945085</span></li>
                <li className='fw-light'>&#40;Mon to Sat: 9am - 7pm&#41;</li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className='divider'></div>
        <div className='py-4 d-flex justify-content-between'>
          <div className='font-light fs-3 pt'>
            <FontAwesomeIcon className='me-5' icon={faFacebookF} />
            <FontAwesomeIcon className='me-5' icon={faInstagram} />
            <FontAwesomeIcon className='me-5' icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
          <div className='font-light'>
            Copyright © 2024 Simpleenergy Private Limited
          </div>
        </div>
      </Container>
    </footer>
  );
}
