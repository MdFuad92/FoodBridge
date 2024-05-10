import { useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    



  const [security,setSecurity] = useState(false)

 

  const handleLogin = (e) =>{
 
    e.preventDefault()
    console.log(e.currentTarget)
    const form = new FormData(e.currentTarget)
  
    const email = form.get('email')
    const password = form.get('password')
    console.log(email,password)
    login(email,password)
    .then((result) =>{
     console.log(result.user)

    })
    .catch((error)=>{
      console.error(error)
   
    })
  }

  const handleGoogle =()=>{
    google()
    .then((result)=>{
      console.log(result.user)
   
       

        
    
    })
    .catch((error)=>{
      console.error(error)
      
      
      
    })
  }

  const handleGithub = () =>{
       github()
       .then((result)=>{
        console.log(result)
      
          setTimeout(() =>  navigate(loc?.state?loc.state:'/' ),1300)
       })
       .catch((error)=>{
         console.error(error)
    
       })
  }
    return (
        <div className="hero min-h-screen bg-base-200" >
 
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">The login route for our website provides secure access for registered users. By entering their credentials (username/email and password), clients can authenticate themselves to gain personalized access to property listings and account settings. Our login process ensures data privacy and protection, enhancing the user experience and enabling seamless interaction with our platform.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={security?'text':"password"} placeholder="password" name='password' className="input input-bordered" required />
          <span className='absolute md:left-72 left-60 top-[53px]' onClick={()=> setSecurity(!security) } >{
                 security?<FaEye className='text-lg'></FaEye>:<FaEyeSlash className='text-lg' />
                }</span>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success">Login</button>
        </div>
        <button onClick={handleGoogle} className='btn btn-neutral'><FaGoogle />Google</button>
               <button onClick={handleGithub} className='btn btn-neutral'><FaGithub />Github</button>
        <div>
                <p className='text-center mt-3 text-sm'>Dont have an account <Link to='/register'><span className='text-primary font-semibold '>Register</span></Link> Now</p>
              </div>
            




      </form>
    </div>
  </div>
</div>
    );
};

export default Login;