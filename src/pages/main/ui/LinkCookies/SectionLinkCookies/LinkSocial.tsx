import React from 'react';
import { Link } from 'react-router-dom';

interface LinkSocialProps {
  img: string;
  link: string;
}
// entity
export const LinkSocial: React.FC<LinkSocialProps> = ({ img, link }) => {
  return (
    <Link
      className="w-[22.22vw] max-md:snap-start max-md:flex-none max-md:w-[48vw] max-md:h-[85vw] h-[39.44vw] mt-[6.94vw]"
      to={link}
    >
      <img className="w-full h-full" src={img} alt="LinkSocial" />
    </Link>
  );
};
