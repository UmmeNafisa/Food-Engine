import React, { useState, useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import FoodCardShow from './FoodCardShow';

const FoodCard = () => {
    const [allFoods, setAllFoods] = useState([])

    useEffect(() => {
        fetch('https://agile-reaches-78451.herokuapp.com/addFoods')
            .then(res => res.json())
            .then(data => setAllFoods(data))
    }, [])

    return (
        <div className='container' id='foods'>

            <Container className="pb-5">
                <div>
                    <h4 className="pt-5 text-center stylish-font section-title"> ----- foods ----- </h4>
                    <h1 className="text-align mb-3 header-font text-center section-head">Available Food Items </h1>
                </div>
                {
                    allFoods.length === 0 ? <Spinner animation="border" variant="warning" /> :

                        <Row xs={1} md={2} lg={3} className="g-4">

                            {allFoods.map(foods => <FoodCardShow key={foods._id} foods={foods}> </FoodCardShow>)}
                        </Row>
                }
            </Container>
        </div>
    );
};

export default FoodCard;