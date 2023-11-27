import { EventMeta } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventMeta> = {
  component: EventMeta,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EventMeta>;

export const Default: Story = {
  args: {
    administratorName: 'おいしいよ株式会社',
    introduction:
      'グルメフェア株式会社は、美味しさと幸せを提供することに情熱を傾ける食品会社です。',
    snsUrl: 'https://x.com/Elonmusk',
    homepageUrl: 'https://example.com',
    startTime: new Date(),
    endTime: new Date(),
    winningNumber: 10,
    stateText: 'この抽選は募集中です',
  },
};
