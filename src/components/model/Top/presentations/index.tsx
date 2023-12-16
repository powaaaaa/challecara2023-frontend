import React from 'react';

import { Button } from '@/components/ui/Button';

type Props = {
  handleLogin: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const TopPresentation: React.FC<Props> = ({ handleLogin }) => (
  <div className="text-black">
    <div className="mb-64">
      <div className="flex font-medium">
        <div className="flex flex-col">
          <div className="mb-20 text-8xl">OPEN Gift</div>
          <div className="mb-32 text-5xl">ブロックチェーンで抽選を可視化</div>
          <div className="flex flex-col items-center">
            <Button variant="base" label="はじめる" onClick={handleLogin} />
          </div>
        </div>

        <div />
      </div>
    </div>

    <div>
      <div className="font-medium text-5xl mb-6">OPEN Giftとは？</div>
      <div>
        OPEN Giftはブロックチェーンを利用した抽選アプリです。
        <br />
        抽選における公平性、透明性を保証します。
      </div>
    </div>

    <div>
      <div className="font-medium	text-5xl mb-6">つかいかた</div>
      <div>
        開催中の気になる抽選に応募します。当選し、商品が届いたら
        <br />
        届いたことを教えて下さい。その結果は誰からでも確認できます！
      </div>
    </div>
  </div>
);
