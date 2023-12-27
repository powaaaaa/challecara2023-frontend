'use client';

import { useEffect, useState } from 'react';

// import { useRouter } from 'next/navigation';

import { useParams } from 'next/navigation';

import type { ResultResponse } from '@/api/@types';
import type { Result } from '@/libs/@types';

import { Axios } from '@/libs/apiClients';

type IUseResultConfirm = {
  eventTitle: string;
  resultData: Result[];
};

export const useResultConfirm = (): IUseResultConfirm => {
  // const router = useRouter();
  const eventId = useParams<{ id: string }>().id;
  const [fetchData, setFetchData] = useState<ResultResponse>();
  const [eventTitle, setEventTitle] = useState<string>('');
  const [resultData, setResultData] = useState<Result[]>([]);

  // TODO useEffectの見直し
  useEffect(() => {
    const sessionData = sessionStorage.getItem('eventTitle');
    if (sessionData) {
      try {
        setEventTitle(sessionData);
      } catch (error) {
        console.error('データのパースに失敗しました.', error);
      }
    }
  }, []);

  const fetchResult = async (path: string): Promise<ResultResponse> =>
    // await apiClient.event._id(path).results.$get();
    await Axios.get(`/event/${path}/result`);

  // NOTE consider to use AbortController and prune axios or fetch
  useEffect(() => {
    const abortController = new AbortController();
    fetchResult(eventId)
      .then((res) => {
        console.log('結果取得done');
        setFetchData(res);
      })
      .catch((e) => console.error('fetchに失敗しました: ', e));
    return () => {
      abortController.abort();
    };
  });

  useEffect(() => {
    if (fetchData === undefined) {
      return;
    }
    const results: Result[] = fetchData.results.map((item) => ({
      participant_id: item.participant_id,
      txid: item.txid,
      is_winner: item.is_winner ? '当選' : '落選', // is_winnerの値に基づいて文字列を設定
    }));
    setResultData(results);
  }, [fetchData, resultData.length]);

  // NOTE EventDetailに戻るのは「戻る」任せでいいのかな～

  // useEffect(() => {
  //   if (!router.isReady) {
  //     return;
  //   }
  //   const query = router.query['title'];
  //   if (query === undefined || Array.isArray(query)) {
  //     return;
  //   }
  //   setEventTitle(query);
  // }, [router, router.query]);

  return { eventTitle, resultData };
};
