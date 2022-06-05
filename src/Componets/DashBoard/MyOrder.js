import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Slide from 'react-reveal/Slide';
import swal from 'sweetalert';
import auth from '../Firebase/FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyOrder = () => {
    const [order, setOrder] = useState([]);
    const [user, loading, error] = useAuthState(auth);


    const email = user?.email;
    const navigate = useNavigate();

    useEffect(() => {
        const url = `https://dry-scrubland-18881.herokuapp.com/myOrder?email=${email}`;
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    navigate('/');
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                }
                return res.json()
            })
            .then(data => setOrder(data))
    }, [user])





    //Delete Order 
    const handleDeleteOrder = id => {
        const deleteOrder = window.confirm('Do You Want Delete This Product');

        if (deleteOrder) {
            const url = `https://dry-scrubland-18881.herokuapp.com/deleteOrder/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    const remaingOrder = order.filter(order => order._id !== id);
                    setOrder(remaingOrder);
                    swal('Order Deleted Success', 'Your Order Deleted', 'success');
                })
        }
    }





    return (
        <div className='container card mt-5'>
            <Slide right>
                <h2 className='text-center pt-4 pb-4'>Total Your Oders: { order.length }</h2>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className='text-center bg-success text-light '>
                            <tr className='fw-normal'>
                                <th className='p-2'>Serial</th>
                                <th className='p-2'>UserName</th>
                                <th className='p-2'>Food Name</th>
                                <th className='p-2'>Address</th>
                                <th className='p-2'>Email</th>
                                <th className='p-2'>Mobile</th>
                                <th className='p-2'>Price</th>
                                <th className='p-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center text-secondary'>
                            {
                                order.map((order, index) =>

                                    <tr key={ order._id }>
                                        <td className='pt-2 pb-2 ps-1 pe-1 '>{ index + 1 }</td>
                                        <td className='pt-2 pb-2 ps-1 pe-1'>{ order?.userName }</td>
                                        <td className='pt-2 pb-2 ps-1 pe-1'>{ order?.name }</td>
                                        <td className='pt-2 pb-2 ps-1 pe-1'>{ order?.address }</td>
                                        <td className='pt-2 pb-2 ps-1 pe-1 '>{ order?.email }</td>
                                        <td className='pt-2 pb-2 ps-1 pe-1'>{ order?.phone }</td>
                                        <td className='pt-2 pb-2 ps-1 pe-1'>{ order?.price }</td>
                                        <td className='pt-2 pb-2 ps-1 pe-1'><FontAwesomeIcon icon={ faTrashAlt } className='text-danger' style={ { cursor: 'pointer' } } onClick={ () => handleDeleteOrder(order?._id) }></FontAwesomeIcon></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </Slide>
        </div>
    );
};

export default MyOrder;