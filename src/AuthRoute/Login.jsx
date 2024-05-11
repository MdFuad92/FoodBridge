import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import logo from '../../src/assets/3552144.jpg'


const Login = () => {
    

    const {login,google,github} = useContext(AuthContext)

  const [security,setSecurity] = useState(false)
  const loc = useLocation()
  const navigate = useNavigate()

 

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
      
     Swal.fire({
      title: "Congratulations!",
      text: "Login Successful",
      icon: "success"
    });
    navigate(loc?.state?loc.state:'/' )
    })
    .catch((error)=>{
      console.error(error)
      Swal.fire({
        title: "Sorry!",
        text: "Wrong Password or Email!",
        icon: "error"
      });
    
    })

}

const handleGoogle = ()=>{
  google()
  .then((result)=>{
    console.log(result.user)
    Swal.fire({
      title: "Congratulations!",
      text: "Login Successful",
      icon: "success"
    });
      
     
 
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
      <h1 className="text-5xl font-bold">logn</h1>
      <img src={logo} alt="" />
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
          <button  className="btn btn-success">Login</button>
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