/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/Providers';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PopularCards = ({ allClasses }) => {
    const { className, instructorEmail, instructorName, price, availableSeats, classImage } = allClasses;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [btnDisable, setBtnDisable] = useState(false)


    const handleSelectClass = ({ allClasses }) => {
        if (user) {
            const studentSingleClass = { className, instructorEmail, instructorName, price, availableSeats, classImage }
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
                <figure><img src={classImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{instructorName}</h2>
                    <p className='text-left' >Topic : {className}</p>
                    <p className='text-left' >Seat : {availableSeats}</p>
                    <p className='text-left' >Price : ${price}</p>
                    <p className='text-left' >Contact : {instructorEmail}</p>
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