import { useParams, useRouter } from 'next/navigation';

import type { EventResponse } from '@/api/@types';

type IUseFailedEventDetail = {
  FstOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  useOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const useFailedEventDetail = ({
  eventData,
}: {
  eventData: EventResponse['data'];
}): IUseFailedEventDetail => {
  const router = useRouter();
  const eventId = useParams<{ id: string }>().id;

  const FstOnClick = (): void => {
    sessionStorage.setItem('eventTitle', JSON.stringify(eventData.event.title));
    // NOTE add hooks to get eventTitle On next page from sessionStorage of EventResponse
    router.push(`/event/${eventId}/result`);
  };

  const useOnClick = (): void => {
    sessionStorage.setItem('eventTitle', JSON.stringify(eventData.event.title));
    // NOTE add hooks to get eventTitle On next page from sessionStorage of EventResponse
    router.push(`/event/${eventId}/receipts`);
  };

  return { FstOnClick, useOnClick };
};
