import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";





const Banner = () => {
       const [t,i18n ] = useTranslation("global")
    const [typeEffect] = useTypewriter({

        words:[t("header.message")],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40
      })
    return (
        <div className="hero md:min-h-screen min-h-screen  mx-auto  bg-no-repeat opacity-90   " style={{backgroundImage: 'url(https://i.ibb.co/0M4pPDG/Untitled-design-14.png'}}>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-start font-normal " >
          <div className="max-w-2xl mx-auto space-y-5" data-aos="fade-up" data-aos-duration='1000' >
          <div className='flex items-center gap-5' >  
        
              <h1 className='md:text-5xl text-2xl text-white '  >{typeEffect}</h1>
             
              
          </div >
            
          
            <p className="mb-5 text-lg font-thin text-white" >{t("header.para")} <br />
          
           </p>
            <div className='mt-5 space-x-3'>
          <Link to={'/add'}><button className="btn btn-success text-white">{t("header.button")}</button></Link>
        
          </div>
          
          </div>
  
          
        </div>
        
      </div>
    );
};

export default Banner;