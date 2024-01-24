import { ReactNode } from 'react';

export enum SizeEnum {
  S,
  M,
  L,
}

type TitleType = {
  children: ReactNode;
  size: SizeEnum;
};

export const Title = ({ children, size }: TitleType) => {
  return (
    <div
      className={`font-bold 
      ${size === SizeEnum.L && 'text-xl'} 
      ${size === SizeEnum.M && 'text-lg'}
      ${size === SizeEnum.S && 'text-md'}
      `}
    >
      {children}
    </div>
  );
};
