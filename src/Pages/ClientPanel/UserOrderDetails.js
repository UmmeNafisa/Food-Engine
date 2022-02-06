import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const UserOrderDetails = (props) => {
    const { _id, FoodName, RestaurantName, status, startTime, endTime, description, foodPrice, imgUrl } = props.items;
    const { user } = useAuth();
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        fetch('https://agile-reaches-78451.herokuapp.com/orderItems')
            .then(res => res.json())
            .then(data => setOrderItems(data))
    }, [])

    //delete an item 
    const handleDelete = (id) => {
        // console.log(id)
        fetch(`https://agile-reaches-78451.herokuapp.com/orderItems/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    alert('Deleted successfully')
                    const remainingItems = orderItems.filter(item => item._id !== id)
                    setOrderItems(remainingItems)
                }
            });
    }

    // Confirm ordering btn to post the data 
    // const handleConfirmordering = (id) => {
    //     const finalItem = orderItems.find(item => item._id === id)
    //     finalItem.email = user?.email;
    //     finalItem.status = "Pending"
    //     delete finalItem._id
    //     fetch('https://agile-reaches-78451.herokuapp.com/finalConfirmation', {
    //         method: "POST",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(finalItem)
    //     })
    // }
    return (
        <div>
            <Col>
                <Card className="border-0">
                    <Card.Img variant="top" src={imgUrl} className="img-fluid orderedImg" />
                    <Card.Body>
                        <Card.Title>{FoodName}</Card.Title>
                        <Card.Text>
                            {RestaurantName} at ${foodPrice}
                            {
                                ({ status } === "Pending") ? <p className="text-success fw-bold"> <FontAwesomeIcon icon={faDotCircle} /> {status}</p> : <p className="text-danger fw-bold"> <FontAwesomeIcon icon={faDotCircle} /> {status}</p>
                            }
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Button className="btn-all" onClick={() => handleDelete(_id)}  > Delete </Button>
            </Col>
        </div>
    );
};

export default UserOrderDetails;