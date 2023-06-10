import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/Providers';
import Swal from 'sweetalert2';
import Socail from '../../Shared/Socail';


const Login = () => {
    const { register, handleSubmit, formState: { errors } , reset } = useForm();
    const { handleloginUser} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        handleloginUser(data.email , data.password)
        .then(result => {
            const data = result.user;
            console.log(data)
            reset()
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Login Completed',
                showConfirmButton: false,
                timer: 1500
            })
            navigate(from, { replace: true })
        })
    };

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email")} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" {...register("password")} className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <p className='my-5'>New this site ? <Link className='text-indigo-800' to="/register">Register</Link></p>
                        </div>
                        <Socail></Socail>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;