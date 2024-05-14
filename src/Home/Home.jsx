import React, { useState } from 'react';
import Banner from './Banner';
import FeaturedFoods from '../component/FeaturedFoods';
import { useQuery } from '@tanstack/react-query';
import WebsiteFeatures from './WebsiteFeatures';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { MutatingDots, ProgressBar, ThreeDots } from 'react-loader-spinner';
import Contact from './Contact';
import About from './About';
import { motion } from "framer-motion"
const Home = () => {
   
    const [dataLength,setDataLength] = useState(6)
   
  
    const {isPending,data:food} = useQuery({
        queryKey:['foods'],
        
        queryFn: async()=>{
            const res = await fetch('https://assignment-eleven-omega.vercel.app/foods')
            return res.json()
         
        } 
       })
       
       if(isPending){
        return  <div className='flex justify-center my-auto'>
          <MutatingDots
          
  visible={true}
  height="100"
  width="100"
  color="#0000"
  secondaryColor="#0000"
  radius="12.5"
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div>

       }

    
     
    
      
         
            
        
       
    return (
        <div className='space-y-24'>
                  <Helmet>
 <html lang="en" />
        <title>Home</title>
        <meta name="description" content="Basic example" />
 </Helmet>
            <Banner></Banner>
           <div className='text-center space-y-4'>
           <h4 className='text-center font-mono text-xl'> Step Into the World of Green Basket</h4>
            <h1 className='text-5xl font-thin'>Lets share our <span className='text-lime-300 space-x-3' >Foods to each other</span></h1>
          <div className='flex justify-center'>
          <p className='leading-tight w-1/2 text-base'>
            Our food sharing community website connects individuals who have surplus food with those in need. Whether its excess produce from a backyard garden or leftovers from a catering event, members can post what they have available, and others can browse and request items. Its a platform built on the principles of reducing food waste and helping those facing food insecurity. Together, we are not just sharing meals, but also spreading compassion and making a difference, one bite at a time.
            </p>
          </div>
           </div>
           <div>
            <WebsiteFeatures></WebsiteFeatures>
           </div>
           
           <div  className='  grid grid-cols-1 md:grid-cols-3 gap-20'>
           {
        food.map(ff=> ff.quantity === '60'? <FeaturedFoods key={ff._id} ff={ff} ></FeaturedFoods>:''
            
              )}
           </div>
           <div className='text-center mb-20 ' >
          
           <Link to='/available'> <button className=' btn btn-outline btn-success btn-wide mb-20'>Show All </button></Link>
         
          </div>
          <div>
            <Contact></Contact>
          </div>
          <div>
            <About></About>
          </div>
        
        </div>
    );
};

export default Home;