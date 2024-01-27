'use client';

import type React from 'react';
import { useEffect, useState } from 'react';

import { useParams, useRouter } from 'next/navigation';

import type { ReceiptPayload, ReceiptResponse } from '@/libs/@types/api';

import { instance } from '@/hooks/api';

type IUseEventReceipt = {
  eventTitle: string;
  userAddress: string;
  HandleReceipt: (event: React.MouseEvent<HTMLButtonElement>) => void;
  HandleReturnHome: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const useEventReceipt = (): IUseEventReceipt => {
  const router = useRouter();
  const [fetchData, setFetchData] = useState<ReceiptResponse>();
  const [eventTitle, setEventTitle] = useState<string>('');
  const [userAddress, setUserAddress] = useState<string>('');
  const eventId = useParams<{ id: string }>().id;

  const fetchGetReceipt = async (path: string): Promise<ReceiptResponse> =>
    // await apiClient.event._id(path).receipt.$get();
    await instance.get(`/event/${path}/receipt`);

  const fetchPostReceipt = async (
    path: string,
    body: ReceiptPayload
  ): Promise<void> =>
    // await apiClient.event._id(path).receipt.$post({ body });
    await instance.post(`/event/${path}/receipt`, body);

  // TODO useEffect
  useEffect(() => {
    const abortController = new AbortController();
    fetchGetReceipt(eventId)
      .then((res) => {
        console.log('確認情報の取得done');
        setFetchData(res);
        if (fetchData) {
          setEventTitle(fetchData.title);
          setUserAddress(fetchData.address);
        }
      })
      .catch((e) => console.error('fetchに失敗しました: ', e));
    return () => {
      abortController.abort();
    };
  });

  // useEffect(() => {
  //   const sessionData = sessionStorage.getItem('EventResponse');
  //   const eventId = sessionStorage.getItem('eventId');
  //   if (sessionData) {
  //     try {
  //       const data = JSON.parse(sessionData) as ReceiptResponse;
  //       setFetchData(data);
  //     } catch (error) {
  //       console.error('データのパースに失敗しました。', error);
  //     }
  //   }
  //   if (eventId) {
  //     try {
  //       const data = JSON.parse(eventId) as string;
  //       setEventId(data);
  //     } catch (error) {
  //       console.error('データのパースに失敗しました。', error);
  //     }
  //   }
  // }, []);
  // useEffect(() => {
  //   if (fetchData?.user.id === undefined) {
  //     console.error('不正なデータです');
  //     return;
  //   }
  //   setParticipantId(fetchData.user.id);
  // }, [fetchData]);

  const HandleReceipt = (): void => {
    if (fetchData === undefined) {
      return;
    }
    const reqBody: ReceiptPayload = {
      id: eventId,
      participant_id: fetchData.user.id,
    };

    fetchPostReceipt(eventId, reqBody)
      .then(() => {
        console.log('受領確認done');
        router.push(`/event/${eventId}`);
      })
      .catch((error) => {
        console.error('Error: ', error);
        alert('申請に失敗しました。');
      });
  };

  const HandleReturnHome = (): void => router.push(`/events/participant`);

  return { eventTitle, userAddress, HandleReceipt, HandleReturnHome };
};
