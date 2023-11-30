import React from 'react';

import { EventDetailItem } from '..';
import { useReceivedEventDetail } from '../../../hooks/Received';

import type { EventResponse } from '@/api/@types';

type Props = {
  fetchData: EventResponse;
};

export const ReceivedEventDetail: React.FC<Props> = ({ fetchData }) => {
  const { FstOnClick, useOnClick } = useReceivedEventDetail({ fetchData });

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
