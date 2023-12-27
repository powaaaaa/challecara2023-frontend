import { useState } from 'react';

import { useRouter } from 'next/navigation';

import type { EventResponse } from '@/api/@types';

// import { Axios } from '@/libs/apiClients';

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

  // NOTE consider to use AbortController and prune axios or fetch
  // NOTE これって次のページの処理じゃね？
  // const useFetchEventRegister = (): void => {
  //   window.sessionStorage.setItem('eventResponse', JSON.stringify(eventData));

  // useEffect(() => {
  //   const abortController = new AbortController();
  //   const reqBody: RegisterEventPayload = {
  //     id: eventData.event.id,
  //     participant_id: eventData.user.id,
  //   };

  //   fetchEventRegister(reqBody)
  //     .then(() => console.log('参加申し込みdone'))
  //     .catch((e) => console.error('fetchに失敗しました: ', e));

  //   return () => {
  //     abortController.abort();
  //   };
  // });
  // };

  const FstOnClick = (): void => {
    window.sessionStorage.setItem('eventResponse', JSON.stringify(eventData));

    router.push(`/event/${eventId}/confirm`);
  };

  return {
    FstOnClick,
  };
};
