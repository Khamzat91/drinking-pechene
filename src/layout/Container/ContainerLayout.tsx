import React, { PropsWithChildren } from 'react';

export const ContainerLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-[1920px] w-full pt-[0.55vw] pb-[2.6vw] px-[3.1vw] max-md:px-[6.4vw]">
      {children}
    </div>
  );
};
