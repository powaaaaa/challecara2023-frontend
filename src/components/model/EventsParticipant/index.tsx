'use client';

import { useEventsParticipant } from './hooks';
import { EventsParticipantPresentation } from './presentations';

export const EventsParticipant: React.FC = () => {
  const {
    error,
    isLoading,
    eventListItem,
    tagList,
    changeEventTag,
    eventKeyword,
    setEventKeyword,
    HandleSearchEvent,
    onClickEventCard,
  } = useEventsParticipant();

  if (error) <p>failed to load</p>;
  if (isLoading) <p>Loading...</p>;

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
