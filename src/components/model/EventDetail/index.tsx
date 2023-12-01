import { EventDetailPresentation } from './presentations';

type Props = {
  eventDetailState:
    | 'Applied'
    | 'Active'
    | 'Failed'
    | 'Received'
    | 'Winning'
    | 'Draft';
};

export const EventDetail: React.FC<Props> = ({ eventDetailState }) => (
  <>
    <EventDetailPresentation eventDetailState={eventDetailState} />
  </>
);
