import React, { Dispatch, SetStateAction } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CustomButton, HeaderLogoPicheni } from '../../../../shared';
import { HeaderCart } from '../../../../shared';
import { MenuCard } from '../../../../shared';
import { FranchisingLogo } from '../../../../shared';
import './index.css';

type NavigationMenuProps = {
  setMenuActive: Dispatch<SetStateAction<boolean>>;
  isMainPage?: boolean;
  isMenuOpened?: boolean;
  inViewport?: boolean;
};

export const HeaderNavigation: React.FC<NavigationMenuProps> = ({
  setMenuActive,
  isMainPage = false,
  isMenuOpened = false,
  inViewport,
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
      className={`fixed w-[98.3vw] left-[0.4vw] max-md:left-[0.58vw] flex items-center py-[1.39vw] px-[2.5vw] rounded-[6.4vw] max-md:rounded-none max-md:py-[5.8vw] max-md:px-[6.1vw] max-md:flex max-md:justify-between 
      ${inViewport ? 'bg-transparent' : ' bg-[#003C46] justify-center z-50'}`}
    >
      {isMainPage ? <HeaderLogoPicheni inViewport={inViewport}/> : <FranchisingLogo />}

      <div onClick={handleClassMenu} className={`burger ${isMenuOpened ? ' active' : ''} nav ${inViewport ? '' : 'burger-menu'}`}>
        <span></span>
      </div>
      <div className="w-full flex justify-between items-center max-md:hidden max-md:h-[0.13vw] max-md:w-[2.2vw]">
        <ul className="w-full max-w-[21.5vw] flex justify-between items-center text-[1.25vw] leading-[1.46vw]">
          <li
            className={`${isMainPage ? 'text-[#003C46]' : 'text-[#fff]'} mr-[1.9vw] hover:hover:text-[#557d83] ${inViewport ? '' : 'text-[#fff]'}`}
          >
            <Link to="/PicheniCook">Become picheni-cook</Link>
          </li>
          <li
            className={`${isMainPage ? 'text-[#003C46]' : 'text-[#fff]'} hover:hover:text-[#557d83] ${inViewport ? '' : 'text-[#fff]'}`}
          >
            <Link to="">Order now</Link>
          </li>
        </ul>
        <div className="max-w-[21.9vw] w-full flex justify-between items-center text-[1.25vw] leading-[1.46vw]">
          <div className="max-w-[4.38vw] w-full flex items-center mr-[2.5vw]">
            <div
              className={`opacity-50 ${isMainPage ? 'text-[#003C46]' : 'text-[#fff]'} mr-[1.1vw] hover:hover:text-[#719298] ${inViewport ? '' : 'text-[#fff]'}`}
            >
              <Link to="">En</Link>
            </div>
            <div
              className={`${isMainPage ? 'text-[#003C46]' : 'text-[#fff]'} hover:text-[#557d83] ${inViewport ? '' : 'text-[#fff]'}`}
            >
              <Link to="">Ru</Link>
            </div>
          </div>

          <CustomButton
            onClick={handlePageFranchising}
            className={`max-w-[10.34vw] mr-[1.1vw] text-center 
            ${
              isMainPage
                ? 'bg-[#003C46] border border-[#003C46] hover:bg-transparent hover:text-[#003C46] text-[#fff]'
                : 'bg-[#53CFBA] text-[#003C46] border border-[#53CFBA] hover:border-[#fff] hover:bg-[#003C46] hover:text-[#fff]'
            }
             ${
                inViewport
                    ? ''
                    : 'bg-[#53CFBA] !text-[#003C46] border border-[#53CFBA] hover:border-[#fff] hover:bg-[#003C46] hover:!text-[#fff]'
            }
            `}
          >
            Franchising
          </CustomButton>
          <div>
            <Link to="/cart/build">
              {isMainPage ? <HeaderCart inViewport={inViewport}/> : <MenuCard />}
              <span
                className={`absolute w-[0.67vw] h-[0.67vw] bg-[#FF5656] rounded-[50%] ${isMainPage ? 'top-[1.7vw] right-[2.6vw]' : 'top-[1.7vw] right-[2.6vw]'} ${inViewport ? '' : 'top-[1.7vw] right-[2.6vw]'}`}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
