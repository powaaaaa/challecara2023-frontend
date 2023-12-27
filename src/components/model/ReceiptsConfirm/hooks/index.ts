'use client';

import { useEffect, useState } from 'react';

// import { useRouter } from 'next/navigation';

import { useParams } from 'next/navigation';

import type { ReceiptsResponse } from '@/api/@types';
import type { Receipt } from '@/libs/@types';

import { Axios } from '@/libs/apiClients';

type IUseReceiptConfirm = {
  eventTitle: string;
  topNumber: number;
  bottomNumber: number;
  ReceiptsData: Receipt[];
};

export const useReceiptsConfirm = (): IUseReceiptConfirm => {
  // const router = useRouter();
  const eventId = useParams<{ id: string }>().id;
  const [fetchData, setFetchData] = useState<ReceiptsResponse>();
  const [eventTitle, setEventTitle] = useState<string>('');
  const [topNumber, setTopNumber] = useState<number>(0);
  const [bottomNumber, setBottomNumber] = useState<number>(0);
  const [ReceiptsData, setReceiptsData] = useState<Receipt[]>([]);

  // TODO useEffect
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

  const fetchReceipts = async (path: string): Promise<ReceiptsResponse> =>
    // await apiClient.event._id(path).receipts.$get();
    await Axios.get(`/event/${path}/receipts`);

  useEffect(() => {
    const abortController = new AbortController();
    fetchReceipts(eventId)
      .then((res) => {
        console.log('受領情報の取得done');
        setFetchData(res);
      })
      .catch((e) => console.error('fetchに失敗しました: ', e));
    return () => {
      abortController.abort();
    };
  });

  useEffect(() => {
    if (fetchData === undefined) {
      console.error('不正なデータです。');
      return;
    }
    const receipts: Receipt[] = fetchData.receipts.map((item) => ({
      participant_id: item.participant_id,
      txid: item.txid ?? '', // txidがnullの場合、空の文字列を代入
    }));
    setReceiptsData(receipts);

    const receiptsNumber: number = fetchData.receipts.filter(
      (item) => item.txid !== null
    ).length;
    setTopNumber(receiptsNumber);
    setBottomNumber(ReceiptsData.length);
  }, [fetchData, ReceiptsData.length]);

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

  return { eventTitle, topNumber, bottomNumber, ReceiptsData };
};
