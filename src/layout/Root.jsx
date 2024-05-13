import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import HeaderNav from '../HeaderNav/HeaderNav';
import Footer from '../Footer/Footer';

const Root = () => {
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