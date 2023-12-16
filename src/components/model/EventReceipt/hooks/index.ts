import type React from 'react';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

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
  const [eventId, setEventId] = useState<string>('');
  const [fetchUpdateData, setFetchUpdateData] = useState<EventResponse | null>(
    null
  );
  const [participantId, setParticipantId] = useState<string>('');

  useEffect(() => {
    const sessionData = sessionStorage.getItem('EventResponse');
    const eventId = sessionStorage.getItem('eventId');
    if (sessionData) {
      try {
        const data = JSON.parse(sessionData) as ReceiptResponse;
        setFetchData(data);
      } catch (error) {
        console.error('データのパースに失敗しました。', error);
      }
    }
    if (eventId) {
      try {
        const data = JSON.parse(eventId) as string;
        setEventId(data);
      } catch (error) {
        console.error('データのパースに失敗しました。', error);
      }
    }
  }, []);

  useEffect(() => {
    if (fetchData?.user.id === undefined) {
      console.error('不正なデータです');
      return;
    }
    setParticipantId(fetchData.user.id);
  }, [fetchData]);

  const fetchPostReceipt = async (
    path: string,
    body: ReceiptPayload
  ): Promise<void> => await apiClient.event._id(path).receipt.$post({ body });

  const updateFetchEvent = async (path: string): Promise<EventResponse> =>
    await apiClient.event._id(path).$get();

  const useFetchPostReceipt = (): void => {
    useEffect(() => {
      if (fetchData === null || eventId === null) {
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
    router.push(`/Event/${fetchUpdateData?.event.id}`);
  };

  const HandleReturnHome = (): void => {
    router.push(`/User/Home`);
  };

  return { fetchData, HandleReceipt, HandleReturnHome };
};
