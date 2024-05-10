import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation()

    if(loader){
        return <div className=' w-full h-96 flex justify-center'>
            <span className=" loading loading-spinner loading-lg"></span>
        </div>
    }

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login' ></Navigate>
};

export default PrivateRoute;