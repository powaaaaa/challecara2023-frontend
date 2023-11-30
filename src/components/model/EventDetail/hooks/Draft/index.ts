import { useEffect } from 'react';

import type { EventResponse, PublishEventPayload } from '@/api/@types';

import { apiClient } from '@/libs/apiClients';

type IUseDraftEventDetail = {
  FstOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

type Props = {
  fetchData: EventResponse;
};

export const useDraftEventDetail = ({
  fetchData,
}: Props): IUseDraftEventDetail => {
  const fetchPublish = async (body: PublishEventPayload): Promise<void> =>
    await apiClient.event.publish.$post({ body });

  const FstOnClick = (): void => {
    useEffect(() => {
      const fetch = async (): Promise<void> => {
        try {
          if (fetchData.event.id === undefined) {
            console.log('不正なイベントIDです');
          }

          const reqBody = {
            id: fetchData.event.id,
          };

          await fetchPublish(reqBody);
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

  const onClick = (): void => {};

  return { FstOnClick, onClick };
};
