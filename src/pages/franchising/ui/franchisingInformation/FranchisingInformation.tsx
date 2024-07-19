import React from 'react';

const infoItems = [
  {
    id: 1,
    image: '/images/info-img1.png',
    title: 'Ease of launch and payback',
    text: 'Start your business quickly with a small initial investment, our unique model allows you to start earning money without having a room or even a kitchen, due to which the payback on the project can be less than a year.',
  },
  {
    id: 2,
    image: '/images/info-img2.png',
    title: 'Innovation and technology',
    text: 'You are opening not just a business selling unique cookies, but an entire technology company in which you are accompanied by artificial intelligence and convenient services for your customers.',
  },
  {
    id: 3,
    image: '/images/info-img3.png',
    title: 'Environmental friendliness',
    text: 'By using existing home kitchens, we reduce our carbon footprint and minimize waste, preserving our planet for future generations.',
  },
  {
    id: 4,
    image: '/images/info-img4.png',
    title: 'Social significance',
    text: 'Connect local resources and create jobs for homemakers while driving economic growth in your community.',
  },
];
export const FranchisingInformation = () => {
  return (
    <div className="m-auto text-center mb-[12.5vw]">
      <img
        className="w-[4.50vw] h-[6vw] max-md:w-[11.73vw] max-md:h-[11.73vw] m-auto mb-[2.32vw]"
        src="/images/franchising-symbol.svg"
        alt=""
      />
      <h3 className="text-[3.6vw] leading-[4.5vw] m-auto mb-[6.94vw] max-md:mb-[14.93vw] text-[#fff] max-md:text-[9.3vw] max-md:leading-[10.93vw] max-md:w-[81.6vw]">
        Why Picheni franchise?
      </h3>
      {infoItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center max-md:block w-[93.88vw] max-md:w-[87.2vw] px-[4.40vw] max-md:px-0 gap-[7.29vw] mb-[5vw]"
        >
          <img className={`w-[38.88vw] ${item.id % 2 === 0 ? 'order-2' : 'order-1'} h-[30.55vw] max-md:w-[85.2vw] max-md:h-[68.26vw]`} src={item?.image} alt="" />
          <div className={`my-[4.80vw] ${item.id % 2 === 0 ? 'order-1' : 'order-2'} max-md:text-left`}>
            <h3 className="text-[#fff] text-[2.77vw] leading-[3.3vw] max-md:text-[6.93vw] max-md:leading-[8.26vw] mb-[1.66vw]">{item.title}</h3>
            <p className="text-[#fff] text-[1.76vw] leading-[2.51vw] max-md:text-[4.8vw] max-md:leading-[6.6vw]">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
