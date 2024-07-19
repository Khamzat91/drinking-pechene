import React, { useRef, useState } from 'react';
import { HeaderNavigation } from './HeaderNavigation';
import { HeaderNavigationMenu } from './HeaderNavigationMenu';
import useInViewPort from '../../../../shared/ui/useInViewPort/useInViewPort';

export const SectionHeaderMain = () => {
  const [menuActive, setMenuActive] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const inViewport = useInViewPort(targetRef, { threshold: 0.1 });

  return (
    <div ref={targetRef} className={`w-full h-[53.6vw] pt-[0.55vw] px-[0.55vw] max-md:h-[100vw]`}>
      <img
        className="max-md:hidden w-full pr-[1.16vw] absolute z-[-1]"
        src="/images/header-main.png"
        alt=""
      />
      <img
        className="hidden max-md:block h-[100vw] w-full pl-[0.55vw] pr-[1.7vw] absolute z-[-1]"
        src="/images/mobile-header.png"
        alt=""
      />
      {menuActive ? (
        <HeaderNavigationMenu setMenuActive={setMenuActive} />
      ) : (
        <HeaderNavigation isMainPage setMenuActive={setMenuActive} inViewport={inViewport}/>
      )}
      <div className="text-[#003C46] m-auto text-center md:max-w-[55vw] max-md:w-[80vw] text-[3.4vw] max-md:text-[9.3vw] max-md:leading-[10.9vw] m:auto leading-[5.1vw] mt-[7.1vw] max-md:mt-[18.8vw]  max-md:z-[2]">
        A taste crafted by the community and AI!
      </div>
    </div>
  );
};
