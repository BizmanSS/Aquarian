import React, { useState, useEffect } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import icon from '../../Assets/icon.png';
import Model from '../globalComponents/Model/Model';

const BoxComponents = ({ color, style, imageUrl, data }) => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (hovered) {
      const timeoutId = setTimeout(() => setVisible(true), 30);
      return () => clearTimeout(timeoutId);
    } else {
      setVisible(false);
    }
  }, [hovered]);

  return (
    <div
      className={`border-[1px] border-black h-[16rem] p-4 cursor-pointer transition ease-in delay-100 duration-300 ${
        hovered ? 'z-[4]' : 'z-[4]'
      }`}
      style={{
        ...style,
        backgroundColor: color,
        maxWidth: hovered ? '32rem' : '17rem',
        transition: 'all 0.4s ease-in',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <>
          <div className='flex items-center justify-center gap-4'>
            <div className='flex flex-col items-center justify-center gap-2'>
              <img
                src={imageUrl}
                alt='logo'
                style={{
                  opacity: visible ? 1 : 0,
                  transition: 'opacity 0.3s ease-in 0.3s',
                }}
                className='rounded-full border-[4px] border-black w-[6rem]'
              />
              <div
                style={{
                  opacity: visible ? 0 : 0,
                  transition: 'opacity 0.3s ease-in 0.3s',
                }}
                className='hidden text-[13px] font-semibold text-center w-full'
              >
                {data.name}
              </div>
              <div
                style={{
                  opacity: visible ? 1 : 0,
                  transition: 'opacity 0.3s ease-in 0.3s',
                }}
                className='text-[13px] font-semibold text-center w-full'
              >
                {data.name}
              </div>
              <div
                style={{
                  opacity: visible ? 1 : 0,
                  transition: 'opacity 0.3s ease-in 0.3s',
                }}
                className='font-semibold tracking-tight text-[10px] text-center -mt-1'
              >
                {data.designation}
              </div>
            </div>

            <div
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.3s ease-in 0.3s',
              }}
              className='hidden w-[1px] h-40 bg-black mt-6'
            ></div>
            <div
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.3s ease-in 0.3s',
              }}
              className='w-[1px] h-40 bg-black mt-6'
            ></div>
            <div
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.3s ease-in 0.3s',
              }}
              className='text-[11px] font-light font-mono w-full'
            >
              {data.describe}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='flex items-start justify-start'>
            <div>
              <div className='text-2xl font-medium'>{data.name}</div>
              <div className='font-semibold tracking-wide text-[12px] pt-2'>
                {data.designation}
              </div>
            </div>
            <div className='text-2xl relative right-2 -top-2 ml-auto'>
              <MdArrowOutward />
            </div>
          </div>
          <div className='text-[11px] mt-4 font-light font-mono pr-2'>
            {data.describe.slice(0, 230)}...
          </div>
          {/* <div className='text-sm font-mono'>Read more...</div> */}
        </>
      )}
    </div>
  );
};

export default BoxComponents;
