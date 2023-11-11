// import { useCreateEvent } from './hooks';
import { CreateEventEmptyPresentation } from './presentations/empty';
import { CreateEventErrorPresentation } from './presentations/error';
import { CreateEventLoadingPresentation } from './presentations/loading';

type Props = object;

export const CreateEvent: React.FC<Props> = () => (
  // const {} = useCreateEvent();
  <>
    this is CreateEvent component
    <CreateEventEmptyPresentation />
    <CreateEventErrorPresentation />
    <CreateEventLoadingPresentation />
  </>
);
