import React from 'react';

import { EventDetailItem } from '..';
import { useAppliedEventDetail } from '../../../hooks/Applied';

export const AppliedEventDetail: React.FC = () => {
  const { fetchData } = useAppliedEventDetail();

  if (fetchData === null) {
    console.error('fetchDataが取得できていません。');
    return;
  }

  return (
    <div>
      <EventDetailItem
        fetchData={fetchData}
        stateText="この抽選は募集中です"
        label="応募済です"
        subLabel=""
        FstOnClick={(): void =>
          console.log('このメッセージが出るのはおかしいよ！')
        }
        OnClick={(): void =>
          console.log('このメッセージが出るのもおかしいよ！')
        }
      />
    </div>
  );
};
