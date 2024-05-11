import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import logo from '../../src/assets/3552144.jpg'
import { AuthContext } from '../AuthProvider/AuthProvider';

const FoodDetails = () => {
    const foodDetails = useLoaderData()
    const {user} = useContext(AuthContext)
    const {email,name,food_name,image,location,date ,photo,_id, status,note,quantity} = foodDetails
    return (
   <div>
    <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col-reverse mx-auto lg:flex-row">
		<div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-600 dark:text-gray-50">
            <h1 className='text-3xl'>Food Details</h1>
			<div className="flex space-x-2 sm:space-x-4">
				
				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug"><span className='font-semibold'>Food Name:</span> {food_name}</p>
					<p className="leading-snug"><span className='font-semibold'>Note:</span> {note}</p>
				</div>
			</div>
			<div className="flex space-x-2 sm:space-x-4">
			
				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">Food Quantity: {quantity}</p>
					<span className='font-semibold'>Expiration-Date: {date}</span>
				</div>
			</div>
			<div className="flex space-x-2 sm:space-x-4">
				
				<div className="space-y-2">
				{/* The button to open modal */}
           <label htmlFor="my_modal_6" className="btn">Request</label>

                {/* Put this part before </body> tag */}
           < input type="checkbox" id="my_modal_6" className="modal-toggle" />
             <div className="modal" role="dialog">
                 <div className="modal-box">
                 <img className='w-52 mx-auto' src={logo} alt="" />
               <h3 className="font-bold text-lg">Request Form</h3>
             
            
               <form  className="card-body     " data-aos="fade-up"data-aos-duration='1000'>
               

               {/* form name and quantity*/} 
            <div className='md:flex items-center gap-8'>
           
                <div className="form-control md:w-auto ">
                <label className="label">
                <span className="label-text text-black text-lg">Food Name</span>
                </label>
                <input type="text" name='Food_name' defaultValue={food_name} placeholder="Food Name" className="input input-bordered" required  readOnly/>
              
                </div>
                <div className="form-control md:w-1/2  ">
                <label className="label">
                <span className="label-text text-black text-lg">Food URL</span>
                </label>
                <input  type="text" placeholder="Food URL" defaultValue={image} name='Food_image' className="input input-bordered w-full" required readOnly />
                </div>
               
            </div>
         
    
            <div className='md:flex gap-8 items-center '>
        
          
            
                <div className="form-control   ">
                <label className="label">
                <span className="label-text text-black text-lg">Expired Date</span>
                </label>
                <input type="date" name='date' defaultValue={date} placeholder="Expiration Date" className="input input-bordered" required  readOnly/>
              
                </div>
                <div className="form-control   ">
                <label className="label">
                <span className="label-text text-black text-lg">Food ID</span>
                </label>
                <input type="text" name='_id' placeholder="Food ID" defaultValue={_id} className="input input-bordered" required readOnly />
              
                </div>
               
            </div>
            
            <div className='md:flex items-center gap-8 '>
          
                <div className="form-control ">
                <h1 className='font-bold'>Donator Name</h1>
                <label className="cursor-pointer label space-x-3 ">
        
                
                <input  type="name" name='Donator_Name' defaultValue={name} className="input w-32 input-bordered"  required  readOnly />
              
              
                </label>
             
                </div>
                <div className="form-control ">
                <h1 className='font-bold'>Donator Email</h1>
                <label className="cursor-pointer label space-x-3 ">
                
                
                <input  type="email" name='email' defaultValue={email}  className="input input-bordered "    required  readOnly />
              
              
                </label>
               
                </div>
               
            </div>
         
            <div className='md:flex items-center gap-8 '>
           
          
        
               
            </div>
    
            <div className='md:flex items-center gap-8 '>
         
            <div className="form-control md:w-1/2 ">
                <label className="label">
                <span className="label-text font-bold text-black text-lg">User email</span>
                </label>
                <input  type="email" name='email'  defaultValue={user.email}  placeholder="Email" className="input input-bordered" required  readOnly/>
                </div>
                <div className="form-control md:w-1/2 ">
                <label className="label">
                <span className="label-text  text-black text-lg">Pickup Location</span>
                </label>
                <input type="name" name='name' defaultValue={location} placeholder="Name" className="input input-bordered" required readOnly />
              
              
                </div>
               
            </div>
            <div className='md:flex items-center gap-8 '>
            <div className="form-control w-1/2 ">
                <label className="label">
                <span className="label-text font-bold text-black text-lg">Note</span>
                </label>
                <input type="date" name='expired_date' defaultValue={date} className="input input-bordered" required  readOnly />
                </div>
            <div className="form-control w-1/2 ">
                <label className="label">
                <span className="label-text font-bold text-black text-lg">Note</span>
                </label>
                <input type="date" name='Request_Date'   className="input input-bordered" required />
                </div>
          
               
            </div>
         
          
        
            <input type="submit" value='Request' className='btn btn-block btn-success text-white ' />
                </form>
               <div className="modal-action">
                <label htmlFor="my_modal_6" className="btn">Close!</label>
              </div>
              </div>
                </div>
				</div>
			</div>
		</div>
		<div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
			<div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
				<img src={image} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
			</div>
		</div>
	</div>
</section>
   </div>
    );
};

export default FoodDetails;