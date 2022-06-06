import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import Slide from 'react-reveal/Slide';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const photo_screet_key = '92f1b0b325d1cb1274913bccc98c934c';

    const navigate = useNavigate();


    //Get all data
    const onSubmit = data => {
        // console.log(data);
        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${photo_screet_key}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const getImage = result.data.url;
                    const addFood = {
                        name: data.name,
                        price: data.price,
                        discription: data.discription,
                        photo: getImage
                    }
                    //send Data In Server 
                    fetch('https://floating-dusk-16413.herokuapp.com/allFood', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(addFood)
                    })
                        .then(res => res.json())
                        .then(data => {
                            navigate('/');
                            swal('Food Added Success', 'Your Foood added is Successfully Done', 'success');

                        })

                }
            })

    }


    return (
        <div className='container mt-5 mb-5'>
            <h2 className='text-center mb-5'>Please Add Your Product</h2>
            <div className="row">
                <Slide right>
                    <div className="col-lg-6 mx-auto shadow-lg p-4">
                        <form onSubmit={ handleSubmit(onSubmit) }>
                            <div className="row gy-2">
                                <div className="col-lg-12">
                                    <input { ...register("name", { required: true }) } className='form-control' type='text' placeholder='Food Name' />
                                    { errors.name && <span className='text-danger mt-2'>Food Name is required</span> }
                                </div>
                                <div className="col-lg-12">
                                    <input { ...register("price", { required: true }) } className='form-control' type='number' placeholder='Price' />
                                    { errors.price && <span className='text-danger mt-2'>Price is required</span> }
                                </div>
                                <div className="col-lg-12">
                                    <textarea { ...register("discription", { required: true }) } className='form-control' type='number' placeholder='Discription' />
                                    { errors.discription && <span className='text-danger mt-2'>Discription is required</span> }
                                </div>
                                <div className="col-lg-12">
                                    <input { ...register("photo", { required: true }) } className='form-control' type='file' placeholder='Price' />
                                    { errors.photo && <span className='text-danger mt-2'>Photo is required</span> }
                                </div>
                                <div className="col-lg-12">
                                    <input type="submit" className='btn btn-success mt-3' value='Add Product' />
                                </div>
                            </div>




                        </form>
                    </div>
                </Slide>
            </div>

        </div>
    );
};

export default AddProduct;