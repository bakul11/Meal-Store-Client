import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import Zoom from 'react-reveal/Zoom';
import { useNavigate } from 'react-router-dom';

const FoodCart = ({ food }) => {
    const { name, price, photo,_id } = food;

    //Handle Order 
    const navigate = useNavigate();
    const handleOrderBuy = () => {
        navigate(`/details/${_id}`);
    }



    return (
        <div className='col-lg-4 col-md-6 col-sm-6 text-center' style={ { fontFamily: 'Courgette' } }>
            <div className="shadow-lg pb-3 rounded">
                <Zoom>
                    <img src={ photo } alt={ name } style={ { height: '190px', width: '200px' } } />
                    <h3 className='text-capitalize mt-2 mb-2 fs-5' style={ { fontFamily: 'Courgette' } }>{ name }</h3>
                    <h5 className='text-danger mb-2 fst-italic'>${ price }</h5>
                    <button className="fw-bold btn btn-primary" style={ { background: '#dc8a35', fontFamily: 'Courgette' } } onClick={ handleOrderBuy }>Order Now <FontAwesomeIcon icon={ faAngleDoubleRight }></FontAwesomeIcon></button>
                </Zoom>
            </div>
        </div>
    );
};

export default FoodCart;