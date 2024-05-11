import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import logo from '../../src/assets/3552144.jpg'

const Register = () => {
    
    const {createEmail,update} = useContext(AuthContext)
    const [pass,setPass] = useState(false)

    const handleRegister = (e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        console.log(name,email,password,photo)

        if(password.length < 6){
          Swal.fire({
            title: "Oops!",
            text: "Password must be at least 6 characters!",
            icon: "error"
          });
          
           return
         }
         else if(!/[A-Z]/.test(password)){
          Swal.fire({
            title: "Oops!",
            text: "Password must have atleast one Uppercasecharacter!",
            icon: "error"
          });
           
            return
         }
         else if(!/[a-z]/.test(password)){
          Swal.fire({
            title: "Oops!",
            text: "Password must have atleast one Lowercasecharacter!",
            icon: "error"
          });
          
           return
         }

        createEmail(email,password,name,photo)
        .then((result)=>{
          console.log(result)
         
          update(name,photo)
          .then((result)=>{
          console.log(result)
          window.location.reload()
      
         
           
          }
         )
          .catch()
          Swal.fire({
            title: "Congratulations!",
            text: "Registration Successful",
            icon: "success"
          });

      
      
        })
        .catch((error)=>{
          console.error(error)
          Swal.fire({
            title: "Sorry!",
            text: "Already Registered!",
            icon: "error"
          });
        })
  }  
    return (
        <div className="hero min-h-screen bg-base-200" >
        


      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-thin">Join our amazing community by registering your account</h1>
          <p>Bringing communities together</p>
      
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <img className='w-60  mx-auto my-auto' src={logo} alt="" />
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="name" placeholder="name" name='name' className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input type="photo" placeholder="photo" name='photo' className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name= "email" className="input input-bordered" required />
            </div>
            <div className='relative'>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
          
            <input type={pass?'text': "password"} placeholder="password" name='password' className="input input-bordered" required />
              <span className='absolute md:left-72 left-60 top-[53px]' onClick={()=> setPass(!pass) } >{
               pass?<FaEye className='text-lg'></FaEye>:<FaEyeSlash className='text-lg' />
              }</span>
              
            </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-success">Register</button>
            </div>
          
       
           

          
            <div>
              <p className='text-center mt-3 text-sm'>Already have an account <Link to='/login'><span className='text-lg font-semibold '>Login</span></Link> Now</p>
            </div>                                                                    
       
  
          </form>                                       
       
        </div>
      </div>
    </div>
    );
};

export default Register;