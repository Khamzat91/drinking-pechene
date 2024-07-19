import React from 'react';
import { CartArrow } from '../../../../shared/ui/svg/cartArrow';
import { CartClose } from '../../../../shared/ui/svg/cartClose';

export const CartHeader = () => {
  return (
    <div className="px-[3vw] py-[1.66vw] flex items-center justify-between">
      <div className="flex items-center gap-[0.58vw]">
        <CartArrow />
        <h3 className="text-[2.7vw] leading-[3.3vw] text-[#fff]">Fill your box</h3>
      </div>
      <CartClose />
    </div>
  );
};
