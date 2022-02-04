import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import stepBg from '../../../Images/22262f.png'
import './Step.css'
import { faBiking, faHamburger, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Step = () => {
    return (
        <div>
            <Container>
                <Row className='step-row g-3'>
                    <Col>
                        <Card className="bg-dark text-white step-card">
                            <Card.Img className='step-col' src={stepBg} alt="Card image" />
                            <Card.ImgOverlay>
                                <h2 className='number'>  01. </h2>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className='step-icon' /> <span className='steps ps-2'>
                                    Step 1 </span>
                                <Card.Title className="py-2 regular-font">Choose Location</Card.Title>
                                <Card.Text className="py-2 regular-font text-muted">
                                    Enter your address or choose your current location using app.
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card></Col>
                    <Col >
                        <Card className="bg-dark text-white step-card">
                            <Card.Img className='step-col' src={stepBg} alt="Card image" />
                            <Card.ImgOverlay>
                                <h2 className='number'>  02. </h2>
                                <FontAwesomeIcon icon={faHamburger} className='step-icon' /> <span className='steps ps-2'>
                                    Step 2 </span>
                                <Card.Title className="py-2 regular-font">Order Favorite Food</Card.Title>
                                <Card.Text className="py-2 regular-font text-muted" >
                                    Choose your favorite food and a payment method.
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card></Col>
                    <Col >
                        <Card className="bg-dark text-white step-card">
                            <Card.Img className='step-col' src={stepBg} alt="Card image" />
                            <Card.ImgOverlay>
                                <h2 className='number'>  03. </h2>
                                <FontAwesomeIcon icon={faBiking} className='step-icon' /> <span className='steps ps-2'>
                                    Step 3 </span>
                                <Card.Title className="py-2 regular-font">Fast Delivery</Card.Title>
                                <Card.Text className="py-2 regular-font text-muted">
                                    Get it delivered right to your door in 1 hour or less.
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Step;