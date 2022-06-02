import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Modal from 'react-modal';
import auth from '../Firebase/FirebaseConfig';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const BookingOrder = ({ modalIsOpen, closeModal, food }) => {

    const [user, loading, error] = useAuthState(auth);

    const { register, handleSubmit, formState: { errors } } = useForm();

    // Booking Order 
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <Modal
            isOpen={ modalIsOpen }
            onRequestClose={ closeModal }
            // style={ customStyles }
            contentLabel="Example Modal"
        >
            <div className="row">
                <div className="col-lg-9  p-4 mx-auto">
                    <h2 className='text-center text-capitalize mb-1'>{ food?.name }</h2>
                    <img src={ food?.photo } alt="" style={ { height: '100px', width: '100px' } } className='d-block mx-auto mb-4' />
                    <div className="BookOrderNow">
                        <form onSubmit={ handleSubmit(onSubmit) }>
                            <div className="row gy-2">
                                <div className="col-lg-12">
                                    <input { ...register("userName", { required: true }) } type='text' className='form-control' value={ user?.displayName } />
                                    { errors.userName?.type === 'required' && <span className='text-danger'>Name is required</span> }
                                </div>
                                <div className="col-lg-12">
                                    <input { ...register("email", { required: true }) } type='text' value={ user?.email } className='form-control' readOnly />
                                    { errors.email?.type === 'required' && <span className='text-danger'>Email is required</span> }
                                </div>
                                <div className="col-lg-12">
                                    <input { ...register("name", { required: true }) } type='text' value={ food?.name } className='form-control' readOnly />
                                    { errors.name?.type === 'required' && <span className='text-danger'>Order is required</span> }
                                </div>
                                <div className="col-lg-12">
                                    <input { ...register("price", { required: true }) } type='text' value={ food?.price } className='form-control' readOnly />
                                    { errors.price?.type === 'required' && <span className='text-danger'>Price is required</span> }
                                </div>
                                <div className="col-lg-12">
                                    <input { ...register("phone", { required: true }) } type='number' className='form-control' placeholder='Phone or Mobile' />
                                    { errors.phone?.type === 'required' && <span className='text-danger'>Phone is required</span> }
                                </div>
                                <div className="col-lg-12">
                                    <textarea { ...register("address", { required: true }) } type='text' className='form-control' placeholder='Your Address' />
                                    { errors.address?.type === 'required' && <span className='text-danger'>Address is required</span> }
                                </div>
                            </div>
                            <div className="submitCancel mt-4">
                                <input type="submit" className='btn btn-success' value='Submit Now' />
                                <button onClick={ closeModal } className='btn btn-danger ms-2'>Cancel</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </Modal>
    );
};

export default BookingOrder;