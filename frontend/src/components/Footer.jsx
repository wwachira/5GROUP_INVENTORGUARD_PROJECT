
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  
  return (
    <Container fluid className="bg-light py-4">
      <Row>
        <Col xs="12" sm="6" md="4" lg="3">
          <h5>Locations:</h5>
          <ul className="list-unstyled">
            <li>Ngong Rd</li>
            <li>Thika Rd</li>
            <li>Mombasa Rd</li>
          </ul>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3">
          <h5>Contact Us:</h5>
          <p>
            Phone: +254 123 456 789
            <br />
            Email: [info@beinafuu.com](mailto:info@beinafuu.com)
          </p>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3">
          <h5>Subscribe to Our Newsletter:</h5>
          <p>
            Email: [info@beinafuu.com]
          </p>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;