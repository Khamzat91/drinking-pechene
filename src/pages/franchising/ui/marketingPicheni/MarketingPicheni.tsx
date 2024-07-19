import React from 'react';
import { CookieVideo } from '../../../main/ui/video';
import { MarketingInfo } from './MarketingInfo';

export const MarketingPicheni = () => {
  return (
    <div className="pt-[5vw] m-auto text-center mb-[12.5vw]">
      <div className="w-[61.1vw] max-md:w-full m-auto mb-[5vw]">
        <h3 className="text-[3.6vw] leading-[4.5vw] max-md:text-[9vw] max-md:leading-[10.93vw] mb-[2.2vw] text-[#fff]">
          Marketing Strategy of Picheni: Crafted to Share
        </h3>
        <p className="text-[#fff] text-[1.76vw] leading-[2.51vw] max-md:text-[4.5vw] max-md:leading-[6.6vw]">
          We understand the power of visual impact and social media. Our approach creates unique
          experiences that clients want to share.
        </p>
      </div>
      <CookieVideo />
      <div className="mt-[5vw] flex justify-between items-center max-md:block">
        <MarketingInfo
          title="Unique premium packaging"
          text="Each cookie is packaged in such a way that opening it is a pleasure. Attractive packaging encourages sharing photos on social networks."
        />
        <MarketingInfo
          title="Design that attracts"
          text="The design of each cookie is thought out to the smallest detail. I want to show beautiful cookies to my friends and subscribers on social networks."
        />
      </div>
    </div>
  );
};
