import React from 'react';
import { useForm } from 'react-hook-form';

const AddFoods = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch('https://agile-reaches-78451.herokuapp.com/addFoods', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Food is Added")

                }
            })
        // console.log(data);
    }
    return (
        <div>
            <h1 className="mt-5 text-center">Add a New Food</h1>
            <div className="w-75 mx-auto border-0">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="mx-auto text-center">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("FoodName")}
                                placeholder="Food Name"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("RestaurantName")}
                                placeholder="Restaurant Name"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <small htmlFor="time" className="text-white text-start"> Restaurant Start time</small>
                            <input
                                {...register("startTime")}
                                type="time"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <small htmlFor="time" className="text-white text-start"> Restaurant End time</small>
                            <input
                                {...register("endTime")}
                                type="time"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <textarea
                                {...register("description")}
                                placeholder="Description"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <textarea
                                {...register("specialIngredients")}
                                placeholder=" special ingredients"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("foodPrice")}
                                placeholder="Price"
                                type="number"

                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("imgUrl", { required: true })}
                                type="url"
                                placeholder="Image Link"

                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add" className="btn btn-info w-50 mb-3" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFoods;