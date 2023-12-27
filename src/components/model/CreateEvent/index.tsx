import { useCreateEvent } from './hooks';
import { CreateEventPresentation } from './presentations';

import { Button } from '@/components/ui/Button';

export const CreateEvent: React.FC = () => {
  const {
    changeImage,
    setEventTitle,
    changeEventTags,
    tagList,
    setParticipantsNumber,
    startDate,
    endDate,
    changeEventTerm,
    setEventInfo,
    setEventId,
    handleSubmitNewEvent,
  } = useCreateEvent();
  return (
    <div className="w-[736px]">
      <CreateEventPresentation
        changeImage={changeImage}
        setEventTitle={setEventTitle}
        changeEventTags={changeEventTags}
        tagList={tagList}
        setParticipantsNumber={setParticipantsNumber}
        startDate={startDate}
        endDate={endDate}
        changeEventTerm={changeEventTerm}
        setEventInfo={setEventInfo}
        setEventId={setEventId}
      />
      <div className="flex flex-col items-center mt-12">
        <Button
          onClick={handleSubmitNewEvent}
          variant="base"
          label="確定する"
        />
      </div>
    </div>
  );
};
