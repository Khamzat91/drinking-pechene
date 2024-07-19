import React, { Dispatch, SetStateAction } from 'react';
import {CustomButton, LogoPicheniMd, MenuCard} from '../../../../shared';
import { Link, useNavigate } from 'react-router-dom';

type NavigationMenuProps = {
  setMenuActive: Dispatch<SetStateAction<boolean>>;
  isMenuOpened?: boolean;
};

export const HeaderNavigationMenu: React.FC<NavigationMenuProps> = ({
  setMenuActive,
  isMenuOpened = false,
}) => {
  const navigate = useNavigate();
  const handleClassMenu = () => {
    setMenuActive((p) => !p);
  };

  const handlePageFranchising = () => {
    navigate('./franchising');
  };
  return (
    <div
      className={`z-[10] md:hidden h-full w-full pt-[5.8vw] px-[6.1vw] pb-[8.5vw] bg-[#003C46] fixed top-0 right-0 nav`}
    >
      <div className="flex justify-between items-center">
        <LogoPicheniMd />
        <div onClick={handleClassMenu} className={`burger ${isMenuOpened ? "" : "active"} nav`}>
          <span></span>
        </div>
      </div>
      <div className="w-full fixed bottom-[8.5vw] max-w-[87vw]">
        <div className="m-auto text-center w-[87vw] mb-[14.9vw]">
          <ul className="w-full text-[6.6vw] leading-[9.6vw]">
            <li className="text-[#fff] hover:hover:text-[#557d83] mb-[5.3vw]">
              <Link to="/PicheniCook">Become picheni-cook</Link>
            </li>
            <li className="text-[#fff] hover:hover:text-[#557d83] mb-[5.3vw]">
              <Link to="">Order now</Link>
            </li>
          </ul>
          <div className="w-full flex items-center justify-center mr-[2.5vw] gap-[1.1vw] max-md:gap-[4.2vw] text-[6.6vw] leading-[9.6vw]">
            <div className="opacity-50 text-[#fff] hover:hover:text-[#719298]">
              <Link to="">En</Link>
            </div>
            <div className="text-[#fff] hover:text-[#557d83]">
              <Link to="">Ru</Link>
            </div>
          </div>
        </div>
        <div className="flex gap-[4.2vw] items-center">
          <CustomButton
            onClick={handlePageFranchising}
            className="w-[69vw] pt-[3.46vw] pb-[4.5vw] text-[4.8vw] leading-[5.6vw] rounded-[29.6vw] text-center bg-[#53CFBA] border border-[#53CFBA] md:hidden hover:border-[#fff] hover:bg-[#003C46] hover:text-[#fff] text-[#003C46]"
          >
            Franchising
          </CustomButton>
          <MenuCard />
        </div>
      </div>
    </div>
  );
};
