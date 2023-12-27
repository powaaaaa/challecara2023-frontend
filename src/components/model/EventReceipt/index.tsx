'use client';

import { useEventReceipt } from './hooks';
import { EventReceiptPresentation } from './presentations';

export const EventReceipt: React.FC = () => {
  const { eventTitle, userAddress, HandleReceipt, HandleReturnHome } =
    useEventReceipt();
  return (
    <>
      <EventReceiptPresentation
        eventTitle={eventTitle}
        userAddress={userAddress}
        handleReceipt={HandleReceipt}
        handleReturnHome={HandleReturnHome}
      />
    </>
  );
};
