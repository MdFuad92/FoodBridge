
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

import { animate } from "framer-motion"
import { useTranslation } from 'react-i18next';

const FeaturedFoods = ({ff}) => {
  const [t,i18n] = useTranslation("global")
 const {email,name,food_name,image,location,date ,photo, status,note,quantity,_id} = ff
  
    
    return (
   
      
      
        
   <motion.div whileHover={{scale:1.1}}>
    <div className="card  bg-base-100 shadow-xl">
      <figure className='p-6'><img className=' rounded-lg h-52 '  src={image} alt="Shoes" /></figure>
      <div className="card-body">
        
        <h2 className="card-title">{food_name}</h2>
        <p className='font-bold'>{t("foodCard.note")}: {note}</p>  
        <p>{t("foodCard.pickup")}: {location}</p>
        <p>{t("foodCard.expire-date")}: {date}</p>
        <p>{t("foodCard.quantity")}: {quantity}</p>
       
       
       
        <div className="card-actions justify-between items-center">
        <div className="flex items-center">
                        <img className="object-cover h-10 w-10 rounded-full" src={photo} alt="Avatar"/>
                        <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{name}</a>
                    </div>
       <Link to={`/details/${_id}`}>   <button className="btn btn-success text-white">{t("foodCard.button")}</button></Link>
        </div>
      </div>
    </div>
   </motion.div> 


     
        
   
                
          
          
    
    
        
    );
};

export default FeaturedFoods;