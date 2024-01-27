import React from 'react';

import { EventDetailItem } from '.';

import type { EventResponse } from '@/libs/@types/api';

type Props = {
  eventData: EventResponse;
};

export const AppliedEventDetail: React.FC<Props> = ({ eventData }) => (
  <div>
    <EventDetailItem
      fetchData={eventData}
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
