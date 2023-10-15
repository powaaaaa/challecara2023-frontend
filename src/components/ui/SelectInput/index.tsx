import type { ComponentPropsWithoutRef } from 'react';

import { InputStyle } from '../Input';

type Props = {
  display: 'hidden' | 'block';
  label: string | null;
  id: string;
  pref: string[];
} & ComponentPropsWithoutRef<'select'>;

export const SelectInput: React.FC<Props> = ({
  display,
  label,
  id,
  pref,
  ...props
}) => (
  <span className="text-base">
    <label className={`${display} text-black font-medium pb-2`} htmlFor={id}>
      {label}
    </label>
    <select className={`${InputStyle} pr-4`} id={id} required {...props}>
      <option className="hidden text-black-lighten-1" value="">
        選択してください
      </option>
      {pref.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  </span>
);
