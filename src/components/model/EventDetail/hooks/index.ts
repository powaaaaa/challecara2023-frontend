import { useState } from 'react';

import type { EventResponse } from '@/api/@types';

type IUseEventDetail = {
  eventData: EventResponse | undefined;
};

const readEventData = (): EventResponse | undefined => {
  const data = sessionStorage.getItem('EventResponse');
  return data != null ? (JSON.parse(data) as EventResponse) : undefined;
};

export const useEventDetail = (): IUseEventDetail => {
  const [eventData] = useState<EventResponse | undefined>(readEventData());

  return {
    eventData,
  };
};
