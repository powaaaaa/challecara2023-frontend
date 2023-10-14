// TODO use 'React.ComponentPropsWithRef'
import type { ButtonHTMLAttributes } from 'react';

import { cva } from 'class-variance-authority';

// TODO add type 'submit'
type Props = {
  variant: 'base' | 'sub';
  label: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

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
