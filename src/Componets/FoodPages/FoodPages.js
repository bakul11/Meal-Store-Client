import React from 'react';
import loadingLogo from '../../images/lodingLogo.gif';
import useFood from '../Hooks/useFood';
import FoodPageCart from './FoodPageCart';

const FoodPages = () => {
    const [food, setFood, loader] = useFood();
    const loadingMessage = <img src={ loadingLogo } alt='loading...' style={ { height: '80px', width: '80px' } }></img>
    return (
        <div className='container mt-5 mb-5'>
            <div className="row gy-5 mt-5">
                {
                    food.map(food => <FoodPageCart food={ food } key={ food.name }></FoodPageCart>)
                }
            </div>
            <div className='text-center mt-5'>
                {
                    loader && loadingMessage
                }
            </div>
        </div>
    );
};

export default FoodPages;