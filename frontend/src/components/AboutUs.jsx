import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div className="container">
      <h1 className="text-center">About Us</h1>
      <Row className="row-cols-1 row-cols-md-4 g-4">
        <Col>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="src/assets/face.jpeg"
              alt="Facial Treatment"
            />
            <Card.Body>
              <Card.Title>Facial Treatment</Card.Title>
              <Card.Text>
                Our facial treatment is designed to rejuvenate and nourish your skin.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="src/assets/body.jpg"
              alt="Body Treatment"
            />
            <Card.Body>
              <Card.Title>Body Treatment</Card.Title>
              <Card.Text>
                Our body treatment is designed to relax and rejuvenate your entire body.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="src/assets/hair.jpeg"
              alt="Nails Treatment"
            />
            <Card.Body>
              <Card.Title>Nails Treatment</Card.Title>
              <Card.Text>
                Our nails treatment is designed to make your nails look beautiful and healthy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="src/assets/hair.jpeg"
              alt="Hair Treatment"
            />
            <Card.Body>
              <Card.Title>Hair Treatment</Card.Title>
              <Card.Text>
                Our hair treatment is designed to nourish and rejuvenate your hair.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h2 className="text-center">Order Treatments</h2>
      <p className="text-center">
        <strong>Facial Treatment:</strong> 30 minutes, KES 2,000
      </p>
      <p className="text-center">
        <strong>Body Treatment:</strong> 60 minutes, KES 4,000
      </p>
      <p className="text-center">
        <strong>Nails Treatment:</strong> 30 minutes, KES 1,500
      </p>
      <p className="text-center">
        <strong>Hair Treatment:</strong> 60 minutes, KES 3,000
      </p>
    </div>
  );
};

export default AboutUs;