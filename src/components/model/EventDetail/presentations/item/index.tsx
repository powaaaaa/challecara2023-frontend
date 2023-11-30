import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';

import type { EventResponse } from '@/api/@types';

import { EventContent } from '@/components/ui/EventContent';
import { EventMeta } from '@/components/ui/EventMeta';

type Props = {
  fetchData: EventResponse;
  stateText: string;
  label: string;
  subLabel: string;
  FstOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  OnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & ComponentPropsWithoutRef<'button'>;

export const EventDetailItem: React.FC<Props> = ({
  fetchData,
  stateText,
  label,
  subLabel,
  FstOnClick,
  OnClick,
  ...props
}) => {
  if (fetchData === undefined) {
    console.error('取得したデータが不正です');
    return;
  }

  return (
    <div className="flex grep gap-8">
      <EventContent
        image_url={fetchData.event.image_url}
        title={fetchData.event.title}
        detail={fetchData.event.detail}
        tags={fetchData.event.tags}
        is_winner={fetchData.event.is_winner}
        is_received={fetchData.event.is_received}
        is_active={fetchData.event.is_active}
        onClick={OnClick}
      />
      <EventMeta
        {...props}
        has_applied={fetchData.event.has_applied}
        is_active={fetchData.event.is_active}
        is_published={fetchData.event.is_published}
        administratorName={fetchData.administrator.administrator_display_name}
        introduction={fetchData.administrator.introduction}
        snsUrl={fetchData.administrator.sns_url}
        homepageUrl={fetchData.administrator.homepage_url}
        startTime={fetchData.event.start_time}
        endTime={fetchData.event.end_time}
        winningNumber={fetchData.event.winning_number}
        stateText={stateText}
        label={label}
        subLabel={subLabel}
        FstOnClick={FstOnClick}
      />
    </div>
  );
};
