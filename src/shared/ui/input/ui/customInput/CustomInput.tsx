import React, { InputHTMLAttributes } from 'react';

type CustomInputProps = {
  id?: string;
  errorText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const CustomInput: React.FC<CustomInputProps> = ({ id, className, errorText, ...props }) => {
  return (
    <>
      <input
        {...props}
        className={`w-[38.88vw] max-md:w-full rounded-[0.55vw] max-md:rounded-[2.1vw] text-[#9A9A9A] bg-[#1B5B66] text-[1.25vw] leading-[1.5vw] max-md:text-[4.8vw] max-md:leading-[6.6vw] py-[1.1vw] px-[1.66vw] max-md:px-[6.4vw] max-md:pb-[1.8vw] outline-none mt-[1.1vw] max-md:mt-[2.26vw] ${className}`}
        id={id}
      />
      <p className="text-[0.97vw] max-md:text-[2vw] ml-[0.34vw] max-md:ml-[1.33vw] text-red-500">{errorText}</p>
    </>
  );
};
