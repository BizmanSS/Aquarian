import React, { useRef } from 'react';
import NewsCard from './NewsCard';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
const Component4 = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };
  // const slideLeft = () => {
  //   const slider = document.getElementById('slider');
  //   slider.scrollLeft -= slider.scrollLeft - 300;
  // };
  // const slideRight = () => {
  //   const slider = document.getElementById('slider');
  //   slider.scrollLeft -= slider.scrollLeft + 300;
  // };

  return (
    <div className='h-auto mt-[7rem] pt-20 px-20 pb-10 bg-gradient-to-r from-white to-slate-50'>
      <div className='w-[70%]'>
        <div className='text-[3rem] font-semibold mx-[3.8rem] my-4'>
          Latest <span className='text-[#019989]'>News</span>
        </div>
      </div>
      <div className='flex flex-col '>
        <div
          ref={sliderRef}
          id='slider'
          className='overflow-x-scroll scroll scroll-smooth flex items-center justify-around w-full gap-10'
        >
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <div className='flex items-center justify-end w-full -ml-10 mt-4'>
          <MdChevronLeft
            size={30}
            onClick={slideLeft}
            className='cursor-pointer hover:scale-110 mr-8 mt-1 text-black shadow-lg flex items-center bg-white justify-between rounded-[10px] transition ease-in delay-40 duration-200'
          />
          <MdChevronRight
            size={30}
            onClick={slideRight}
            className='cursor-pointer hover:scale-110 mr-8 mt-1 text-black shadow-lg bg-[#00F8E1] flex items-center justify-between rounded-[10px] transition ease-in delay-40 duration-200'
          />
        </div>
      </div>
    </div>
  );
};

export default Component4;
