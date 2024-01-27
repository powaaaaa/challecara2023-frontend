import type { ComponentPropsWithoutRef } from 'react';

import { format } from 'date-fns';
import Image from 'next/image';

import type * as Types from '@/libs/@types/api';

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
  // invalid
  const ds = startTime !== '' ? new Date(startTime) : new Date();
  const de = endTime !== '' ? new Date(endTime) : new Date();
  const start = format(ds, 'yyyy/MM/dd');
  const end = format(de, 'yyyy/MM/dd');

  // const imageLoader = ({ image_url }: { image_url: string }) =>
  //   `${image_url}?w=448&q=75`;
  console.log('imageUrl: ', image_url);

  return (
    <button
      className="text-black bg-basic w-[832px] h-[252px] rounded-xl shadow-yb2 flex relative overflow-hidden"
      {...props}
    >
      <Image
        className="z-0 bg-origin-border object-cover object-center"
        // loader={() => image_url + '?w=448&q=75'}
        src={image_url}
        alt="image_url"
        width={448}
        height={252}
        layout="fixed"
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
