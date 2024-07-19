import React from 'react';
import { BusinessCart } from './BusinessCart';
// widget
export const SectionStartBusiness = () => {
  const handleMore = () => {};
  const handleApply = () => {};

  return (
    <div className="max-md:block flex justify-center items-center gap-[1.67vw] mb-[12.5vw]">
      <BusinessCart
        img="/images/open-franchising.png"
        title="Open franchise"
        text="Start your own successful business with us."
        buttonText="Learn more"
        onClick={handleMore}
      />
      <BusinessCart
        img="/images/become-pastry.png"
        title="Become picheni-cook"
        text="Start your own successful business with us."
        buttonText="Apply now"
        onClick={handleApply}
      />
    </div>
  );
};
