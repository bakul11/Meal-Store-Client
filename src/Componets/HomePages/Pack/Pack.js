import React, { useEffect, useState } from 'react';
import { Slide } from 'react-reveal';
import PackCart from '../PackCart/PackCart';

const Pack = () => {
    const [food, setFood] = useState([]);

    useEffect(() => {
        fetch('pack.json')
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])

    return (
        <section>
            <div className='container' style={ { marginTop: '150px' } }>
                <div className="title">
                    <Slide left>
                        <div className="food-content text-center">
                            <h2 className='fs-2 text-capitalize' style={ { fontFamily: 'Courgette' } }>how <span style={ { color: '#dc8a35', fontFamily: 'Courgette' } }>we serve</span> you</h2>
                        </div>
                    </Slide>
                </div>
                <div className="row gy-5 mt-5">
                    {
                        food.map(food => <PackCart food={ food } key={ food.name }></PackCart>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Pack;