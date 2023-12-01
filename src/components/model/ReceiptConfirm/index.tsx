import { useReceiptConfirm } from './hooks';
import { ReceiptConfirmPresentation } from './presentations';

export const ReceiptConfirm: React.FC = () => {
  const { eventTitle, topNumber, bottomNumber, ResultData } =
    useReceiptConfirm();
  return (
    <ReceiptConfirmPresentation
      eventTitle={eventTitle}
      topNumber={topNumber}
      bottomNumber={bottomNumber}
      ResultData={ResultData}
    />
  );
};
