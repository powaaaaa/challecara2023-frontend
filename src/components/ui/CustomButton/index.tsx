import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';

import { Button } from '../Button';

import type { ButtonCustom } from '@/libs/@types';

type Props = {
  buttonState: ButtonCustom;
  label: string;
  subLabel: string;
  FstOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & ComponentPropsWithoutRef<'button'>;

export const CustomButton: React.FC<Props> = ({
  buttonState,
  label,
  subLabel,
  FstOnClick,
  // onClickを取得するため
  ...props
}) => (
  <div>
    {/* base */}
    <div style={{ display: buttonState === 'base' ? '' : 'none' }}>
      <Button variant="base" label={label} onClick={FstOnClick} />
    </div>
    {/* disabled */}
    <div style={{ display: buttonState === 'disabled' ? '' : 'none' }}>
      <Button variant="disabled" disabled label={label} />
    </div>
    {/* result */}
    <div
      className="flex grep gap-12"
      style={{ display: buttonState === 'result' ? '' : 'none' }}
    >
      <button
        className="my-auto underline underline-offset-2 hover:text-accent font-medium"
        onClick={FstOnClick}
      >
        {label}
      </button>
      <Button variant="base" label={subLabel} {...props} />
    </div>
    {/* draft */}
    <div
      className="flex grep gap-12"
      style={{ display: buttonState === 'draft' ? '' : 'none' }}
    >
      <Button variant="base" label={label} onClick={FstOnClick} />
      <Button variant="sub" label={subLabel} {...props} />
    </div>
    {/* none */}
  </div>
);
