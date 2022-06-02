import React from 'react';
import brand from '../../../images/brand2.png'
import Slide from 'react-reveal/Slide';
import './HeaderSlide.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faCoffee, faShoppingBag} from '@fortawesome/free-solid-svg-icons'

const HeaderSlide = () => {
    return (
        <div className='container' style={ { marginTop: '120px' } }>
            <div className="row gy-5">
                <div className="heading-title col-lg-4">
                    <Slide right>
                        <h2 className='fs-1'>Fastest <br /> <span className='text'> Delivery & </span> <br /> Easy <span className='text'>Pickup</span></h2>
                        <p style={ { fontFamily: 'Courgette' } } className='fs-5'>it's not just about bringing you good food form restaurrents,we deliver you experience</p>
                        <div className="header-btn mt-2">
                            <button className="btn btn-warning fw-bold text-light" style={ { borderRadius: '50px', background: '#cf6920' } }>Order Now<FontAwesomeIcon icon={ faAngleDoubleRight } className='ms-2'></FontAwesomeIcon></button>
                        </div>
                    </Slide>
                </div>
                <div className="col-lg-5">
                    <Slide left>
                        <img src={ brand } alt="brandLogo" />
                    </Slide>
                </div>
                <div className="heading-title col-lg-3">
                    <Slide left>
                        <div className="sidebar-title d-flex align-items-center">
                            <div className="slide-logo me-4">
                                <FontAwesomeIcon icon={ faShoppingBag }></FontAwesomeIcon>
                            </div>
                            <div className="slide-logo">
                                <h2 className='text-capitalize'>fast Delivery</h2>
                                <p style={ { fontFamily: 'Courgette' } } className='fs-5'>promise to delivery within 30 mins</p>
                            </div>
                        </div>
                        <div className="sidebar-title d-flex align-items-center mt-4">
                            <div className="slide-logo me-4">
                                <FontAwesomeIcon icon={ faCoffee }></FontAwesomeIcon>
                            </div>
                            <div className="slide-logo">
                                <h2 className='text-capitalize'>pick up</h2>
                                <p style={ { fontFamily: 'Courgette' } } className='fs-5'>pickup delivery of your doorstep</p>
                            </div>
                        </div>
                        <div className="sidebar-title d-flex align-items-center mt-4">
                            <div className="slide-logo me-4">
                                <FontAwesomeIcon icon={ faShoppingBag }></FontAwesomeIcon>
                            </div>
                            <div className="slide-logo">
                                <h2 className='text-capitalize'>Dine in</h2>
                                <p style={ { fontFamily: 'Courgette' } } className='fs-5'>enjoy your food frish crispy and hot</p>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default HeaderSlide;