import { MetaCard } from '../MetaCard';

type ButtonCustom = 'base' | 'disabled' | 'result' | 'draft' | 'none';

type Props = {
  administratorName: string;
  introduction: string;
  snsUrl: string;
  homepageUrl: string;
  startTime: Date;
  endTime: Date;
  winningNumber: number;
  stateText: string;
  buttonState: ButtonCustom;
};

export const EventMeta: React.FC<Props> = ({
  administratorName,
  introduction,
  snsUrl,
  homepageUrl,
  startTime,
  endTime,
  winningNumber,
  stateText,
  // buttonState,
}) => (
  // const [buttonState, setButtonState] = useState<ButtonCustom>('base');

  <div>
    <div>
      <MetaCard
        administratorName={administratorName}
        introduction={introduction}
        snsUrl={snsUrl}
        homepageUrl={homepageUrl}
        startTime={startTime}
        endTime={endTime}
        winningNumber={winningNumber}
      />
    </div>
    <div>{stateText}</div>
    {/* <CustomButton variant={buttonState} /> */}
  </div>
);
