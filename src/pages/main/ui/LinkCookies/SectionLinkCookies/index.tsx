import React from 'react';
import { Link } from 'react-router-dom';
import { LinkSocial } from './LinkSocial';
import './index.css';
// feature
export const SectionLinkCookies = () => {
  return (
    <div className="mb-[12.5vw]">
      <div className="text-[#fff] max-md:block flex justify-between border-t-[0.07vw] border-white border-[100%] pt-[5.2vw]">
        <div className="text-[3.6vw] max-md:text-[9.3vw] max-md:leading-[10.93vw] max-md:mb-[6.4vw] leading-[4.5vw]">
          <Link to="@picheni.co">@picheni.co</Link>
        </div>
        <div className="text-[1.7vw] leading-[2.5vw] max-md:text-[4.8vw] max-md:leading-[6.6vw] max-md:max-w-full max-w-[37.8vw] w-full">
          Picheni is not just cookies, it is a media project. Customers can follow the cookie
          creation process through interactive videos and participate in determining future flavors
          through social media.
        </div>
      </div>
      <div className="link_socials flex items-center gap-[1.66vw] max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory">
        <LinkSocial img="/images/reel1.png" link="#" />
        <LinkSocial img="/images/reel2.png" link="#" />
        <LinkSocial img="/images/reel3.png" link="#" />
        <LinkSocial img="/images/reel4.png" link="#" />
      </div>
    </div>
  );
};
