import React from 'react';
import logo from '../../../Assets/logo2.png';
import logo2 from '../../../Assets/image 43.png';
import logo4 from '../../../Assets/logo3.png';
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
  FaThreads,
} from 'react-icons/fa6';

import logo3 from '../../../Assets/AQUARIAN.png';
import '../../../styles/AboutUs.css';
import logoccic from '../../../Assets/image52.png';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='flex items-start justify-around text-white pt-20 border-b-[1px] border-gray-500 pb-6'>
        <div className='flex items-start justify-center gap-20'>
          <div className='flex flex-col items-center justify-center'>
            <img src={logo} alt='logo' className='w-40' />
            <img src={logo4} alt='logo' className='w-[10rem] -mt-6 -mr-2' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img src={logoccic} alt='logo' className='w-[15rem]' />
            <div className='text-sm text-[#B4B5B4] text-left mt-8'>
              <h1 className='AddressHeading'>Address</h1>
              <a
                href='https://www.google.com/maps/place/Aquarian+Immigration+Services/@28.4082328,77.070377,15z/data=!4m6!3m5!1s0x390d23f44c7f8021:0x589c7dd32b5c2779!8m2!3d28.4082328!4d77.070377!16s%2Fg%2F11vqm85pq7?entry=ttu'
                className='address'
              >
                122A, Suncity Success Tower,
                <br /> Sector 65, Gurugram,
                <br /> Haryana 122102
              </a>
            </div>
          </div>
        </div>
        <ul className='text-[#B4B5B4]'>
          Library
          <br />
          <br />
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            Self Development
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            Psychology
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            Classics
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            Romance
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            Bussiness
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            All genres
          </li>
        </ul>
        <ul className='text-[#B4B5B4]'>
          Bookmate
          <br />
          <br />
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            Subscribe
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            Subscription as a gift
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            Podcast
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            BM Journel
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            Help
          </li>
        </ul>
        <ul className='text-[#B4B5B4]'>
          Follow
          <br />
          <br />
          <a
            href='https://www.linkedin.com/company/aquarian-immigration-services/'
            className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href='https://www.facebook.com/people/Aquarian-Immigration/61558242973262/'
            className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'
          >
            <FaFacebookF /> Facebook
          </a>
          <a
            href='https://www.threads.net/@aquarian_immigration'
            className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'
          >
            <FaThreads /> Thread
          </a>
          <a
            href='https://www.instagram.com/aquarian_immigration/'
            className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href=''
            className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'
          >
            <FaYoutube /> Youtube
          </a>
        </ul>
      </div>
      <div className='flex items-center justify-between text-[#B4B5B4] text-sm mt-4 px-4'>
        <div> Copyright © 2021 Bookmate. All rights reserved.</div>
        <div className='flex items-center justify-center gap-10 mr-10'>
          <a href='/about-us'>About</a>
          <div>Jobs</div>
          <a href='/contact-us'>Contact</a>
          <div>Legal</div>
          <div>For publishers & authors</div>
        </div>
      </div>
      <div>
        <img className='w-[90%] block mt-8 mx-auto ' src={logo3} alt='logo3' />
      </div>
    </div>
  );
};

export default Footer;
