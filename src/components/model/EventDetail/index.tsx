'use client';

import { useEventDetail } from './hooks';
import { EventDetailPresentation } from './presentations';

export const EventDetail: React.FC = () => {
  const { eventData } = useEventDetail();

  const event = eventData?.event;

  const eventDetailState = (():
    | 'Applied'
    | 'Active'
    | 'Failed'
    | 'Received'
    | 'Winning'
    | 'Draft' => {
    if (event?.is_published) {
      if (event.is_active) {
        if (event.has_applied) {
          return 'Applied';
        } else {
          return 'Active';
        }
      } else {
        if (event.is_winner) {
          if (event.is_received) {
            return 'Received';
          } else {
            return 'Winning';
          }
        } else {
          return 'Failed';
        }
      }
    } else {
      return 'Draft';
    }
  })();

  return (
    <>
      {eventData == null ? (
        <p>イベントデータが取得できません。</p>
      ) : (
        <EventDetailPresentation
          eventDetailState={eventDetailState}
          eventData={eventData}
        />
      )}
    </>
  );
};
