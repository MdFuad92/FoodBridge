
import React, { useState } from 'react';

const FeaturedFoods = ({ff}) => {
 const {email,name,food_name,image,location,date ,photo, status,note,quantity} = ff
  
    
    return (
   
      
        
        
        
        
                <div className="card w-96 bg-base-100 shadow-xl">
  <figure className='p-6'><img className=' rounded-lg h-52 '  src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{food_name}</h2>
    <p className='font-bold'>Note: {note}</p>  
    <p>Pickup Location: {location}</p>
    <p>Expiration Date: {date}</p>
    <p>Food Quantity: {quantity}</p>
    <p className={ status == 'Available'?'text-green-500':'text-red-500'}>Status: {status} <span className=''>
       
        </span></p>
   
    <div className="card-actions justify-between items-center">
    <div className="flex items-center">
                    <img className="object-cover h-10 w-10 rounded-full" src={photo} alt="Avatar"/>
                    <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{name}</a>
                </div>
      <button className="btn btn-success">View Details</button>
    </div>
  </div>
</div>
                
          
          
    
    
        
    );
};

export default FeaturedFoods;