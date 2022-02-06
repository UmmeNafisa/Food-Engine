import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ManageUsers = () => {
    const [orderInfo, SetOrderInfo] = useState([]);
    const { register, handleSubmit } = useForm();
    const [orderId, setOrderId] = useState("");

    useEffect(() => {
        fetch('https://agile-reaches-78451.herokuapp.com/orderItems')
            .then((res) => res.json())
            .then((data) => SetOrderInfo(data));
    }, []);

    const handleOrderId = (id) => {
        setOrderId(id);
    };
    //update status 
    const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`https://agile-reaches-78451.herokuapp.com/orderItems/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.matchedCount > 1) {
                    alert('Status updated successfully')

                }

            });
    };

    //delete items 

    const handleDeleteItems = id => {
        const proceed = window.confirm("Are sure  to delete it ?")
        console.log(id);
        if (proceed) {
            fetch(`https://agile-reaches-78451.herokuapp.com/orderItems/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully')
                        const remainingItems = orderInfo.filter(item => item._id !== id)
                        SetOrderInfo(remainingItems)
                    }
                });
        }

    }
    return (
        <div>
            <h1> All Clients</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Food Name</th>
                        <th>Restaurants Name </th>
                        <th>Customer Email</th>
                        <th> Order id</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orderInfo?.map((item, index) => (
                    < tbody >
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item?.FoodName}</td>
                            <td>{item?.RestaurantName}</td>
                            <td>{item?.email}</td>
                            <td>{item?._id}</td>
                            <td>  <form onSubmit={handleSubmit(onSubmit)}>
                                <select
                                    onClick={() => handleOrderId(item?._id)}
                                    {...register("status")}
                                >

                                    <option value="Approve">Approved</option>
                                    <option value="OnTheProcess">On the process</option>
                                    <option value="OnTheWay">On the way</option>
                                    <option value="Shipped">Shipped</option>
                                </select>
                                <input type="submit" />
                            </form> </td>
                            <td> <button onClick={() => { handleDeleteItems(item._id) }} className="btn bg-danger p-2">Delete</button></td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div >
    );
};

export default ManageUsers;