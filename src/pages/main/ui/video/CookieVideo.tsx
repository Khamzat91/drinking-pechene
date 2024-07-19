import React from 'react';
import ReactPlayer from 'react-player';
import './index.css';

export const CookieVideo = () => {
  return (
    <ReactPlayer
      className="CookieVideo px-[8px] max-md:px-[4px]"
      controls={false}
      width="100%"
      height="53.6%"
      loop
      muted
      playing
      url="/video/cookieVideo.MP4"
    />
  );
};
