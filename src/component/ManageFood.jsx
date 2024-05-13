import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { RxUpdate } from 'react-icons/rx';
import Swal from 'sweetalert2';
import Hook from '../Hook/Hook';

const ManageFood = () => {


    const {user} = useContext(AuthContext)
    const [manageFood,setFoods] = useState([])
    const [remove,setRemove] = useState([])
    const axiosSecure = Hook()
    const url = `/foods/user/${user?.email}`
    useEffect(()=>{

        axiosSecure.get(url)
        .then(data=>{
            
            setFoods(data.data)
            setRemove(data.data)

            
        })
    },[axiosSecure,url])

    

    const handleDelete = (_id)=>{
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
  
            axios.delete(`http://localhost:5000/foods/user/${_id}`)
            .then(data=>{
              console.log(data.data)
              if(data.data.deletedCount > 0 ){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                    
                  });
                  const remaining = remove.filter(food=> food._id !== _id)
                  setRemove(remaining)
            }
           
            })
         
          }
        });
  }
     
 
    return (
        <div className='overflow-x-auto'>
         
         <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                    
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Name</span>
                      </div>
                    </th>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Email</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <span> Food-Name</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span>Status</span>
                      </button>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                     Expiration-Date
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Quantity
                    </th>

                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 '>
                 {
                    manageFood.map(m=>
                        <tr key={m._id}>
                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                          {m.name}
                        </td>
                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                          {m.email}
                        </td>
    
                     
                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                          <div className='flex items-center gap-x-2'>
                            <p
                              className='px-3 py-1 rounded-full text-lime-500 bg-lime-100/60
                               text-xs'
                            >
                              {m.food_name}
                            </p>
                          </div>
                        </td>
                        <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                          <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-green-100/60 text-lime-500'>
                            <span className='h-1.5 w-1.5 rounded-full bg-green-500'></span>
                            <h2 className='text-sm font-normal '>{m.status}</h2>
                          </div>
                        </td>
                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                          {m.date}
                        </td>
    
                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                          {m.quantity}
                        </td>
                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                          <div className='flex items-center gap-x-6'>
                          <div className="lg:tooltip " data-tip="Update">
                           <Link to={`/change/${m._id}`} >
                           <button  >
                            <RxUpdate className='text-lg text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none' />
                       
                           
                            </button></Link>
                            </div>
                            <div className="lg:tooltip " data-tip="Delete">
                            <button onClick={()=>handleDelete(m._id)} className='text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='w-5 h-5'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636'
                                />
                              </svg>
                            </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )
                 }
                </tbody>
              </table>
            </div>
          </div> 
        </div>
    );
};

export default ManageFood;