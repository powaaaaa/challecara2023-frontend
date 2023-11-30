import { useEffect } from 'react';

import type { EventResponse, RegisterEventPayload } from '@/api/@types';

import { apiClient } from '@/libs/apiClients';

type IUseActiveEventDetail = {
  FstOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

type Props = {
  fetchData: EventResponse;
};

export const useActiveEventDetail = ({
  fetchData,
}: Props): IUseActiveEventDetail => {
  const fetchEvent = async (body: RegisterEventPayload): Promise<void> =>
    await apiClient.event.$post({ body });

  const FstOnClick = (): void => {
    useEffect(() => {
      const fetch = async (): Promise<void> => {
        try {
          if (
            fetchData.event.id === undefined ||
            fetchData.user.id === undefined
          ) {
            alert('不正なイベントIDまたはユーザーIDです');
            return;
          }

          const reqBody: RegisterEventPayload = {
            id: fetchData.event.id,
            participant_id: fetchData.user.id,
          };

          await fetchEvent(reqBody);
        } catch (error) {
          console.error('データの送信に失敗しました: ', error);
        }
      };

      fetch().catch((error) => {
        console.error('fetch関数内でエラーが発生しました', error);
      });
    }, []);
  };

  return { FstOnClick };
};
