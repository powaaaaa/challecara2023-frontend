import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import type { EventResponse } from '@/api/@types';

type IUseActiveEventDetail = {
  fetchData: EventResponse | null;
  FstOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const useActiveEventDetail = (): IUseActiveEventDetail => {
  const router = useRouter();
  const [fetchData, setFetchData] = useState<EventResponse | null>(null);
  const [eventId, setEventId] = useState<string>('');

  useEffect(() => {
    const sessionData = sessionStorage.getItem('EventResponse');
    if (sessionData) {
      try {
        const data = JSON.parse(sessionData) as EventResponse;
        setFetchData(data);
      } catch (error) {
        console.error('データのパースに失敗しました。');
      }
    }
  }, []);

  useEffect(() => {
    if (fetchData?.event.id === undefined || fetchData?.user.id === undefined) {
      console.error('不正なデータです。');
      return;
    }

    setEventId(fetchData.event.id);
  }, [fetchData]);

  const FstOnClick = (): void => {
    sessionStorage.setItem('EventResponse', JSON.stringify(fetchData));
    router.push(`/Event/${eventId}/ApplyConfirm`).catch((error) => {
      console.error('ページ遷移に失敗しました: ', error);
    });
  };

  return {
    fetchData,
    FstOnClick,
  };
};
