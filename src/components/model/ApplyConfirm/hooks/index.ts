'use client';

import type React from 'react';
import { useEffect, useState } from 'react';

import { useParams, useRouter } from 'next/navigation';

import type { EventResponse, RegisterEventPayload } from '@/libs/@types/api';

import { Axios } from '@/hooks/api';

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
  const [fetchData, setFetchData] = useState<EventResponse>();
  const [imageUrl, setImageUrl] = useState<string>('');
  const [eventTitle, setEventTitle] = useState<string>('');
  const [administratorName, setAdministratorName] = useState<string>('');
  const [administratorNote, setAdministratorNote] = useState<string>('');

  // TODO useEffect
  useEffect(() => {
    const sessionData = window.sessionStorage.getItem('eventResponse');
    if (sessionData) {
      const data = JSON.parse(sessionData) as EventResponse;
      if (data === null) {
        throw new Error('sessionStorageの取得に失敗しました');
      }
      setFetchData(data);
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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
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
