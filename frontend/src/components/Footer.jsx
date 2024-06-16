import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="bg-light">
      <Row className="row-cols-1 row-cols-md-3 g-4">
        <Col>
          <h5>Locations</h5>
          <ul>
            <li>Ngong Rd</li>
            <li>Thika Rd</li>
            <li>Mombasa Rd</li>
          </ul>
        </Col>
        <Col>
          <h5>Contact Information</h5>
          <p>
            Phone: 0723 456 789
            <br />
            Email: [info@beinafuu.com](mailto:info@beinafuu.com)
          </p>
        </Col>
        <Col>
          <h5>Subscribe to Our Newsletter</h5>
          <p>
            You are now subscribed.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;