import { Link } from "react-router-dom";
import userPhoto from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Providers/Providers";


const Navbar = () => {
  const {user , logout} = useContext(AuthContext)
  if(user){
    console.log(user)
  }
  const handleLogout = () => {
    logout()
    .then ()
    .catch(err => { })
  }
  const options = <>
    <li> <Link to="/">Home</Link> </li>
    <li> <Link to="/instructors">Instructors</Link> </li>
    <li> <Link to="/classes">Classes</Link> </li>
    {
      user && <li> <Link to="/dashboard/selectedClass">Dashboard</Link> </li>
    }
  </>
  return (
    <div className="navbar   bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {options}
          </ul>
        </div>
        <a >Cricket World</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {options}
        </ul>
      </div>
      <div className="navbar-end  ">
        <div className="flex gap-5">
          <div>
             {
              user ? <button onClick={handleLogout}> <Link to="/login">Log Out</Link> </button>  : <button> <Link to="/login">Login</Link> </button> 
             }
          </div>
          <div>
            {
              user? <img className="w-[30px] h-[30px] rounded-md" src={user.photoURL} alt="" /> : <img className="w-[30px] h-[30px] rounded-md" src={userPhoto} alt="" />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;