import React from 'react';

import { EventCard } from '../EventCard';

import type { EventListItem } from '@/api/@types';

type Props = {
  eventListItem: EventListItem[];
  onClickEventCard: (
    event: React.MouseEvent<HTMLButtonElement>,
    item: EventListItem
  ) => void;
};

export const EventCardList: React.FC<Props> = ({
  eventListItem,
  onClickEventCard,
}) => {
  const handleClick =
    (item: EventListItem) =>
    // クリック時にonClickEventCardを呼び出す
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onClickEventCard(event, item);
    };

  return (
    <div className="flex flex-nowrap flex-col gap-y-4">
      {eventListItem.map((item) => (
        <EventCard
          key={item.title}
          image_url={item.image_url}
          title={item.title}
          administratorName={item.administrator_id}
          startTime={item.start_time}
          endTime={item.end_time}
          onClick={handleClick(item)}
        />
      ))}
    </div>
  );
};
