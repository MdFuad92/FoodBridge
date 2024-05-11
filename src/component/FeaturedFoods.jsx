import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const FeaturedFoods = () => {
    const [food,setFoods] = useState([])
   const {} = useQuery({
    queryKey:['foods'],
    queryFn: ()=> fetch('http://localhost:5000/foods',food)
   })
    
    return (
        <div>
            
        </div>
    );
};

export default FeaturedFoods;