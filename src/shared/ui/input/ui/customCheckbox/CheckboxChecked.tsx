import React from 'react';

type IChecked = {
    className: string;
}

export const CheckboxChecked:React.FC<IChecked> = ({className}) => {
    return (
        <svg
            className={className}
            width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#53F6DA"/>
            <path d="M17.6654 8L10.3321 15.3333L6.99878 12" stroke="#003C46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};