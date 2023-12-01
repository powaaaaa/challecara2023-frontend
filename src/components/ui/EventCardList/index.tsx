import { EventCard } from '../EventCard';

import type { EventListItem } from '@/api/@types';

type Props = {
  eventListItem: EventListItem[];
};

export const EventCardList: React.FC<Props> = ({ eventListItem }) => (
  <div className="flex flex-nowrap flex-col gap-y-4">
    {eventListItem.map((item) => (
      <EventCard
        key={item.title}
        image_url={item.image_url}
        title={item.title}
        administratorName={item.administrator_id}
        startTime={item.start_time}
        endTime={item.end_time}
      />
    ))}
  </div>
);
