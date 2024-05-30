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
import { useTranslation } from 'react-i18next';
const Home = () => {
  const [t,i18n] = useTranslation("global")
   
    // const [dataLength,setDataLength] = useState(6)
   
  
    const {isPending,data:food} = useQuery({
        queryKey:['foods'],
        
        queryFn: async()=>{
            const res = await fetch('https://assignment-eleven-omega.vercel.app/foods')
            return res.json()
         
        } 
       })
       
       if(isPending){
        return  <div className='flex justify-center my-auto  '>
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
        <title>FoodBridge </title>
        <meta name="description" content="Basic example" />
 </Helmet> 
            <Banner></Banner>
           <div className='text-center space-y-4'>
           <h4 className='text-center font-mono text-xl'> {t("home.body")}</h4>
            <h1 className='text-5xl font-thin'>{t("home.heading1")} <span className='text-lime-300 space-x-3' >{t("home.heading2")}</span></h1>
          <div className='flex justify-center'>
          <p className='leading-tight w-1/2 text-base'>
          {t("home.description")}
            </p>
          </div>
           </div>
           <div>
            <WebsiteFeatures></WebsiteFeatures>
           </div>
           
           <div  className=' overflow-hidden  hover:cursor-pointer   grid grid-cols-1 md:grid-cols-3 gap-10'>
           {
        food.map(ff=> ff.quantity === '60'? <FeaturedFoods key={ff._id} ff={ff} ></FeaturedFoods>:''
            
              )}
           </div>
           <div className='text-center mb-20 ' >
          
           <Link to='/available'> <button className=' btn btn-outline btn-success btn-wide mb-20'>{t("home.button")} </button></Link>
         
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