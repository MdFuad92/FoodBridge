import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";





const Banner = () => {
       
    const [typeEffect] = useTypewriter({

        words:['Bringing communities together, one meal at a time.'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40
      })
    return (
        <div className="hero md:min-h-screen min-h-screen  mx-auto  bg-no-repeat opacity-90   " style={{backgroundImage: 'url(https://i.ibb.co/3R0L0zN/anna-pelzer-IGf-IGP5-ONV0-unsplash.jpg'}}>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-start font-normal " >
          <div className="max-w-2xl mx-auto space-y-5" data-aos="fade-up" data-aos-duration='1000' >
          <div className='flex items-center gap-5' >  
        
              <h1 className='md:text-5xl text-2xl text-white '  >{typeEffect}</h1>
             
              
          </div >
            
          
            <p className="mb-5 text-lg font-thin text-white" >Free Food For Everyone <br />
          
           </p>
            <div className='mt-5 space-x-3'>
          <Link to={'/available'}><button className="btn btn-success text-black">Shop Now</button></Link>
        
          </div>
          
          </div>
  
          
        </div>
        
      </div>
    );
};

export default Banner;