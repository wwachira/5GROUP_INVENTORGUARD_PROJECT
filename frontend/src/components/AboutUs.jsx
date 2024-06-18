import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const AboutUs = () => {
  return (
    
    <Container fluid>
      <Row>
        <Col xs="12" sm="6" md="4" lg="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Facials</CardTitle>
              <CardText>
                <ul>
                  <li>
                    Basic Facial: 30 minutes, KES 1,500
                  </li>
                  <li>
                    Advanced Facial: 60 minutes, KES 3,000
                  </li>
                  <li>
                    Deluxe Facial: 90 minutes, KES 5,000
                  </li>
                </ul>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Body Treatments</CardTitle>
              <CardText>
                <ul>
                  <li>
                    Sugar Scrub: 30 minutes, KES 1,000
                  </li>
                  <li>
                    Body Wrap: 60 minutes, KES 2,000
                  </li>
                  <li>
                    Massage: 90 minutes, KES 3,500
                  </li>
                </ul>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Nails</CardTitle>
              <CardText>
                <ul>
                  <li>
                    Basic Manicure: 30 minutes, KES 500
                  </li>
                  <li>
                    Advanced Manicure: 60 minutes, KES 1,000
                  </li>
                  <li>
                    Pedicure: 90 minutes, KES 1,500
                  </li>
                </ul>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Hair</CardTitle>
              <CardText>
                <ul>
                  <li>
                    Basic Hair Treatment: 30 minutes, KES 1,000
                  </li>
                  <li>
                    Advanced Hair Treatment: 60 minutes, KES 2,000
                  </li>
                  <li>
                    Hair Styling: 90 minutes, KES 3,000
                  </li>
                </ul>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;