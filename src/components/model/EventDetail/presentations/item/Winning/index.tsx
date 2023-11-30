import React from 'react';

import { EventDetailItem } from '..';
import { useWinningEventDetail } from '../../../hooks/Winning';

import type { EventResponse } from '@/api/@types';

type Props = {
  fetchData: EventResponse;
};

export const WinningEventDetail: React.FC<Props> = ({ fetchData }) => {
  const { FstOnClick, useOnClick, OnClick } = useWinningEventDetail({
    fetchData,
  });

  return (
    <div>
      <EventDetailItem
        fetchData={fetchData}
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
