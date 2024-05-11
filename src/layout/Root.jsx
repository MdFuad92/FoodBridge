import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import HeaderNav from '../HeaderNav/HeaderNav';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='font-lato '>
            <HeaderNav></HeaderNav>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;