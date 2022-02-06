import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FoodCardShow.css'

const FoodCardShow = (props) => {
    const { _id, FoodName, RestaurantName, startTime, endTime, description, foodPrice, imgUrl } = props.foods
    return (
        <div>
            <Col>
                <Card className='border-0' >
                    <div class="container-img">
                        <img src={imgUrl} alt={FoodName} className="image img-fluid" />
                        <div className="middle">
                            <div className="text">{FoodName}</div>
                        </div>
                    </div>
                    <Card.Body>
                        <Card.Title className='header-font fs-2'>{RestaurantName}</Card.Title>
                        <Card.Text className="text-muted stylish-font fw-bold fs-5">
                            {description}
                        </Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                            <h2 className="stylish-font fw-bold price"> <span className='icon-clock'>$</span>  {foodPrice}  </h2>
                            <div className="d-flex justify-content-between align-items-center">
                                <FontAwesomeIcon icon={faClock} className="icon-clock" size='2x' />
                                <div>
                                    <p>Available</p>
                                    <p> {startTime} -- {endTime}  </p>

                                </div>
                            </div>
                        </div>
                        <Link to={`/placeOrder/${_id}`}>
                            <Button className="btn-all fw-bold px-3 py-2 btn text-align"  > Place Order</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default FoodCardShow;