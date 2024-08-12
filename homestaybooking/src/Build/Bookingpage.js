import { Container, Carousel, Col, Row, Form, Button, FormGroup, Card } from 'react-bootstrap';
import React from 'react';
import Navbar from '../navbar/Navbar';
import { useNavigate } from 'react-router-dom';



const Bookingpage = () => {
    return (
        <div>
            
            {/* <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Nav className='me-auto'>
                        <Nav.Link href="#Photo">Photo</Nav.Link>
                        <Nav.Link href="#Features">Features</Nav.Link>
                        <Nav.Link href="#Price">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}
            <Navbar />
            <section id='Features'></section>
            <Container className="my-4">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <FormGroup>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Person</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>1-2</option>
                                            <option>3-6</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="I agree with all the terms and conditons" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                    <Card>
                            <Card.Body>
                                <Card.Title>About This Space</Card.Title>
                                <Card.Text>
                                    <strong>1 Bedroom Unit</strong><br/>
                                    Bali Residence<br/><br/>
                                    <ul>
                                        <li>Cosy Room with bathroom</li>
                                        <li>Adjustable cold/hot water</li>
                                        <li>Queen bed x2</li>
                                        <li>Pillow x4</li>
                                        <li>Air-Conditioned</li>
                                        <li>High-Speed Wifi</li>
                                        <li>City view</li>
                                        <li>Netflix/Youtube</li>
                                        <li>Add On Package: Birthday/Proposal/Anniversary (RM200-RM9999)</li>
                                    </ul>
                                    <strong>*FREE PARKING!</strong><br/><br/>
                                    <strong>Guest Access:</strong><br/>
                                    All shared facilities are usable from 9am to 9pm.<br/><br/>
                                    <strong>Level G:</strong><br/>
                                    * Entrance<br/>
                                    * Waiting Area/ Lobby (Taxi & Grab etc.)<br/><br/>
                                    <strong>Level 7:</strong><br/>
                                    * Pool<br/>
                                    * Gym<br/>
                                    * Pool for kids and adults w/slide!<br/>
                                    * Playground<br/><br/>
                                    <strong>24-hour security surveillance</strong><br/><br/>
                                    <strong>Other Things to Note:</strong><br/>
                                    Upon reservation confirmation, we need the following details to submit to the condominium management:
                                    <ul>
                                        <li>Full name:</li>
                                        <li>IC/Passport Number:</li>
                                        <li>Contact number:</li>
                                        <li>Vehicle number (If any):</li>
                                        <li>Check-in Time (3pm):</li>
                                    </ul>
                                    <strong id='Price' style={{background:'yellow'}}>Pricing:</strong><br/>
                                    Now: RM72 night<br></br>
                                    Rate: RM40 per hour<br/>
                                    Time: Charges apply for each hour past the standard check-out time<br/>
                                    Access card missing: RM200
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Bookingpage