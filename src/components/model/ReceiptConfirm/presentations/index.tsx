import React, { useState } from 'react';

import type { Receipt, Result } from '@/libs/@types';
import type { ColumnDef } from '@tanstack/react-table';

import { DisplayNumber } from '@/components/ui/DisplayNumber';
import { List } from '@/components/ui/List';

type Props = {
  eventTitle: string;
  topNumber: number;
  bottomNumber: number;
  ReceiptsData: Receipt[];
};

export const ReceiptConfirmPresentation: React.FC<Props> = ({
  eventTitle,
  topNumber,
  bottomNumber,
  ReceiptsData,
}) => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const ResultColumns: ColumnDef<Result | Receipt>[] = [
    {
      accessorKey: 'participant_id',
      header: 'ユーザーID',
    },
    {
      accessorKey: 'txid',
      header: 'トランザクション',
    },
  ];

  return (
    <div className="w-[736px] text-black">
      <div className="mb-10 text-2xl font-semibold">受領確認</div>

      <div className="flex flex-col items-center">
        <div className="mb-20 text-2xl">{eventTitle}</div>
        <div className="text-2xl mr-80">現在のお届け状況</div>
        <div className="">
          <DisplayNumber topNumber={topNumber} bottomNumber={bottomNumber} />
        </div>
      </div>

      <div>
        <button
          className="text-2xl mb-2"
          onClick={(): void => {
            setIsDisplay(!isDisplay);
          }}
        >
          {isDisplay ? '▲ 閉じる' : '▼ 詳しく見る'}
        </button>
        <div
          className="flex flex-col items-center"
          style={{ display: isDisplay ? '' : 'none' }}
        >
          <List data={ReceiptsData} columns={ResultColumns} />
        </div>
      </div>
    </div>
  );
};
