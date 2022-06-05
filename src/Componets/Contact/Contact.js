import { faEnvelope, faEnvelopeOpen, faPhone, faPhoneAlt, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import contact from '../../images/cusotmer.jpg';
import Slide from 'react-reveal/Slide';
import ContactCard from './ContactCard';


const contactData = [
    {
        "name": "Booking Sals",
        "photo": faEnvelope,
        "discription": "100% we'd love to talk how we can work togethers",
        "btn":"Booking"
    },
    {
        "name": "Help & Support",
        "photo": faPhone,
        "discription": "we here help with any questions or support with us",
        "btn": "Help"
    },
    {
        "name": "Support Team",
        "photo": faUserCheck,
        "discription": "you can support our team any time any kind of question",
        "btn": "Support"
    },
]

const Contact = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h2 className='text-center mt-2 mb-5 fs-1' style={ { fontFamily: 'Courgette' } }>Contact with us</h2>
            <div className="contact-details row gy-5">
                {
                    contactData.map(contact => <ContactCard key={ contact.name } contact={ contact }></ContactCard>)
                }
            </div>
            <div className="row">
                <div className="contact">
                    <div className="row gy-5 mt-5">
                        <div className="col-lg-6 col-md-6">
                            <Slide left>
                                <div className="cantact-content" style={{marginTop:'130px'}}>
                                    <ul>
                                        <li><FontAwesomeIcon icon={ faEnvelopeOpen } className='me-2'></FontAwesomeIcon><span className='text-primary'>Official Email </span>: mealstore12@gmail.com</li>
                                        <li className='mt-2 mb-2'><FontAwesomeIcon icon={ faEnvelope } className='me-2'></FontAwesomeIcon><span className='text-primary'>Support Team </span>: mealsupportteam@gmail.com</li>
                                        <li><FontAwesomeIcon icon={ faPhoneAlt } className='me-2'></FontAwesomeIcon><span className='text-primary'>Phone </span> : 01791860562</li>
                                    </ul>
                              </div>
                            </Slide>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <Slide right>
                                <img src={ contact } alt="" />
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;