import React from 'react';

import { ActiveEventDetail } from './item/Active';
import { AppliedEventDetail } from './item/Applied';
import { DraftEventDetail } from './item/Draft';
import { FailedEventDetail } from './item/Failed';
import { ReceivedEventDetail } from './item/Received';
import { WinningEventDetail } from './item/Winning';

import type { EventResponse } from '@/api/@types';

type Props = {
  fetchData: EventResponse;
};

export const EventDetailPresentation: React.FC<Props> = ({ fetchData }) => {
  const EventDetailState = (): string => {
    if (fetchData.event.is_published) {
      if (fetchData.event.is_active) {
        if (fetchData.event.has_applied) {
          return 'Applied';
        } else {
          return 'Active';
        }
      } else {
        if (!fetchData.event.is_winner) {
          return 'Failed';
        } else {
          if (fetchData.event.is_received) {
            return 'Received';
          } else {
            return 'Winning';
          }
        }
      }
    } else {
      return 'Draft';
    }
  };

  return (
    <div>
      <div style={{ display: EventDetailState() === 'Applied' ? '' : 'none' }}>
        <AppliedEventDetail fetchData={fetchData} />
      </div>
      <div style={{ display: EventDetailState() === 'Active' ? '' : 'none' }}>
        <ActiveEventDetail fetchData={fetchData} />
      </div>
      <div style={{ display: EventDetailState() === 'Failed' ? '' : 'none' }}>
        <FailedEventDetail fetchData={fetchData} />
      </div>
      <div style={{ display: EventDetailState() === 'Received' ? '' : 'none' }}>
        <ReceivedEventDetail fetchData={fetchData} />
      </div>
      <div style={{ display: EventDetailState() === 'Winning' ? '' : 'none' }}>
        <WinningEventDetail fetchData={fetchData} />
      </div>
      <div style={{ display: EventDetailState() === 'Draft' ? '' : 'none' }}>
        <DraftEventDetail fetchData={fetchData} />
      </div>
    </div>
  );
};
