
import { Blocks, ThreeDots } from 'react-loader-spinner';

const RootLoader = () => {
    return (
 <div className=' flex justify-center mt-48 '>
           <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#000000"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
 </div>
    );
};

export default RootLoader;