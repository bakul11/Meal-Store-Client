import React, { useState } from 'react';
import FoodCart from '../FoodCart/FoodCart';
import Slide from 'react-reveal/Slide';
import useFood from '../../Hooks/useFood';
import loadingLogo from '../../../images/lodingLogo.gif';

const Food = () => {

    const [food, setFood, loader] = useFood();
    const loadingMessage = <img src={ loadingLogo } alt='loading...' style={ { height: '80px',width:'80px' } }></img>

    return (
        <section>
            <div className='container' style={ { marginTop: '10px' } }>
                <div className="row">
                    <div className="col-lg-6">
                        <Slide left>
                            <div className="food-content">
                                <h2 style={ { fontFamily: 'Courgette' } } className='fs-2 text-capitalize'>our <span style={ { color: '#dc8a35', fontFamily: 'Courgette' } }>best delivered</span><br /> categories</h2>
                            </div>
                        </Slide>
                    </div>
                    <div className="col-lg-6">
                        <Slide right>
                            <div className="food-content">
                                <p style={ { fontFamily: 'Courgette' } } className='fs-5'>it's not just about bringing you good food form restaurrents,we deliver you experience</p>
                            </div>
                        </Slide>
                    </div>
                </div>
                <div className="row gy-5 mt-5">
                    {
                        food.map(food => <FoodCart food={ food } key={ food.name }></FoodCart>)
                    }
                </div>
                <div className='text-center mt-5'>
                    {
                        loader && loadingMessage
                    }
                </div>
            </div>
        </section>
    );
};

export default Food;