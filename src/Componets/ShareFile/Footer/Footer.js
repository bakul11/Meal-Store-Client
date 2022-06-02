import React from 'react';
import { Link } from 'react-router-dom';
import { faFacebookF, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'
import logo from '../../../images/res3.png'




const Footer = () => {
    const date = new Date();
    const fullDate = date.getFullYear();
    return (
        <div className="footer">
            <div className="footer-section">
                <footer className="footer ms-5 me-5 pb-5">
                    <div className="row gy-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="footet-item">
                                <Link className="navbar-brand fw-bold fs-2 text-light" to="/" style={ { fontFamily: 'Courgette' } }><img src={ logo } alt='mobile' className='img-fluid me-2' style={ { height: '50px', width: '50px' } }></img>Meal Store</Link>
                                <p className='text-secondary mt-2 fs-6'>it's not just about bringing you good food form restaurrents,we deliver you experience 100% enveirmoment friendly packaging packed with love Packed With Love we delivery the best </p>
                                <div className="social-link">
                                    <ul className='d-flex align-items-center mt-2'>
                                        <li className='m-0 text-light' style={ { cursor: 'pointer' } }><a href="https://www.facebook.com/bakulray.ajoy" target='_blank'><FontAwesomeIcon icon={ faFacebookF }></FontAwesomeIcon></a></li>
                                        <li className='ms-4 text-light' style={ { cursor: 'pointer' } }><a href="https://www.facebook.com/bakulray.ajoy" target='_blank'><FontAwesomeIcon icon={ faGithub }></FontAwesomeIcon></a></li>
                                        <li className='ms-4 text-light' style={ { cursor: 'pointer' } }><a href="https://www.facebook.com/bakulray.ajoy" target='_blank'><FontAwesomeIcon icon={ faGoogle }></FontAwesomeIcon></a></li>
                                        <li className='ms-4 text-light' style={ { cursor: 'pointer' } }><a href="https://www.facebook.com/bakulray.ajoy" target='_blank'><FontAwesomeIcon icon={ faTwitter }></FontAwesomeIcon></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footet-item">
                                <h3 className=' text-capitalize fs-6 text-light'>Our Services</h3>
                                <ul className='text-capitalize fs-6'>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Best food</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>restaurents</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Beef Chicken</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Kashi Gost</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Morgi Gosto</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Masala Chicken</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footet-item">
                                <h3 className='text-capitalize fs-6 text-light'>Menu Items</h3>
                                <ul className='text-capitalize fs-6'>

                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Best food</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>restaurents</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Beef Chicken</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Kashi Gost</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Morgi Gosto</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Masala Chicken</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footet-item">
                                <h3 className=' text-capitalize fs-6  text-light'>Contact with us</h3>

                                <address className='mt-3'>
                                    <p className='text-secondary m-2'>Email : mealstore12@gmail.com</p>
                                    <p className='text-secondary m-2'>Mobile : +8801791860562</p>
                                    <p className='text-secondary m-2'>Phone : +53286852333586</p>
                                </address>
                                <form>
                                    <div className="subscribe-btn mt-3">
                                        <input type="email" name="email" id="" className='sub-input w-100 d-block' placeholder='Email address' required />
                                        <input type="submit" className='sub-btn  text-capitalize fs-6 fs-6' value="subscribe" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer >
            </div >
            <div className="copyright text-center mb-4 mt-4">
                <p className='text-secondary' style={ { fontWeight: '500' } }>Copyright © meal store { fullDate } all rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;