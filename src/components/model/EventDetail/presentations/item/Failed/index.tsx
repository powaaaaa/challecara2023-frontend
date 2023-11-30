import React from 'react';

import { EventDetailItem } from '..';
import { useFailedEventDetail } from '../../../hooks/Failed';

import type { EventResponse } from '@/api/@types';

type Props = {
  fetchData: EventResponse;
};

export const FailedEventDetail: React.FC<Props> = ({ fetchData }) => {
  const { FstOnClick, useOnClick } = useFailedEventDetail({ fetchData });

  return (
    <div>
      <EventDetailItem
        fetchData={fetchData}
        stateText="この抽選は終了しました"
        label="抽選結果"
        subLabel="受領確認"
        FstOnClick={FstOnClick}
        onClick={useOnClick}
        OnClick={(): void =>
          console.log('このメッセージが出るのはおかしいよ！')
        }
      />
    </div>
  );
};
