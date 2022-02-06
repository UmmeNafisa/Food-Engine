import React from 'react';
import videoMp4 from '../../../Images/Delivery - 34109.mp4';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-bg'>
            {/* <div>
                <video width="750" height="500" controls  >
                    <source src={videoMp4} type="video/mp4" />
                </video>
            </div> */}
            <div className='banner-des'>
                <h1 className='banner-header header-font'> We Concern The <br /> Taste Of Life </h1>
                <p className='title-p stylish-font'> Delivered your favorite food at your doorsteps</p>
            </div>
        </div>
    );
};

export default Banner;