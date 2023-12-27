import { ReceiptsConfirmPresentation } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ReceiptsConfirmPresentation> = {
  component: ReceiptsConfirmPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ReceiptsConfirmPresentation>;

export const Default: Story = {
  args: {
    eventTitle:
      '食べ尽くしの旅！抽選で10名様に美食ツアーをプレゼント！！！！！！！！！！！！！！',
    topNumber: 8,
    bottomNumber: 10,
    ReceiptsData: [
      {
        participant_id: 'c8d7e2f5g3h8i1j6k0l9',
        txid: 'm3n7o6p8q2r5s0t1u9v4w8',
      },
      {
        participant_id: 'c8d7e2f5g3h8i1j6k0l9',
        txid: 'm3n7o6p8q2r5s0t1u9v4w8',
      },
      {
        participant_id: 'c8d7e2f5g3h8i1j6k0l9',
        txid: 'm3n7o6p8q2r5s0t1u9v4w8',
      },
      {
        participant_id: 'c8d7e2f5g3h8i1j6k0l9',
        txid: 'm3n7o6p8q2r5s0t1u9v4w8',
      },
      {
        participant_id: 'c8d7e2f5g3h8i1j6k0l9',
        txid: 'm3n7o6p8q2r5s0t1u9v4w8',
      },
    ],
  },
};
