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
          <Model
            showModal={showModal}
            setShowModal={setShowModal}
            data={data}
          />
        </div>
      )}
      <div className='flex items-start justify-start'>
        <div>
          <div className='text-2xl font-medium'>{data.name}</div>
          <div className='font-semibold tracking-wide text-sm pt-2'>
            {' '}
            {data.designation}
          </div>
        </div>
        {!hovered && (
          <div className='text-2xl relative right-2 -top-2 ml-auto'>
            <MdArrowOutward />
          </div>
        )}
      </div>
      <div className='text-[11px] mt-8 font-light font-mono pr-2 mb-2'>
        {data.describe.slice(0, 250)}...
      </div>
      <div className='text-sm font-mono'>Read more...</div>
    </div>
  );
};

export default BoxComponents;
