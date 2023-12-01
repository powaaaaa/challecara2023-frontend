import { useEventReceipt } from './hooks';
import { EventReceiptPresentation } from './presentations';

export const EventReceipt: React.FC = () => {
  const { fetchData, HandleReceipt, HandleReturnHome } = useEventReceipt();
  return (
    <>
      <EventReceiptPresentation
        fetchData={fetchData}
        handleReceipt={HandleReceipt}
        handleReturnHome={HandleReturnHome}
      />
    </>
  );
};
