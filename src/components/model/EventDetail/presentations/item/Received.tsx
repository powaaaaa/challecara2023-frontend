import React from 'react';

import { useReceivedEventDetail } from '../../hooks/Received';

import { EventDetailItem } from '.';

import type { EventResponse } from '@/api/@types';

type Props = {
  eventData: EventResponse['data'];
};

export const ReceivedEventDetail: React.FC<Props> = ({ eventData }) => {
  const { FstOnClick, useOnClick } = useReceivedEventDetail({ eventData });

  return (
    <div>
      <EventDetailItem
        fetchData={eventData}
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
