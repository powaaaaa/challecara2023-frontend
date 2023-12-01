import { useEventReceipt } from './hooks';
import { EventReceiptPresentation } from './presentations';

export const EventReceipt: React.FC = () => {
  const { fetchData, HandleReceipt, HandleReturnHome } = useEventReceipt();
  return (
    <>
      this is EventReceipt component
      <EventReceiptPresentation
        fetchData={fetchData}
        handleReceipt={HandleReceipt}
        handleReturnHome={HandleReturnHome}
      />
    </>
  );
};
