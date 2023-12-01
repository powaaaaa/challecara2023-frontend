import { useEventReceipt } from './hooks';
import { EventReceiptPresentation } from './presentations';
import { EventReceiptErrorPresentation } from './presentations/error';

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
      <EventReceiptErrorPresentation />
    </>
  );
};
