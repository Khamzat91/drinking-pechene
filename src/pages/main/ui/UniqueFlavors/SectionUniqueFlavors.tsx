import React from 'react';
import { CustomButton, Instagram, InstagramY } from '../../../../shared';
import { UniqueFlavorsCard } from './UniqueFlavorsCard';
import { Link } from 'react-router-dom';
import './index.css';

export const SectionUniqueFlavors = () => {
  return (
    <div className="text-center max-md:text-left mb-[12.5vw]">
      <div className="w-[61vw] max-md:w-full m-auto mb-[3.19vw] max-md:mb-[8.5vw]">
        <h3 className="text-[3.4vw] leading-[4.37vw] text-[#fff] mb-[2vw] max-md:text-[9.3vw] max-md:leading-[10.93vw] max-md:mb-[6.4vw]">
          Unique flavors
        </h3>
        <p className="text-[1.6vw] leading-[2.36vw] text-[#fff] max-md:text-[4.8vw] max-md:leading-[6.6vw] max-md:max-w-full">
          Each cookie is created taking into account local tastes and preferences, guaranteeing a
          unique experience
        </p>
      </div>

      <div
        className={` max-w-[16vw] max-md:max-w-[100vw] max-md:w-full max-md:m-0 m-auto mb-[5.5vw] svg-instagram`}
      >
        <CustomButton
          className="max-w-[16vw] w-full text-[1.1vw] flex justify-between max-md:justify-center items-center px-[1.66vw] hover:border-[#fff] bg-[#53CFBA] border border-[#003C46] hover:bg-transparent hover:text-[#fff] text-[#003C46]
        max-md:mb-[14.93vw] max-md:max-w-[100vw] max-md:w-full max-md:pt-[3.46vw] max-md:pb-[4.5vw] max-md:text-[4.8vw] max-md:leading-[5.6vw] max-md:rounded-[29.6vw]
        "
        >
          <Instagram />
          Choose new flavor
        </CustomButton>
      </div>
      <div className="max-md:block flex justify-between gap-[1.66vw] flex-wrap max-md:max-w-[100vw] max-md:w-full">
        <UniqueFlavorsCard
          title="Эдем"
          text="Нежное тесто с кусочками карамели внутри и слоем сверху. Гармония текстур и насыщенное карамельное наслаждение."
          img="./images/edem.png"
        />
        <UniqueFlavorsCard
          title="Млечный путь"
          text="Шоколадное печенье с жидким сливочным кремом внутри. Мягкий шоколад плавно переходит в нежный крем, даря истинное удовольствие."
          img="./images/milky-way.png"
        />
        <UniqueFlavorsCard
          title="Шок"
          text="Насыщенный шоколад и хрустящий миндаль подарят мгновенный заряд удовольствия. Каждая крошка - чистый шоколадный восторг."
          img="./images/shock.png"
        />
        <UniqueFlavorsCard
          title="Динозавр"
          text="Нежное тесто с кремовой начинкой и фисташковой посыпкой создаёт гармонию текстур и вкусов. Наслаждайтесь насыщенным фисташковым вкусом."
          img="./images/dinosaur.png"
        />
        <UniqueFlavorsCard
          title="Дюна"
          text="Шоколадное печенье с кусочками шоколада. Каждый укус - насыщенное шоколадное наслаждение, словно исследуете бескрайние пустыни."
          img="./images/dune.png"
        />
        <div
          className="hover-block px-[5.5vw] max-md:py-[24vw] py-[9.8vw] text-center bg-[#003C46] rounded-[1.52vw] border border-white max-w-[29vw] w-full min-h-[38.6vw] h-full
           max-md:max-w-[100vw] max-md:w-full max-md:min-h-[97vw] max-md:h-full svg-instagramY"
        >
          <div className="text-center m-auto max-w-[18.95vw] max-md:max-w-[52.4vw] w-full">
            <p className="text-[1.73vw] leading-[2.36vw] text-[#53F6DA] max-md:text-[4.8vw] max-md:leading-[6.6vw] mb-[3vw] max-md:mb-[11vw]">
              Participate in choosing a flavor
            </p>
            <Link
              className="text-[#53F6DA] flex justify-center items-center text-[1.73vw] max-md:text-[4.8vw] max-md:leading-[6.6vw]"
              to="picheni.co"
            >
              <InstagramY />
              picheni.co
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
