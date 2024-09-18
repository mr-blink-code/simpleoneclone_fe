import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { viewVarient, viewVarientbyId } from '../../services/allApi';
import './varient.css'; // Ensure you have CSS rules for `.preload-images`

const preloadImages = (urls) => {
  urls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};

export default function Varient() {
  const [showVarient, setShowVarient] = useState([]);
  const [showActive, setShowActive] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [varientsResult, activeResult] = await Promise.all([
          viewVarient(),
          viewVarientbyId(1) // Initial ID can be adjusted based on requirements
        ]);

        setShowVarient(varientsResult.data);
        setShowActive(activeResult.data);

        // Preload images
        const imageUrls = varientsResult.data.map(item => item.icon_color).concat(activeResult.data.image_url);
        preloadImages(imageUrls);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Consider using a spinner for better UX
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleVarientClick = async (id) => {
    try {
      const result = await viewVarientbyId(id);
      setShowActive(result.data);
    } catch (error) {
      setError('Error fetching variant by ID');
      console.error('Error fetching variant by ID:', error);
    }
  };

  return (
    <div
      className="varient-background"
      style={{
        backgroundImage: `url(${showActive.image_url || 'default-image-url'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <Container className='me-5 pt-5'>
        <Row className='justify-content-end'>
          {showVarient.map(item => {
            let style = { height: '54px', margin: '3px' };
            if (item.id === 5) {
              style = { ...style, transform: 'rotate(50deg)', height: '62px' };
            } else if (item.id === 6) {
              style = { ...style, transform: 'rotate(50deg)' };
            }

            return (
              <Col className="d-flex align-items-center" key={item.id} md='auto'>
                <img
                  src={showActive.id === item.id ? item.icon_color_active : item.icon_color}
                  className={`variant-icon ${item.id === 5 ? 'rotate-50' : ''} ${item.id === 6 ? 'rotate-50' : ''}`}
                  style={style}
                  onClick={() => handleVarientClick(item.id)}
                  alt={`Variant ${item.color_name}`}
                />
                {showActive.id === item.id && (
                  <h2 className='variant_name ms-3'>{item.color_name}</h2>
                )}
              </Col>
            );
          })}
        </Row>
        <Row className='justify-content-end my-5'>
          <div className='color_header'>COLORS</div>
        </Row>
        <Container className='d-flex flex-column align-items-end'>
          <Row className='justify-content-end text-end text-wrap text-light fw-semibold' style={{ width: '180px' }}>
            {showActive.text1}
          </Row>
          <div style={{ backgroundColor: showActive.divder_color }} className='break_line'></div>
          <Row className='justify-content-end text-end text-wrap text-light mt-5' style={{ width: '280px' }}>
            {showActive.text2}
          </Row>
        </Container>
      </Container>
      <Container id='tag-3' className='d-flex'>
        <Col md='auto' className='line'></Col>
        <Col md='auto'>
          <h2 className='font-light ms-2'>3</h2>
        </Col>
        <Col md='auto' className='ms-1 mt-1 simpleone_line fw-lighter font-light'>
          COLOR<br />OPTIONS
        </Col>
      </Container>
    </div>
  );
}
