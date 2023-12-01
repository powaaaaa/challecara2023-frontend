import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import type { EventResponse, PublishEventPayload } from '@/api/@types';

import { apiClient } from '@/libs/apiClients';

type IUseDraftEventDetail = {
  fetchData: EventResponse | null;
  FstOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const useDraftEventDetail = (): IUseDraftEventDetail => {
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
        console.error('データのパースに失敗しました。', error);
      }
    }
  }, []);

  useEffect(() => {
    if (fetchData?.event.id === undefined) {
      console.error('不正なデータです');
      return;
    }

    setEventId(fetchData.event.id);
  }, [fetchData]);

  const fetchPublish = async (body: PublishEventPayload): Promise<void> =>
    await apiClient.event.publish.$post({ body });

  const useFetchPublish = (): void => {
    useEffect(() => {
      if (fetchData === null) {
        return;
      }
      const fetch = async (): Promise<void> => {
        try {
          const reqBody: PublishEventPayload = {
            id: eventId,
          };

          await fetchPublish(reqBody);
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

  const updateFetchEvent = async (path: string): Promise<EventResponse> =>
    await apiClient.event._id(path).$get();

  const useUpdateFetchEvent = (): void => {
    useEffect(() => {
      if (fetchData === null) {
        return;
      }
      const fetch = async (): Promise<EventResponse | void> => {
        try {
          if (fetchData.event.id === undefined) {
            console.error('不正なイベントIDです');
            return;
          }

          const path: string = fetchData.event.id;
          const data: EventResponse = await updateFetchEvent(path);
          setFetchData(data);
        } catch (error) {
          console.error('イベントデータの更新に失敗しました: ', error);
          return;
        }
      };

      fetch().catch((error) => {
        console.error('fetch関数内でエラーが発生しました: ', error);
      });
    });
  };

  const FstOnClick = (): void => {
    useFetchPublish();
    useUpdateFetchEvent();

    sessionStorage.setItem('EventResponse', JSON.stringify(fetchData));
    router.push(`/Event/${fetchData?.event.id}`).catch((error) => {
      console.error('ページ遷移に失敗しました: ', error);
    });
  };

  const onClick = (): void => {
    router.push(`/Administrator/Home`).catch((error) => {
      console.error('ページ遷移に失敗しました: ', error);
    });
  };

  return { fetchData, FstOnClick, onClick };
};
