import React from 'react';
import './Deliverybanner.css'
import Logo from '../../../images/res6.png'
import { Slide } from 'react-reveal';

const Deliverybanner = () => {
    return (
        <div className='delivery container-fuild'>
            <Slide right>
            <div className="title">
                <h2 className='text-light fs-1 mb-1'><span style={ { color: '#dc8a35' } }>50%</span>  <img src={ Logo } alt="" style={ { height: '100px', width: '100px' } } /> Discount</h2>
                <h2 className='text-light fs-1'>Fastest food <br /> <span style={ { color: '#dc8a35' } }>Delivery</span> in town</h2>
                </div>
            </Slide>
        </div>
    );
};

export default Deliverybanner;