import React from 'react';
import img1 from '../../Assets/image 37.png';
import img2 from '../../Assets/image 38.png';
import img3 from '../../Assets/image 39.png';
import img4 from '../../Assets/image 40.png';
import img5 from '../../Assets/image 41.png';
import img6 from '../../Assets/Mask group.png';
import img7 from '../../Assets/image 42.png';
import BoxComponents from './BoxComponents';
import hoveredimg from '../../Assets/Rectangle 62.png';
import hoveredimg2 from '../../Assets/Rectangle 63.png';
import { PaginationNav1Presentation } from '../Pagination/Pagination';

const Component5 = () => {
  const data = [
    {
      name: 'Santosh Mahich',
      country: 'India',
      designation: 'Provincial nominee immigration',
      describe:
        'The care shown by the team at Aquarian Immigration helped me turn my dream of immigrating to Canada into reality. As I had never done this before, I had no idea where to start my application and what all am I supposed to do. They patiently clarified all my doubts and counseled me on how to prepare a strong profile that helped me to stand out from other applicants.Throughout the process, they gave the best advice and helped me handle all the formalities. I would highly recommend their top services to anyone looking to settle in Canada as I myself have had a fantastic experience with them!',
    },
    {
      name: 'Harshita',
      country: 'India',
      designation: 'Study permit',
      describe:
        'I cannot be more grateful to Aquarian Immigration for their support and guidance in helping me obtain my study permit for Canada. The procedure altogether was overwhelming but through their expertise and experience in the field made all the difference. I lacked clarity on which course I wanted to pursue and which city would be the right fit for me. Through their consistent availability and patience it all went very smoothly and now I look forward to studying in Canada.',
    },
    {
      name: 'Arihant',
      country: 'India',
      designation: 'Study permit',
      describe:
        'Aquarian Immigration’s round the clock availability helped me navigate through all the necessary applications to get my study permit. I had my concerns about how I will adjust to this new life in Canada, but their follow up services allowed me to live up to my full potential here. My experience with them was exceptional and I strongly recommend AI to anyone who wishes to move to Canada.',
    },
    {
      name: 'Mamta Saini',
      country: 'India',
      designation: 'Work permit',
      describe:
        'Aquarian Immigration provided me with constant support and guidance so I could get my work permit for Canada. I was under all the formalities and could not manage everything until I availed their services. They were completely available from getting the LMIA to getting my visa stamped and if it wasn’t for their amazing services, I would not have been able to obtain the work permit. Thank you, Aquarian Immigration, for all your assistance and hard work to help me achieve my dream.',
    },
    {
      name: 'Gurpreet Singh',
      country: 'India',
      designation: 'Work permit',
      describe:
        'Tanpreet at Aquarian Immigration counseled me and helped me understand all the requirements I needed to fulfill to obtain my work permit. Throughout the procedure, she provided me with the appropriate knowledge and tips so I could easily complete all the paperwork. Thanks to Aquarian Immigration’s decades of experience and guidance at every step of the way, I now have an incredible job in Canada and am living my dream.',
    },
    {
      name: 'Sadhavi',
      country: 'India',
      designation: 'Sponsorship visa',
      describe:
        'Since I got married it was getting difficult for me to stay in India alone without my husband as he was a PR in Canada, and with his job it was difficult for him to stayback in India with me. After which I came across Aquarian immigration services. They were very patient and responsive to my needs, they explained each and every step of my immigration process and filed my application with all the details and in no time I received my sponsorship visa and settled in Canada with my husband. I highly recommend them.',
    },
    {
      name: 'Sumit Punchi',
      country: 'India',
      designation: 'Express Entry immigration',
      describe:
        "Aquarian Immigration is an outstanding company to work with if you're considering immigration to Canada. I must mention that they have exceptional knowledge of the subject and the services provided by them aligned with my goals and eligibility. Services provided by them were in depth analysis of my eligibility through their intelligence system, guidance on the documentation process, timely delivery of the documents within the given time frame. I truly really appreciate their guidance especially during the documentation process. What stood out for me the most was how they took the time to understand my backstory and even after my arrival they helped me with some tips and tricks which were very helpful for me to adjust to my new life in Canada.",
    },
    {
      name: 'Jatinder Dhir',
      country: 'India',
      designation: 'Provincial nominee immigration',
      describe:
        'Before I came across Aquarian Immigration, my previous consultant lacked the required expertise which led to spoiling my application. Fortunately, I presented my case to Mr. Puneet at AI. He helped me recover from this damage by starting my case from scratch and preparing me for the review. He ensured that every possible question was addressed and provided effective tips. Even after the turbulent journey with my application, with his help I successfully received my PNP for Canada. I will forever be thankful to their relentless support.',
    },
    {
      name: 'Ravjot',
      country: 'Canada',
      designation: 'Business visa',
      describe:
        "I am so incredibly happy with the service provided by Aquarian Immigration in helping me get my business visa for Canada. I had no idea about the application process and the documents required when I first went to their office. They were so patient with my questions and concerns and made me feel confident in the application. With their help, I was able to get my business visa approved without any problems. I couldn't have done it without their incredible support and expertise. I highly recommend them and am forever thankful to Aquarian Immigration!",
    },
  ];

  return (
    <div className='w-[99%] h-auto px-[8rem]'>
      <div className='w-[90%] flex items-center justify-center'>
        <div className='text-[3rem] font-semibold mb-10'>
          Our <span className='text-[#019989]'>Testimonials</span>
        </div>
      </div>
      <div className='flex items-center justify-end gap-4 my-4 relative'>
        <div className='absolute top-0 flex items-center justify-center -left-20'>
          <img src={img2} alt='logo' className='w-[7rem] relative -top-20' />
          <img
            src={img1}
            alt='logo'
            className='w-[7.5rem] relative -top-[4rem] left-20'
          />
          <img
            src={img6}
            alt='logo'
            className='w-[9rem] relative top-0 left-[8rem]'
          />
          <img
            src={img3}
            alt='logo'
            className='w-[8rem] relative top-[7rem] right-[10rem]'
          />
          <img
            src={img4}
            alt='logo'
            className='w-[7rem] relative top-[5rem] left-[1rem]'
          />
        </div>
        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#FEFFFE' }}
          imageUrl={hoveredimg}
          data={data[0]}
        />
        <BoxComponents
          color={'#01F8E0'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg2}
          data={data[1]}
        />
      </div>
      <div className='flex items-center justify-end gap-4 my-4 relative'>
        <div className='absolute top-0 flex items-center justify-center -left-20'>
          {' '}
          <img
            src={img5}
            alt='logo'
            className='w-[8rem] relative top-[0rem] left-[3rem]'
          />
          <img
            src={img7}
            alt='logo'
            className='w-[6rem] relative top-[5rem] left-[6rem]'
          />
        </div>
        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg}
          data={data[2]}
        />
        <BoxComponents
          color={'#01F8E0'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg2}
          data={data[3]}
        />
        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg}
          data={data[4]}
        />
      </div>
      <div className='flex items-center justify-end gap-4 my-4'>
        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg}
          data={data[5]}
        />
        <BoxComponents
          color={'#01F8E0'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg2}
          data={data[6]}
        />
        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg}
          data={data[7]}
        />
        <BoxComponents
          color={'#01F8E0'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg2}
          data={data[8]}
        />
      </div>

      <div className='w-full flex items-center justify-end  gap-2 cursor-pointer'>
        <PaginationNav1Presentation />
      </div>
    </div>
  );
};

export default Component5;
