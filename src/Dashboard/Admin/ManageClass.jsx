import React, { useState } from 'react';
import InstructorClass from '../../Client/Hooks/InstructorClass';
import { Button, Input, Mask, Modal, Table } from 'react-daisyui';
import Swal from 'sweetalert2';

const ManageClass = () => {
    const [approvedDisable, setApprovedDisable] = useState(false);
    const [data, isLoading, refetch] = InstructorClass();
    const handleApproved = (data) => {
        console.log("approved", data)
        fetch(`http://localhost:5000/classes/approved/${data._id}`, {
            method: "PATCH"
        })

            .then(res => res.json())
            .then(Userdata => {

                console.log(Userdata)
                if (Userdata.modifiedCount) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `Approved now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                refetch()
                setApprovedDisable(true)
            })
    }
    const handleDeny = (data) => {
        console.log("approved", data)
        fetch(`http://localhost:5000/classes/deny/${data._id}`, {
            method: "PATCH"
        })

            .then(res => res.json())
            .then(Userdata => {

                console.log(Userdata)
                if (Userdata.modifiedCount) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `Deny Your class`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                refetch()
                setApprovedDisable(true)
            })
    }

    const toggleVisible = (data) => {

    }




    return (
        <div className='overflow-x-auto'>
            <h2 className='text-4xl my-10 font-serif'>Manage Class</h2>
            <Table className="rounded-box">
                <Table.Head>
                    <span>Name</span>
                    <span>Price </span>
                    <span>Seat</span>
                    <span>Status</span>
                    <span>Action</span>
                    <span>Feedback</span>
                </Table.Head>

                <Table.Body>
                    {
                        data?.map(data =>

                            <Table.Row
                                key={data._id}
                            >

                                <div className="flex items-center space-x-3 truncate">
                                    <Mask
                                        className='h-[40px] w-[40px]'
                                        variant="squircle"
                                        src={data.url}
                                    />
                                    <div>
                                        <div className="font-bold">{data.instructor}</div>
                                        <div className="text-sm opacity-50">{data.email}</div>
                                    </div>
                                </div>
                                <div>
                                    $ {data.price}
                                </div>
                                <div>{data.seat}</div>
                                <div>
                                    <p>{data.role}</p>
                                </div>
                                <div className='flex gap-2'>
                                    <button className="btn btn-outline btn-success btn-sm" disabled={approvedDisable} onClick={() => handleApproved(data)}>Approved</button>
                                    <button className="btn btn-outline btn-info btn-sm" disabled={approvedDisable} onClick={() => handleDeny(data)} >Deny</button>
                                </div>
                                <div>
                                    <div className="flex-col w-full  component-preview  items-center justify-center gap-2 font-sans">
                                        <Input className='h-[30px] my-2' />
                                        <button className="btn btn-outline btn-warning btn-sm" onClick={() => toggleVisible(data)}>Feedback</button>
                                    </div>
                                    
                                </div>
                            </Table.Row>

                        )
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default ManageClass;