/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/Providers';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const PopularCards = ({ allClasses }) => {
    const { className, instructorEmail, instructorName, price, availableSeats, classImage } = allClasses;
    const { user } = useContext(AuthContext) ;
    const navigate = useNavigate() ;
    const handleSelectClass = ({ allClasses }) => {
        if (user) {
            fetch('http://localhost:5000/studentsClass')
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        console.log("Data inserted")
                    }
                })
        }
        else{
            Swal.fire({
                title: 'Please Login Now',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login")
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
                        <button onClick={() => handleSelectClass(allClasses)} className="btn btn-outline btn-success">ADD now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCards;