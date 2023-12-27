import { MetaCard } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MetaCard> = {
  component: MetaCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MetaCard>;

export const Default: Story = {
  args: {
    administratorName: 'おいしいよ株式会社',
    introduction:
      'グルメフェア株式会社は、美味しさと幸せを提供することに情熱を傾ける食品会社です。',
    snsUrl: 'https://x.com/Elonmusk',
    homepageUrl: 'https://example.com',
    startTime: '2019-08-24T14:15:22Z',
    endTime: '2019-08-24T14:15:22Z',
    winningNumber: 10,
  },
};
