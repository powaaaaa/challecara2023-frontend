import { useEventsParticipant } from './hooks';
import { EventsParticipantPresentation } from './presentations';

export const EventsParticipant: React.FC = () => {
  const {
    eventListItem,
    tagList,
    changeEventTag,
    eventKeyword,
    setEventKeyword,
    HandleSearchEvent,
    onClickEventCard,
  } = useEventsParticipant();
  return (
    <div>
      <EventsParticipantPresentation
        eventListItem={eventListItem}
        tagList={tagList}
        changeEventTag={changeEventTag}
        eventKeyword={eventKeyword}
        setEventKeyword={setEventKeyword}
        HandleSearchEvent={HandleSearchEvent}
        onClickEventCard={onClickEventCard}
      />
    </div>
  );
};
