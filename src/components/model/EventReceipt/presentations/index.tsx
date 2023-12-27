import { Button } from '@/components/ui/Button';
import { DisplayAccess } from '@/components/ui/DisplayAccess';

type Props = {
  eventTitle: string;
  userAddress: string;
  handleReceipt: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleReturnHome: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const EventReceiptPresentation: React.FC<Props> = ({
  eventTitle,
  userAddress,
  handleReceipt,
  handleReturnHome,
}) => (
  <div className="text-black text-2xl flex flex-col items-center">
    <div className="mb-28 font-medium">{eventTitle}</div>

    <div className="mb-20 flex flex-col items-center">
      <div className="mb-3">商品はお手元に届きましたか？</div>
      <div>
        <DisplayAccess userAccess={userAddress} />
      </div>
    </div>

    <div className="flex flex-col items-center">
      <Button
        className="mb-10"
        variant="base"
        label="はい、届きました！"
        onClick={handleReceipt}
      />
      <Button variant="sub" label="他の抽選を探す" onClick={handleReturnHome} />
    </div>
  </div>
);
