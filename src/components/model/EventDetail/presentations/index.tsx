'use client';

import React from 'react';

import { ActiveEventDetail } from './item/Active';
import { AppliedEventDetail } from './item/Applied';
import { DraftEventDetail } from './item/Draft';
import { FailedEventDetail } from './item/Failed';
import { ReceivedEventDetail } from './item/Received';
import { WinningEventDetail } from './item/Winning';

import type { EventResponse } from '@/api/@types';

type Props = {
  eventDetailState:
    | 'Applied'
    | 'Active'
    | 'Failed'
    | 'Received'
    | 'Winning'
    | 'Draft';
  eventData: EventResponse;
};

export const EventDetailPresentation: React.FC<Props> = ({
  eventDetailState,
  eventData,
}) => (
  <div>
    <div style={{ display: eventDetailState === 'Applied' ? '' : 'none' }}>
      <AppliedEventDetail eventData={eventData} />
    </div>
    <div style={{ display: eventDetailState === 'Active' ? '' : 'none' }}>
      <ActiveEventDetail eventData={eventData} />
    </div>
    <div style={{ display: eventDetailState === 'Failed' ? '' : 'none' }}>
      <FailedEventDetail eventData={eventData} />
    </div>
    <div style={{ display: eventDetailState === 'Received' ? '' : 'none' }}>
      <ReceivedEventDetail eventData={eventData} />
    </div>
    <div style={{ display: eventDetailState === 'Winning' ? '' : 'none' }}>
      <WinningEventDetail eventData={eventData} />
    </div>
    <div style={{ display: eventDetailState === 'Draft' ? '' : 'none' }}>
      <DraftEventDetail eventData={eventData} />
    </div>
  </div>
);
