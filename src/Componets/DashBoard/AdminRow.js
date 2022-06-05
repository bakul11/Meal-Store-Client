import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../Firebase/FirebaseConfig';

const AdminRow = ({ singleAdmin, index, admin, setAdmin }) => {
    const { email, role, _id } = singleAdmin;
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();


    console.log(admin);



    //Make Admin user 
    const makeAdmin = () => {
        fetch(`https://dry-scrubland-18881.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    swal("Admin Create Fail", "You haven't access admin", "error");
                    signOut(auth);
                    navigate('/');
                    localStorage.removeItem('accessToken');
                }
                return res.json()
            })
            .then(result => {
                if (result.modifiedCount > 0) {
                    window.location.reload();
                    swal('Admin Created Success', 'admin create successfully Done', 'success');
                }

            })
    }

    //Remove Admin 
    const handleRemoveAdmin = id => {
        const removeConfirmAdmin = window.confirm('Do You Want Delete Admin?');

        if (removeConfirmAdmin) {
            const url = `https://dry-scrubland-18881.herokuapp.com/removeAdmin/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        const remaingBeforeAdmin = admin.filter(admin => admin._id !== id);
                        setAdmin(remaingBeforeAdmin);
                        swal('Admin Deleted Success', 'Your Admin Deleted Successfully Done', 'success');
                    }

                })
        }
    }

    return (
        <tr className='h3 fs-6'>
            <td className='text-center'>{ index + 1 }</td>
            <td className='text-center'>{ email }</td>
            <td className='text-center'> { role !== 'admin' ? <button className="btn btn-primary" onClick={ makeAdmin }>Make Admin</button> : 'already admin' }</td>
            <td className='text-center'><button className="btn btn-danger" onClick={ () => handleRemoveAdmin(_id) }>Remove Admin</button></td>
        </tr>
    );
};

export default AdminRow;