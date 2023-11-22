import { useCreateEvent } from './hooks';
import { CreateEventPresentation } from './presentations';
import { CreateEventErrorPresentation } from './presentations/error';

import { Button } from '@/components/ui/Button';

export const CreateEvent: React.FC = () => {
  const {
    uploadThumbnail,
    changeEventTitle,
    changeParticipantsNumber,
    startDate,
    endDate,
    changeEventTerm,
    changeEventInfo,
    changeEventId,
    useSendCreateEvent,
    errorText,
  } = useCreateEvent();
  return (
    <div className="bg-basic w-[736px] rounded border-2 border-black-lighten-1">
      this is CreateEvent component
      <CreateEventPresentation
        uploadThumbnail={uploadThumbnail}
        changeEventTitle={changeEventTitle}
        changeParticipantsNumber={changeParticipantsNumber}
        startDate={startDate}
        endDate={endDate}
        changeEventTerm={changeEventTerm}
        changeEventInfo={changeEventInfo}
        changeEventId={changeEventId}
      />
      <Button onClick={useSendCreateEvent} variant="base" label="submit" />
      {errorText && (
        <>
          <div className="bg-[#00000033] w-[640px] h-[480px] absolute top-0 z-0" />
          <div className="absolute top-1/2 z-10">
            <CreateEventErrorPresentation errorText={errorText} />
          </div>
        </>
      )}
    </div>
  );
};
