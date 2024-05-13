
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedFoods = ({ff}) => {
 const {email,name,food_name,image,location,date ,photo, status,note,quantity,_id} = ff
  
    
    return (
   
      
        
        
        
        
                <div className=" card md:w-96 w-72 mx-auto bg-base-100 shadow-xl">
  <figure className='p-6'><img className=' rounded-lg h-52 '  src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{food_name}</h2>
    <p className='font-bold'>Note: {note}</p>  
    <p>Pickup Location: {location}</p>
    <p>Expiration Date: {date}</p>
    <p>Food Quantity: {quantity}</p>
   
    <div className={ status == 'Available'?'inline-flex w-24 items-center px-3 py-1 rounded-full gap-x-2 bg-green-100/60':'inline-flex w-32 items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60'} >
    <span className={ status == 'Available'?'h-1.5 w-1.5 rounded-full bg-green-500':'h-1.5 w-1.5 rounded-full bg-red-500'}></span>
    <h2 className='text-sm font-normal '>{status}</h2>
       
        </div>
   
    <div className="card-actions justify-between items-center">
    <div className="flex items-center">
                    <img className="object-cover h-10 w-10 rounded-full" src={photo} alt="Avatar"/>
                    <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{name}</a>
                </div>
   <Link to={`/details/${_id}`}>   <button className="btn btn-success text-white">View Details</button></Link>
    </div>
  </div>
</div>
                
          
          
    
    
        
    );
};

export default FeaturedFoods;