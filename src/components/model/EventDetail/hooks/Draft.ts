'use client';

import { useRouter } from 'next/navigation';

import type { EventResponse, PublishEventPayload } from '@/libs/@types/api';

import { instance } from '@/hooks/api';

type IUseDraftEventDetail = {
  FstOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const useDraftEventDetail = ({
  eventData,
}: {
  eventData: EventResponse;
}): IUseDraftEventDetail => {
  const router = useRouter();

  const fetchPublish = async (body: PublishEventPayload): Promise<void> =>
    // await apiClient.event.publish.$post({ body });
    await instance.post('/event/publish', body);

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
