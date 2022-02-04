import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Offers.css'
import offer1 from '../../../Images/bg1.jpg'
import offer2 from '../../../Images/top-view-food-frame-with-copy-space.jpg'
import offer3 from '../../../Images/andrei-caliman-tuDUVwkndYU-unsplash.jpg'

const Offers = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="my-5" id="offers">
            <Carousel.Item>
                <img
                    className=" w-100 offer-img"
                    src={offer1}
                    alt="First slide"
                />
                <Carousel.Caption className="offer-caption">
                    <h1 className="offer-title fw-bold header-font text-start offer-header w-75">Make Your First Order And <br /> <span className='common-clr'>Get 50% Off </span> </h1>
                    <p className='stylish-font fs-4 text-start'>Get It Delivered Right To Your Door. </p>
                    <p className='regular-font fs-6 text-muted text-start w-50 pb-5'>If you order food delivery from us for the first time then we have a gift - 50% discount for you on the first order. using coupon-"first-50". </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 offer-img  offer-2"
                    src={offer2}
                    alt="Second slide"
                />

                <Carousel.Caption className="offer-caption">
                    <div className="offer-2-des">
                        <h1 className="offer-title fw-bold header-font text-start offer-header ">Order twice in a day <br /> <span className='common-clr'>Get 20% Off </span> </h1>
                        <p className='stylish-font fs-4 text-start'>Get It Delivered Right To Your Door. </p>
                        <p className='regular-font fs-6 text-muted text-start pb-5'>If you order food delivery from us for the two times in a day then you will get 20% discount. using coupon-"twice-20". </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 offer-img"
                    src={offer3}
                    alt="Third slide"
                />

                <Carousel.Caption className="offer-caption">
                    <h1 className="offer-title fw-bold header-font text-start offer-header w-75"> Weekend Offer for you <br /> <span className='common-clr'>Get 10% Off </span> </h1>
                    <p className='stylish-font fs-4 text-start'>Get It Delivered Right To Your Door. </p>
                    <p className='regular-font fs-6 text-muted text-start w-50 pb-5'>If you order food delivery from us on weekend then we have a gift - 10% discount for you for any food. using coupon-"weekend-10". </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Offers;