import type { ComponentPropsWithoutRef } from 'react';

import { cva } from 'class-variance-authority';

type TagsList = {
  id: string;
  label: string;
  selected: boolean;
} & object;

type Props = {
  tagsList: TagsList[];
} & ComponentPropsWithoutRef<'span'>;

export const Tags: React.FC<Props> = ({ tagsList, ...props }) => {
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
        <span
          className={TagStyle({ selected: tag.selected })}
          key={tag.id}
          {...props}
        >
          {tag.label}
        </span>
      ))}
    </div>
  );
};
