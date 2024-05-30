

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Lottie from 'react-lottie'
import animationData from '../../src/lotties//Animation - 1715537156636.json'
import { TfiLayoutGrid2, TfiLayoutGrid3, TfiLayoutGrid3Alt } from "react-icons/tfi";
import { Helmet } from "react-helmet";
import { FaSort } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Available = () => {
   
    const [t,i18n] = useTranslation("global")
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
            axios.get('https://assignment-eleven-omega.vercel.app/foods',{withCredentials:true})
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

   const handleDescend = (descend)=>{
    
      if(descend === 'date'){
        const sortedDate = search.slice().sort((a,b)=> new Date(b.date) - new Date(a.date) )
        console.log(sortedDate)
        setSearch(sortedDate)
        
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
           <h5 className="text-xl text-center font-mono mt-14">{t("available.heading")}</h5>
            <h1 className="text-5xl font-medium text-center">{t("available.highlight1")} <span className="text-lime-500">{t("available.highlight2")}</span></h1>
           </div>
                <div className="flex justify-center mb-10">
                    
                <div className="md:w-96 w-72">
                 <label className="input input-bordered flex items-center gap-2">
               <input type="search" name="search" className="grow" placeholder={t("available.find")}  onChange={handleSearch} />

               
                     
                  </label>
                 </div>
                 
                </div>
                <div className="text-center">
                <div className="dropdown">
  <div tabIndex={0} role="button" className="btn btn-success m-1 mb-8"><FaSort></FaSort>{t("available.sort")}</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li onClick={()=>{handleSort('date')}}><a>Date: Low-High</a></li>
    <li onClick={()=>{handleDescend('date')}}><a>Date: High-Low</a></li>
    
  </ul>
</div>
<div className="md:flex justify-center mb-3  hidden">
{
  layout?  <TfiLayoutGrid3 className=" text-xl "  onClick={handleLayout}/>:
  <TfiLayoutGrid3Alt  className="text-xl" onClick={handleLayout}/>
}
</div>
                </div>
                
       <div className={ `md:grid gap-6 md:w-auto w-72 md:ml-5 flex flex-col mx-auto  ${layout?'md: grid-cols-3 ':'md:grid-cols-2 '} ` }>
       {
            search.map(s=> s.status === 'Available'?
                <div key={s._id} >
                      <div className="   ">
                        
            <div className="  max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      
    <img className=" object-cover w-full h-64" src={s.image} alt="Article"/>
   
    
    
    <div className="p-6 hover:bg-lime-500 hover:duration-300">
   
        <div>
            <span className="text-2xl font-medium text-lime-400 uppercase ">{s.food_name}</span>
            <a href="#" className="block mt-2 text-sm font-thin text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{t("foodCard.quantity")}: {s.quantity}</a>
            <p className="mt-2 text-base font-bold text-gray-600 dark:text-gray-400">{t("foodCard.note")} {s.note}</p>
        </div>

       
        <div className="mt-4">
            <span className="text-sm" >{t("foodCard.pickup")}: {s.location}</span>
        </div>
        <span className=" text-sm text-gray-600 dark:text-gray-300">{t("foodCard.expire-date")}: {s.date}</span>
        <div className="mt-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img className="object-cover h-10 w-10 rounded-full" src={s.photo} alt="Avatar"/>
                    <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{s.name}</a>
                </div>
              <Link to={`/details/${s._id}`}>                <button className=" btn btn-sm btn-success font-medium ml-6">{t("foodCard.button")}</button></Link>

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