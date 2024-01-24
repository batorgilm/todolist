import React, { ReactNode } from 'react';

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  variant?: 'primary' | 'ghost' | 'outline';
}

export const Button = ({ children, onClick, variant }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-md 
      w-fit
      bg-gray-900
      text-white
      ${variant === 'ghost' && 'bg-gray-100 text-gray-700'}
      ${
        variant === 'outline' && 'bg-white border border-gray-900 text-gray-900'
      }
      `}
    >
      {children}
    </button>
  );
};
