import React from 'react';
import NewsCard from './NewsCard';

const Component4 = () => {
  return (
    <div className='h-auto mt-10 p-20'>
      <div className='w-[70%]'>
        <div className='text-[3rem] font-semibold mx-[3.8rem] my-4'>
          Latest <span className='text-[#019989]'>News</span>
        </div>
      </div>
      <div className='flex items-center justify-around'>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default Component4;
