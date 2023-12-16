import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import type { EventResponse, PublishEventPayload } from '@/api/@types';

import { apiClient } from '@/libs/apiClients';

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
  const [fetchData, setFetchData] = useState<EventResponse>();

  const fetchPublish = async (body: PublishEventPayload): Promise<void> =>
    await apiClient.event.publish.$post({ body });

  const updateFetchEvent = async (path: string): Promise<EventResponse> =>
    await apiClient.event._id(path).$get();

  // NOTE consider to use AbortController and prune axios or fetch
  const useFetchPublish = (): void => {
    useEffect(() => {
      const reqBody: PublishEventPayload = {
        id: eventData.event.id,
      };

      fetchPublish(reqBody).catch((e) =>
        console.error('fetchに失敗しました: ', e)
      );
    });
  };

  // NOTE consider to use AbortController and prune axios or fetch
  const useUpdateFetchEvent = (): void => {
    useEffect(() => {
      const path: string = eventData.event.id;
      updateFetchEvent(path)
        .then((res) => setFetchData(res))
        .catch((e) => console.error('fetchに失敗しました: ', e));
    });
  };

  const FstOnClick = (): void => {
    useFetchPublish();
    useUpdateFetchEvent();

    sessionStorage.setItem('EventResponse', JSON.stringify(fetchData));
    router.push(`/Event/${eventData.event.id}`);
  };

  const onClick = (): void => {
    router.push(`/Admin/Home`);
  };

  return { FstOnClick, onClick };
};
