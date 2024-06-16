import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const AddBooking = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('Ngong Rd');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [orderTreatment, setOrderTreatment] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('8');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(event.target.value);
  };

  const handleOrderTreatmentChange = (event) => {
    setOrderTreatment(event.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleTimeChange = (time) => {
    setTime(time);
  };

  const handleSubmit = (event) => {
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
  };

  return (
    <Container>
      <h1 className="text-center">Add Booking</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="row-cols-1 row-cols-md-2 g-4">
          <Col>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Enter your phone number"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-md-2 g-4">
          <Col>
            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Select
                value={location}
                onChange={handleLocationChange}
                placeholder="Select a location"
              >
                <option value="Ngong Rd">Ngong Rd</option>
                <option value="Thika Rd">Thika Rd</option>
                <option value="Mombasa Rd">Mombasa Rd</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="numberOfPeople">
              <Form.Label>Number of People</Form.Label>
              <Form.Select
                value={numberOfPeople}
                onChange={handleNumberOfPeopleChange}
                placeholder="Select the number of people"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <option value={num}>{num}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-md-2 g-4">
          <Col>
            <Form.Group controlId="orderTreatment">
              <Form.Label>Order Treatment</Form.Label>
              <Form.Control
                type="text"
                value={orderTreatment}
                onChange={handleOrderTreatmentChange}
                placeholder="Enter your preferred treatment"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Calendar value={date} onChange={handleDateChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-md-2 g-4">
          <Col>
            <Form.Group controlId="time">
              <Form.Label>Time</Form.Label>
              <Form.Select
                value={time}
                onChange={handleTimeChange}
                placeholder="Select a time"
              >
                {Array.from({ length: 9 }, (_, i) => i + 8).map((time) => (
                  <option value={time}>{time}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default AddBooking;