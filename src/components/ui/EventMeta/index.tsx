import type { ComponentPropsWithoutRef } from 'react';

import { CustomButton } from '../CustomButton';
import { MetaCard } from '../MetaCard';

import type * as Types from '@/api/@types';
import type { ButtonCustom } from '@/libs/@types';

type Props = {
  administratorName: Types.AdministratorItem['administrator_display_name'];
  introduction: Types.AdministratorItem['introduction'];
  snsUrl: Types.AdministratorItem['sns_url'];
  homepageUrl: Types.AdministratorItem['homepage_url'];
  startTime: Types.EventItem['start_time'];
  endTime: Types.EventItem['end_time'];
  winningNumber: Types.EventItem['winning_number'];
  has_applied: Types.EventItem['has_applied'];
  is_active: Types.EventItem['is_active'];
  is_published: Types.EventItem['is_published'];
  stateText: string;
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
  has_applied,
  is_active,
  is_published,
  stateText,
  label,
  subLabel,
  FstOnClick,
  ...props
}) => {
  const buttonState = (): ButtonCustom => {
    if (is_published) {
      if (is_active) {
        if (has_applied) {
          return 'disabled';
        } else {
          return 'base';
        }
      } else {
        return 'result';
      }
    } else {
      return 'draft';
    }
  };

  return (
    <div>
      <div className="pb-[36px]">
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
      <div>
        <div className="mb-12 w-[256px] h-[98px] bg-sub rounded-lg text-center flex items-center justify-center	font-medium">
          {stateText}
        </div>
        <div className="flex flex-col items-center justify-center">
          <CustomButton
            buttonState={buttonState()}
            label={label}
            subLabel={subLabel}
            FstOnClick={FstOnClick}
            {...props}
          />
        </div>
      </div>
    </div>
  );
};
