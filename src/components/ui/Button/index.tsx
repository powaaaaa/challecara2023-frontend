import type { ComponentPropsWithoutRef } from 'react';

import { cva } from 'class-variance-authority';

type Props = {
  variant: 'base' | 'sub' | 'inputStyle' | 'disabled';
  label: string;
} & ComponentPropsWithoutRef<'button'>;

const InputStyle: string =
  'w-[336px] h-14 bg-white rounded border-[1px] border-black-lighten-2 focus:ring-1 focus:ring-main focus:outline-none focus:border-main pl-4 text-black font-normal placeholder-black-lighten-1';

export const Button: React.FC<Props> = ({
  variant,
  label,
  disabled,
  className,
  ...props
}) => {
  const buttonStyle = cva('px-8 py-4 rounded font-medium', {
    variants: {
      variant: {
        base: 'text-white bg-main hover:bg-accent',
        sub: 'text-main bg-white border-2 border-main hover:bg-sub',
        inputStyle: `${InputStyle} text-left`,
        disabled: '',
      },
      disabled: {
        true: 'text-black-lighten-1 bg-white border-2 border-black-lighten-1',
      },
    },
  });

  return (
    <>
      <button
        className={buttonStyle({ variant, disabled, className })}
        {...props}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};
