import { ReceiptConfirm } from '@/components/model/ReceiptConfirm';
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
      <ReceiptConfirm />
    </div>
  </div>
);