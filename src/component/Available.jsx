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

    
    return (
        <div className="space-y-6">
            <h5 className="text-xl text-center font-mono mt-14">Lets Take care of Each other</h5>
            <h1 className="text-5xl font-medium text-center">Enjoy & Eat <span className="text-lime-500">Together!</span></h1>
            <div></div>
        </div>
    );
};

export default Available;