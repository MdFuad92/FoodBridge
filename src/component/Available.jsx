import { useQuery } from "@tanstack/react-query";


const Available = () => {
    const {isPending, data:foods} = useQuery({
        queryKey:['foods'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/foods');
            return res.json()
        }
    })
   
       if(isPending){
            return <div className=' w-full h-96 flex justify-center'>
                
            <span className=" loading loading-spinner loading-lg"></span>
            
        </div>
        }

        // email,name,food_name,image,location,date ,photo, status,note,quantity
    return (
        <div className="space-y-6">
            <h5 className="text-xl text-center font-mono mt-14">Lets Take care of Each other</h5>
            <h1 className="text-5xl font-medium text-center">Enjoy & Eat <span className="text-lime-500">Together!</span></h1>
       <div className="grid grid-cols-3 space-x-6 space-y-5">
       {
            foods.map(f=>
                <div key={f._id} >
                      <div className="w-96  ">
            <div className=" max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <img className="object-cover w-full h-64" src={f.image} alt="Article"/>

    <div className="p-6 hover:bg-lime-500 hover:duration-300">
        <div>
            <span className="text-2xl font-medium text-lime-400 uppercase ">{f.food_name}</span>
            <a href="#" className="block mt-2 text-sm font-thin text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">Food Quantity: {f.quantity}</a>
            <p className="mt-2 text-base font-bold text-gray-600 dark:text-gray-400">Note: {f.note}</p>
        </div>

       
        <div className="mt-4">
            <span className="text-sm" >Pickup Location: {f.location}</span>
        </div>
        <div className="mt-4">
            <div className="flex items-center">
                <div className="flex items-center">
                    <img className="object-cover h-10 w-10 rounded-full" src={f.photo} alt="Avatar"/>
                    <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{f.name}</a>
                </div>
                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">Expiration Date : {f.date}</span>
            </div>
        </div>
    </div>
</div>
            </div>
                </div>
            )
          }
       </div>
        </div>
    );
};

export default Available;