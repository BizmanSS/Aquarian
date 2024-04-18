import React from 'react';
import img1 from '../Assets/cardimg1.png';
const NewsCard = () => {
  return (
    <div class='w-full max-w-[21rem] overflow-hidden bg-slate-50 rounded-lg shadow-lg py-4 px-2'>
      <img
        class='object-cover object-center w-full h-[11rem]'
        src={img1}
        alt='cardImage'
      />
      <div className='w-full flex items-center justify-end relative -top-[1.3rem]'>
        <div class='w-auto max-w-[11rem] flex items-center px-6 py-3 bg-white'>
          <h1 class='mx-3 text-sm font-thin text-black'>22 MAR. 2024</h1>
        </div>
      </div>

      <div class='px-6 pb-4'>
        <p class='py-2 text-gray-500 text-sm'>PROVINCIAL NOMINEE PROGRAM</p>
        <h1 class='text-lg font-semibold text-gray-800'>
          Alberta, British Columbia, Ontario and Prince Edward Island Issued PNP
          Invitations!
        </h1>

        <p class='py-2 text-gray-700'>
          Discover insights into the results of the Provincial Nominee Program
          (PNP) draws held accross Canada during the third week of March 2024.
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='border-[1px] border-gray-400 px-4 py-2 cursor-pointer font-normal text-sm max-w-[15rem] mx-6'>
          Alberta PNP Draw
        </div>
        <div className='border-[1px] border-gray-400 px-4 py-2 cursor-pointer font-normal text-sm max-w-[15rem] mx-6'>
          Alberta PNP Draw
        </div>
        <div className='border-[1px] border-gray-400 px-4 py-2 cursor-pointer font-normal text-sm max-w-[15rem] mx-6'>
          Alberta PNP Draw
        </div>
        <div className='border-[1px] border-gray-400 px-4 py-2 cursor-pointer font-normal text-sm max-w-[15rem] mx-6'>
          Alberta PNP Draw
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
