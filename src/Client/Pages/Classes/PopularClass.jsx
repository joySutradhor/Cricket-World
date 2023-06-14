import React, { useEffect, useState } from 'react';
import PopularCards from './PopularCards';

const PopularClass = () => {
    const [studentClass, setStudentClass] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/classes/approved")
            .then(res => res.json())
            .then(data => setStudentClass(data))
    }, [])
    console.log(studentClass)
    return (
        <div>

            <h2 className='md:py-12 text-2xl font-serif font-bold'>---- Classes ----</h2>

            <div className='grid grid-cols-3 gap-5'>
                {
                    studentClass.map(singleClass => <PopularCards

                        key={singleClass._id}
                        allClasses={singleClass}

                    ></PopularCards>)
                }
            </div>
        </div>
    );
};

export default PopularClass;