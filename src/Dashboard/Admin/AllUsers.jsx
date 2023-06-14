import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Badge, Button, Mask, Table } from 'react-daisyui';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const { data, refetch } = useQuery(["users"], async () => {
        const res = await fetch("http://localhost:5000/users")
        return res.json()

    }
    )

    const handleMakeAdmin = (item) => {
        console.log(item, item.id)
        fetch(`http://localhost:5000/users/admin/${item._id}`, {
            method: "PATCH"
        })

            .then(res => res.json())
            .then(Userdata => {
                refetch()
                console.log(Userdata)
                if (Userdata.modifiedCount) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${item.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeinstructor = (item) => {
        console.log(item, item.id)
        fetch(`http://localhost:5000/users/instructor/${item._id}`, {
            method: "PATCH"
        })

            .then(res => res.json())
            .then(Userdata => {
                refetch()
                console.log(Userdata)
                if (Userdata.modifiedCount) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${item.name} is instructor now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>

            <div className='overflow-x-auto'>
                <h2 className='text-4xl my-10 font-serif'>Manage Users</h2>
                <Table className="rounded-box">
                    <Table.Head>

                        <span>#</span>
                        <span>Name</span>
                        <span>Email</span>
                        <span>Status</span>
                        {/* <span>Action</span> */}
                        <span />
                    </Table.Head>

                    <Table.Body>
                        {
                            data?.map((item, index) => <Table.Row
                                key={item._id}

                            >
                                <div>{index + 1}</div>
                                <div className="flex items-center space-x-3 truncate">
                                    <Mask
                                        className='h-[40px] w-[40px]'
                                        variant="squircle"
                                        src={item.url}
                                    />
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                    </div>
                                </div>
                                <div>
                                    <Badge color="ghost" size="sm">
                                        {item.email}
                                    </Badge>
                                </div>
                                <div className='flex gap-1'>
                                    <div>
                                        {
                                            item.role === "admin" ? <Button className=' btn-sm  '>Admin </Button> : <Button className='bg-green-200   btn-sm rounded' onClick={() => handleMakeAdmin(item)}>Make Admin</Button>
                                        }
                                    </div>
                                    {
                                        item.role === "instructor" ? <Button className='bg-green-200 btn-sm rounded '>instructor</Button> : <Button className='bg-green-200   btn-sm rounded' onClick={() => { handleMakeinstructor(item) }}>Make instructor</Button>
                                    }
                                </div>
                                {/* <Button className='bg-red-400 btn-sm text-white'>
                                    Delete
                                </Button> */}
                            </Table.Row>
                            )
                        }

                    </Table.Body>
                </Table>
            </div>



        </div>
    );
};

export default AllUsers;