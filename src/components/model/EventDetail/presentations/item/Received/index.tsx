import React from 'react';

import { EventDetailItem } from '..';
import { useReceivedEventDetail } from '../../../hooks/Received';

export const ReceivedEventDetail: React.FC = () => {
  const { fetchData, FstOnClick, useOnClick } = useReceivedEventDetail();

  if (fetchData === null) {
    console.error('fetchDataが取得できていません。');
    return;
  }

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
