import React from 'react';

import { ActiveEventDetail } from './item/Active';
import { AppliedEventDetail } from './item/Applied';
import { DraftEventDetail } from './item/Draft';
import { FailedEventDetail } from './item/Failed';
import { ReceivedEventDetail } from './item/Received';
import { WinningEventDetail } from './item/Winning';

type Props = {
  eventDetailState:
    | 'Applied'
    | 'Active'
    | 'Failed'
    | 'Received'
    | 'Winning'
    | 'Draft';
};

export const EventDetailPresentation: React.FC<Props> = ({
  eventDetailState,
}) => (
    <div>
      <div style={{ display: eventDetailState === 'Applied' ? '' : 'none' }}>
        <AppliedEventDetail />
      </div>
      <div style={{ display: eventDetailState === 'Active' ? '' : 'none' }}>
        <ActiveEventDetail />
      </div>
      <div style={{ display: eventDetailState === 'Failed' ? '' : 'none' }}>
        <FailedEventDetail />
      </div>
      <div style={{ display: eventDetailState === 'Received' ? '' : 'none' }}>
        <ReceivedEventDetail />
      </div>
      <div style={{ display: eventDetailState === 'Winning' ? '' : 'none' }}>
        <WinningEventDetail />
      </div>
      <div style={{ display: eventDetailState === 'Draft' ? '' : 'none' }}>
        <DraftEventDetail />
      </div>
    </div>
  );
