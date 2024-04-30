import React from 'react';
import img1 from '../../Assets/image 44.png';
import img2 from '../../Assets/image52.png';
import img3 from '../../Assets/image 56.png';
const Component1 = () => {
  return (
    <div className='w-[97%] flex items-center justify-center gap-[4rem] relative -top-[4rem]'>
      {/* <div className="w-[17rem] h-[15rem] flex flex-col items-center justify-center px-8 py-2 rounded-2xl border-[1px] border-[#38AB9F] hover:border-transparent hover:scale-105 shadow-xl transition ease-in delay-50 duration-300 cursor-pointer">
        <img src={img2} alt={"logo"} className="w-20 mt-2" />
        <div className="text-center text-[#E22726] font-normal text-[1.5rem] -mt-2 mb-2">
          Licensed CCIC
        </div>
        <p className="text-[15px] text-center mb-4">
          Make Canada your permanent home! PR allows you to live, work{" "}
        </p>
      </div> */}
      <div className='w-[18rem] h-[17rem] flex flex-col items-center justify-center px-8 py-2 rounded-2xl border-[1px] border-[#38AB9F] hover:border-transparent hover:scale-105 shadow-xl transition ease-in delay-50 duration-300 cursor-pointer'>
        <img src={img2} alt={'logo'} className='w-[14rem] mb-4 mt-4' />
        <div className='text-center text-white font-normal text-[1.5rem] -mt-1 mb-2 bg-[#E22726] w-full rounded-lg py-1 px-2 my-2'>
          Licensed RCIC
        </div>
        <p className='text-[16px] text-center mb-4'>
          Make Canada your permanent home! PR allows you to live, work{' '}
        </p>
      </div>
      <div className='w-[18rem] h-[17rem] flex flex-col items-center justify-center px-8 py-2 rounded-2xl border-[1px] border-[#38AB9F] hover:border-transparent hover:scale-105 shadow-xl transition ease-in delay-50 duration-300 cursor-pointer'>
        <img src={img3} alt={'logo'} className='w-20' />
        <div className='text-center text-[#E22726] font-normal text-[1.5rem] -mt-1 mb-2'>
          30 Year Experience
        </div>
        <p className='text-[15px] text-center mb-4'>
          Make Canada your permanent home! PR allows you to live, work{' '}
        </p>
      </div>
    </div>
  );
};

export default Component1;
