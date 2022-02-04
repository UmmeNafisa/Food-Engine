import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../../../Images/download.png'
import payment from '../../../Images/imgs.png'
import app1 from '../../../Images/btn1.png'
import app2 from '../../../Images/btn2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer-bg mx-auto text-center'>
                <div className='container'>
                    <Row>
                        <Col>
                            <img src={logo} className='footer-logo' alt="" />
                            <h4 className='py-3 regular-font fw-bold text-white'> Ordering Schedule</h4>
                            <h6 className='py-3 regular-font fw-bold text-white'>Mon - Sat: 9:00 am - 10:00 pm </h6>
                            <h6 className=' regular-font fw-bold text-white'> Sun: 10:00 am - 8:00 pm</h6>
                        </Col>
                        <Col>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-25 call-img" fill="#D8AB37" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <h3 className='pt-5 pb-3 regular-font fw-bold text-white'> <span className='call-us header-font fw-bold fs-2'>Call us</span> to make an order!   </h3>
                            <h6 className=' regular-font fw-bold text-white'> Don’t be shy, we don’t bite :)</h6>
                            <h6 className='stylish-font fw-bold fs-2 text-white'>  +1 654 847 52 25</h6>
                        </Col>
                        <Col>
                            <div className='pt-5 pb-4'>
                                <h6 className=' regular-font fw-bold text-white'>Payment Options</h6>
                                <img src={payment} alt="" />
                            </div>
                            <div className='pt-3 pb-5'>
                                <h6 className=' regular-font fw-bold text-white'>Download The App</h6>
                                <img src={app1} className='py-3' alt="" />
                                <img src={app2} alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='footer-back-img '>
                <div className='container d-flex justify-content-between align-items-center'>
                    <p className='text-muted'>© All Rights Reserved. DeliTaste 2020</p>
                    <div className=" d-flex justify-content-end pe-4 icons px-3 ">
                        <p className='text-white'> Find Us : </p>
                        <p><FontAwesomeIcon icon={faFacebook} /></p>
                        <p><FontAwesomeIcon icon={faYoutube} /></p>
                        <p><FontAwesomeIcon icon={faTwitter} /></p>
                        <p><FontAwesomeIcon icon={faInstagram} /></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;