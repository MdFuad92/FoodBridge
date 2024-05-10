import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <>
         <li ><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/available'>Available Foods</NavLink></li>
        <li><NavLink to='/add'>Add Food</NavLink></li>
        <li><NavLink to='/manage'>Manage My food</NavLink></li>
        <li><NavLink to='/request'>My Food Request</NavLink></li>
    </>
    return (
        <div className="navbar bg-lime-500 h-28">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <div className="navbar-center pl-10 hidden lg:flex">
    <ul className="menu menu-horizontal  text-base  font-medium text-white  px-1">
     {links}
    </ul>
  </div>
  </div>
 
  <div className="navbar-end space-x-3">
   <Link to='/login'> <button className="btn">Login</button></Link>
    <button className="btn">Signup</button>

  </div>
</div>
    );
};

export default Navbar;