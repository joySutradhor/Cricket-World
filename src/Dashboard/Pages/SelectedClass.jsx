import React from 'react';
import StudentClass from '../../Client/Hooks/StudentClass';
import Swal from 'sweetalert2';

const SelectedClass = () => {
    const [data , isLoading , refetch] = StudentClass() ;
    // if(isLoading) {
    //     <h1>Please wait</h1>
    // }

    const handleDlete = (item) => {
        console.log(item)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/studentsClass/${item._id}`, {
                    method : "DELETE"
                })
                .then(res => res.json())
                .then (data => {
                    if(data.deletedCount> 0){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
            }
          })

    }
    console.log(data)
    return (
        <div>
            <div className="overflow-x-auto">
                <div className='font-extralight  flex justify-between px-4'>
                
                    <p>Selected Class : {data?.length}</p>
                </div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Instructor Info</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Pay Now</th>
                        </tr>
                    </thead>
                  {
                    data?.map((item , index) =>                   
                    <tbody 
                    key={item._id}
                    >
                        {/* row 1 */}
                        <tr>
                            <th>
                                {index+1}
                            </th>
                            <th>
                                <p>{item.className}</p>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.classImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.instructorName}</div>
                                        <div className="text-sm opacity-50">{item.instructorEmail}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p>${item.price}</p>
                            </td>
                            <td> <button onClick={() => handleDlete(item)} className="btn btn-error btn-xs">Remove</button> </td>
                            <th>
                                <button className="btn btn-outline btn-accent btn-xs">Pay Now</button>
                            </th>
                        </tr>


                    </tbody>)
                  }


                </table>
            </div>
        </div>
    );
};

export default SelectedClass;