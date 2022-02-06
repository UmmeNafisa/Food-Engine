import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const [food, setFood] = useState([]);
    const { id } = useParams();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://agile-reaches-78451.herokuapp.com/addfoods/${id}`)
            .then(res => res.json())
            .then(data => setFood(data[0]))

    }, [])

    const handleOrderNow = () => {
        food.status = "Pending"
        food.email = user?.email;
        food.userName = user?.name;
        fetch('https://agile-reaches-78451.herokuapp.com/orderItems', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(food)
        })
    }

    return (
        <div>
            <div className="container text-center" >
                <div>
                    <img src={food?.imgUrl} alt="" className='img-fluid w-50 pt-5' />
                    <h2 className="w-75 mx-auto text-center py-2 header-font">{food?.FoodName} from {food?.RestaurantName} </h2>
                    <p className="w-75 mx-auto text-center py-2"> {food?.description} </p>
                    <h2 className="stylish-font fw-bold price text-center"> <span className='icon-clock'> Price: $</span>  {food?.foodPrice}  </h2>
                </div>
                <Link to="/confirmOrder">
                    <Button onClick={() => { handleOrderNow() }} className="btn-all px-5 py-2 mb-5 mx-auto"> Confirm Order </Button>
                </Link>
            </div>

        </div>
    );
};

export default PlaceOrder;