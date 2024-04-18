import React from 'react';
import banner from '../Assets/banner.png';
const Banner = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center -mb-[8rem] -ml-[2.8rem]'>
      <img src={banner} alt='banner' className='relative -top-40 w-[90%]' />
      <button className='relative -top-80 bg-transparent text-white px-16 py-3 rounded-xl text-lg border-[2px] border-[#01F9E1] font-bold transition ease-in-out delay-70 hover:scale-y-[1.1] hover:scale-x-[1.2] hover:bg-black duration-300'>
        Start Your Journey NOW!!!
      </button>
    </div>
  );
};

export default Banner;
