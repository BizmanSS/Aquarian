import React from 'react';

const CardElement = ({ data }) => {
  return (
    <div className='max-w-[21rem] rounded-2xl overflow-hidden border-[2px] border-[#939293] hover:border-transparent hover:bg-[#55FBEB] hover:shadow-lg mb-10 transition ease-in delay-100 duration-300'>
      <img className='w-full p-2' src={data.img} alt='amenities' />
      <div className='px-6 py-4'>
        <div className='font-semibold text-xl mb-2 text-[#009889] flex items-center justify-center'>
          {data.title}
        </div>
        <p className='text-gray-700 text-[13px] flex items-center justify-center mt-2 mb-6 px-6 py-4'>
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default CardElement;
