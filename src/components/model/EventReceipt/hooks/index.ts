import type React from 'react';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import type {
  EventResponse,
  ReceiptPayload,
  ReceiptResponse,
} from '@/api/@types';

import { apiClient } from '@/libs/apiClients';

type IUseEventReceipt = {
  fetchData: ReceiptResponse | null;
  HandleReceipt: (event: React.MouseEvent<HTMLButtonElement>) => void;
  HandleReturnHome: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const useEventReceipt = (): IUseEventReceipt => {
  const router = useRouter();
  const [fetchData, setFetchData] = useState<ReceiptResponse | null>(null);
  const [fetchUpdateData, setFetchUpdateData] = useState<EventResponse | null>(
    null
  );
  const [eventId, setEventId] = useState<string>('');
  const [participantId, setParticipantId] = useState<string>('');

  useEffect(() => {
    const sessionData = sessionStorage.getItem('EventResponse');
    if (sessionData) {
      try {
        const data = JSON.parse(sessionData) as ReceiptResponse;
        setFetchData(data);
      } catch (error) {
        console.error('データのパースに失敗しました。', error);
      }
    }
  }, []);

  useEffect(() => {
    if (router.query || fetchData?.user.id === undefined) {
      console.error('不正なデータです');
      return;
    }
    setEventId(router.query);
    setParticipantId(fetchData.user.id);
  }, [fetchData, router.query]);

  const fetchPostReceipt = async (
    path: string,
    body: ReceiptPayload
  ): Promise<void> => await apiClient.event._id(path).receipt.$post({ body });

  const updateFetchEvent = async (path: string): Promise<EventResponse> =>
    await apiClient.event._id(path).$get();

  const useFetchPostReceipt = (): void => {
    useEffect(() => {
      if (fetchData === null || !router.query) {
        return;
      }
      const fetch = async (): Promise<void> => {
        try {
          const reqBody: ReceiptPayload = {
            id: eventId,
            participant_id: participantId,
          };

          await fetchPostReceipt(eventId, reqBody);
        } catch (error) {
          console.error('受取申請の送信に失敗しました: ', error);
          return;
        }
      };

      fetch().catch((error) => {
        console.error('fetch関数内でエラーが発生しました: ', error);
      });
    });
  };

  const useUpdateFetchEvent = (): void => {
    useEffect(() => {
      if (fetchUpdateData === null) {
        return;
      }
      const fetch = async (): Promise<EventResponse | void> => {
        try {
          if (fetchUpdateData.event.id === undefined) {
            console.error('不正なイベントIDです');
            return;
          }

          const path: string = fetchUpdateData.event.id;
          const data: EventResponse = await updateFetchEvent(path);
          setFetchUpdateData(data);
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

  const HandleReceipt = (): void => {
    useFetchPostReceipt();
    useUpdateFetchEvent();

    sessionStorage.setItem('EventResponse', JSON.stringify(fetchData));
    router.push(`/Event/${fetchUpdateData?.event.id}`).catch((error) => {
      console.error('ページ遷移に失敗しました: ', error);
    });
  };

  const HandleReturnHome = (): void => {
    router.push(`/User/Home`).catch((error) => {
      console.error('ページ遷移に失敗しました: ', error);
    });
  };

  return { fetchData, HandleReceipt, HandleReturnHome };
};
