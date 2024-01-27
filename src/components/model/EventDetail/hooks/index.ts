'use client';

import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import type { EventResponse } from '@/libs/@types/api';

import { instance } from '@/hooks/api';

type IUseEventDetail = {
  eventData: EventResponse | undefined;
};

export const useEventDetail = (): IUseEventDetail => {
  const params = useParams<{ id: string }>();
  const [eventData, setEventData] = useState<EventResponse>();

  const fetchEventDetail = async (path: string): Promise<EventResponse> =>
    await instance.get(`/event/${path}`);

  // TODO useEffect見直し
  useEffect(() => {
    const abortController = new AbortController();

    const eventId = params.id;
    fetchEventDetail(eventId)
      .then((res) => {
        console.log('イベント情報の取得done');
        setEventData(res);
      })
      .catch((err) =>
        console.error('イベントデータの取得に失敗しました: ', err)
      );

    return () => {
      abortController.abort();
    };
  });

  return {
    eventData,
  };
};
