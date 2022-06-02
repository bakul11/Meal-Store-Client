import { faEnvelope, faEnvelopeOpen, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import contact from '../../images/cusotmer.jpg';

const Contact = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div className="row">
                <div className="col-lg-9 mx-auto shadow-lg">
                    <h2 className='text-center mt-2 mb-5 fs-1' style={ { fontFamily: 'Courgette' } }>Contact with us</h2>
                    <div className="row">
                        <div className="col-lg-6">
                           <ul>
                                <li><FontAwesomeIcon icon={ faEnvelopeOpen } className='me-2'></FontAwesomeIcon><span className='text-primary'>Official Email </span>: mealstore12@gmail.com</li>
                                <li className='mt-2 mb-2'><FontAwesomeIcon icon={ faEnvelope } className='me-2'></FontAwesomeIcon><span className='text-primary'>Support Team </span>: mealsupportteam@gmail.com</li>
                                <li><FontAwesomeIcon icon={ faPhoneAlt } className='me-2'></FontAwesomeIcon><span className='text-primary'>Phone </span> : 01791860562</li>
                           </ul>
                        </div>
                        <div className="col-lg-6">
                            <img src={ contact } alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;