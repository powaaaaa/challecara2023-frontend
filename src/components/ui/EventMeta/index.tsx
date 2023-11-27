import type { ComponentPropsWithoutRef } from 'react';

import { CustomButton } from '../CustomButton';
import { MetaCard } from '../MetaCard';

import type { ButtonCustom} from '../CustomButton';

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
  label: string;
  subLabel: string;
  FstOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & ComponentPropsWithoutRef<'button'>;

export const EventMeta: React.FC<Props> = ({
  administratorName,
  introduction,
  snsUrl,
  homepageUrl,
  startTime,
  endTime,
  winningNumber,
  stateText,
  buttonState,
  label,
  subLabel,
  FstOnClick,
  ...props
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
    <CustomButton
      buttonState={buttonState}
      label={label}
      subLabel={subLabel}
      FstOnClick={FstOnClick}
      {...props}
    />
  </div>
);
