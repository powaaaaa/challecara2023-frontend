import type React from 'react';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import type { EventResponse, RegisterEventPayload } from '@/api/@types';

import { apiClient } from '@/libs/apiClients';

type IUseApplyConfirm = {
  image_url: string;
  eventTitle: string;
  administratorName: string;
  administratorNote: string;
  OnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const useApplyConfirm = (): IUseApplyConfirm => {
  const router = useRouter();
  const [fetchData, setFetchData] = useState<EventResponse | null>(null);
  const [image_url, setImage_url] = useState<string>('');
  const [eventTitle, setEventTitle] = useState<string>('');
  const [administratorName, setAdministratorName] = useState<string>('');
  const [administratorNote, setAdministratorNote] = useState<string>('');

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

    if (
      fetchData?.event.image_url === undefined ||
      fetchData.event.title === undefined ||
      fetchData.administrator.administrator_display_name === undefined
    ) {
      console.error('不正なデータです');
      return;
    }

    setImage_url(fetchData.event.image_url);
    setEventTitle(fetchData.event.title);
    setAdministratorName(fetchData.administrator.administrator_display_name);
    setAdministratorNote('ないね！');
  }, [fetchData]);

  const fetchEvent = async (body: RegisterEventPayload): Promise<void> =>
    await apiClient.event.$post({ body });

  const useFetchEvent = (): void => {
    useEffect(() => {
      if (fetchData === null) {
        return;
      }
      const fetch = async (): Promise<void> => {
        try {
          if (
            fetchData.event.id === undefined ||
            fetchData.user.id === undefined
          ) {
            console.error('イベントIDまたはユーザーIDが不正です');
            return;
          }

          const reqBody: RegisterEventPayload = {
            id: fetchData.event.id,
            participant_id: fetchData.user.id,
          };

          await fetchEvent(reqBody);
        } catch (error) {
          console.error('応募の送信に失敗しました: ', error);
          return;
        }
      };

      void fetch();
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

      void fetch();
    });
  };

  const OnClick = (): void => {
    useFetchEvent();
    useUpdateFetchEvent();

    sessionStorage.setItem('EventResponse', JSON.stringify(fetchData));
    router.push(`/Event/${fetchData?.event.id}`).catch((error) => {
      console.error('ページ遷移に失敗しました: ', error);
    });
  };

  return {
    image_url,
    eventTitle,
    administratorName,
    administratorNote,
    OnClick,
  };
};
