import { useResultConfirm } from './hooks';
import { ResultConfirmPresentation } from './presentations';

export const ResultConfirm: React.FC = () => {
  const { eventTitle, ResultData } = useResultConfirm();
  return (
    <>
      <ResultConfirmPresentation
        eventTitle={eventTitle}
        ResultData={ResultData}
      />
    </>
  );
};
