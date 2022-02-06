import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import UserOrderDetails from './UserOrderDetails';

const UserOrders = () => {
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        fetch('https://agile-reaches-78451.herokuapp.com/orderItems')
            .then(res => res.json())
            .then(data => {
                setOrderItems(data)
            })
    }, [])

    return (
        <Container className="my-5">
            {
                orderItems?.length === 0 ? <h3 className="pb-2 text-color fw-bold"> You have not placed any order yet  </h3> : <h3 className="pb-2 text-color fw-bold"> Your order list is :{orderItems?.length}  </h3>
            }
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    orderItems.map(items => <UserOrderDetails key={items._id} items={items} ></UserOrderDetails>)
                }
            </Row>
        </Container>
    )
};

export default UserOrders;