import { EventDetail } from '@/components/model/EventDetail';
import { Back } from '@/components/ui/Back';
import { Header } from '@/components/ui/Header';

export const Screen: React.FC = () => (
    <div>
      <div className="mb-4">
        <Header />
      </div>
      <div className="ml-20">
        <Back />
      </div>
      <div className="flex flex-col items-center">
        <EventDetail eventDetailState="Applied" />
      </div>
    </div>
  );
