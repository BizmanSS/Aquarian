import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const BoxComponents = ({ color }) => {
  return (
    <div
      className={`border-[1px] border-black max-w-[18rem] p-4 bg-[${color}] `}
    >
      <div className='flex items-center justify-center'>
        <div className='text-2xl font-medium'>I WANT TO IMMIGRATE</div>
        <div className='text-2xl relative right-2 -top-2'>
          <MdArrowOutward />
        </div>
      </div>
      <div className='text-[11px] mt-10 font-light font-mono pr-2 mb-2'>
        The Express Entry system involves submitting an online profile that is
        scored by Canada’s Comprehensive Ranking System (CRS). To submit
        an Express Entry profile, you must first be eligible under one of
        Canada’s above three federal streams.
      </div>
    </div>
  );
};

export default BoxComponents;
