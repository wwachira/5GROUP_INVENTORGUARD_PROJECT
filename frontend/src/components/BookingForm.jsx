import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import moment from 'moment';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('Ngong Rd');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [orderTreatment, setOrderTreatment] = useState('');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [time, setTime] = useState('8:00 AM');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      phoneNumber,
      location,
      numberOfPeople,
      orderTreatment,
      date,
      time,
    });
    setSubmitted(true);
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs="12" sm="6" md="4" lg="3">
        <h4 className="text-center font-weight-bold mb-4">Book Your Appointment</h4>
          <Form onSubmit={handleFormSubmit}>
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phoneNumber">Phone Number:</Label>
              <Input
                type="tel"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="location">Location:</Label>
              <Input
                type="select"
                name="location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              >
                <option value="Ngong Rd">Ngong Rd</option>
                <option value="Thika Rd">Thika Rd</option>
                <option value="Mombasa Rd">Mombasa Rd</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="numberOfPeople">Number of People:</Label>
              <Input
                type="number"
                name="numberOfPeople"
                value={numberOfPeople}
                onChange={(event) => setNumberOfPeople(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="orderTreatment">Order Treatment:</Label>
              <Input
                type="textarea"
                name="orderTreatment"
                value={orderTreatment}
                onChange={(event) => setOrderTreatment(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="date">Date:</Label>
              <Input
                type="date"
                name="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="time">Time:</Label>
              <Input
                type="select"
                name="time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
              >
                {Array.from({ length: 11 }, (_, i) => i + 8).map((hour) => (
                  <option key={hour} value={`${hour}:00 AM`}>
                    {hour}:00 AM
                  </option>
                ))}
                {Array.from({ length: 6 }, (_, i) => i + 1).map((hour) => (
                  <option key={hour + 12} value={`${hour}:00 PM`}>
                    {hour}:00 PM
                  </option>
                ))}
              </Input>
            </FormGroup>
            <Button color="primary" 
            className="text-black hover:bg-indigo-700 focus:outline-none"
                    type="submit">
              Book Now
            </Button>
          </Form>
          
        </Col>
      </Row>
    </Container>
  );
};

export default BookingForm;