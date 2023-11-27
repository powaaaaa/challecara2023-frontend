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
    image_url:
      'https://mona-log.com/wp-content/uploads/2020/05/3364392-scaled.jpg',
    title: 'タイトル',
    detail:
      '詳細いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい',
    tags: [
      { id: '1', label: '焼き肉', selected: false },
      { id: '2', label: 'お寿司', selected: true },
      { id: '3', label: '焼き肉', selected: false },
      { id: '4', label: 'お寿司いいいいいいいい！', selected: true },
      { id: '5', label: '焼き肉', selected: false },
      { id: '6', label: 'お寿司', selected: true },
      { id: '7', label: '焼き肉', selected: false },
      { id: '8', label: 'お寿司', selected: true },
    ],
  },
};
