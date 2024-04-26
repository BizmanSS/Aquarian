import React from 'react';

const Sidebar = () => {
  return (
    <div className='w-[6%] fixed z-40 h-screen bg-[#242525] right-0 top-10  flex flex-col items-center justify-center text-[15px]'>
      <div className='w-full h-[25%] text-white text-center flex items-center justify-center hover:bg-[#01F9E1] bg-[#242525] hover:text-black cursor-pointer transition ease-in delay-100 duration-300'>
        Free Assessment
      </div>
      <div className='w-full h-[25%] text-white text-center flex items-center justify-center hover:bg-[#01F9E1] hover:text-black cursor-pointer transition ease-in delay-100 duration-300'>
        Resources & Tools
      </div>

      <div className='w-full h-[25%] text-white text-center flex items-center justify-center hover:bg-[#01F9E1] hover:text-black cursor-pointer transition ease-in delay-100 duration-300'>
        Aquarian Services
      </div>
      <div className='w-full h-[25%] text-white text-center flex items-center justify-center hover:bg-[#01F9E1] hover:text-black cursor-pointer transition ease-in delay-100 duration-300'>
        Blog
      </div>
    </div>
  );
};

export default Sidebar;
