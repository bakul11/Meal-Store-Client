import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingOrder from '../../BookingOrder/BookingOrder';

const FoodDetails = () => {
    const { id } = useParams();
    const [food, setFood] = useState({});
  
    useEffect(() => {
        const url = `http://localhost:5000/singleFood/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])


    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }



    return (
        <div className='container mt-5 mb-5'>
            <div className="row gy-5">
                <div className="col-lg-6 col-md-6">
                    <div className="logo">
                        <img src={ food?.photo } alt={ food?.name } className='img-fluid' />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="logo mt-5">
                        <div className="shadow-lg rounded p-4">
                            <h2 className='text-capitalize mb-2'>{ food?.name }</h2>
                            <p>{ food?.discription }</p>
                            <h5 className='mt-2'>Price : ${ food?.price }</h5>
                            <button className="btn btn-warning mt-3" onClick={ openModal }>Confirm Order<FontAwesomeIcon icon={ faAngleDoubleRight } className='ms-2'></FontAwesomeIcon></button>
                            <BookingOrder modalIsOpen={ modalIsOpen } closeModal={ closeModal } food={food}></BookingOrder>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;