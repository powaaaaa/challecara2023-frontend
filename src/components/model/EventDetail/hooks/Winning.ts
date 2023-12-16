import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import type {
  EventResponse,
  ReceiptResponse,
  ReceiptsResponse,
  ResultResponse,
} from '@/api/@types';

import { apiClient } from '@/libs/apiClients';

type IUseWinningEventDetail = {
  FstOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  useOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  OnClick: (
    event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;
};

export const useWinningEventDetail = ({
  eventData,
}: {
  eventData: EventResponse;
}): IUseWinningEventDetail => {
  const router = useRouter();
  const [eventId] = useState<string>(eventData.event.id);
  const [resultData, setResultData] = useState<ResultResponse>();
  const [receiptsData, setReceiptsData] = useState<ReceiptsResponse>();
  const [receiptData, setReceiptData] = useState<ReceiptResponse>();

  const fetchResult = async (path: string): Promise<ResultResponse> =>
    await apiClient.event._id(path).results.$get();

  const fetchReceipts = async (path: string): Promise<ReceiptsResponse> =>
    await apiClient.event._id(path).receipts.$get();

  const fetchGetReceipt = async (path: string): Promise<ReceiptResponse> =>
    await apiClient.event._id(path).receipt.$get();

  // NOTE consider to use AbortController and prune axios or fetch
  const useFetchResult = (): void => {
    useEffect(() => {
      fetchResult(eventId)
        .then((res) => setResultData(res))
        .catch((e) => console.error('fetchに失敗しました: ', e));
    });
  };

  // NOTE consider to use AbortController and prune axios or fetch
  const useFetchReceipts = (): void => {
    useEffect(() => {
      fetchReceipts(eventId)
        .then((res) => setReceiptsData(res))
        .catch((e) => console.error('fetchに失敗しました: ', e));
    });
  };

  // NOTE consider to use AbortController and prune axios or fetch
  const useFetchGetReceipt = (): void => {
    useEffect(() => {
      fetchGetReceipt(eventId)
        .then((res) => setReceiptData(res))
        .catch((e) => console.error('fetchに失敗しました: ', e));
    });
  };

  const FstOnClick = (): void => {
    useFetchResult();

    sessionStorage.setItem('ResultResponse', JSON.stringify(resultData));
    // NOTE add hooks to get eventTitle On next page from sessionStorage of EventResponse
    router.push(`/Event/${eventId}/Result`);
  };

  const useOnClick = (): void => {
    useFetchReceipts();

    sessionStorage.setItem('ReceiptsResponse', JSON.stringify(receiptsData));
    // NOTE add hooks to get eventTitle On next page from sessionStorage of EventResponse
    router.push(`/Event/${eventId}/Receipts`);
  };

  const OnClick = (): void => {
    useFetchGetReceipt();

    sessionStorage.setItem('ReceiptResponse', JSON.stringify(receiptData));
    // NOTE add hooks to get eventTitle On next page from sessionStorage of EventResponse
    router.push(`/Event/${eventId}/Receipt`);
  };

  return { FstOnClick, useOnClick, OnClick };
};
