import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data ) => {
        if(data.password === data.confirmpPassword){
            console.log("valid user")
        }
        else{
            console.log("invalid user")
        }
        console.log(data.password , data.confirmpPassword)
    };

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" {...register("name")} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
                              {errors.email && <span className='text-red-400'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" {...register("password", { 
                                required: true ,
                                minLength : 6 ,
                                pattern : /[A-Z][!@#$%&*]/
                            })} className="input input-bordered" />

                              {errors.password && <span className='text-red-400'>This field is required</span>}
                              {errors.password ?.type === 'minLength' && <p role="alert">Password less then 6 character</p>}
                              {errors.password ?.type === 'pattern' && <p role="alert">Use a Capital latter or special character</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Confirm password" {...register("confirmpPassword", { required: true })} className="input input-bordered" />
                                 {errors.confirmpPassword && <span className='text-red-400'>This field is required</span>}   
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Photo Url" {...register("photUrl")} className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <p className='my-5'>Already account ? <Link className='text-indigo-800' to="/login">Login</Link></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;