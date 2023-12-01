import type { ReceiptResponse } from '@/api/@types';

import { Button } from '@/components/ui/Button';
import { DisplayAccess } from '@/components/ui/DisplayAccess';

type Props = {
  fetchData: ReceiptResponse | null;
  handleReceipt: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleReturnHome: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const EventReceiptPresentation: React.FC<Props> = ({
  fetchData,
  handleReceipt,
  handleReturnHome,
}) => {
  if (fetchData === null) {
    console.error('fetchDataが取得できていません。');
    return;
  }
  return (
    <div className="text-black text-2xl flex flex-col items-center">
      <div className="mb-28 font-medium">{fetchData.title}</div>

      <div className="mb-20 flex flex-col items-center">
        <div className="mb-3">商品はお手元に届きましたか？</div>
        <div>
          <DisplayAccess userAccess={fetchData.address} />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Button
          className="mb-10"
          variant="base"
          label="はい、届きました！"
          onClick={handleReceipt}
        />
        <Button
          variant="sub"
          label="他の抽選を探す"
          onClick={handleReturnHome}
        />
      </div>
    </div>
  );
};
