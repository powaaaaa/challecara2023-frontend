import type { ComponentPropsWithoutRef } from 'react';

import { format } from 'date-fns';
import Image from 'next/image';

type Props = {
  image_url: string;
  title: string;
  name: string;
  startTime: Date;
  endTime: Date;
} & ComponentPropsWithoutRef<'button'>;

export const EventCard: React.FC<Props> = ({
  image_url,
  title,
  name,
  startTime,
  endTime,
  ...props
}) => {
  const start = format(startTime, 'yyyy/MM/dd');
  const end = format(endTime, 'yyyy/MM/dd');

  return (
    <button
      className="text-black bg-basic w-[832px] h-[252px] rounded-xl shadow-yb2 flex relative overflow-hidden"
      {...props}
    >
      <Image
        className="z-0 bg-origin-border object-cover object-center"
        src={image_url}
        alt="image_url"
        width={448}
        height={252}
      />

      <span>
        <p className="text-left font-medium text-base pt-10 px-4">{title}</p>
        <p className="absolute right-0 bottom-0 pr-4 pb-[70px]">{name}</p>
        <p className="absolute right-0 bottom-0 pr-4 pb-10">{`${start} ～ ${end}`}</p>
      </span>
    </button>
  );
};
