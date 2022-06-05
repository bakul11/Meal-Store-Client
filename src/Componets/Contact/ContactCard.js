import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Zoom } from 'react-reveal';
import swal from 'sweetalert';
// import './ContactCard.css'

const ContactCard = ({ contact }) => {
    const { name, photo, discription, btn } = contact;

    const handleSupport = () => {
        swal('Please Wait', 'Our support team contact with you', 'success');
    }

    return (
        <div className='col-lg-4 col-md-4 col-sm-12'>
            <Zoom>
                <div className="contact shadow-lg p-4">

                    <div className="contact-items text-center mb-2 pt-3">
                        <FontAwesomeIcon icon={ photo } className='fs-1 text-center text-primary'></FontAwesomeIcon>
                    </div>
                    <div className="title-content text-center mt-3">
                        <h3 className='fs-5 mb-2'>{ name }</h3>
                        <p>{ discription }</p>
                        <button className="btn btn-primary mt-3" onClick={ handleSupport }>{ btn }<FontAwesomeIcon icon={ faAngleDoubleRight } className='ms-2'></FontAwesomeIcon></button>
                    </div>

                </div>
            </Zoom>
        </div>
    );
};

export default ContactCard;