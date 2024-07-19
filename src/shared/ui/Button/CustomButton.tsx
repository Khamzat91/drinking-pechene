import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

export const CustomButton: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <button
      {...props}
      className={
        'text-[1.1vw] leading-[1.25vw] pt-[0.8vw] pb-[1.1vw] w-full text-center transition duration-150 ease-out hover:ease-in ' +
        'rounded-[1.67vw] ' +
        props.className
      }
    ></button>
  );
};
