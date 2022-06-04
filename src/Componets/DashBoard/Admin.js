import React, { useState, useEffect } from 'react';
import AdminRow from './AdminRow';


const Admin = () => {
    const [admin, setAdmin] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/allUser', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAdmin(data)
            })
    }, [])


    

    return (
        <div className='container card mt-5'>
            <h2 className='text-center pt-4 pb-4'>Total Admin User List : { admin.length }</h2>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className='text-center bg-success text-light '>
                        <tr className='fw-normal'>
                            <th>Serial No.</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            admin?.map((singleAdmin, index) =><AdminRow key={singleAdmin._id} singleAdmin={singleAdmin} index={index} admin={admin} setAdmin={setAdmin}></AdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;