'use client';

import { useApplyConfirm } from './hooks';
import { ApplyConfirmPresentation } from './presentations';

export const ApplyConfirm: React.FC = () => {
  const {
    imageUrl,
    eventTitle,
    administratorName,
    administratorNote,
    OnClick,
  } = useApplyConfirm();
  return (
    <>
      <ApplyConfirmPresentation
        imageUrl={imageUrl}
        eventTitle={eventTitle}
        administratorName={administratorName}
        administratorNote={administratorNote}
        onClick={OnClick}
      />
    </>
  );
};
