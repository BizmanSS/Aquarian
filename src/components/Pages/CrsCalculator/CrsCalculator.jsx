import React from 'react';
import banner from '../../../Assets/Rectangle 156.png';
import CrsForm from './CrsForm';
const CrsCalculator = () => {
  return (
    <>
    <div className='flex flex-col items-start justify-center w-[94%]'>
      <div className='flex mt-[6.9rem] w-[100%] '>
        <div className='w-full bg-banner text-white bg-cover bg-no-repeat bg-center h-[500px]'>
            <div className='flex flex-col items-start justify-between px-20'>
              <p className='mb-20 mt-10 text-sm'>{`Home > CRS Score Calculator`}</p>{' '}
              <div className='text-[50px] font-normal font-serif leading-normal mt-5'>
                Comprehensive Ranking System (CRS) Calculator
              </div>
              <p className='text-[#D3D3D3] text-[22px] leading-normal pt-6 w-full'>
                The following tool is for skilled immigrants (Express Entry), which will provide you with a 
                real-time score and automatically update as you answer each question. 
                This will let you recognise how changes in circumstances can improve 
                your score and, consequently, your chances of immigration.{' '}
              </p>
            </div>
        </div>
      </div>
    </div>
    <div className="crs-information ml-20 mt-8 text-[18px]">
    <p>The purpose of this tool is to assist you in calculating your Comprehensive Ranking System (CRS) score by considering the information you provide. 
    The CRS is a points-based system employed to evaluate and rank profiles within the Express Entry pool. 
    It is utilized to assess various aspects of your profile, including:</p>

    <ul className="mt-4 list-disc pl-10">
        <li>Skills</li>
        <li>Education</li>
        <li>Language ability</li>
        <li>Work experience</li>
        <li>Other factors</li>
    </ul>
    <div className="text-[#666666] mt-10 text-[14px]">
        <p><strong>*Legal Disclaimer:</strong> The purpose of this tool is to provide general guidance and reference. Please note that in the event of any inconsistency between the results obtained from this questionnaire and those generated by the official Express Entry electronic system, as with IRCC, the results from the system will prevail. This is in accordance with the Immigration and Refugee Protection Act, the Immigration and Refugee Protection Regulations, and the Minister's Instructions issued under IRPA s. 10.3, Canada. This tool will be regularly updated to align with any changes made to the Ministerial Instructions governing Express Entry.</p>
    </div>

    <p className="mt-10">This tool is useful only if:</p>
    <ul class="list-disc ">
        <ul class="list-disc pl-10">
            <li>You meet the eligibility criteria for at least one of the Express Entry programs, which are:</li>
            <ul class="list-disc pl-14">
                <li>Federal Skilled Worker Program</li>
                <li>Federal Skilled Trades Program</li>
                <li>Canadian Experience Class</li>
            </ul>
            <li>You haven't completed an Express Entry profile, but you're interested in assessing your Comprehensive Ranking System (CRS) score.</li>
            <li>You have received an invitation to apply for permanent residence and want to determine if any changes in your profile can affect your CRS score.</li>
        </ul>
    </ul>

    <p className="mt-10"> <span className='font-medium'>Note:</span> To get an invitation to apply, your CRS score must be above the 
    minimum points score of your round of invitations 
    (cut-off scores may vary each round). To check the 
    latest Express Entry CRS cut-offs, click here.</p>

    <p className="mt-10 font-medium">Please fill out the following form to calculate your score.</p>

    </div>
    <CrsForm/>
    </>
  );
};

export default CrsCalculator;
