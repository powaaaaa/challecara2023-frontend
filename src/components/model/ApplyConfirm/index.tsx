import { useApplyConfirm } from './hooks';
import { ApplyConfirmPresentation } from './presentations';
import { ApplyConfirmErrorPresentation } from './presentations/error';

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
      this is ApplyConfirm component
      <ApplyConfirmPresentation
        image_url={image_url}
        eventTitle={eventTitle}
        administratorName={administratorName}
        administratorNote={administratorNote}
        onClick={OnClick}
      />
      <ApplyConfirmErrorPresentation />
    </>
  );
};
