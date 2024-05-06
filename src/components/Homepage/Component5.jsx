import React from 'react';
import img1 from '../../Assets/image 37.png';
import img2 from '../../Assets/image 38.png';
import img3 from '../../Assets/image 39.png';
import img4 from '../../Assets/image 40.png';
import img5 from '../../Assets/image 41.png';
import img6 from '../../Assets/Mask group.png';
import img7 from '../../Assets/image 42.png';

import BoxComponents from './BoxComponents';
import hoveredimg from '../../Assets/Rectangle 62.png';
import hoveredimg2 from '../../Assets/Rectangle 63.png';
import { PaginationNav1Presentation } from '../Pagination/Pagination';

const Component5 = () => {
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
        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#FEFFFE' }}
          imageUrl={hoveredimg}
        />
        <BoxComponents
          color={'#01F8E0'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg2}
        />
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
        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg}
        />
        <BoxComponents
          color={'#01F8E0'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg2}
        />
        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg}
        />
      </div>
      <div className='flex items-center justify-end gap-4 my-4'>
        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg}
        />
        <BoxComponents
          color={'#01F8E0'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg2}
        />
        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg}
        />
        <BoxComponents
          color={'#01F8E0'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg2}
        />
      </div>

      <div className='w-full flex items-center justify-end  gap-2 cursor-pointer'>
        <PaginationNav1Presentation />
      </div>
    </div>
  );
};

export default Component5;
