import React from 'react';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='space-y-12'>
          
            <Banner></Banner>
           <div className='text-center space-y-4'>
           <h4 className='text-center text-xl'> Step Into the World of Green Basket</h4>
            <h1 className='text-5xl font-bold'>Lets share our <span className='text-lime-300 space-x-3' >Foods to each other</span></h1>
           </div>
        </div>
    );
};

export default Home;