import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import logo from '../../src/assets/food-donation.svg'
import { Slide } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';

const Register = () => {
    
    const {createEmail,update} = useContext(AuthContext)
    const [pass,setPass] = useState(false)
    const loc = useLocation()
    const navigate = useNavigate()
    const [t,i18n] = useTranslation("global")

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
            title: "Registration Successful",
        
            icon: "success"
          });

           navigate('/')
      
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
        <div className="hero overflow-hidden min-h-screen bg-base-200" >
        


      <div className="hero-content flex-col lg:flex-row-reverse">
      <Slide direction="right"  duration={2000}>
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-thin">{t("authenticate.reg-des")}</h1>
          <p className='text-lime-700 '>{t("authenticate.reg-des2")}</p>
      
        </div>
        </Slide>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <img className='w-60  mx-auto my-auto' src={logo} alt="" />
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">{t("donate.Name")}</span>
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
                <span className="label-text">{t("authenticate.password")}</span>
              </label>
          
            <input type={pass?'text': "password"} placeholder={t("authenticate.password")} name='password' className="input input-bordered" required />
              <span className='absolute md:left-72 left-60 top-[53px]' onClick={()=> setPass(!pass) } >{
               pass?<FaEye className='text-lg'></FaEye>:<FaEyeSlash className='text-lg' />
              }</span>
              
            </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">{t("authenticate.forgot-password")} ?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-success">{t("authenticate.log2")}</button>
            </div>
          
       
           

          
            <div>
              <p className='text-center mt-3 text-sm'>{t("authenticate.reg3")} <Link to='/login'><span className='text-lg font-semibold '>{t("authenticate.reg")} </span></Link> {t("authenticate.log3")} </p>
            </div>                                                                    
       
  
          </form>                                       
       
        </div>
      </div>
    </div>
    );
};

export default Register;