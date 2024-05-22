import React, { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import icon from '../../Assets/icon.png';
import Model from '../globalComponents/Model/Model';
const BoxComponents = ({ color, style, imageUrl, data }) => {
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className={` border-[1px] border-black h-[17rem] p-4  cursor-pointer bg-[${color}] ${
        hovered ? 'relative max-w-[36rem] z-[4]' : 'relative max-w-[18rem]'
      }`}
      style={{ ...style, backgroundColor: color }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <>
          <div className='flex items-center justify-center gap-4'>
            <div className='flex flex-col items-center justify-center pt-8 gap-2'>
              <img
                src={imageUrl}
                alt='logo'
                className='rounded-full border-[4px] border-black w-[6rem]'
              />
              <div className='text-[13px] font-semibold text-center w-full'>
                {data.name}
              </div>
              <div className='font-semibold tracking-wide text-[10px] text-center -mt-1'>
                {data.designation}
              </div>
            </div>
            <div className='w-[1px] h-40 bg-black mt-6'></div>
            <div className='text-[11px] mt-8 font-light font-mono w-[85%]'>
              {data.describe}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='flex items-start justify-start'>
            <div>
              <div className='text-2xl font-medium'>{data.name}</div>
              <div className='font-semibold tracking-wide text-[13px] pt-2'>
                {' '}
                {data.designation}
              </div>
            </div>
            <div className='text-2xl relative right-2 -top-2 ml-auto'>
              <MdArrowOutward />
            </div>
          </div>
          <div className='text-[11px] mt-8 font-light font-mono pr-2 mb-2'>
            {data.describe.slice(0, 250)}...
          </div>
          <div className='text-sm font-mono'>Read more...</div>
        </>
      )}
    </div>
  );
};

export default BoxComponents;
