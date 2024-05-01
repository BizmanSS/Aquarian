import React from 'react';
import banner from '../../../Assets/Rectangle 156.png';
const ClbCalculator = () => {
  return (
    <div className='flex flex-col items-start justify-center w-[94%]'>
      <div className='mt-[6.9rem]'>
        <div className='w-full bg-banner text-white bg-cover bg-no-repeat h-[500px]'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex flex-col items-start justify-between px-20'>
              <p className='mb-20 mt-10 text-sm'>{`Home > CLB Score Calculator`}</p>{' '}
              <div className='text-[50px] font-normal font-serif leading-normal '>
                CLB Score <br />
                Calculator
              </div>
              <p className='text-[#D3D3D3] text-[18px] leading-normal pt-6 w-full'>
                The Federal Skilled Worker (FSW) program is one of the three
                programs contained within Canada’s Express{' '}
              </p>
            </div>
            <div className='bg-white w-auto h-auto mt-[7rem] mr-[6rem] py-3 rounded-2xl'>
              <div class='px-4 pt-4'>
                <input
                  type='text'
                  class='border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-full p-2.5 outline-none'
                  placeholder='IELTS English'
                />
              </div>
              <div class='px-4 pt-4 flex items-center justify-between -mt-3 gap-4'>
                <input
                  type='text'
                  class='border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-full p-2.5 outline-none'
                  placeholder='Reading'
                />

                <input
                  type='text'
                  class='border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-full p-2.5 outline-none'
                  placeholder='Listening'
                />
              </div>
              <div class='px-4 pt-4 flex items-center justify-between -mt-3 gap-4'>
                <input
                  type='text'
                  class='border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-full p-2.5 outline-none'
                  placeholder='Writing'
                />

                <input
                  type='text'
                  class='border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-full p-2.5 outline-none'
                  placeholder='Speaking'
                />
              </div>
              <div className='flex flex-col items-center justify-center px-4'>
                {' '}
                <button className='bg-[#019989] font-normal px-12 py-2.5 rounded-[15px] text-[17px] hover:scale-105 transition ease-in delay-60 duration-150'>{`Calculate>`}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>Result</div>
    </div>
  );
};

export default ClbCalculator;
