import { Suspense, type Dispatch, type SetStateAction } from 'react';

import { SearchCard } from './item/SearchCard';

import type { EventListItem } from '@/api/@types';
import type { SelectTagItem } from '@/libs/@types';

import { EventCardList } from '@/components/ui/EventCardList';

type Props = {
  eventListItem: EventListItem[];
  tagList: SelectTagItem[];
  changeEventTag: (
    event: React.MouseEvent<HTMLButtonElement>,
    item: SelectTagItem
  ) => void;
  eventKeyword: string;
  setEventKeyword: Dispatch<SetStateAction<string>>;
  HandleSearchEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClickEventCard: (
    event: React.MouseEvent<HTMLButtonElement>,
    item: EventListItem
  ) => void;
};

export const EventsParticipantPresentation: React.FC<Props> = ({
  eventListItem,
  tagList,
  changeEventTag,
  eventKeyword,
  setEventKeyword,
  HandleSearchEvent,
  onClickEventCard,
}) => (
  <div className="text-black flex gap-x-8">
    <div className="mt-12">
      <SearchCard
        onClickEventTag={changeEventTag}
        HandleSearchEvent={HandleSearchEvent}
        tagList={tagList}
        setEventKeyword={setEventKeyword}
        eventKeyword={eventKeyword}
      />
    </div>
    <div>
      <p className="mb-4 font-medium text-2xl">開催中の抽選</p>
      <Suspense fallback={<p>Loading...</p>}>
        <EventCardList
          eventListItem={eventListItem}
          onClickEventCard={onClickEventCard}
        />
      </Suspense>
    </div>
  </div>
);
