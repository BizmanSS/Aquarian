import React, { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import icon from '../../Assets/icon.png';
import Model from '../globalComponents/Model/Model';
const BoxComponents = ({ color, style, imageUrl }) => {
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
      className={`border-[1px] border-black max-w-[18rem] p-4 relative cursor-pointer bg-[${color}] `}
      style={{ ...style, backgroundColor: color }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && imageUrl && (
        <div className='absolute top-0 left-0 w-full h-full'>
          <img
            src={imageUrl}
            alt='hoveredImage'
            className='w-full h-full object-cover '
          />
          <img
            src={icon}
            alt='hoveredImage'
            className='absolute bottom-4 right-4 w-[3rem] hover:scale-105'
            onClick={openModal}
          />
          <Model showModal={showModal} setShowModal={setShowModal} />
        </div>
      )}
      <div className='flex items-center justify-center'>
        <div className='text-2xl font-medium'>I WANT TO IMMIGRATE</div>
        {!hovered && (
          <div className='text-2xl relative right-2 -top-2'>
            <MdArrowOutward />
          </div>
        )}
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
