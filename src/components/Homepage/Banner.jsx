import React, { useState, useRef, useEffect } from "react";
import banner from "../../Assets/video/banner.mp4";
import thumbnail from "../../Assets/banner.png";

const Banner = () => {
  const [isPlaying, setIsPlaying] = useState(false);
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
    setShowThumbnail(true);
    setIsPlaying(false);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-[8rem] -mb-[4rem] -ml-[2.8rem]">
      {!showThumbnail ? (
        <video
          ref={videoRef}
          loop
          autoPlay
          // poster={thumbnail}
          muted
          className="relative -top-40 -left-[2px] w-[80%] h-auto rounded-3xl" // Set height to auto to maintain aspect ratio
          onClick={togglePlay}
          // onEnded={onVideoEnd}
        >
          <source src={banner} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={thumbnail} alt="Thumbnail" className="w-[90%]" />
      )}
      <button className="relative -top-[19rem] bg-black text-white px-16 py-3 rounded-xl text-lg border-[2px] border-[#01F9E1] font-bold transition ease-in-out delay-70 hover:scale-y-[1.1] hover:scale-x-[1.2]  duration-300">
        Start Your Journey NOW!!!
      </button>
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
