import * as React from 'react';

import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';

import type { ColumnDef, SortingState } from '@tanstack/react-table';

export type Props<Data extends object> = {
  data: Data[];
  columns: ColumnDef<Data>[];
};

export type Result = {
  userId: string;
  transaction: string;
  result: string;
};

export type Receive = {
  userId: string;
  transaction: string;
  receive: string;
};

export const List: React.FC<Props<Result | Receive>> = ({ columns, data }) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <Table className="bg-basic">
      <Thead className="bg-sub pl-8 text-left border-sub border-l-[32px]">
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Th
                w="240px"
                py="20px"
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody className="pl-8">
        {table.getRowModel().rows.map((row) => (
          <Tr className="border-basic border-l-[32px]" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Td py="20px" key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
