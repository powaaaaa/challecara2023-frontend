import { EventDetailItem } from '..';
import { useActiveEventDetail } from '../../../hooks/Active';

export const ActiveEventDetail: React.FC = () => {
  const { fetchData, FstOnClick } = useActiveEventDetail();

  if (fetchData === null) {
    console.error('fetchDataが取得できていません。');
    return;
  }

  return (
    <div>
      <EventDetailItem
        fetchData={fetchData}
        stateText="この抽選は募集中です"
        label="応募する"
        subLabel=""
        FstOnClick={FstOnClick}
        OnClick={(): void => console.log('')}
      />
    </div>
  );
};
