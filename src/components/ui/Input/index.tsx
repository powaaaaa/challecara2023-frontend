import type { ComponentPropsWithoutRef } from 'react';

type Props = {
  type: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url';
  label: string;
  id: string;
  display: 'hidden' | 'block';
} & ComponentPropsWithoutRef<'input'>;

export const Input: React.FC<Props> = ({
  type,
  label,
  id,
  display,
  ...props
}) => (
  <span className="text-base">
    <label className={`${display} text-black font-medium pb-2`} htmlFor={id}>
      {label}
    </label>
    <input
      className="w-[336px] h-14 bg-white rounded border-[1px] border-black-lighten-2 focus:ring-1 focus:ring-main focus:outline-none focus:border-main pl-4 text-black font-normal font-noto-sans placeholder-black-lighten-1"
      id={id}
      type={type}
      required
      {...props}
    />
  </span>
);
