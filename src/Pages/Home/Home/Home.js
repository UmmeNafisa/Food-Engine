import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Feature/Features';
import FoodCard from '../FoodCard/FoodCard';
import Offers from '../Offers/Offers';
import Step from '../Step/Step';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Step></Step>
            <Features></Features>
            <Offers></Offers>
            <FoodCard></FoodCard>

        </div>
    );
};

export default Home;