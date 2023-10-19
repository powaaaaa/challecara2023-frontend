import { format } from 'date-fns';

type Props = {
  administratorName: string;
  introduction: string;
  snsUrl: string;
  homepageUrl: string;
  startTime: Date;
  endTime: Date;
  winningNumber: number;
};

export const detailCard: React.FC<Props> = ({
  administratorName,
  introduction,
  snsUrl,
  homepageUrl,
  startTime,
  endTime,
  winningNumber,
}) => {
  const start = format(startTime, 'yyyy/MM/dd');
  const end = format(endTime, 'yyyy/MM/dd');

  return (
    <div className="w-[255px] h-[425px] bg-basic rounded-lg py-10 border border-black text-black">
      <div className="mx-8 pb-8 border-b border-black-lighten-1">
        <p className="pb-2">{administratorName}</p>
        <p className="pb-4 text-xs">{introduction}</p>
        <div className="flex relative">
          <a className="text-accent underline underline-offset-2" href={snsUrl}>
            SNS
          </a>
          <a
            className="absolute right-0 text-accent underline underline-offset-2"
            href={homepageUrl}
          >
            HomePage
          </a>
        </div>
      </div>

      <div className="pt-8 mx-8">
        <div className="pb-8">
          <p className="pb-3 text-xs">応募期間</p>
          <p className="text-right">{`${start} ～ ${end}`}</p>
        </div>
        <div>
          <p className="pb-3 text-xs">人数</p>
          <p className="text-right">{`${winningNumber} 名様`}</p>
        </div>
      </div>
    </div>
  );
};
