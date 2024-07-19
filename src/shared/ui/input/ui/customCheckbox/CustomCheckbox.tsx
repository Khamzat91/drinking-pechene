import React from 'react';
import '../../index.css';
import { CheckboxChecked } from './CheckboxChecked';

interface IRadio {
  name: string;
  id: string;
  value: any;
  onChange?: any;
  checked?: boolean;
  disabled?: boolean;
  labelCls?: string;
}

export const Checkbox: React.FC<IRadio> = ({ name, id, value, onChange, checked, disabled }) => {
  return (
    <>
      <input
        type="checkbox"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label className="labelCheckbox relative flex mt-[2.2vw] max-md:mt-[8.5vw]" htmlFor={id}>
        {checked && <CheckboxChecked className="absolute w-[1.63vw] h-[3vw] top-[-0.7vw] left-0 max-md:top-[0.13vw] max-md:w-[6.4vw] max-md:h-[6.4vw]" />}
        <div className="">
          I have read and agree to the{' '}
          <span className="border-b-[0.07vw] border-white hover:border-[#53F6DA] hover:text-[#53F6DA] transition duration-150 ease-out hover:ease-in">Privacy Policy</span>
        </div>
      </label>
    </>
  );
};
