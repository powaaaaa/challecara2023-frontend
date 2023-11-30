import type { ComponentPropsWithoutRef } from 'react';

import type { SelectTagItem, isLabelDisplay } from '@/libs/@types';

type Props = {
  display: isLabelDisplay;
  label: SelectTagItem['label'];
  id: SelectTagItem['id'];
  pref: string[];
} & ComponentPropsWithoutRef<'select'>;

const InputStyle =
  'w-[336px] h-14 bg-white rounded border-[1px] border-black-lighten-2 focus:ring-1 focus:ring-main focus:outline-none focus:border-main pl-4 text-black font-normal placeholder-black-lighten-1';

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
