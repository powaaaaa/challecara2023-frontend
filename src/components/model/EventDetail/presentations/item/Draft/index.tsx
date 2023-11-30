import React from 'react';

import { EventDetailItem } from '..';
import { useDraftEventDetail } from '../../../hooks/Draft';

import type { EventResponse } from '@/api/@types';

type Props = {
  fetchData: EventResponse;
};

export const DraftEventDetail: React.FC<Props> = ({ fetchData }) => {
  const { FstOnClick, onClick } = useDraftEventDetail({ fetchData });

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
