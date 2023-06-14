/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/Providers';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PopularCards = ({ allClasses }) => {
    console.log(allClasses)
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [btnDisable, setBtnDisable] = useState(false)


    const handleSelectClass = ( studentClasses ) => {

        if (user) {
            
           const studentSingleClass = {name : studentClasses.name , email : studentClasses.email , price : studentClasses.price , instructor : studentClasses.instructor , seat : studentClasses.seat , url : studentClasses.url}
            fetch('http://localhost:5000/studentsClass', {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(studentSingleClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setBtnDisable(true)
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        console.log("Data inserted")

                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login Now',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className='pb-12'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={allClasses.url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{allClasses.instructor}</h2>
                    <p className='text-left' >Topic : {allClasses.name}</p>
                    <p className='text-left' >Seat : {allClasses.seat}</p>
                    <p className='text-left' >Price : ${allClasses.price}</p>
                    <p className='text-left' >Contact : {allClasses.email}</p>
                    <div className="card-actions justify-end my-3">
                        <button
                            disabled={btnDisable}
                            onClick={() => handleSelectClass(allClasses)}
                            className="btn btn-outline btn-success" >ADD now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCards;