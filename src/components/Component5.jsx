import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import img1 from '../Assets/image 37.png';
import img2 from '../Assets/image 38.png';
import img3 from '../Assets/image 39.png';
import img4 from '../Assets/image 40.png';
import img5 from '../Assets/image 41.png';
import img6 from '../Assets/Mask group.png';
import img7 from '../Assets/image 42.png';
import { FaArrowRight } from 'react-icons/fa6';

const Component5 = () => {
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
  return (
    <div className='w-[99%] h-auto px-[8rem]'>
      <div className='w-[90%] flex items-center justify-center'>
        <div className='text-[3rem] font-semibold mb-10'>
          Our <span className='text-[#019989]'>Testimonials</span>
        </div>
      </div>
      <div className='flex items-center justify-end gap-4 my-4 relative'>
        <div className='absolute top-0 flex items-center justify-center -left-20'>
          <img src={img2} alt='logo' className='w-[7rem] relative -top-20' />
          <img
            src={img1}
            alt='logo'
            className='w-[7.5rem] relative -top-[4rem] left-20'
          />
          <img
            src={img6}
            alt='logo'
            className='w-[9rem] relative top-0 left-[8rem]'
          />
          <img
            src={img3}
            alt='logo'
            className='w-[8rem] relative top-[7rem] right-[10rem]'
          />
          <img
            src={img4}
            alt='logo'
            className='w-[7rem] relative top-[5rem] left-[1rem]'
          />
        </div>
        <BoxComponents color={'#FEFFFE'} />
        <BoxComponents color={'#01F8E0'} />
      </div>
      <div className='flex items-center justify-end gap-4 my-4 relative'>
        <div className='absolute top-0 flex items-center justify-center -left-20'>
          {' '}
          <img
            src={img5}
            alt='logo'
            className='w-[8rem] relative top-[0rem] left-[3rem]'
          />
          <img
            src={img7}
            alt='logo'
            className='w-[6rem] relative top-[5rem] left-[6rem]'
          />
        </div>
        <BoxComponents color={'#FEFFFE'} />
        <BoxComponents color={'#01F8E0'} />
        <BoxComponents color={'#FEFFFE'} />
      </div>
      <div className='flex items-center justify-end gap-4 my-4'>
        <BoxComponents color={'#FEFFFE'} />
        <BoxComponents color={'#01F8E0'} />
        <BoxComponents color={'#FEFFFE'} />
        <BoxComponents color={'#01F8E0'} />
      </div>
      <button className='w-full flex items-center justify-end text-[#019989] gap-2 cursor-pointer'>
        Know More <FaArrowRight />
      </button>
    </div>
  );
};

export default Component5;
