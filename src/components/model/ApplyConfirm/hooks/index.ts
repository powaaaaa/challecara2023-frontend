'use client';

import type React from 'react';
import { useEffect, useState } from 'react';

import { useParams, useRouter } from 'next/navigation';

import type { EventResponse, RegisterEventPayload } from '@/api/@types';

import { Axios } from '@/libs/apiClients';

type IUseApplyConfirm = {
  imageUrl: string;
  eventTitle: string;
  administratorName: string;
  administratorNote: string;
  OnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const useApplyConfirm = (): IUseApplyConfirm => {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const [fetchData, setFetchData] = useState<EventResponse['data']>();
  const [imageUrl, setImageUrl] = useState<string>('');
  const [eventTitle, setEventTitle] = useState<string>('');
  const [administratorName, setAdministratorName] = useState<string>('');
  const [administratorNote, setAdministratorNote] = useState<string>('');

  // TODO useEffect
  useEffect(() => {
    const sessionData = sessionStorage.getItem('eventResponse');
    if (sessionData) {
      try {
        const data = JSON.parse(sessionData) as EventResponse['data'];
        if (data === null) {
          console.error('eventDataが取得出来ませんでした');
          return;
        }
        setFetchData(data);
      } catch (error) {
        console.error('データのパースに失敗しました。', error);
      }
    }
  }, []);

  useEffect(() => {
    if (fetchData === undefined) {
      console.error('不正なデータです');
      return;
    }

    setImageUrl(fetchData.event.image_url);
    setEventTitle(fetchData.event.title);
    setAdministratorName(fetchData.administrator.administrator_display_name);
    setAdministratorNote('お楽しみに！');
  }, [fetchData]);

  const fetchEventRegister = async (
    body: RegisterEventPayload
  ): Promise<void> =>
    // await apiClient.event.$post({ body });
    await Axios.post(`/event`, body);

  // const updateFetchEvent = async (path: string): Promise<EventResponse> =>
  //   await apiClient.event._id(path).$get();

  // const useUpdateFetchEvent = (): void => {
  //   useEffect(() => {
  //     if (fetchData === null) {
  //       return;
  //     }
  //     const fetch = async (): Promise<EventResponse | void> => {
  //       try {
  //         if (fetchData.event.id === undefined) {
  //           console.error('不正なイベントIDです');
  //           return;
  //         }

  //         const path: string = fetchData.event.id;
  //         const data: EventResponse = await updateFetchEvent(path);
  //         setFetchData(data);
  //       } catch (error) {
  //         console.error('イベントデータの更新に失敗しました: ', error);
  //         return;
  //       }
  //     };

  //     fetch().catch((error) => {
  //       console.error('fetch関数内でエラーが発生しました: ', error);
  //     });
  //   });
  // };

  const OnClick = (): void => {
    if (fetchData === undefined) {
      return;
    }

    const reqBody: RegisterEventPayload = {
      id: params.id,
      participant_id: fetchData.user.id,
    };

    fetchEventRegister(reqBody)
      .then(() => {
        console.log('参加申し込みdone');
        router.push(`/event/${params.id}`);
      })
      .catch((error) => {
        console.error('Error: ', error);
        alert('申し込みできませんでした。');
      });
  };

  return {
    imageUrl,
    eventTitle,
    administratorName,
    administratorNote,
    OnClick,
  };
};
