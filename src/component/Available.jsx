

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Lottie from 'react-lottie'
import animationData from '../../src/lotties//Animation - 1715537156636.json'
import { TfiLayoutGrid2, TfiLayoutGrid3 } from "react-icons/tfi";
import { Helmet } from "react-helmet";

const Available = () => {
   
  
    const [loader,setLoader] = useState(true)
    const [layout,setLayout] = useState(true)

    const handleLayout = ()=>{
      setLayout(!layout)
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
  
    
    
           useEffect(()=>{
            axios.get('http://localhost:5000/foods',{withCredentials:true})
            .then(res=>{
                setfoods(res.data)
                setSearch(res.data)
                setTimeout(() => setLoader(false), 2000)
              
            })
           },[])
            const [foods,setfoods] = useState([])
            const [search,setSearch] = useState([]) 
       
         if(loader){
            return  <Lottie
            options={defaultOptions}
            height={400}
            width={400}
          />
         }
            
   const handleSort = (sort)=>{
      if(sort === 'date'){
        const sortedData = search.slice().sort((a,b)=> new Date(a.date) - new Date(b.date) )
        console.log(sortedData)
        setSearch(sortedData)
        
      }

   }
       

    const handleSearch = (e)=>{
       setSearch(foods.filter(f=> f.food_name.toLowerCase().includes(e.target.value)))
   
    }

   
  
        
    
   

        // email,name,food_name,image,location,date ,photo, status,note,quantity
    return (
        <div className="mb-20">
                 <Helmet>
 <html lang="en" />
        <title>Available Foods</title>
        <meta name="description" content="Basic example" />
 </Helmet>
           <div className="space-y-3 mb-10">
           <h5 className="text-xl text-center font-mono mt-14">Lets Take care of Each other</h5>
            <h1 className="text-5xl font-medium text-center">Enjoy & Eat <span className="text-lime-500">Together!</span></h1>
           </div>
                <div className="flex justify-center mb-10">
                    
                <div className="w-96">
                 <label className="input input-bordered flex items-center gap-2">
               <input type="search" name="search" className="grow" placeholder="Search"  onChange={handleSearch} />

               
                     
                  </label>
                 </div>
                 
                </div>
                <div className="text-center">
                <div className="dropdown">
  <div tabIndex={0} role="button" className="btn btn-success m-1 mb-8">Sort</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li onClick={()=>{handleSort('date')}}><a>Date</a></li>
    
  </ul>
</div>
<div className="flex justify-center mb-3">
{
  layout?  <TfiLayoutGrid3 className=" text-xl "  onClick={handleLayout}/>:
  <TfiLayoutGrid2  onClick={handleLayout}/>
}
</div>
                </div>
                
       <div className={ `grid gap-6 md:w-auto w-72  ${layout?'md: grid-cols-3 ':'md:grid-cols-2 '} ` }>
       {
            search.map(s=> s.status === 'Available'?
                <div key={s._id} >
                      <div className="   ">
                        
            <div className="  max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      
    <img className=" object-cover w-full h-64" src={s.image} alt="Article"/>
   
    
    
    <div className="p-6 hover:bg-lime-500 hover:duration-300">
    <span className="indicator-item indicator-top indicator-end badge border-lime-600 mb-3  bg-lime-600">{s.status}</span>
        <div>
            <span className="text-2xl font-medium text-lime-400 uppercase ">{s.food_name}</span>
            <a href="#" className="block mt-2 text-sm font-thin text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">Food Quantity: {s.quantity}</a>
            <p className="mt-2 text-base font-bold text-gray-600 dark:text-gray-400">Note: {s.note}</p>
        </div>

       
        <div className="mt-4">
            <span className="text-sm" >Pickup Location: {s.location}</span>
        </div>
        <span className=" text-sm text-gray-600 dark:text-gray-300">Expiration Date : {s.date}</span>
        <div className="mt-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img className="object-cover h-10 w-10 rounded-full" src={s.photo} alt="Avatar"/>
                    <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{s.name}</a>
                </div>
              <Link to={`/details/${s._id}`}>                <button className=" btn btn-sm btn-success font-medium ml-6">View Details</button></Link>

            </div>
        </div>
        
    </div>
</div>
            </div>
            
                </div>:""
            )
          }
       </div>
        </div>
    );
};

export default Available;