import { EventDetailPresentation } from './presentations';
import { EventDetailErrorPresentation } from './presentations/error';
import { EventDetailLoadingPresentation } from './presentations/loading';

import type { EventResponse } from '@/api/@types';

type Props = {
  fetchData: EventResponse;
};

export const EventDetail: React.FC<Props> = ({ fetchData }) => (
    <>
      this is EventDetail component
      <EventDetailPresentation fetchData={fetchData} />
      <EventDetailErrorPresentation />
      <EventDetailLoadingPresentation />
    </>
  );
