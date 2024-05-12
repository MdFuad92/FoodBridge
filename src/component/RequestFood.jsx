import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const RequestFood = () => {
  
   
    const {user} = useContext(AuthContext)
    const [requested,setFoods] = useState([])
    const request = useLoaderData()
    console.log(request)

    // const filter = ()=>{

    // }

    useEffect(()=>{
        fetch(`http://localhost:5000/food/${user?.email}`)
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data)
            setFoods(data)
           
        })
    },[user])

    return (
       <div>
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
        <th>Pickup Date</th>
      </tr>
    </thead>
    <tbody>
    {
        requested.map(r=>
             
      <tr key={r._id}>
      
      <td>{r.name}</td>
      <td>{r.food_name}</td>
      <td>{r.date}</td>
      <td>{r.request_date}</td>
      <td>{r.email}</td>
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