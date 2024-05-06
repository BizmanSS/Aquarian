import React from 'react';
import banner from '../../../Assets/Rectangle 156.png';
import CrsForm from './CrsForm';
const CrsCalculator = () => {
  return (
    <>
    <div className='flex flex-col items-start justify-center w-[94%]'>
      <div className='flex mt-[6.9rem] w-[100%] '>
        <div className='w-full bg-banner text-white bg-cover bg-no-repeat bg-center h-[500px]'>
            <div className='flex flex-col items-start justify-between px-20'>
              <p className='mb-20 mt-10 text-sm'>{`Home > CLB Score Calculator`}</p>{' '}
              <div className='text-[50px] font-normal font-serif leading-normal '>
                CRS Score<br />
                Calculator
              </div>
              <p className='text-[#D3D3D3] text-[18px] leading-normal pt-6 w-full'>
                The Federal Skilled Worker (FSW) program is one of the three
                programs contained within Canada’s Express{' '}
              </p>
            </div>
        </div>
      </div>
    </div>
    <CrsForm/>
    </>
  );
};

export default CrsCalculator;
