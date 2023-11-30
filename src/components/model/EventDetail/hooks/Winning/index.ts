import { useEffect } from 'react';

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

type Props = {
  fetchData: EventResponse;
};

export const useWinningEventDetail = ({
  fetchData,
}: Props): IUseWinningEventDetail => {
  const fetchResult = async (eventId: string): Promise<ResultResponse> =>
    await apiClient.event._id(eventId).results.$get();

  const fetchReceipts = async (eventId: string): Promise<ReceiptsResponse> =>
    await apiClient.event._id(eventId).receipts.$get();

  const fetchGetReceipt = async (eventId: string): Promise<ReceiptResponse> =>
    await apiClient.event._id(eventId).receipt.$get();

  // const fetchPostReceipt = async (
  //   eventId: string,
  //   body: ReceiptPayload
  // ): Promise<void> =>
  //   await apiClient.event._id(eventId).receipt.$post({ body });

  const FstOnClick = (): void => {
    useEffect(() => {
      const fetch = async (): Promise<void> => {
        try {
          if (fetchData.event.id === undefined) {
            console.log('不正なイベントIDです');
          }

          await fetchResult(fetchData.event.id);
        } catch (error) {
          console.log('結果データの取得に失敗しました: ', error);
          return;
        }
      };

      fetch().catch((error) => {
        console.error('fetch関数内でエラーが発生しました: ', error);
      });
    }, []);
  };

  const useOnClick = (): void => {
    useEffect(() => {
      const fetch = async (): Promise<void> => {
        try {
          if (fetchData.event.id === undefined) {
            console.log('不正なイベントIDです');
          }

          await fetchReceipts(fetchData.event.id);
        } catch (error) {
          console.log('受領データの取得に失敗しました: ', error);
          return;
        }
      };

      fetch().catch((error) => {
        console.error('fetch関数内でエラーが発生しました: ', error);
      });
    });
  };

  const OnClick = (): void => {
    useEffect(() => {
      const fetch = async (): Promise<void> => {
        try {
          if (fetchData.event.id === undefined) {
            console.log('不正なイベントIDです');
          }

          await fetchGetReceipt(fetchData.event.id);
        } catch (error) {
          console.log('受取データの取得に失敗しました: ', error);
          return;
        }
      };

      fetch().catch((error) => {
        console.error('fetch関数内でエラーが発生しました: ', error);
      });
    }, []);
  };

  return { FstOnClick, useOnClick, OnClick };
};
