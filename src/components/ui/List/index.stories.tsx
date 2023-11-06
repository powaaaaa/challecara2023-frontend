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
        accessorKey: 'userId',
        header: 'ユーザー',
      },
      {
        accessorKey: 'transaction',
        header: 'トランザクション',
      },
      {
        accessorKey: 'result',
        header: '結果',
      },
    ],
    data: [
      {
        userId: 'c8d7e2f5g3h8i1j6k0l9',
        transaction: 'm3n7o6p8q2r5s0t1u9v4w8',
        result: '当選',
      },
      {
        userId: 'c8d7e2f5g3h8i1j6k0l9',
        transaction: 'm3n7o6p8q2r5s0t1u9v4w8',
        result: '当選',
      },
      {
        userId: 'c8d7e2f5g3h8i1j6k0l9',
        transaction: 'm3n7o6p8q2r5s0t1u9v4w8',
        result: '当選',
      },
    ],
  },
};
