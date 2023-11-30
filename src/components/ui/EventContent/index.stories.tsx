import { EventContent } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventContent> = {
  component: EventContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EventContent>;

export const Default: Story = {
  args: {
    is_received: false,
    is_winner: null,
    is_active: false,
    image_url:
      'https://mona-log.com/wp-content/uploads/2020/05/3364392-scaled.jpg',
    title: 'タイトル',
    detail:
      '詳細いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい',
    tags: [
      { uuid: '1', name: '焼き肉' },
      { uuid: '2', name: 'お寿司' },
    ],
  },
};
