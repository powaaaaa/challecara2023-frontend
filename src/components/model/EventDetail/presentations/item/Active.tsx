import { useActiveEventDetail } from '../../hooks/Active';

import { EventDetailItem } from '.';

import type { EventResponse } from '@/api/@types';

type Props = {
  eventData: EventResponse['data'];
};

export const ActiveEventDetail: React.FC<Props> = ({ eventData }) => {
  const { FstOnClick } = useActiveEventDetail({ eventData });

  return (
    <div>
      <EventDetailItem
        fetchData={eventData}
        stateText="この抽選は募集中です"
        label="応募する"
        subLabel=""
        FstOnClick={FstOnClick}
        OnClick={(): void => console.log('')}
      />
    </div>
  );
};
