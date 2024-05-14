import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import HeaderNav from '../HeaderNav/HeaderNav';
import Footer from '../Footer/Footer';
import RootLoader from '../Loader/RootLoader';

const Root = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 2500)
    }, [])
    if (loading) {
        return <RootLoader/>
    }
    return (
        <div className='font-lato '>
         
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-64px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;