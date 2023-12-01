import React from 'react';

import { EventDetailItem } from '..';
import { useFailedEventDetail } from '../../../hooks/Failed';

export const FailedEventDetail: React.FC = () => {
  const { fetchData, FstOnClick, useOnClick } = useFailedEventDetail();

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
