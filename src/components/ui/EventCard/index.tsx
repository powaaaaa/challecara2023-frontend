import type { ComponentPropsWithoutRef } from 'react';

import { format, parseISO } from 'date-fns';
import Image from 'next/image';

import type * as Types from '@/api/@types';

type Props = {
  image_url: Types.EventItem['image_url'];
  title: Types.EventItem['title'];
  administratorName: Types.AdministratorItem['administrator_display_name'];
  startTime: Types.EventItem['start_time'];
  endTime: Types.EventItem['end_time'];
} & ComponentPropsWithoutRef<'button'>;

export const EventCard: React.FC<Props> = ({
  image_url,
  title,
  administratorName,
  startTime,
  endTime,
  ...props
}) => {
  const start = format(parseISO(startTime), 'yyyy/MM/dd');
  const end = format(parseISO(endTime), 'yyyy/MM/dd');

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
        <p className="absolute right-0 bottom-0 pr-4 pb-[70px]">
          {administratorName}
        </p>
        <p className="absolute right-0 bottom-0 pr-4 pb-10">{`${start} ～ ${end}`}</p>
      </span>
    </button>
  );
};
