import React, { useState } from 'react';
import { Badge, Button, Checkbox, Mask, Table } from 'react-daisyui';
import InstructorClass from '../../Client/Hooks/InstructorClass';

const MyClass = () => {
  
  const [data , isLoading , refetch] = InstructorClass() ;
  console.log(data)


  return (
    <div className='overflow-x-auto'>
      <Table className="rounded-box">
        <Table.Head>
          <span>Name</span>
          <span>Price </span>
          <span>Seat</span>
          <span>Status</span>
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
                <div>
                  <p>{data.feedback ? data.feedback : "No feedback now"}</p>
                </div>
              </Table.Row>

            )
          }
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyClass;