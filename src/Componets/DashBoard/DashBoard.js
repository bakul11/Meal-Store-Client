import { faPlus, faShoppingCart, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../Firebase/FirebaseConfig';
import useAdmin from '../Hooks/useAdmin';
import './DashBoard.css'

const DashBoard = () => {
    const [user, loading, error] = useAuthState(auth);
    
    const [admin] = useAdmin(user);

    return (
        <div className='dashboard'>
            <div className="row">
                <div className="col-lg-3">
                    <ul className='mt-5'>
                        <li className="nav-item">
                           <NavLink className="nav-link ms-5 text-dark" aria-current="page" to="/dashboard"><FontAwesomeIcon icon={ faShoppingCart } className='me-2'></FontAwesomeIcon>My Order</NavLink>
                        </li>
                        <li className="nav-item">
                            {
                                admin &&<NavLink className="nav-link ms-5 text-dark" aria-current="page" to="/dashboard/addproduct"><FontAwesomeIcon icon={ faPlus } className='me-2'></FontAwesomeIcon>Add Product</NavLink>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                admin &&<NavLink className="nav-link ms-5 text-dark" aria-current="page" to="/dashboard/allUser"> <FontAwesomeIcon icon={ faUser } className='me-2'></FontAwesomeIcon> All User</NavLink>
                           }
                        </li>
                        <li className="nav-item">
                            {
                                admin && <NavLink className="nav-link ms-5 text-dark" aria-current="page" to="/dashboard/allBooking"> <FontAwesomeIcon icon={ faUserGroup } className='me-2'></FontAwesomeIcon> All Booking</NavLink>
                            }
                        </li>
                    </ul>
                </div>
                <div className="col-lg-9 pb-5" style={ { background:'#e9e9e9'}}>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;