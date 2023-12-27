import { List } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof List> = {
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    columns: [
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
    ],
    data: [
      {
        participant_id: 'c8d7e2f5g3h8i1j6k0l9',
        txid: 'm3n7o6p8q2r5s0t1u9v4w8',
        is_winner: '当選',
      },
      {
        participant_id: 'c8d7e2f5g3h8i1j6k0l9',
        txid: 'm3n7o6p8q2r5s0t1u9v4w8',
        is_winner: '当選',
      },
      {
        participant_id: 'c8d7e2f5g3h8i1j6k0l9',
        txid: 'm3n7o6p8q2r5s0t1u9v4w8',
        is_winner: '当選',
      },
    ],
  },
};
