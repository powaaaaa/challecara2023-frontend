import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import type { ResultResponse } from '@/api/@types';
import type { Result } from '@/libs/@types';

type IUseReceiptConfirm = {
  eventTitle: string;
  topNumber: number;
  bottomNumber: number;
  ResultData: Result[];
};

export const useReceiptConfirm = (): IUseReceiptConfirm => {
  const router = useRouter();
  const [fetchData, setFetchData] = useState<ResultResponse | null>(null);
  const [eventTitle, setEventTitle] = useState<string>('');
  const [topNumber, setTopNumber] = useState<number>(0);
  const [bottomNumber, setBottomNumber] = useState<number>(0);
  const [ResultData, setResultData] = useState<Result[]>([]);

  useEffect(() => {
    const sessionData = sessionStorage.getItem('ResultResponse');
    if (sessionData) {
      try {
        const data = JSON.parse(sessionData) as ResultResponse;
        setFetchData(data);
      } catch (error) {
        console.error('データのパースに失敗しました.', error);
      }
    }
  }, []);

  useEffect(() => {
    if (fetchData === null || fetchData?.results === null) {
      console.error('不正なデータです。');
      return;
    }
    const results: Result[] = fetchData.results.map((item) => ({
      participant_id: item.participant_id,
      txid: item.txid,
      is_winner: item.is_winner ? '当選' : '落選', // is_winnerの値に基づいて文字列を設定
    }));
    setResultData(results);

    const winningNumber = fetchData.results.reduce((count, item) => {
      // fetchData.resultsを直接使用
      if (item.is_winner) {
        return count + 1;
      }
      return count;
    }, 0);
    setTopNumber(winningNumber);
    setBottomNumber(ResultData.length);
  }, [fetchData, ResultData.length]);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    const query = router.query['title'];
    if (query === undefined || Array.isArray(query)) {
      return;
    }
    setEventTitle(query);
  }, [router, router.query]);

  return { eventTitle, topNumber, bottomNumber, ResultData };
};
