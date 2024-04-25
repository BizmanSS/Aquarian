import React, { useEffect, useRef, useState } from 'react';
import logo from '../../Assets/logo1.png';
import logo3 from '../../Assets/logo3.png';
import logo2 from '../../Assets/logo2.png';
import { RiMenu2Fill } from 'react-icons/ri';
import Instagram from '../../Assets/Instagram_logo.svg';
import Youtube from '../../Assets/youtube.png';
import Twitter from '../../Assets/Twitter.png';
import LinkedIn from '../../Assets/LinkedIn.png';
import facebook from '../../Assets/Facebook.png';

import { CiSearch } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';

const Header = () => {
  const [ismobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const menuRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    // Initial call to set mobile status on component mount
    handleResize();
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  const handleMenuClick = () => {
    menuRef.current.classList.add('scale-90');
    setTimeout(() => {
      menuRef.current.classList.remove('scale-90');
    }, 200);
  };
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  // console.log(activeItem);
  return (
    <div className='bg-[#000000] rounded-2xl h-[12rem] fixed z-20 top-0 flex flex-col items-center justify-start w-[100%]'>
      {!ismobile ? (
        <>
          {' '}
          <div className='bg-[#242525] fixed w-full h-[40px] text-[13px] z-10 flex items-center justify-end'>
            <div className='flex items-center justify-end mr-[7rem]'>
              <p className='px-4 py-1 text-[#939393] cursor-pointer'>
                <a href='/about-us'>About Us</a>
              </p>
              <p className='px-4 py-1 text-[#939393] cursor-pointer'>
                Contact Us
              </p>
              <div className='px-4 py-1 text-[#939393] flex items-center justify-center text-[0.6rem]'>
                <div className='mx-0 p-2'>
                  <img src={LinkedIn} className='cursor-pointer w-[1.2rem]' />
                </div>
                <div className='mx-0 p-2'>
                  <img src={facebook} className='cursor-pointer w-[1.2rem]' />
                </div>
                <div className='mx-0 p-2'>
                  <img src={Twitter} className='cursor-pointer w-[1.2rem]' />
                </div>
                <div className='mx-0 p-2'>
                  <img src={Instagram} className='cursor-pointer w-[1.2rem]' />
                </div>
                <div className='mx-0 p-2'>
                  <img src={Youtube} className='cursor-pointer w-[1.2rem]' />
                </div>
              </div>
            </div>
          </div>
          <div className='w-[100%] flex items-center justify-between mt-8 ml-10 relative'>
            <img
              src={logo}
              alt='logo'
              className='cursor-pointer w-[18rem] mr-10'
            />
            <ul
              className='flex items-center justify-center text-white text-[14px] gap-8 hover:bg-[#FFFEFE] py-3 px-4 absolute left-[22rem] rounded-t-xl hover:text-black overflow-hidden'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <li
                onClick={() => handleItemClick(0)}
                className={`cursor-pointer border-b-[3px] border-b-transparent transition ease-in delay-100 duration-300 ${
                  activeItem === 0 ? 'border-b-[#009889]' : ''
                }`}
              >
                <a href='/'>Home</a>
              </li>
              <li
                onClick={() => handleItemClick(1)}
                className={`cursor-pointer border-b-[3px] border-b-transparent transition ease-in delay-100 duration-300 ${
                  activeItem === 1 ? 'border-b-[#009889]' : ''
                }`}
              >
                Immigrate
              </li>
              <li
                onClick={() => handleItemClick(2)}
                className={`cursor-pointer border-b-[3px] border-b-transparent transition ease-in delay-100 duration-300 ${
                  activeItem === 2 ? 'border-b-[#009889]' : ''
                }`}
              >
                Work
              </li>
              <li
                onClick={() => handleItemClick(3)}
                className={`cursor-pointer border-b-[3px] border-b-transparent transition ease-in delay-100 duration-300 ${
                  activeItem === 3 ? 'border-b-[#009889]' : ''
                }`}
              >
                Study
              </li>
              <li
                onClick={() => handleItemClick(4)}
                className={`cursor-pointer border-b-[3px] border-b-transparent transition ease-in delay-100 duration-300 ${
                  activeItem === 4 ? 'border-b-[#009889]' : ''
                }`}
              >
                Invest
              </li>
              <li
                onClick={() => handleItemClick(5)}
                className={`cursor-pointer border-b-[3px] border-b-transparent transition ease-in delay-100 duration-300 ${
                  activeItem === 5 ? 'border-b-[#009889]' : ''
                }`}
              >
                Visit
              </li>
              <li
                onClick={() => handleItemClick(6)}
                className={`cursor-pointer border-b-[3px] border-b-transparent transition ease-in delay-100 duration-300 ${
                  activeItem === 6 ? 'border-b-[#009889]' : ''
                }`}
              >
                Employers
              </li>
              <li
                onClick={() => handleItemClick(7)}
                className={`cursor-pointer border-b-[3px] border-b-transparent transition ease-in delay-100 duration-300 ${
                  activeItem === 7 ? 'border-b-[#009889]' : ''
                }`}
              >
                Sponsorship
              </li>
            </ul>
            {isHovering && (
              <div className='h-[20rem] bg-[#FFFEFE] z-40 absolute top-[5.8rem] left-[22rem] w-[39.2rem] rounded-b-xl'>
                <div className='flex flex-col items-center justify-center'>
                  <div className='w-[90%] h-[1.2px] bg-[#009889]'></div>
                </div>
                <div className='flex items-center justify-between p-4'>
                  <div className=' w-[30%] h-[16rem] flex flex-col items-start justify-start mt-4'>
                    {activeItem === 0 && (
                      <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px] border-w-[50%]'>
                        Home
                      </div>
                    )}
                    {activeItem === 1 && (
                      <>
                        <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px] border-w-[50%]'>
                          Immigration
                        </div>
                        <div className='pl-6 text-[13px] text-left mt-4 '>
                          Make Canada your permanent home! PR allows you to
                          live, work and study in Canada{' '}
                        </div>
                        <div className='text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4'>
                          Explore Immigration{' '}
                          <IoIosArrowForward className='relative top-[1px]' />
                        </div>
                      </>
                    )}
                    {activeItem === 2 && (
                      <>
                        <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px] border-w-[50%]'>
                          Work
                        </div>
                        <div className='pl-6 text-[13px] text-left mt-4 '>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Blanditiis quos in nesciunt ratione autem ut
                          numquam voluptate
                        </div>
                        <div className='text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4'>
                          Explore Work{' '}
                          <IoIosArrowForward className='relative top-[1px]' />
                        </div>
                      </>
                    )}
                    {activeItem === 3 && (
                      <>
                        <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px] border-w-[50%]'>
                          Study
                        </div>
                        <div className='pl-6 text-[13px] text-left mt-4 '>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Blanditiis quos in nesciunt ratione autem ut
                          numquam voluptate
                        </div>
                        <div className='text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4'>
                          Explore Study{' '}
                          <IoIosArrowForward className='relative top-[1px]' />
                        </div>
                      </>
                    )}
                    {activeItem === 4 && (
                      <>
                        <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px] border-w-[50%]'>
                          Invest
                        </div>
                        <div className='pl-6 text-[13px] text-left mt-4 '>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Blanditiis quos in nesciunt ratione autem ut
                          numquam voluptate
                        </div>
                        <div className='text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4'>
                          Explore Invest{' '}
                          <IoIosArrowForward className='relative top-[1px]' />
                        </div>
                      </>
                    )}
                    {activeItem === 5 && (
                      <>
                        <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px] border-w-[50%]'>
                          Visit
                        </div>
                        <div className='pl-6 text-[13px] text-left mt-4 '>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Blanditiis quos in nesciunt ratione autem ut
                          numquam voluptate
                        </div>
                        <div className='text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4'>
                          Explore Visit{' '}
                          <IoIosArrowForward className='relative top-[1px]' />
                        </div>
                      </>
                    )}
                    {activeItem === 6 && (
                      <>
                        <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px] border-w-[50%]'>
                          Employers
                        </div>
                        <div className='pl-6 text-[13px] text-left mt-4 '>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Blanditiis quos in nesciunt ratione autem ut
                          numquam voluptate
                        </div>
                        <div className='text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4'>
                          Explore Employers{' '}
                          <IoIosArrowForward className='relative top-[1px]' />
                        </div>
                      </>
                    )}
                    {activeItem === 7 && (
                      <>
                        <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px] border-w-[50%]'>
                          Sponsorship
                        </div>
                        <div className='pl-6 text-[13px] text-left mt-4 '>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Blanditiis quos in nesciunt ratione autem ut
                          numquam voluptate
                        </div>
                        <div className='text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4'>
                          Explore Sponsorship{' '}
                          <IoIosArrowForward className='relative top-[1px]' />
                        </div>
                      </>
                    )}
                  </div>
                  <div className=' w-[38%] h-[17rem] flex items-center justify-center'></div>
                  <div className=' w-[30%] h-[17rem] flex items-center justify-center'></div>
                </div>
              </div>
            )}
            <div className='flex items-center justify-center gap-6 relative right-[7rem]'>
              <div className='cursor-pointer text-xl text-white text-[14px] '>
                <CiSearch />
              </div>
              <div className='cursor-pointer text-white text-[14px]'>
                <button className='bg-[#01F9E1] font-normal text-black px-4 py-2 rounded-[10px] text-[16px] hover:scale-105 transition ease-in delay-60 duration-150 mr-10'>
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='w-full flex items-center justify-center sm:justify-around mt-6 mr-14'>
          <div className='flex items-center justify-start'>
            <img src={logo2} alt='logo' className='cursor-pointer w-[4.2rem]' />
          </div>
          <div className='flex items-start justify-start'>
            <img src={logo3} alt='logo' className='cursor-pointer w-40' />
          </div>
          <div
            className='flex items-center justify-start p-2 bg-[#01F9E1] cursor-pointer rounded-lg transition ease-in delay-50 duration-200'
            onClick={handleMenuClick}
            ref={menuRef}
          >
            <RiMenu2Fill className='text-black text-3xl ' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
