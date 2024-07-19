import React from 'react';

export const SectionDescription = () => {
  return (
    <div className="my-[10.4vw]">
      <img
        className="m-auto w-full max-w-[17.3vw] max-md:max-w-[51.7vw] max-md:max-h-[51.7vw]  h-full max-h-[17.3vw]"
        src="/images/description.svg"
        alt=""
      />
      <div className="m-auto max-md:text-left max-md:mx-0 text-center mt-[5vw] max-md:mt-[14.9vw] text-[1.73vw] max-md:text-[4.8vw] max-md:leading-[6.6vw] leading-[2.5vw] text-[#fff] max-md:w-full w-[61.1vw]">
        <p className="mb-4">
          Picheni is reimagining the cookie-making process by pairing home bakers from around the
          world with cutting-edge AI technology to create the perfect cookie.
        </p>
        <p>
          Our platform allows anyone to become a part of the process of creating, selling and
          developing craft cookies.
        </p>
      </div>
    </div>
  );
};
