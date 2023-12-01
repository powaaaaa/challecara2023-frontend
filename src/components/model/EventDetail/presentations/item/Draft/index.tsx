import React from 'react';

import { EventDetailItem } from '..';
import { useDraftEventDetail } from '../../../hooks/Draft';

export const DraftEventDetail: React.FC = () => {
  const { fetchData, FstOnClick, onClick } = useDraftEventDetail();

  if (fetchData === null) {
    console.error('fetchDataが取得できていません。');
    return;
  }

  return (
    <div>
      <EventDetailItem
        fetchData={fetchData}
        stateText="まだ公開されていません"
        label="公開"
        subLabel="下書き"
        FstOnClick={FstOnClick}
        onClick={onClick}
        OnClick={(): void =>
          console.log('このメッセージが出るのはおかしいよ！')
        }
      />
    </div>
  );
};
