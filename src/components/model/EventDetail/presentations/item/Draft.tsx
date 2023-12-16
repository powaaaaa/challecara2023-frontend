import React from 'react';

import { useDraftEventDetail } from '../../hooks/Draft';

import { EventDetailItem } from '.';

import type { EventResponse } from '@/api/@types';

type Props = {
  eventData: EventResponse;
};

export const DraftEventDetail: React.FC<Props> = ({ eventData }) => {
  const { FstOnClick, onClick } = useDraftEventDetail({ eventData });

  return (
    <div>
      <EventDetailItem
        fetchData={eventData}
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
