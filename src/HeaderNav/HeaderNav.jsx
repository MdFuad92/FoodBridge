import { IoLocationSharp } from 'react-icons/io5';
import logo from '../../src/assets/3552144.jpg'
import { GrContactInfo } from 'react-icons/gr';
import { FaClock } from 'react-icons/fa';

const HeaderNav = () => {
    return (
        <div className='bg-white mx-auto max-w-6xl h-36 '>
            <nav className='flex items-center gap-20'>
               <div className='flex items-center'>
               <img className='w-36  ' src={logo} alt="" />
               <h1 className='text-xl font-semibold'>Green <br /> Basket</h1>
               </div>
               <div className='flex items-center space-x-3' >
               <IoLocationSharp className='text-5xl' />
                <p className='font-medium'> 153 Crysta Vista New Jersey, NY 11334</p>
               </div>
               <div className='flex space-x-5'>
               <GrContactInfo className='text-5xl font-thin'  /> 
               <div className='flex flex-col ' >
           
              <div className='flex items-center space-x-3'>
         
                <p className='font-medium'>Contact: 111-111</p>
              </div>
                
                <span className='text-lime-300' >greenbasktet@gmail.com</span>
               </div>
               </div>
               <div className='flex items-center space-x-3' >
               <FaClock className='text-5xl font-thin'  /> 
                <p className='font-medium'>24/7 Food Supply</p>
               </div>
            </nav>
        </div>
    );
};

export default HeaderNav;