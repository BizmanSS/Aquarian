import React from 'react';
import banner from '../../Assets/Rectangle 133.png';
import { Link } from 'react-router-dom';

const Component3 = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-[70%]'>
        <div className='text-[3rem] font-semibold'>
          Why Choose <span className='text-[#019989]'>Us</span>
        </div>
        <div className='flex items-center justify-center'>
          <div className='w-[600px]'>
            <img
              src={banner}
              alt='banner'
              className='w-[95%] mt-[3rem] rounded-3xl'
            />
          </div>
          <div className='bg-[#343436] w-[60%] rounded-3xl px-14 py-12 relative top-[9rem] right-[6rem]'>
            <div className='text-[#FEFFFE] my-[4rem] text-xl'>
              <span className='text-[#019989]'>Aquarian</span> is a Canadian
              immigration Firm.
            </div>
            <div className='text-[#EEEEEE] mt-10 mb-20 font-thin text-lg pr-14'>
              With an absolute commitment to efficiency and transparency,
              Aquarian Immigration offers an all-encompassing and revolutionary
              immigration service through our certified team of industry
              experts, while forging lifelong relationships with our clients.
            </div>
            <div className='w-full flex items-center justify-between pr-10 mb-10'>
              <button className='bg-[#01F9E1] text-black px-8 py-3 rounded-sm text-[15px]'>
                Book Now
              </button>

              <button className='bg-[#3E3E41] text-[#EEEEEE] px-8 py-3 rounded-sm text-[15px]'>
                <a href='/about-us'>About Us</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component3;
