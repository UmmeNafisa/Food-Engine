import React from 'react';
import { Container } from 'react-bootstrap';
import bike from '../../../Images/bikeHome.gif';
import delivery from '../../../Images/collectionHome.gif';
import './Features.css'

const Features = () => {
    return (
        <div className='my-5'>
            <Container>
                <h4 className="pt-5 text-center stylish-font section-title"> ----- features ----- </h4>
                <h1 className="mb-5 header-font text-center section-head">About Food Engine </h1>
                <div className='d-lg-flex pb-5'>
                    <div className='mx-auto text-center'>
                        <img src={bike} alt="" className='' />
                        <h2 className='header-font fs-1'> 30 Minutes Delivery Challenge </h2>
                        <h6 className='regular font text-muted fs-5'> Tap a button and get your favorite foods within 30 mins. </h6>
                    </div>
                    <div className='mx-auto text-center'>
                        <img src={delivery} alt="" className='' />
                        <h2 className='header-font fs-1'> Reached Food at your Doorstep </h2>
                        <h6 className='regular font text-muted fs-5'> Tap a button and get your foods in front of your doorsteps. </h6>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Features;