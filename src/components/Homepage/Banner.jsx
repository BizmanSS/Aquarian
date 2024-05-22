import React, { useState, useRef, useEffect } from 'react';
import banner from '../../Assets/video/banner.mp4';
import thumbnail from '../../Assets/banner.png';

const Banner = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPauseButton, setShowPauseButton] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setShowPauseButton(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  const togglePlay = () => {
    const video = videoRef.current;

    if (video.paused === null) {
      return;
    }
    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setShowPauseButton(true);
    } else {
      video.pause();
      setIsPlaying(false);
      setShowPauseButton(false);
    }
  };

  const onVideoEnd = () => {
    // setShowThumbnail(true);
    setIsPlaying(false);
  };

  return (
    <div className='w-[94.5%] flex flex-col items-center justify-center mt-[15rem] -mb-[4rem]  '>
      {!showThumbnail ? (
        <video
          ref={videoRef}
          autoPlay
          // poster={thumbnail}
          muted
          className={`relative -top-40 -left-[2px]  h-auto rounded-3xl`}
          onClick={togglePlay}
          onEnded={onVideoEnd}
        >
          <source src={banner} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={thumbnail} alt='Thumbnail' className='w-[90%]' />
      )}
      <div className='flex flex-col items-center justify-center gap-4 absolute left-[10rem] top-[24rem]'>
        <div className=' text-white px-4 text-lg md:text-[3.5rem] font-bold mb-3'>
          Our goal is to help <br /> <br /> you achieve yours
        </div>
        <button className='mr-10 bg-black text-white px-4 md:px-10 py-3 rounded-xl text-sm md:text-lg border-[2px] border-[#01F9E1] font-bold transition ease-in-out delay-70 hover:scale-y-[1.1] hover:scale-x-[1.1] duration-300'>
          I want to immigrate permanently to Canada
        </button>
        <div className='flex items-center justify-center gap-4'>
          {' '}
          <button className='mr-6 bg-transparent text-white px-4 md:px-10 py-3 rounded-xl text-sm md:text-lg border-[2px] border-[#01F9E1] font-bold transition ease-in-out delay-70 hover:scale-y-[1.1] hover:scale-x-[1.1] duration-300'>
            ⁠I want to study
          </button>
          <button className='mr-10 bg-transparent text-white px-4 md:px-12 py-3 rounded-xl text-sm md:text-lg border-[2px] border-[#01F9E1] font-bold transition ease-in-out delay-70 hover:scale-y-[1.1] hover:scale-x-[1.1] duration-300'>
            I want to work
          </button>
        </div>
      </div>
      {/* {!isPlaying ? (
        <button
          className='absolute transform  bg-transparent text-white px-3 py-3 rounded-full font-bold transition ease-in-out delay-70  hover:scale-[1.2] hover:bg-black duration-300'
          onClick={togglePlay}
        >
          <FaPlayCircle className='text-4xl' />
        </button>
      ) : (
        showPauseButton && (
          <button
            className='absolute transform  bg-transparent text-white px-3 py-3 rounded-full font-bold transition ease-in-out delay-70  hover:scale-[1.2] hover:bg-black duration-300'
            onClick={togglePlay}
          >
            <FaPauseCircle className='text-4xl' />
          </button>
        )
      )} */}
    </div>
  );
};

export default Banner;
