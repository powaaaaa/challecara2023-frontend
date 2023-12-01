import { useApplyConfirm } from './hooks';
import { ApplyConfirmPresentation } from './presentations';

export const ApplyConfirm: React.FC = () => {
  const {
    image_url,
    eventTitle,
    administratorName,
    administratorNote,
    OnClick,
  } = useApplyConfirm();
  return (
    <>
      <ApplyConfirmPresentation
        image_url={image_url}
        eventTitle={eventTitle}
        administratorName={administratorName}
        administratorNote={administratorNote}
        onClick={OnClick}
      />
    </>
  );
};
