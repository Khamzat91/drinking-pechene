import React from 'react';

type MarketingInfoProps = {
  title: string;
  text: string;
};
export const MarketingInfo: React.FC<MarketingInfoProps> = ({ title, text }) => {
  return (
    <div className="text-left w-[37.84vw] max-md:w-full max-md:mb-[11.73vw]">
      <h3 className="text-[#fff] text-[2.77vw] leading-[3.3vw] max-md:text-[6.93vw] max-md:leading-[8.26vw] mb-[1.66vw] max-md:mb-[6.4vw]">{title}</h3>
      <p className="text-[#fff] text-[1.76vw] leading-[2.51vw] max-md:text-[4.8vw] max-md:leading-[6.6vw]">{text}</p>
    </div>
  );
};
