import { useReceiptsConfirm } from './hooks';
import { ReceiptsConfirmPresentation } from './presentations';

export const ReceiptsConfirm: React.FC = () => {
  const { eventTitle, topNumber, bottomNumber, ReceiptsData } =
    useReceiptsConfirm();
  return (
    <ReceiptsConfirmPresentation
      eventTitle={eventTitle}
      topNumber={topNumber}
      bottomNumber={bottomNumber}
      ReceiptsData={ReceiptsData}
    />
  );
};
