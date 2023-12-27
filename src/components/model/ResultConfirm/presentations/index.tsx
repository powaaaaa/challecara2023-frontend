import React from 'react';

import type { Receipt, Result } from '@/libs/@types';
import type { ColumnDef } from '@tanstack/react-table';

import { List } from '@/components/ui/List';

type Props = {
  eventTitle: string;
  resultData: Result[];
};

export const ResultConfirmPresentation: React.FC<Props> = ({
  eventTitle,
  resultData,
}) => {
  const ResultColumns: ColumnDef<Result | Receipt>[] = [
    {
      accessorKey: 'participant_id',
      header: 'ユーザーID',
    },
    {
      accessorKey: 'txid',
      header: 'トランザクション',
    },
    {
      accessorKey: 'is_winner',
      header: '結果',
    },
  ];

  return (
    <div className="w-[736px] text-black">
      <div className="mb-10 text-2xl font-semibold">抽選結果</div>

      <div className="mb-24 text-2xl">{eventTitle}</div>

      <div>
        <div className="flex flex-col items-center">
          <List data={resultData} columns={ResultColumns} />
        </div>
      </div>
    </div>
  );
};
