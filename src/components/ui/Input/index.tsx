import type { ComponentPropsWithoutRef } from 'react';

import { cva } from 'class-variance-authority';

import type { ButtonType, IsLabelDisplay } from '@/libs/@types';

type Props = {
  type: ButtonType;
  label: string;
  id: string;
  display: IsLabelDisplay;
} & ComponentPropsWithoutRef<'input'>;

export const Input: React.FC<Props> = ({
  type,
  label,
  id,
  display,
  className,
  ...props
}) => {
  const placeholderText = (type: string): string => {
    switch (type) {
      case 'text':
        return '入力してください';
      case 'number':
        return '0';
      case 'email':
        return 'example@example.com';
      case 'password':
        return 'password';
      case 'tel':
        return '012-3456-7890';
      case 'url':
        return 'https://example.com';
      default:
        return '入力してください';
    }
  };

  const inputStyle = cva(
    'w-[336px] h-14 bg-white rounded border-[1px] border-black-lighten-2 focus:ring-1 focus:ring-main focus:outline-none focus:border-main pl-4 text-black font-normal placeholder-black-lighten-1'
  );

  return (
    <span className="text-base">
      <label className={`${display} text-black font-medium pb-2`} htmlFor={id}>
        {label}
      </label>
      <input
        className={inputStyle({ className })}
        id={id}
        type={type}
        placeholder={placeholderText(type)}
        {...props}
      />
    </span>
  );
};
