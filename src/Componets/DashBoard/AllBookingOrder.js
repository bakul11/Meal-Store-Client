import React, { useEffect, useState } from 'react';
import { Slide } from 'react-reveal';

const AllBookingOrder = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        const url = `https://floating-dusk-16413.herokuapp.com/allOrder`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    return (
        <div className='container card mt-5'>
            <Slide right>
                <h2 className='text-center pt-4 pb-4'>Total Booking Oders: { order.length }</h2>
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

export default AllBookingOrder;