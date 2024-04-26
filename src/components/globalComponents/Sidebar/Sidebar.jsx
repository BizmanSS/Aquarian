import React from 'react';
import '../../../styles/Sidebar.css';
const Sidebar = () => {
  return (
    <div className='sidebar'>
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
