import React from 'react';

import { useWinningEventDetail } from '../../hooks/Winning';

import { EventDetailItem } from '.';

import type { EventResponse } from '@/api/@types';

type Props = {
  eventData: EventResponse;
};

export const WinningEventDetail: React.FC<Props> = ({ eventData }) => {
  const { FstOnClick, useOnClick, OnClick } = useWinningEventDetail({
    eventData,
  });

  return (
    <div>
      <EventDetailItem
        fetchData={eventData}
        stateText="この抽選は終了しました"
        label="抽選結果"
        subLabel="受領確認"
        FstOnClick={FstOnClick}
        onClick={useOnClick}
        OnClick={OnClick}
      />
    </div>
  );
};
