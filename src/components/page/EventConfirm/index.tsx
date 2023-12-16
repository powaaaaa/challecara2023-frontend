import { EventConfirm } from '@/components/model/EventConfirm';
import { Header } from '@/components/ui/Header';

export const Screen: React.FC = () => (
  <div>
    <div className="mb-4">
      <Header />
    </div>
    <div className="flex flex-col items-center">
      <EventConfirm />
    </div>
  </div>
);
