import React, { useState } from 'react';
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
import { Button2, PaginationNav1Presentation } from '../Pagination/Pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { useMobile } from '../globalComponents/MobileContext/IsMobileContext';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Component5 = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const { isMobile } = useMobile();

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
    {
      name: 'Budi',
      country: 'Indonesia',
      designation: 'Tourist visa',
      describe:
        'My tourist visa was refused and I was disappointed and I did not know what to do next. Thanks to Aquarian Immigration Services, they helped me reapply and gave their expert guidance also. Their intelligence system analysed my documents and then correct certain mistakes before re-application. They supported me during the whole process and improved my chances of getting my tourist visa. I highly recommend their services to everyone who wants to immigrate. Thanks again, Aquarian Immigration!',
    },
    {
      name: 'Gopal',
      country: 'Nepal',
      designation: 'Tourist visa',
      describe:
        'I had a great experience with Aquarian Immigration as they helped me get my tourist visa. They answered all of my questions patiently and the documentation that is needed for Nepalese families. They gave tips and tricks on what mistakes I have to avoid and how I can maximise my chances of getting my tourist visa. It all happened very smoothly with no challenges and time delay. You are truly EXCELLENT, Aquarian Immigration! Thank you very much.',
    },
    {
      name: 'Prerna',
      country: 'India',
      designation: 'Family sponsorship',
      describe:
        'It was a pleasure working with Aquarian Immigration for my family sponsorship application to immigrate to Canada. Tanpreet ma’am guided me through the application process and gave excellent advice and was always available to answer my questions and concerns. Aquarian Immigration made sure that all my documentation was accurate and up to date which was very helpful for me and it all went very smooth. They kept me informed during the process and now my family and I are happily settled in Canada. I am deeply grateful for their services and for working so hard on our behalf. They are the best services to hire if you want to settle abroad and need immigration assistance.',
    },
    {
      name: 'Harinder',
      country: 'Canada',
      designation: 'Super visa',
      describe:
        'Me and my wife wanted to move to Canada but we did not know the process. Puneet and Tanpreet from Aquarian Immigration Services helped us get our Super Visa. They professionally handled all the paperwork and have a lot of experience and expertise. They saved us time and efforts by helping us complete the documentation correctly. We received our Super Visa without any problems all thanks to Aquarian Immigration. I definitely recommend their services to everyone who may require them for their immigration process. Thank you Aquarian for all your support and guidance.',
    },
    {
      name: 'Divita',
      country: 'India',
      designation: 'Student visa',
      describe:
        'I am deeply appreciative of Aquarian Immigration for their invaluable help in securing my student visa for Canada. These guys are simply experts. They are aware of the minutest of information and so were professional, reliable, and provided excellent support throughout the entire process. They counselled me and my parents through the application process, helped me compile the necessary documents, and suggested the best college that suited my profile. Thanks to their expertise, I was able to secure my student visa smoothly and efficiently. I highly recommend Aquarian Immigration to anyone seeking assistance with their visa application. Thank you so much for your outstanding service!',
    },
    {
      name: 'Parvinder',
      country: 'Kenya',
      designation: 'Work permit',
      describe:
        'I was working with a firm in Kenya when my father approached Aquarian Immigration. He took the initial counselling of about an hour on my behalf, after that he was sure that AI is the company through which my work permit had to be applied. After spending one year working on my permit, Aquarian Immigration helped me in submitting my application for permanent residency in Canada, which I have now obtained. Their attention to detail and knowledge of the immigration process made a significant difference. I am grateful for their dedication and support in making the PR application process seamless. I would highly recommend Aquarian Immigration to anyone needing assistance with their immigration needs. Thank you, Aquarian Immigration!',
    },
    {
      name: 'Tanya',
      country: 'India',
      designation: 'Sponsorship visa',
      describe:
        'I cannot express enough gratitude to Aquarian immigrations for their exceptional support in my sponsorship visa application. Tanpreet was always prompt in responding to my inquiries and carefully reviewed my documents to ensure accuracy.They helped me a lot during the whole process. I felt sure and calm because they knew what they were doing. Aquarian Immigration helped me get my sponsorship visa approved, so now I can live in Canada with my family. I am still in contact with AI and keep on taking their expert counselling on settling in Canada. I highly recommend their services to anyone seeking professional and reliable immigration advice. Thank you, Aquarian Immigration!',
    },
    {
      name: 'Adnan',
      country: 'Canada',
      designation: 'Express entry immigration',
      describe:
        "Of all the immigration consultants in Canada, most seem either too proud or lacking in skill. But when I met AI, I felt comfortable right away. They won my trust, so I decided to apply through them. AI played a big role in helping me with the complicated Express Entry process. Their team was highly knowledgeable, patient, and provided personalised guidance throughout. They looked at my profile carefully, suggested ways to make it better, and helped me with everything from documents to language tests. They were experts and didn't miss any details. Thanks to them, I got my PR. I recommend Aquarian Immigration to anyone who wants to move to Canada.",
    },
    {
      name: 'Rohan',
      country: 'Canada',
      designation: 'Provincial nominee immigration',
      describe:
        "My fiancé was in Canada and searching for consultants to help me get my Permanent Residency (PR) through the Alberta PNP. With Aquarian Immigration's help, we applied through the Rural Alberta Stream. Working with them was amazing. Three months after applying, I got nominated, and just 20 days later, my PR application was submitted. Their team was really helpful from the start to finish, they were always there to answer my questions. Because of Aquarian Immigration, I'm now happily living in Alberta with my family. I really recommend their services to anyone who needs immigration support. Thank you so much, Aquarian Immigration!",
    },
  ];

  const Paginate = () => {
    // State for current page index
    const itemsPerPage = 9;
    const totalItems = 18;
    const maxPage = Math.ceil(totalItems / itemsPerPage);

    const handlePrevClick = () => {
      setPageIndex((prevIndex) => prevIndex - 1);
      setActiveIndex((prevIndex) => prevIndex - 9);
    };

    const handleNextClick = () => {
      setPageIndex((prevIndex) => prevIndex + 1);
      setActiveIndex((prevIndex) => prevIndex + 9);
    };

    return (
      <>
        <Button2
          content={
            <div className='flex ml-1 bg-[#00F8E1] rounded-md items-center justify-center'>
              <MdChevronLeft size={30} />
            </div>
          }
          onClick={handlePrevClick}
          disabled={pageIndex === 0}
        />
        <span className='text-[#009889] w-1'>{pageIndex + 1}</span>
        <Button2
          content={
            <div className='ml-1 bg-[#00F8E1] rounded-md flex items-center justify-center'>
              <MdChevronRight size={30} />
            </div>
          }
          onClick={handleNextClick}
          disabled={pageIndex === maxPage - 1}
        />
      </>
    );
  };

  return (
    <div className='w-[99%] h-auto px-[8rem]'>
      <div className='w-[90%] flex items-center justify-center'>
        <div className='text-[3rem] font-semibold mb-10'>
          Our <span className='text-[#019989]'>Testimonials</span>
        </div>
      </div>
      <div className='flex items-center justify-end gap-4 my-4 relative'>
        {!isMobile && (
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
        )}

        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#FEFFFE' }}
          imageUrl={hoveredimg}
          data={data[activeIndex]}
        />
        <BoxComponents
          color={'#01F8E0'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg2}
          data={data[activeIndex + 1]}
        />
      </div>
      <div className='flex items-center justify-end gap-4 my-4 relative'>
        {!isMobile && (
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
        )}
        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg}
          data={data[activeIndex + 2]}
        />
        <BoxComponents
          color={'#01F8E0'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg2}
          data={data[activeIndex + 3]}
        />
        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg}
          data={data[activeIndex + 4]}
        />
      </div>
      <div className='flex items-center justify-end gap-4 my-4'>
        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg}
          data={data[activeIndex + 5]}
        />
        <BoxComponents
          color={'#01F8E0'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg2}
          data={data[activeIndex + 6]}
        />
        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg}
          data={data[activeIndex + 7]}
        />
        <BoxComponents
          color={'#01F8E0'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg2}
          data={data[activeIndex + 8]}
        />
      </div>

      <div className='w-full flex items-center justify-end gap-8 cursor-pointer p-4'>
        {/* <PaginationNav1Presentation /> */}
        <Paginate />
      </div>
    </div>
  );
};

export default Component5;
