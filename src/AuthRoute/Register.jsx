import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    const [pass,setPass] = useState(false)

    const handleRegister = (e) =>{
 
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name,photo,email,password)
    }    
    return (
        <div className="hero min-h-screen bg-base-200" >
        


      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">The register route on our real estate website allows new users to create accounts quickly and securely. By providing essential details such as name, email, and password, users can register to access exclusive features like saving favorite properties, and our contact page for support. Our registration process ensures data privacy and simplifies the onboarding experience for new users looking to engage with our platform.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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