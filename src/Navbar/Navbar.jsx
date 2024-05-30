import { useContext } from "react";
import { CiUser } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import logo from '../../src/assets/food-donation.svg'
import { BiSolidDonateHeart } from "react-icons/bi";
import { Fade } from "react-reveal";
import { FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";



const Navbar = () => {
  const [t,i18n] = useTranslation("global")
  const handleChangeLanguage = (lang )=>{
    i18n.changeLanguage(lang)
  
  } 
    const {logOut} = useContext(AuthContext)

    const {user} = useContext(AuthContext)
   
    const handlelogOut = ()=>{
    logOut()
    .then()
    .catch()
   }
   
    const links = <>
         <li ><NavLink className={({isActive})=>isActive?'text-lime-600':'font-normal'} to='/'><span className="hover:text-lime-600 hover:duration-500  ">Home</span></NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'text-lime-600':'font-normal'} to='/available'><span className="hover:text-lime-600 hover:duration-500  ">Available Foods</span></NavLink></li>
       {
        user&&<>
         <li><NavLink className={({isActive})=>isActive?'text-lime-600':'font-normal'} to='/add'><span className="hover:text-lime-600 hover:duration-500  ">Donate Food</span></NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'text-lime-600':'font-normal'} to='/manage'><span className="hover:text-lime-600 hover:duration-500  ">My Foods</span></NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'text-lime-600':'font-normal'} to='/request'><span className="hover:text-lime-600 hover:duration-500  ">My Food Request</span></NavLink></li>
       
        </>
       }
    </>
    return (
        <div className="navbar  mx-auto   flex items-center bg-neutral-950 bg-opacity-90 h-16">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <div className="navbar-center  hidden lg:flex">
    <ul className=" space-x-6 menu-horizontal  text-base  font-medium text-white  px-1">
     {links}
    </ul>
  </div>
  </div>
 
  
 
  <div className="navbar-end items-center ">
  <details className="dropdown">
  <summary className="m-1 btn  "><FaGlobe></FaGlobe></summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={()=>handleChangeLanguage("en")}><a>EN</a></li>
    <li onClick={()=>handleChangeLanguage("fr")}><a>FR</a></li>
   
  </ul>
</details>
  <div className="lg:ml-0 flex items-center mr-20  ">
  <Fade className='' ><BiSolidDonateHeart  className="md:text-4xl text-xl   text-white " /> </Fade>
    <h1 className="font-pacifico lg:text-lg text-white ">FoodBridge</h1>
  </div>
  {
    user ?
    <div className="dropdown dropdown-end">
         <div tabIndex={0} role="button" className="btn  btn-circle avatar  tooltip tooltip-neutral  tooltip-left" data-tip={user.displayName}>
           <div className="w-12 rounded-full">
             <img alt="Tailwind CSS Navbar component" src={user.photoURL || <CiUser /> } />
           </div>
         </div>
         <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
         <li className='hover:bg-neutral hover:text-lime-600 rounded-lg '><a className='text-sm'><span className='text-lg'>Hi,</span>{user.displayName}!</a></li>
           <li>
             <a className="justify-between">
               Profile
               <span className="badge">New</span>
             </a>
           </li>
           <li><a>Settings</a></li>
           <button onClick={handlelogOut}><a>Logout</a></button>
         </ul>
       </div> :
    <div className="space-x-3">
    <Link to='/login'> <button className="text-white  hover:duration-700  hover:text-lime-600">Login</button></Link>
     <Link to='/register'> <button className="text-white  hover:duration-700  hover:text-lime-600">Signup</button></Link>
    </div>
  }
    </div>
  
</div>
    );
};

export default Navbar;