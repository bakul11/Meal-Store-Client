import React from 'react';
import { Zoom } from 'react-reveal';

const PackCart = ({ food }) => {
    const { name,  photo, discription } = food;
    return (
        <div className='col-lg-4 col-md-4 text-center' style={ { fontFamily: 'Courgette' } }>
            <div className="shadow-sm pb-3">
                <Zoom>
                    <img src={ photo } alt={ name } />
                    <h3 className='text-capitalize mt-2 mb-2 fs-5' style={ { fontFamily: 'Courgette' } }>{ name }</h3>
                    <p className='mb-2 fst-italic fw-bold' style={ { fontFamily: 'Courgette' } }>{ discription }</p>
                </Zoom>
            </div>
        </div>
    );
};

export default PackCart;