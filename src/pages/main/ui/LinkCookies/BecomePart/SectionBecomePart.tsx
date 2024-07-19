import React from 'react';
import { CustomButton } from '../../../../../shared';
// entity

type BecomePartProps = {
  title: string;
  text: string;
  btnText: string;
  isBecomePart: boolean;
};
export const SectionBecomePart: React.FC<BecomePartProps> = ({
  title,
  text,
  btnText,
  isBecomePart = false,
}) => {
  return (
    <div
      className={`max-md:block ${isBecomePart 
          ? 'border-t-[0.07vw] border-white border-[100%] pt-[5.2vw]' 
          : 'border-none'} mb-[12.5vw]`}
    >
      {isBecomePart ? '' : <img className="h-[94.93vw] w-full mt-[8.3vw] hidden max-md:block mb-[11.73vw] max-md:mt-[30vw]" src="/images/restaurant-mobile.png" alt=""/>}
      <div
          className={`flex justify-between max-md:block`}
      >
      <p className="text-[3.47vw] leading-[4.37vw] text-[#fff] max-w-[28.3vw] max-md:max-w-full max-md:text-[9.3vw] max-md:leading-[10.93vw] max-md:mb-[6.4vw]">
        {title}
      </p>
      <div className="max-w-[35.3vw] max-md:max-w-full">
        <p className="text-[1.6vw] leading-[2.36vw] text-[#fff] mb-[3.8vw] max-md:text-[4.8vw] max-md:leading-[6.6vw] max-md:mb-[8.5vw]">
          {text}
        </p>
        <CustomButton
          className="max-w-[10.14vw] mt-[2.2vw] bg-[#53CFBA] border border-[#53CFBA] hover:border-[#fff] hover:bg-[#003C46] hover:text-[#fff] text-[#003C46]
        max-md:mb-[14.93vw] max-md:max-w-[100vw] max-md:w-full max-md:pt-[3.46vw] max-md:pb-[4.5vw] max-md:text-[4.8vw] max-md:leading-[5.6vw] max-md:rounded-[29.6vw]
        "
        >
          {btnText}
        </CustomButton>
      </div>
    </div>
      {isBecomePart ? '' : <img className="h-[36.44vw] w-full mt-[8.3vw] max-md:hidden" src="/images/franchising-restaurant.png" alt=""/>}
    </div>
  );
};
