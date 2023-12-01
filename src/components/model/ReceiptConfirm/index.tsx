import { useReceiptConfirm } from './hooks';
import { ReceiptConfirmPresentation } from './presentations';

export const ReceiptConfirm: React.FC = () => {
  const { eventTitle, topNumber, bottomNumber, ReceiptsData } =
    useReceiptConfirm();
  return (
    <ReceiptConfirmPresentation
      eventTitle={eventTitle}
      topNumber={topNumber}
      bottomNumber={bottomNumber}
      ReceiptsData={ReceiptsData}
    />
  );
};
