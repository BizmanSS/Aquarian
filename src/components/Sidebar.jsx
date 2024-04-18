import React from 'react';

const Sidebar = () => {
  return (
    <div className='w-[6.4rem] fixed h-screen bg-[#242525] right-0 rounded-r-3xl flex flex-col items-center justify-center text-[15px]'>
      <div className='w-full h-[25%] text-black text-center flex items-center rounded-tr-3xl justify-center hover:bg-[#242525] bg-[#01F9E1] hover:text-white cursor-pointer transition ease-in delay-100 duration-300'>
        Free Assessment
      </div>
      <div className='w-full h-[25%] text-white text-center flex items-center justify-center hover:bg-[#01F9E1] hover:text-black cursor-pointer transition ease-in delay-100 duration-300'>
        Resources & Tools
      </div>
      <div className='w-full h-[25%] text-white text-center flex items-center justify-center hover:bg-[#01F9E1] hover:text-black cursor-pointer transition ease-in delay-100 duration-300'>
        Podcasts
      </div>
      <div className='w-full h-[25%] text-white text-center flex items-center justify-center hover:bg-[#01F9E1] hover:text-black cursor-pointer transition ease-in delay-100 duration-300'>
        Aquarian Services
      </div>
    </div>
  );
};

export default Sidebar;
