import type { ComponentPropsWithoutRef } from 'react';

import { cva } from 'class-variance-authority';

import type { SelectTagItem } from '@/libs/@types';

export type Props = {
  tagsList: SelectTagItem[];
  onClick: (event: React.MouseEvent<SelectTagItem & HTMLButtonElement>) => void;
} & ComponentPropsWithoutRef<'button'>;

export const SelectTags: React.FC<Props> = ({
  tagsList,
  onClick,
  ...props
}) => {
  const TagStyle = cva(
    'flex px-3 justify-center items-center gap-2.5 rounded-xl cursor-pointer shadow-yb2',
    {
      variants: {
        selected: {
          false: 'bg-white text-black hover:bg-black-lighten-3',
          true: 'bg-main text-white hover:bg-accent',
        },
      },
    }
  );
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-4">
      {tagsList.map((tag) => (
        <button
          className={TagStyle({ selected: tag.selected })}
          key={tag.id}
          onClick={onClick}
          {...props}
        >
          {tag.label}
        </button>
      ))}
    </div>
  );
};
