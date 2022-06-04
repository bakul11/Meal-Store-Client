import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'; 
import { Link } from 'react-router-dom';
import Logo from '../.././images/401.jpg'

const NoMatch = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div className="div">
                <img src={ Logo } alt='404 logo' className='img-fluid d-block mx-auto'></img>
           </div>
            <div className="HomePage text-center">
                <button className="btn btn-success mt-2 text-light"> <Link to='/' className='text-light'>Please Go to HomePages <FontAwesomeIcon icon={ faAngleDoubleRight }></FontAwesomeIcon></Link></button>
            </div>
            
        </div>
    );
};

export default NoMatch;