import { Container, Navbar, Nav, Carousel, Col, Row, Form, Button, FormGroup, Card } from 'react-bootstrap';

const Bookingpage = () => {
    return (
        <div>
            <section id='Photo'>
                <Container className="my-4" >
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://a0.muscache.com/im/pictures/089364fd-cf9b-45fa-a592-6c2299fc307e.jpg?im_w=1200"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First Slide Label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://a0.muscache.com/im/pictures/1a11877f-971c-4a65-8293-4cdc6e2bc718.jpg?im_w=720"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Second Slide Label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://a0.muscache.com/im/pictures/26401432-557b-4ac8-980d-0aff64414714.jpg?im_w=1200"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Third Slide Label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={6}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/13326362/pexels-photo-13326362.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First Slide Label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/13454560/pexels-photo-13454560.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Second Slide Label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/15595781/pexels-photo-15595781/free-photo-of-a-row-of-wooden-chairs-on-the-side-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Third Slide Label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Nav className='me-auto'>
                        <Nav.Link href="#Photo">Photo</Nav.Link>
                        <Nav.Link href="#Features">Features</Nav.Link>
                        <Nav.Link href="#Price">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
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
                                    <strong>1 Bedroom Unit</strong><br />
                                    Bali Residence<br /><br />
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
                                    <strong>*FREE PARKING!</strong><br /><br />
                                    <strong>Guest Access:</strong><br />
                                    All shared facilities are usable from 9am to 9pm.<br /><br />
                                    <strong>Level G:</strong><br />
                                    * Entrance<br />
                                    * Waiting Area/ Lobby (Taxi & Grab etc.)<br /><br />
                                    <strong>Level 7:</strong><br />
                                    * Pool<br />
                                    * Gym<br />
                                    * Pool for kids and adults w/slide!<br />
                                    * Playground<br /><br />
                                    <strong>24-hour security surveillance</strong><br /><br />
                                    <strong>Other Things to Note:</strong><br />
                                    Upon reservation confirmation, we need the following details to submit to the condominium management:
                                    <ul>
                                        <li>Full name:</li>
                                        <li>IC/Passport Number:</li>
                                        <li>Contact number:</li>
                                        <li>Vehicle number (If any):</li>
                                        <li>Check-in Time (3pm):</li>
                                    </ul>
                                    <strong id='Price' style={{ background: 'yellow' }}>Pricing:</strong><br />
                                    Now: RM72 night<br></br>
                                    Rate: RM40 per hour<br />
                                    Time: Charges apply for each hour past the standard check-out time<br />
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