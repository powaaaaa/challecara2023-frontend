import { useEventsParticipant } from './hooks';
import { EventsParticipantPresentation } from './presentations';

export const EventsParticipant: React.FC = () => {
  const {
    eventListItem,
    tagList,
    changeEventTags,
    changeKeyword,
    handleSearchEvent,
  } = useEventsParticipant();
  return (
    <div>
      <EventsParticipantPresentation
        eventListItem={eventListItem}
        tagList={tagList}
        changeEventTags={changeEventTags}
        changeKeyword={changeKeyword}
        handleSearchEvent={handleSearchEvent}
      />
    </div>
  );
};
