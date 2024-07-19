import React, { useState } from 'react';

type UniqueFlavorsCartProps = {
  title: string;
  text: string;
  className?: string;
  img: string;
};

enum ANIMATE_CLASSES {
  start = 'cookie-start',
  end = 'cookie-end',
}

export const UniqueFlavorsCard: React.FC<UniqueFlavorsCartProps> = ({ title, text, img }) => {
  const [animateClass, setAnimateClass] = useState<ANIMATE_CLASSES>();

  const onMouseMove = () => {
    if (!animateClass || animateClass === ANIMATE_CLASSES.start) {
      setAnimateClass(ANIMATE_CLASSES.end);
    }
  };
  const onMouseOut = () => {
    if (animateClass === ANIMATE_CLASSES.end) {
      setAnimateClass(ANIMATE_CLASSES.start);
    }
  };
  return (
    <div onMouseMove={onMouseMove} onMouseOut={onMouseOut} className={`${animateClass} cookie max-w-[29vw] h-[38.6vw] max-md:max-w-[100vw] max-md:w-full max-md:h-[97vw] max-md:mb-[6.4vw]`}>
      <div className="z-[-1] cookie-card px-[2vw] pt-[2.63vw] max-md:pt-[8.5vw] max-md:px-[6.4vw] text-center bg-[#E6EBCE] rounded-[1.52vw] max-w-[29vw] h-[38.6vw] max-md:max-w-[100vw] max-md:w-full max-md:h-full relative">
        <span className="text-center m-auto w-[21.8vw] max-md:w-[74.4vw] mb-[9vw]">
          <h3 className="text-[2vw] leading-[2.5vw] max-md:text-[6.9vw] max-md:leading-[8.2vw] text-[#003C46] mb-[1.38vw] max-md:mb-[3.2vw] card-title">
            {title}
          </h3>
          <p className="text-[1.1vw] leading-[1.6vw] max-md:text-[3.7vw] max-md:leading-[5.3vw] text-[#003C46] card-text">{text}</p>
        </span>
        <img className="absolute" src={img} alt="cookie" />
      </div>
      <h3 className="z-[-1] text-center relative text-[2vw] leading-[2.5vw] max-md:text-[6.9vw] max-md:leading-[8.2vw] text-[#003C46] mb-[1.38vw] card-title-bottom">
        {title}
      </h3>
    </div>
  );
};
