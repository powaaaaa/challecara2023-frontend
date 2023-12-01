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
    useSendCreateEvent,
  } = useCreateEvent();
  return (
    <div className="w-[736px]">
      this is CreateEvent component
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
        <Button onClick={useSendCreateEvent} variant="base" label="確定する" />
      </div>
    </div>
  );
};
