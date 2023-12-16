import { useEffect, useState } from 'react';

// import { useRouter } from 'next/navigation';

import type { ReceiptsResponse } from '@/api/@types';
import type { Receipt } from '@/libs/@types';

type IUseReceiptConfirm = {
  eventTitle: string;
  topNumber: number;
  bottomNumber: number;
  ReceiptsData: Receipt[];
};

export const useReceiptConfirm = (): IUseReceiptConfirm => {
  // const router = useRouter();
  const [fetchData, setFetchData] = useState<ReceiptsResponse | null>(null);
  const [eventTitle] = useState<string>('');
  const [topNumber, setTopNumber] = useState<number>(0);
  const [bottomNumber, setBottomNumber] = useState<number>(0);
  const [ReceiptsData, setReceiptsData] = useState<Receipt[]>([]);

  useEffect(() => {
    const sessionData = sessionStorage.getItem('ReceiptsResponse');
    if (sessionData) {
      try {
        const data = JSON.parse(sessionData) as ReceiptsResponse;
        setFetchData(data);
      } catch (error) {
        console.error('データのパースに失敗しました.', error);
      }
    }
  }, []);

  useEffect(() => {
    if (fetchData === null || fetchData?.receipts === null) {
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
