import React from 'react';

import { Button } from '@/components/ui/Button';

type Props = {
  handleLogin: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Title: React.FC<Props> = ({ handleLogin }) => (
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
);
