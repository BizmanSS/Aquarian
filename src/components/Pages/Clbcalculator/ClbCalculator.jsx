import React, { useEffect, useState } from 'react';
import freeicon from '../../../Assets/freeicon.png';
import ielts from '../../../Assets/exam-logo/ielts.png';
import toefl from '../../../Assets/exam-logo/toefl.png';
import duolingo from '../../../Assets/exam-logo/duolingo.png';
import pearson from '../../../Assets/exam-logo/pearson.png';
import gre from '../../../Assets/exam-logo/gre.png';
import celpip from '../../../Assets/exam-logo/celpip.png';
import Confetti from 'react-confetti';
import trophy from '../../../Assets/trophy.png';
const ClbCalculator = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [confettiActive, setConfettiActive] = useState(false);
  const [total, setTotal] = useState(null);
  const [inputData, setInputData] = useState({
    reading: null,
    writing: null,
    listening: null,
    speaking: null,
  });
  const [showResult, setShowResult] = useState(false);
  const handleInputChangeMinMax = (e) => {
    const inputValue = parseFloat(e.target.value);
    const min = parseFloat(e.target.min);
    const max = parseFloat(e.target.max);
    if (inputValue < min) {
      e.target.value = min;
    } else if (inputValue > max) {
      e.target.value = max;
    }
  };
  const handleInputChange = (e) => {
    handleInputChangeMinMax(e);
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!inputData) return;
    const { reading, writing, listening, speaking } = inputData;
    const total = Math.min(reading, writing, listening, speaking);
    setTotal(total);
    setShowResult(true);
    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
    }, [3000]);
    const showResultElement = document.getElementById('showresult');
    if (showResultElement) {
      const scrollPosition = showResultElement.offsetTop - 250;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
    return total;
  };
  useEffect(() => {
    if (
      inputData.reading &&
      inputData.writing &&
      inputData.listening &&
      inputData.speaking
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [inputData]);

  const ResultData = () => {
    return (
      <div
        id='showresult'
        className='w-full h-[250px] bg-gray-50 shadow-md px-10 py-6 rounded-xl mb-8 mt-4'
      >
        <div className='text-4xl font-semibold flex flex-col items-center justify-center'>
          <div className='flex items-center justify-center gap-4'>
            <img src={trophy} alt='trophy' className='w-[6rem]' />
            <div>
              Congratulations, your CLB Score is{' '}
              <span className=' mt-6 mb-3 text-white px-3 py-2 bg-red-500 bold rounded-xl '>
                {Number.isInteger(total) ? `${total}.0` : total}
              </span>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-between mt-10 w-full gap-6'>
              <div className='text-lg bg-white w-[15rem] py-4 px-6 shadow-xl rounded-lg flex items-center justify-between shadow-gray-300 tracking-wide'>
                Reading{' '}
                <span className='text-2xl'>
                  {inputData && inputData.reading}
                </span>
              </div>
              <div className='text-lg bg-white w-[15rem] py-4 px-6 shadow-xl rounded-lg flex items-center justify-between shadow-gray-300 tracking-wide'>
                Listening{' '}
                <span className='text-2xl'>
                  {inputData && inputData.listening}
                </span>
              </div>
              <div className='text-lg bg-white w-[15rem] py-4 px-6 shadow-xl rounded-lg flex items-center justify-between shadow-gray-300 tracking-wide'>
                Writing{' '}
                <span className='text-2xl'>
                  {inputData && inputData.writing}
                </span>
              </div>
              <div className='text-lg bg-white w-[15rem] py-4 px-6 shadow-xl rounded-lg flex items-center justify-between shadow-gray-300 tracking-wide'>
                Speaking{' '}
                <span className='text-2xl'>
                  {inputData && inputData.speaking}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='flex flex-col items-start justify-center w-[95%]'>
      <div className='mt-[6.9rem]'>
        <div className='w-full bg-banner text-white bg-cover bg-no-repeat h-[500px]'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex flex-col items-start justify-between px-20'>
              <p className='mb-20 mt-10 text-sm'>{`Home > CLB Score Calculator`}</p>{' '}
              <div className='text-[50px] font-normal font-serif leading-normal '>
                CLB Score <br />
                Calculator
              </div>
              <p className='text-[#D3D3D3] text-[18px] leading-normal pt-6 w-full'>
                The Federal Skilled Worker (FSW) program is one of the three
                programs contained within Canada’s Express{' '}
              </p>
            </div>

            <div className='bg-white w-auto h-auto mt-[7rem] mr-[6rem] py-3 rounded-2xl'>
              <div className='px-4 pt-4'>
                {/* <input
                  type='text'
                  className='border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-full p-2.5 outline-none'
                  placeholder='IELTS English'
                /> */}
                <select
                  id='countries'
                  className='border-[2px] border-[rgba(1,153,137,0.7)] text-gray-500 focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-full p-2.5 outline-none'
                >
                  {/* <option selected>Choose a country</option> */}
                  <option className='text-black' value='IELTS'>
                    IELTS (English)
                  </option>
                  <option className='text-black' value='CELPIP'>
                    CELPIP (English)
                  </option>
                  <option className='text-black' value='TPE'>
                    TPE (English)
                  </option>
                  <option className='text-black' value='TCF'>
                    TCF (French)
                  </option>
                  <option className='text-black' value='TEF '>
                    TEF (French)
                  </option>
                </select>
              </div>
              <div className='px-4 pt-4 flex items-center justify-between -mt-3 gap-4 min-w-full'>
                <input
                  type='number'
                  className='border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none'
                  placeholder='Reading'
                  name='reading'
                  onChange={handleInputChange}
                  min={0}
                  max={10}
                  step={0.5}
                />

                <input
                  type='number'
                  className='border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none'
                  placeholder='Listening'
                  name='listening'
                  onChange={handleInputChange}
                  min={0}
                  max={10}
                  step={0.5}
                />
              </div>
              <div className='px-4 pt-4 flex items-center justify-between -mt-3 gap-4'>
                <input
                  type='number'
                  className='border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-full p-2.5 outline-none'
                  placeholder='Writing'
                  name='writing'
                  onChange={handleInputChange}
                  min={0}
                  max={10}
                  step={0.5}
                />

                <input
                  type='number'
                  className='border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-full p-2.5 outline-none'
                  placeholder='Speaking'
                  name='speaking'
                  onChange={handleInputChange}
                  min={0}
                  max={10}
                  step={0.5}
                />
              </div>
              <div className='flex flex-col items-center justify-center px-4'>
                {' '}
                <button
                  onClick={handleClick}
                  disabled={isDisabled}
                  className={` font-normal px-12 py-2.5 rounded-[15px] text-[17px] hover:scale-105 transition ease-in delay-60 duration-150  ${
                    isDisabled
                      ? 'bg-[rgba(1,153,137,0.4)] cursor-not-allowed'
                      : 'bg-[#019989] cursor-pointer'
                  }`}
                >{`Calculate>`}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='fixed top-0 '>
        {' '}
        {confettiActive && (
          <Confetti numberOfPieces={200} gravity={0.15} tweenDuration={1} />
        )}
      </div>
      <div className='flex flex-col items-center justify-center w-full'>
        <div className='w-[80%] flex flex-col items-start justify-center mt-8'>
          <div className='font-semibold text-3xl border-b-[4px] border-[#019989]'>
            Result
          </div>
          {showResult && <ResultData />}
          <div className='flex items-center justify-between w-full gap-10'>
            <div className='bg-black flex flex-col items-center justify-center rounded-xl px-4 py-2 flex-wrap min-w-[15rem] mt-8'>
              <img src={freeicon} alt='icon' className='w-[4rem]' />
              <p className='text-white text-xl font-semibold mt-2 text-center tracking-wider'>
                FREE TO USE
              </p>
            </div>
            <div className='bg-white flex flex-col items-center justify-center rounded-xl px-4 py-2 flex-wrap min-w-[15rem] mt-8'>
              <img src={freeicon} alt='icon' className='w-[4rem]' />
              <p className='text-black text-xl font-semibold mt-2 text-center tracking-wider'>
                EASY TO USE
              </p>
            </div>
            <div className='bg-black flex flex-col items-center justify-center rounded-xl px-4 py-2 flex-wrap min-w-[15rem] mt-8'>
              <img src={freeicon} alt='icon' className='w-[4rem]' />
              <p className='text-white text-xl font-semibold mt-2 text-center tracking-wider'>
                100% ACCURACY
              </p>
            </div>
            <div className='bg-white flex flex-col items-center justify-center rounded-xl px-4 py-2 flex-wrap min-w-[15rem] mt-8'>
              <img src={freeicon} alt='icon' className='w-[4rem]' />
              <p className='text-black text-xl font-semibold mt-2 text-center tracking-wider'>
                INT’L STANDARDS
              </p>
            </div>
          </div>
          <div className='w-[90%] flex flex-col items-start justify-center mt-8'>
            <div className='font-semibold text-3xl border-b-[4px] border-[#019989] mt-8'>
              Canadian Language Benchmarks
            </div>
            <p className='tracking-wide mt-8'>
              The Canadian language benchmarks English language proficiency and
              French language proficiency. Since all exams have different
              scoring patterns, the Canadian Language Benchmark is a standard
              index to compare IELTS and CELPIP scores for English proficiency
              and TEF and TCF for French proficiency. IRCC uses the Canadian
              language benchmark to set the language requirements for
              immigration programs.
              <br /> <br />
              The CLB benchmarks the IELTS and CELPIP for English language
              proficiency and TCF and TEF for French Language proficiency. The
              CLB range is from 1 to 12. The Lower CLB score means that the
              applicant cannot communicate and understand English or French,
              while the higher CLB score suggests that the applicant is
              proficient in English or French.
            </p>
          </div>
          <div className='w-[90%] flex flex-col items-start justify-center mt-8'>
            <div className='font-semibold text-3xl border-b-[4px] border-[#019989] mt-8'>
              CLB for Express Entry Programs
            </div>
            <p className='tracking-wide mt-8'>
              The minimum CLB for Canadian Experience Class or CEC is five or
              more, and for Federal Skilled Worker Program, the minimum CLB of 7
              is required, and having more is the plus point for your
              application. The Federal Skilled Trades Program has a requirement
              of a minimum CLB 5 in Listening and Speaking, while CLB 4 in
              Reading and Writing. To apply for Study Visa under Student Direct
              Stream or SDS, an applicant needs a minimum CLB score of 7 or 6
              bands in each module of IELTS.
            </p>
          </div>
          <div className='w-[90%] flex flex-col items-start justify-center mt-8'>
            <div className='font-semibold text-3xl border-b-[4px] border-[#019989] mt-8'>
              IELTS to CLB Calculator
            </div>
            <p className='tracking-wide mt-8'>
              IELTS, or International English Language Testing System, organized
              by IDP International and the British Council on an international
              level, tests the English language ability of an applicant. It
              validates whether the applicant can communicate and understand the
              English language and gives scores based on each module's test. To
              Convert IELTS to CLB, you can use our free tool or follow the
              below-mentioned table, which might be complex. For example, if an
              applicant's IELTS score is 6 in each module, its equivalent score
              in CLB will be 7.
              <br />
              <br />
              <span className='text-[#009889] italic font-semibold'>
                Please note, the IELTS Academic is NOT eligible for Immigration
                programs in Canada. The IRCC accepts only IELTS-General for
                Immigration. If you took IELTS-Academic, you must attempt the
                IELTS-General training exam.
              </span>
            </p>
            <div className='bg-[#D9D9D9] w-full h-[350px] rounded-3xl mt-14'></div>
          </div>
          <div className='w-[90%] flex flex-col items-start justify-center mt-8'>
            <div className='font-semibold text-3xl border-b-[4px] border-[#019989] mt-8'>
              CELPIP to CLB Calculator
            </div>
            <div className='bg-[#D9D9D9] w-full h-[350px] rounded-3xl mt-14'></div>
          </div>
          <div className='w-[90%] flex flex-col items-start justify-center mt-8'>
            <div className='font-semibold text-3xl border-b-[4px] border-[#019989] mt-8'>
              TPE to CLB Calculator
            </div>
            <div className='bg-[#D9D9D9] w-full h-[350px] rounded-3xl mt-14'></div>
          </div>
          <div className='w-[90%] flex flex-col items-start justify-center mt-8'>
            <div className='font-semibold text-3xl border-b-[4px] border-[#019989] mt-8'>
              TCF to CLB Calculator
            </div>
            <div className='bg-[#D9D9D9] w-full h-[350px] rounded-3xl mt-14'></div>
          </div>
          <div className='w-[90%] flex flex-col items-start justify-center mt-8'>
            <div className='font-semibold text-3xl border-b-[4px] border-[#019989] mt-8'>
              TEF to CLB Calculator
            </div>
            <div className='bg-[#D9D9D9] w-full h-[350px] rounded-3xl mt-14'></div>
          </div>
          <div className='w-[90%] flex flex-col items-start justify-center mt-8'>
            <div className='font-semibold text-3xl border-b-[4px] border-[#019989] mt-8'>
              Exam Guides
            </div>
            <div className='w-full h-auto rounded-3xl mt-14 flex items-center justify-center gap-4 ml-20'>
              <div className='flex flex-col items-start justify-center rounded-xl px-4 py-2 min-w-[24rem] border border-gray-300 shadow-2xl'>
                <img src={ielts} alt='icon' className='w-[8rem] mx-4 my-2' />
                <div className='flex items-center justify-between w-full px-4 py-2'>
                  <div className='text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                    <p className='cursor-pointer'>IELTS Overview</p>
                    <p className='cursor-pointer'>IELTS Syllabus</p>
                    <p className='cursor-pointer'>IELTS Results</p>
                  </div>
                  <div className='text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                    <p className='cursor-pointer'>IELTS Exam Pattern</p>
                    <p className='cursor-pointer'>IELTS Registration</p>
                    <p className='cursor-pointer'>IELTS Exam Dates</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-start justify-center rounded-xl px-4 py-2 min-w-[24rem] border border-gray-300 shadow-2xl'>
                <img src={toefl} alt='icon' className='w-[8rem] mx-4 my-2' />
                <div className='flex items-center justify-between w-full px-4 py-2'>
                  <div className='text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                    <p className='cursor-pointer'>TOEFL Overview</p>
                    <p className='cursor-pointer'>TOEFL Exam Dates</p>
                    <p className='cursor-pointer'>TOEFL Results</p>
                  </div>
                  <div className='text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                    <p className='cursor-pointer'>TOEFL Exam Pattern</p>
                    <p className='cursor-pointer'>TOEFL Registration</p>
                    <p className='cursor-pointer'>TOEFL Vouchers</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-start justify-center rounded-xl px-4 py-2 min-w-[24rem] border border-gray-300 shadow-2xl'>
                <img src={duolingo} alt='icon' className='w-[8rem] mx-4 my-2' />
                <div className='flex items-center justify-between w-full px-4 py-2'>
                  <div className='text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                    <p className='cursor-pointer'>Duolingo Overview</p>
                    <p className='cursor-pointer'>Duolingo Syllabus</p>
                    <p className='cursor-pointer'>Duolingo Results</p>
                  </div>
                  <div className='text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                    <p className='cursor-pointer'>Duolingo Exam Pattern</p>
                    <p className='cursor-pointer'>Duolingo Registration</p>
                    <p className='cursor-pointer'>Duolingo Vouchers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full h-auto rounded-3xl mt-14 flex items-center justify-center gap-4 ml-20 mb-20'>
              <div className='flex flex-col items-start justify-center rounded-xl px-4 py-2 min-w-[24rem] border border-gray-300 shadow-2xl'>
                <img src={pearson} alt='icon' className='w-[8rem] mx-4 my-2' />
                <div className='flex items-center justify-between w-full px-4 py-2'>
                  <div className='text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                    <p className='cursor-pointer'>PTE Overview</p>
                    <p className='cursor-pointer'>PTE Exam Dates</p>
                    <p className='cursor-pointer'>PTE Results</p>
                  </div>
                  <div className='text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                    <p className='cursor-pointer'>PTE Exam Pattern</p>
                    <p className='cursor-pointer'>PTE Registration</p>
                    <p className='cursor-pointer'>PTE Vouchers</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-start justify-center rounded-xl px-4 py-2 min-w-[24rem] border border-gray-300 shadow-2xl'>
                <img src={gre} alt='icon' className='w-[8rem] mx-4 my-2' />
                <div className='flex items-center justify-between w-full px-4 py-2'>
                  <div className='text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                    <p className='cursor-pointer'>GRE Overview</p>
                    <p className='cursor-pointer'>GRE Syllabus</p>
                    <p className='cursor-pointer'>GRE Results</p>
                  </div>
                  <div className='text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                    <p className='cursor-pointer'>GRE Exam Pattern</p>
                    <p className='cursor-pointer'>GRE Registration</p>
                    <p className='cursor-pointer'>GRE Vouchers</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-start justify-center rounded-xl px-4 py-2 flex-wrap min-w-[24rem] border border-gray-300 shadow-2xl'>
                <img src={celpip} alt='icon' className='w-[8rem] mx-4 my-2' />
                <div className='flex items-center justify-between w-full px-4 py-2'>
                  <div className='text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                    <p className='cursor-pointer'>CELPIP Overview</p>
                    <p className='cursor-pointer'>CELPIP Syllabus</p>
                    <p className='cursor-pointer'>CELPIP Results</p>
                  </div>
                  <div className='text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                    <p className='cursor-pointer'>CELPIP Exam Pattern</p>
                    <p className='cursor-pointer'>CELPIP Registration</p>
                    <p className='cursor-pointer'>CELPIP Exam Dates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClbCalculator;
