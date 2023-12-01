import { EventReceiptPresentation } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventReceiptPresentation> = {
  component: EventReceiptPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EventReceiptPresentation>;

export const Default: Story = {
  args: {
    fetchData: {
      user: {
        id: 'admin',
        display_name: 'ユーザー',
      },
      title: 'タイトル',
      address: '〒123-4567 東京都港区浜松町1-2-3 サクラビル205号室',
    },
  },
};
