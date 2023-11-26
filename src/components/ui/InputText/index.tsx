import type { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'textarea'>;

const InputStyle =
  'w-[400px] h-14 bg-white rounded border-[1px] border-black-lighten-2 focus:ring-1 focus:ring-main focus:outline-none focus:border-main p-4 text-black font-normal placeholder-black-lighten-1';

export const InputText: React.FC<Props> = ({ ...props }) => (
  <span className="text-base">
    <textarea
      className={InputStyle}
      placeholder="入力してください"
      rows={5}
      cols={33}
      {...props}
    />
  </span>
);
