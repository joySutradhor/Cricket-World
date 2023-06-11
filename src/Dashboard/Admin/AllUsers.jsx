import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Badge, Button, Mask, Table } from 'react-daisyui';

const AllUsers = () => {
    const { data, refetch } = useQuery(["users"], async () => {
        const res = await fetch("http://localhost:5000/users")
        return res.json()

    }
    )
    console.log(data)
    return (
        <div>

            <div className='overflow-x-auto'>
                <Table className="rounded-box">
                    <Table.Head>

                        <span>#</span>
                        <span>Name</span>
                        <span>Email</span>
                        <span>Status</span>
                        <span>Action</span>
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
                                            item.role === "admin" ? <Button className='bg-green-200 btn-sm rounded '>Admin</Button> : <Button className='bg-green-200   btn-sm rounded'>Make Admin</Button>
                                        }
                                    </div>
                                    {
                                        item.role === "instructor" ? <Button className='bg-green-200 btn-sm rounded '>instructor</Button> : <Button className='bg-green-200   btn-sm rounded'>Make instructor</Button>
                                    }
                                </div>
                                <Button className='bg-red-400 btn-sm text-white'>
                                    Delete
                                </Button>
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