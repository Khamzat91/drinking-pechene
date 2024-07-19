import React from 'react';

export const SectionHomeRevolution = () => {
  return (
    <div className="mt-[10.4vw] mb-[12.5vw] flex justify-between max-md:block">
        <div className=" hidden max-md:block w-full text-[#fff] max-md:mb-[11.7vw]">
            <div className="text-[9.3vw] leading-[10.9vw] mb-[6.4vw]">Home-Based Revolution</div>
            <p className="text-[4.8vw] leading-[6.6vw] mb-4">
                Picheni rethinks traditional approaches. We do not use central kitchens, but create
                cookies through a network of homemakers using our ingredients and expert guidance. Each
                cookie brings the warmth of home, combining taste and sincerity.
            </p>
            <p className="text-[#53CFBA] text-[4.8vw] leading-[6.6vw]">
                This approach brings significant social and environmental benefits.
            </p>
        </div>
        <img
          className="max-w-[25.9vw] w-full max-md:max-w-[100vw] max-md:max-h-[80vw] max-h-[24.3vw] h-full"
          src="/images/home-based.png"
          alt=""
        />
      <div className="max-w-[38.9vw] max-md:hidden w-full text-[#fff]">
        <div className="text-[3.61vw] leading-[4.52vw] mb-[2.22vw]">Home-Based Revolution</div>
        <p className="text-[1.74vw] leading-[2.5vw] mb-4">
          Picheni rethinks traditional approaches. We do not use central kitchens, but create
          cookies through a network of homemakers using our ingredients and expert guidance. Each
          cookie brings the warmth of home, combining taste and sincerity.
        </p>
        <p className="text-[#53CFBA] text-[1.74vw] leading-[2.5vw]">
          This approach brings significant social and environmental benefits.
        </p>
      </div>
    </div>
  );
};
