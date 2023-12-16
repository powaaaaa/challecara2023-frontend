import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import type { EventResponse, RegisterEventPayload } from '@/api/@types';

import { apiClient } from '@/libs/apiClients';

type IUseActiveEventDetail = {
  FstOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const useActiveEventDetail = ({
  eventData,
}: {
  eventData: EventResponse;
}): IUseActiveEventDetail => {
  const router = useRouter();
  const [eventId] = useState<string>(eventData.event.id);

  const fetchEventRegister = async (
    body: RegisterEventPayload
  ): Promise<void> => await apiClient.event.$post({ body });

  // NOTE consider to use AbortController and prune axios or fetch
  const useFetchEventRegister = (): void => {
    useEffect(() => {
      const reqBody: RegisterEventPayload = {
        id: eventData.event.id,
        participant_id: eventData.user.id,
      };

      fetchEventRegister(reqBody).catch((e) =>
        console.error('fetchに失敗しました: ', e)
      );
    });
  };

  const FstOnClick = (): void => {
    useFetchEventRegister();
    router.push(`/event/${eventId}/ApplyConfirm`);
  };

  return {
    FstOnClick,
  };
};
