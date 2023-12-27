import { ResultConfirmPresentation } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ResultConfirmPresentation> = {
  component: ResultConfirmPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ResultConfirmPresentation>;

export const Default: Story = {
  args: {
    eventTitle:
      '食べ尽くしの旅！抽選で10名様に美食ツアーをプレゼント！！！！！！！！！！！！！！',
    resultData: [
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
