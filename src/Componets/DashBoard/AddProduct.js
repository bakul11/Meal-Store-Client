import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    //Get all data
    const onSubmit = data => {
        console.log(data);
    }


    return (
        <div className='mt-5 mb-5'>
            <h2 className='text-center mb-5'>Please Add Your Product</h2>
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <form onSubmit={ handleSubmit(onSubmit) }>
                        <div className="row gy-2">
                            <div className="col-lg-12">
                                <input { ...register("name", { required: true }) } className='form-control' type='text' placeholder='Food Name'/>
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
                                <input type="submit" className='btn btn-success mt-3' value='Add Product'/>
                            </div>
                        </div>




                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;