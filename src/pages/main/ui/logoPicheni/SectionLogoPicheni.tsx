import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramW } from '../../../../shared';
import './index.css';

export const SectionLogoPicheni = () => {
  return (
    <div>
      <img
        className="max-w-[92.77vw] max-md:max-w-[78.4vw] w-full mb-[10.27vw] m-auto"
        src="/images/logo-picheni.png"
        alt="logo-picheni"
      />
      <div className="max-md:block max-md:text-center flex justify-between items-center mb-[2.91vw] max-md:mb-[12.6vw]">
        <div className="flex items-center max-md:justify-center gap-[0.83vw] max-md:mb-[6.4vw] cursor-pointer svg-instagramW logo-picheni">
          <InstagramW />
          <Link
            className="text-[#fff] text-[2.63vw] max-md:text-[6.93vw] max-md:leading-[8.2vw] mb-[0.97vw] max-md:mb-[0.97vw]"
            to="picheni.co"
          >
            picheni.co
          </Link>
        </div>
        <Link
          className="text-[2.2vw] leading-[3.1vw] text-[#fff] mr-[11.38vw] max-md:mr-0 max-md:text-[6.93vw] max-md:leading-[8.2vw] hover:text-[#53CFBA] cursor-pointer"
          to="cookie@picheni.com"
        >
          cookie@picheni.com
        </Link>
      </div>
      <div className="max-w-[17.44vw] max-md:max-w-full w-full flex justify-between max-md:justify-center items-center text-[1.1vw] max-md:text-[3.73vw] max-md:leading-[5.3vw] max-md:mb-[6.93vw] leading-[1.45vw] text-[#9A9A9A]">
        <div className="mr-[1.66vw] max-md:mr-[5.3vw]">© 2024 Picheni</div>
        <Link to="#">Privacy policy</Link>
      </div>
    </div>
  );
};
