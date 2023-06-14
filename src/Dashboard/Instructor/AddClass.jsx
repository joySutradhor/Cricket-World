import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Client/Providers/Providers';

const AddClass = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const {user} = useContext(AuthContext) ;
    console.log(user.displayName)
    const onSubmit = (data) => {
        const saveUser = {name: data.name , url : data.photUrl , instructor : data.instructorName , price : data.price , seat : data.seats ,  email : data.email  , role : "pending"}
        fetch("http://localhost:5000/classes" , {
            method : "POST" , 
            headers : {
                "content-type" : "application/json"
            }, 
            body : JSON.stringify(saveUser)
        })

        reset() 
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your Class added',
            showConfirmButton: false,
            timer: 1500
          })

    };
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add a Class now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body w-full" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class name</span>
                                </label>
                                <input type="text" placeholder="Name" {...register("name")} className="input input-bordered" />
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo Url" {...register("photUrl")} className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor name</span>
                                </label>
                                <input type="text" defaultValue={user.displayName}  readOnly placeholder="instructorName" {...register("instructorName")} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" defaultValue={user.email}  readOnly placeholder="email" {...register("email", { required: true })} className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seats</span>
                                </label>
                                <input type="number" placeholder="Available Seats" {...register("seats", { required: true })} className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" placeholder="Price" {...register("price", { required: true })} className="input input-bordered" />

                            </div>
                            <div>
                                <button className="btn btn-success my-2">Add a Class</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClass;