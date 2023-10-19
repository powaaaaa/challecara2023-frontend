import { EventCard } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventCard> = {
  component: EventCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EventCard>;

export const Default: Story = {
  args: {
    image_url:
      'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title:
      'デリシャスな贅沢抽選！抽選で50名様に美味しい食品バスケットをプレゼント！',
    name: 'おいしいよ株式会社',
    startTime: new Date(),
    endTime: new Date(),
  },
};
