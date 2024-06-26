import React from 'react';
import img1 from '../../Assets/image 43.png';
import img3 from '../../Assets/image 56.png';
const Component1 = () => {
  return (
    <div className='w-[97%] flex items-center justify-center gap-[4rem] relative -top-[4rem] flex-wrap'>
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
        <img src={img1} alt={'logo'} className='w-[13rem] -mt-2' />

        <p className='text-[15px] mt-2 text-center mb-4'>
          Our RCIC certified experts will provide you with the best counsel for
          your immigration journey.
        </p>
      </div>
      <div className='w-[18rem] h-[17rem] flex flex-col items-center justify-center px-8 py-2 rounded-2xl border-[1px] border-[#38AB9F] hover:border-transparent hover:scale-105 shadow-xl transition ease-in delay-50 duration-300 cursor-pointer'>
        <img src={img3} alt={'logo'} className='w-[7rem]' />

        <p className='text-[15px] mt-2 text-center mb-4'>
          With 30+ years of experience, we aim to continually provide aspiring
          immigrants with outstanding services.
        </p>
      </div>
    </div>
  );
};

export default Component1;
