'use client';

import { useRouter } from 'next/navigation';

import type { EventResponse, PublishEventPayload } from '@/api/@types';

import { Axios } from '@/libs/apiClients';

type IUseDraftEventDetail = {
  FstOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const useDraftEventDetail = ({
  eventData,
}: {
  eventData: EventResponse['data'];
}): IUseDraftEventDetail => {
  const router = useRouter();

  const fetchPublish = async (body: PublishEventPayload): Promise<void> =>
    // await apiClient.event.publish.$post({ body });
    await Axios.post('/event/publish', body);

  const FstOnClick = (): void => {
    const reqBody: PublishEventPayload = {
      id: eventData.event.id,
    };

    fetchPublish(reqBody)
      .then(() => {
        console.log('公開done');
        router.push('/events/administrator');
      })
      .catch((error) => {
        console.error('Error: ', error);
        alert('データ取得に失敗しました。');
      });
  };

  const onClick = (): void => router.push(`/Admin/Home`);

  return { FstOnClick, onClick };
};
