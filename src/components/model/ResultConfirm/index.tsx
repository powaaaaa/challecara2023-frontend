import { useResultConfirm } from './hooks';
import { ResultConfirmPresentation } from './presentations';

export const ResultConfirm: React.FC = () => {
  const { eventTitle, resultData } = useResultConfirm();
  return (
    <>
      <ResultConfirmPresentation
        eventTitle={eventTitle}
        resultData={resultData}
      />
    </>
  );
};
