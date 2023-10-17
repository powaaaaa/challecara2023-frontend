import type { ComponentPropsWithoutRef } from 'react';

import { cva } from 'class-variance-authority';

type Props = {
  tag: string;
  selected: boolean;
  className: string;
} & ComponentPropsWithoutRef<'span'>;

export const Tag: React.FC<Props> = ({
  tag,
  selected,
  className,
  ...props
}) => {
  const TagStyle = cva(
    'flex px-2 justify-center items-center gap-2.5 rounded-xl cursor-pointer shadow-yb2',
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
    <span className={TagStyle({ selected, className })} {...props}>
      {tag}
    </span>
  );
};
