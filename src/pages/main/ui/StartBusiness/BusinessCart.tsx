import React from 'react';
import { CustomButton } from '../../../../shared';

interface BusinessCartProps {
  img: string;
  title: string;
  text: string;
  buttonText: string;
  onClick: () => void;
}
// feature
export const BusinessCart: React.FC<BusinessCartProps> = ({
  img,
  title,
  text,
  buttonText,
  onClick,
}) => {
  return (
    <div className="text-center max-md:text-left w-[46.1vw] max-md:w-full">
      <img
        className="max-w-[46.1vw] w-full max-h-[41.7vw] h-full max-md:max-w-[100vw] max-md:w-full max-md:max-h-[68.2vw]"
        src={img}
        alt=""
      />
      <div className="text-[2.5vw] leading-[3vw] text-[#fff] max-md:text-[6.9vw] max-md:leading-[8.2vw] mt-[4.4vw] mb-[0.83vw]">
        {title}
      </div>
      <p className="text-[1.52vw] leading-[2.2vw] max-md:text-[4.8vw] max-md:leading-[6.6vw] text-[#fff] max-md:mb-[8.5vw]">
        {text}
      </p>
      <CustomButton
        onClick={onClick}
        className="max-w-[10.14vw] max-md:mb-[14.93vw] max-md:max-w-[100vw] max-md:pt-[3.46vw] max-md:pb-[4.5vw] max-md:text-[4.8vw] max-md:leading-[5.6vw] max-md:rounded-[29.6vw] mt-[2.2vw] bg-[#53CFBA] border border-[#53CFBA] hover:border-[#fff] hover:bg-[#003C46] hover:text-[#fff] text-[#003C46]"
      >
        {buttonText}
      </CustomButton>
    </div>
  );
};
