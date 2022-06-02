import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../Firebase/FirebaseConfig';
import './Navbar.css'
import logo from '../../../images/res3.png'

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    //Sign Out Option 
    const navigate = useNavigate();
    const handleLogOut = () => {
        navigate('/');
        signOut(auth);
        swal('Logout Done', 'your account logout success', 'success');
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-lg pt-2 pb-2">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-2 text-light" to="/" style={ { fontFamily: 'Courgette' } }><img src={ logo } alt='mobile' className='img-fluid me-2' style={ { height: '50px', width: '50px' } }></img>Meal Store</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link ms-5" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ms-5" to="/foods">Foods</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ms-5" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ms-5" to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item ms-5 mt-2">
                            {
                                user?.uid ? <p className='logout' onClick={ handleLogOut } style={ { fontWeight: '500', cursor: 'pointer' } }>LogOut</p> : <NavLink className="nav-NavLink text-light" to="/login" style={ { height: '2px', width: '100px', borderRadius: '50px', border: '1px solid white', padding: '5px 10px' } }>Login</NavLink>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                user ? <img src={ user?.photoURL } alt='User' className='img-fluid me-2 nav-link ms-5 rounded-circle' style={ { height: '50px', width: '50px' } }></img> : ''
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;