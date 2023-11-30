import React from 'react';

import { EventDetailItem } from '..';

import type { EventResponse } from '@/api/@types';

type Props = {
  fetchData: EventResponse;
};

export const AppliedEventDetail: React.FC<Props> = ({ fetchData }) => (
  <div>
    <EventDetailItem
      fetchData={fetchData}
      stateText="この抽選は募集中です"
      label="応募済です"
      subLabel=""
      FstOnClick={(): void =>
        console.log('このメッセージが出るのはおかしいよ！')
      }
      OnClick={(): void => console.log('このメッセージが出るのもおかしいよ！')}
    />
  </div>
);
