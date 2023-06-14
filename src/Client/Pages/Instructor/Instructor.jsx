import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';

const Instructor = () => {
    const { data, refetch } = useQuery(["/users/instructorData"], async () => {
        const res = await fetch("http://localhost:5000/users/instructorData")
        return res.json()

    })
    console.log(data)
    return (
        <div>
            <h2 className='text-3xl text-slate-600'>Our Instructors</h2>
           <div className='grid grid-cols-3 gap-5 py-10'>
           {
                data?.map(card =>
                 <div className="card card-compact w-96 bg-base-100 shadow-xl" key={card._id}>
                <figure><img src={card.url} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{card.name}</h2>
                  <p className='text-left'>{card.email}</p>
                </div>
              </div>)
            }
           </div>
        </div>
    );
};

export default Instructor;