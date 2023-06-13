import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Client/Providers/Providers';


const Dashboard = () => {
    const {user} = useContext(AuthContext)
    const [isAdmin , setAdmin] = useState("")
    fetch(`http://localhost:5000/users/role/${user.email}`)
    .then(res => res.json())
    .then(data =>{
        setAdmin(data.role)
    })
    
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {
                            isAdmin === 'admin' && <>
                                <li><a>Manage Classes</a></li>
                                <li><Link to="allUsers">Manage Users</Link></li>
                            </>  
                        }
                        {
                            isAdmin === "instructor" && <>
                            <p>Add a Class</p>
                            <p>My Classes</p>
                            </>
                        }
                        {
                            isAdmin === "student" && <>
                            
                            <p>studen</p>
                            <p>done</p>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard; 