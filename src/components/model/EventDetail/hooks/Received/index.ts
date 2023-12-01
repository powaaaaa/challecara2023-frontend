import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import type {
  EventResponse,
  ReceiptsResponse,
  ResultResponse,
} from '@/api/@types';

import { apiClient } from '@/libs/apiClients';

type IUseReceivedEventDetail = {
  fetchData: EventResponse | null;
  FstOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  useOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const useReceivedEventDetail = (): IUseReceivedEventDetail => {
  const router = useRouter();
  const [fetchData, setFetchData] = useState<EventResponse | null>(null);
  const [eventId, setEventId] = useState<string>('');
  const [eventTitle, setEventTitle] = useState<string>('');

  useEffect(() => {
    const sessionData = sessionStorage.getItem('EventResponse');
    if (sessionData) {
      try {
        const data = JSON.parse(sessionData) as EventResponse;
        setFetchData(data);
      } catch (error) {
        console.error('データのパースに失敗しました。', error);
      }
    }
  }, []);

  useEffect(() => {
    if (
      fetchData?.event.id === undefined ||
      fetchData.event.title === undefined
    ) {
      console.error('不正なデータです');
      return;
    }

    setEventId(fetchData.event.id);
    setEventTitle(fetchData.event.title);
  }, [fetchData]);

  const fetchResult = async (path: string): Promise<ResultResponse> =>
    await apiClient.event._id(path).results.$get();

  const fetchReceipts = async (path: string): Promise<ReceiptsResponse> =>
    await apiClient.event._id(path).receipts.$get();

  const useFetchResult = (): void => {
    useEffect(() => {
      if (fetchData === null) {
        return;
      }
      const fetch = async (): Promise<ResultResponse | undefined> => {
        try {
          return await fetchResult(eventId);
        } catch (error) {
          console.error('抽選結果の取得に失敗しました: ', error);
          return;
        }
      };

      fetch().catch((error) => {
        console.error('fetch関数内でエラーが発生しました: ', error);
      });
    });
  };

  const useFetchReceipts = (): void => {
    useEffect(() => {
      if (fetchData === null) {
        return;
      }
      const fetch = async (): Promise<ReceiptsResponse | undefined> => {
        try {
          return await fetchReceipts(eventId);
        } catch (error) {
          console.error('受領データの取得に失敗しました: ', error);
          return;
        }
      };

      fetch().catch((error) => {
        console.error('fetch関数内でエラーが発生しました: ', error);
      });
    });
  };

  const FstOnClick = (): void => {
    const resultData = useFetchResult();

    const query = {
      title: eventTitle,
    };

    sessionStorage.setItem('ResultResponse', JSON.stringify(resultData));
    router
      .push(
        { pathname: `/Event/${eventId}/Result`, query: query },
        `/Event/${eventId}/Result`
      )
      .catch((error) => {
        console.error('ページ遷移に失敗しました: ', error);
      });
  };

  const useOnClick = (): void => {
    const receiptsData = useFetchReceipts();

    sessionStorage.setItem('ReceiptsResponse', JSON.stringify(receiptsData));
    router.push(`/Event/${eventId}/Receipts`).catch((error) => {
      console.error('ページ遷移に失敗しました: ', error);
    });
  };

  return { fetchData, FstOnClick, useOnClick };
};
