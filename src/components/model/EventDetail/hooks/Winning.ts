import { useState } from 'react';

import { useRouter } from 'next/navigation';

import type { EventResponse } from '@/api/@types';

type IUseWinningEventDetail = {
  FstOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  useOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  OnClick: (
    event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;
};

export const useWinningEventDetail = ({
  eventData,
}: {
  eventData: EventResponse['data'];
}): IUseWinningEventDetail => {
  const router = useRouter();
  const [eventId] = useState<string>(eventData.event.id);

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

  const OnClick = (): void => {
    // NOTE add hooks to get eventTitle On next page from sessionStorage of EventResponse
    router.push(`/event/${eventId}/receipt`);
  };

  return { FstOnClick, useOnClick, OnClick };
};
