import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
const secure = axios.create({
    baseURL : 'http://localhost:5000',
    withCredentials:true
})

const Hook = () => {
    const { logOut} = useContext(AuthContext)
    const navigate = useNavigate()
      useEffect(()=>{
        secure.interceptors.response.use(res=>{
         return res
        },error =>{
           console.log('intercepted',error.response)
            if(error.response.status === 401 || error.response.status === 403 ){
                console.log('log out user')
                logOut()
                .then(() =>{
                    navigate('/login')
                })
                .catch( error => console.log(error))
            }
        }
    )
      })
    return secure;
};

export default Hook;