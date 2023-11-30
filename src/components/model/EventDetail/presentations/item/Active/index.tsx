import { EventDetailItem } from '..';
import { useActiveEventDetail } from '../../../hooks/Active';

import type { EventResponse } from '@/api/@types';

type Props = {
  fetchData: EventResponse;
};

export const ActiveEventDetail: React.FC<Props> = ({ fetchData }) => {
  const { FstOnClick } = useActiveEventDetail({ fetchData });

  return (
    <div>
      <EventDetailItem
        fetchData={fetchData}
        stateText="この抽選は募集中です"
        label="応募する"
        subLabel=""
        FstOnClick={FstOnClick}
        OnClick={(): void =>
          console.log('このメッセージが出るのはおかしいよ！')
        }
      />
    </div>
  );
};
