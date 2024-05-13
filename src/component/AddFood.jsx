import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import Hook from "../Hook/Hook";


const AddFood = () => {
    
    const {user} = useContext(AuthContext) 
    const axiosSecure = Hook()
    const url ='/foods'

    const handleFoodData = (e)=>{
       e.preventDefault()
       const form = e.target
       const food_name = form.Food_name.value
       const image = form.Food_image.value
       const location = form.pickup_location.value
       const quantity = form.quantity.value
       const date = form.date.value
       const status   = form.status.value
       const note = form.note.value
       const photo = form.photo.value
       const email = form.email.value
       const name = form.name.value       
       const foodItems = {email,name,food_name,image,location,date ,photo, status,note,quantity}
       console.log(foodItems)
       
       axiosSecure.post(url,foodItems)
       .then(data=>{
        console.log(data.data)
        if(data.data.insertedId){
            Swal.fire({
                title: "Congratulations!",
                text: "Added Successfully",
                icon: "success",
                color:"green",
                confirmButtonColor: 'green',
              });
          }
       })


    }

  
    return (
        <div className="hero min-h-screen opacity-90 p-9  bg-no-repeat" style={{backgroundImage: 'url(https://i.ibb.co/ZSw5kS1/family-scaled.jpg)'}}>

          <div className="card bg-white bg-opacity-90 shadow-lg p-6">
            <div className="p-6 border border-gray-300 rounded-xl  space-y-6">
                <h1 className="text-2xl font-semibold">Donator Info</h1>
                 <span className="flex items-center space-y-6 font-bold "><span className="mr-5">Profile Photo: </span>
                 <img className="border rounded-xl w-24" src={user.photoURL} alt="" /></span>

                 <p className="font-bold">Name : {user.displayName}</p>
                 <p className="font-bold">Email : {user.email} </p>
            </div>
          <form onSubmit={handleFoodData} className="card-body     " data-aos="fade-up"data-aos-duration='1000'>
               

               {/* form name and quantity*/} 
            <div className='md:flex items-center gap-8'>
           
                <div className="form-control md:w-auto ">
                <label className="label">
                <span className="label-text text-black text-lg">Food Name</span>
                </label>
                <input type="text" name='Food_name' placeholder="Food Name" className="input input-bordered" required />
              
                </div>
                <div className="form-control md:w-1/2  ">
                <label className="label">
                <span className="label-text text-black text-lg">Food URL</span>
                </label>
                <input  type="text" placeholder="Food URL" name='Food_image' className="input input-bordered w-full" required />
                </div>
               
            </div>
         
    
            <div className='md:flex gap-8 items-center '>
        
            <div className="form-control md:w-1/2 ">
                <label className="label">
            <span className="label-text text-black text-sm">Pickup Location</span>
                </label>
              
                <select className='input border-gray-200' placeholder='Pickup Location'  type="text" name="pickup_location" id="location">
                            <option value="Chittagong">Chittagong</option>
                            <option value="Comilla"><span>Comilla</span></option>
                            <option value="Dhaka"><span>Dhaka</span></option>
                            <option value="Barisal"><span>Barisal</span></option>
                            <option value="Rangpur"><span>Rangpur</span></option>
                            <option value="Rajshahi"><span>Rajshahi</span></option>
                   
                       
                       
                        </select>
                        
                </div>
            
                <div className="form-control   ">
                <label className="label">
                <span className="label-text text-black text-lg">Expired Date</span>
                </label>
                <input type="date" name='date' placeholder="Expiration Date" className="input input-bordered" required />
              
                </div>
               
            </div>
            
            <div className='md:flex items-center gap-8 '>
            <div className="form-control md:w-1/2 ">
                <label className="label">
                <span className="label-text text-black text-sm">Quantity</span>
                </label>
              
                <select className='input border border-gray-200' placeholder='Category'  type="text" name="quantity" id="quantity-type">
                            <option value="10">10</option>
                            <option value="20"><span>20</span></option>
                            <option value="30"><span>30</span></option>
                            <option value="40"><span>40</span></option>
                            <option value="50"><span>50</span></option>
                            <option value="60"><span>60</span></option>
                   
                       
                         
                        </select>
                        
                </div>
                <div className="form-control ">
                <h1 className='font-bold'>Food Status</h1>
                <label className="cursor-pointer label space-x-3 ">
                <span className="label-text text-black text-lg">Available</span>
                
                <input  type="radio" name='status' value='Available' checked   className="checkbox checkbox-success" required  />
              
              
                </label>
                <label className="cursor-pointer label space-x-3 ">
                <span className="label-text text-black text-lg">Not Available</span>
                
                <input  type="radio" name='status' value='Not Available'   className="checkbox checkbox-error" required  />
              
              
                </label>
                </div>
               
            </div>
         
            <div className='md:flex items-center gap-8 '>
           
          
        
               
            </div>
    
            <div className='md:flex items-center gap-8 '>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">User Image</span>
              </label>
              <input type="photo" placeholder="photo" name='photo' defaultValue={user.photoURL} className="input input-bordered" required readOnly />
            </div>
            <div className="form-control md:w-1/2 ">
                <label className="label">
                <span className="label-text font-bold text-black text-lg">Email</span>
                </label>
                <input  type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered" required  readOnly/>
                </div>
                <div className="form-control">
                <label className="label">
                <span className="label-text font-bold text-black text-lg">Name</span>
                </label>
                <input type="name" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required readOnly />
              
              
                </div>
               
            </div>
            <div className='md:flex items-center gap-8 '>
            <div className="form-control w-full ">
                <label className="label">
                <span className="label-text font-bold text-black text-lg">Note</span>
                </label>
                <input type="text" name='note' placeholder="Note" className="input input-bordered" required />
                </div>
          
               
            </div>
         
          
        
            <input type="submit" value='Add' className='btn btn-block btn-success text-white ' />
                </form>
               
          </div>
            
    
        </div>
    );
};

export default AddFood;