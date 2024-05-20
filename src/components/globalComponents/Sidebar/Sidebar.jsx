import React, { useState } from 'react';
import '../../../styles/Sidebar.css';
import { Link } from 'react-router-dom';
import clip1 from '../../../Assets/clipart/newsroom 2.png';
import clip2 from '../../../Assets/clipart/free assessment 2.png';
import clip3 from '../../../Assets/clipart/resources and tools 2.png';
import clip4 from '../../../Assets/clipart/aquarian services 2.png';
import clip5 from '../../../Assets/clipart/blog 2.png';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='parent w-full h-[25%] border-b border-gray-500 text-white text-center flex flex-col items-center justify-center hover:bg-[#01F9E1] bg-[#242525] hover:text-black cursor-pointer transition ease-in delay-100 duration-300'>
        <img src={clip2} alt='logo' className='w-6 h-6 sidebar-img' />
        <span>Free Assessment</span>
      </div>
      <div className='parent w-full h-[25%] border-b border-gray-500 text-white text-center flex flex-col items-center justify-center hover:bg-[#01F9E1] hover:text-black cursor-pointer transition ease-in delay-100 duration-300'>
        <img src={clip3} alt='logo' className='w-6 h-6 sidebar-img' />
        <span>Resources & Tools</span>
      </div>

      <div className='parent w-full h-[25%] border-b border-gray-500 text-white text-center flex flex-col items-center justify-center hover:bg-[#01F9E1] hover:text-black cursor-pointer transition ease-in delay-100 duration-300'>
        <img src={clip4} alt='logo' className='w-6 h-6 sidebar-img' />
        <span>Aquarian Services</span>
      </div>
      <Link
        to='/blogs'
        className='parent w-full h-[25%] border-b border-gray-500 text-white text-center flex flex-col items-center justify-center hover:bg-[#01F9E1] hover:text-black cursor-pointer transition ease-in delay-100 duration-300'
      >
        <img src={clip5} alt='logo' className='w-6 h-6 sidebar-img' />{' '}
        <span>Blog</span>
      </Link>
      <div className='parent w-full h-[25%] text-white text-center flex flex-col items-center justify-center hover:bg-[#01F9E1] hover:text-black cursor-pointer transition ease-in delay-100 duration-300'>
        <img src={clip1} alt='logo' className='w-6 h-6 sidebar-img' />
        <span>Newsroom</span>
      </div>
    </div>
  );
};

export default Sidebar;
