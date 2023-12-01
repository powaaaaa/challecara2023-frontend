import { useEffect, useState } from 'react';

import type { EventResponse } from '@/api/@types';

type IUseAppliedEventDetail = {
  fetchData: EventResponse | null;
};

export const useAppliedEventDetail = (): IUseAppliedEventDetail => {
  const [fetchData, setFetchData] = useState<EventResponse | null>(null);

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

  return {
    fetchData,
  };
};
