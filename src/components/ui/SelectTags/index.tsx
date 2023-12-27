import type { ComponentPropsWithoutRef } from 'react';

import { cva } from 'class-variance-authority';

import type { SelectTagItem } from '@/libs/@types';

export type Props = {
  tagsList: SelectTagItem[];
  onClickTag: (
    event: React.MouseEvent<HTMLButtonElement>,
    item: SelectTagItem
  ) => void;
} & ComponentPropsWithoutRef<'button'>;

export const SelectTags: React.FC<Props> = ({
  tagsList,
  onClickTag,
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

  const handleClick =
    (item: SelectTagItem) =>
    // クリック時にonClickを呼び出す
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onClickTag(event, item);
    };

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-4">
      {tagsList.map((tag) => (
        <button
          className={TagStyle({ selected: tag.selected })}
          key={tag.id}
          onClick={handleClick(tag)}
          {...props}
        >
          {tag.label}
        </button>
      ))}
    </div>
  );
};
