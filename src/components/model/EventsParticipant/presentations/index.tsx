import { SearchCard } from './item/SearchCard';

import type { EventListItem } from '@/api/@types';
import type { SelectTagItem } from '@/libs/@types';

import { EventCardList } from '@/components/ui/EventCardList';

type Props = {
  eventListItem: EventListItem[];
  tagList: SelectTagItem[];
  changeEventTags: (
    event: React.MouseEvent<SelectTagItem & HTMLButtonElement>
  ) => void;
  changeKeyword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const EventsParticipantPresentation: React.FC<Props> = ({
  eventListItem,
  tagList,
  changeEventTags,
  changeKeyword,
  handleSearchEvent,
}) => (
  <div className="text-black flex gap-x-8">
    <div className="mt-12">
      <SearchCard
        changeEventTags={changeEventTags}
        handleSearchEvent={handleSearchEvent}
        tagList={tagList}
        changeKeyword={changeKeyword}
      />
    </div>
    <div>
      <div className="mb-4 font-medium text-2xl">開催中の抽選</div>
      <div>
        <EventCardList eventListItem={eventListItem} />
      </div>
    </div>
  </div>
);
