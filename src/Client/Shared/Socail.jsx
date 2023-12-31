import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Providers/Providers';
import { useLocation, useNavigate } from 'react-router-dom';

const Socail = () => {
    const { handleGoogle, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const google = () => {
        handleGoogle()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)

                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, url: loggedUser.photUrl  }
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(user => {
                        console.log(user, "user create")
                        navigate(from, { replace: true })
                    })


            })


    }
    return (
        <div>
            <div className='flex justify-center items-center text-2xl'> <button onClick={google}><FaGoogle></FaGoogle></button> </div>
        </div>
    );
};

export default Socail;