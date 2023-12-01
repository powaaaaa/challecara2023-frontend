import { useCreateEvent } from './hooks';
import { CreateEventPresentation } from './presentations';

import { Button } from '@/components/ui/Button';

export const CreateEvent: React.FC = () => {
  const {
    changeImage,
    changeEventTitle,
    changeEventTags,
    tagList,
    changeParticipantsNumber,
    startDate,
    endDate,
    changeEventTerm,
    changeEventInfo,
    changeEventId,
    HandleSubmitNewEvent,
  } = useCreateEvent();
  return (
    <div className="w-[736px]">
      <CreateEventPresentation
        changeImage={changeImage}
        changeEventTitle={changeEventTitle}
        changeEventTags={changeEventTags}
        tagList={tagList}
        changeParticipantsNumber={changeParticipantsNumber}
        startDate={startDate}
        endDate={endDate}
        changeEventTerm={changeEventTerm}
        changeEventInfo={changeEventInfo}
        changeEventId={changeEventId}
      />
      <div className="flex flex-col items-center mt-12">
        <Button
          onClick={HandleSubmitNewEvent}
          variant="base"
          label="確定する"
        />
      </div>
    </div>
  );
};
