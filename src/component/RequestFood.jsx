import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Hook from "../Hook/Hook";
import { Helmet } from "react-helmet";



const RequestFood = () => {
  
   
    const {user} = useContext(AuthContext)
    const [requested,setFoods] = useState([])
    const request = useLoaderData()
    console.log(request)
    const axiosSecure = Hook()
    const url = `/foods-request/${user?.email}`
    

    useEffect(()=>{
        axiosSecure.get(url)
       
        .then((data)=>{
           
            setFoods(data.data)
           
        })
    },[axiosSecure,url])

    return (
       <div>
               <Helmet>
 <html lang="en" />
        <title>My Food Request </title>
        <meta name="description" content="Basic example" />
 </Helmet>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
     
        <th>Donator Name</th>
        <th>Food-Name</th>
        <th>Expired Date</th>
        <th>Requested Date</th>
        <th>Requested User Email</th>
        <th>Pickup Location</th>
      </tr>
    </thead>
    <tbody className="text-gray-500">
    {
        requested.map(r=>
             
      <tr key={r._id}>
      
      <td>{r.name}</td>
      <td>{r.food_name}</td>
      <td>{r.date}</td>
      <td>{r.request_date}</td>
      <td>{r.user_email}</td>
      <td>{r.location}</td>
    </tr>
        )
    }
     
    </tbody>
  </table>
</div>
       </div>
    );
};

export default RequestFood;