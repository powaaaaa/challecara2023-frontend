import { ApplyConfirmPresentation } from './presentations';
import { ApplyConfirmErrorPresentation } from './presentations/error';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ApplyConfirmPresentation> = {
  component: ApplyConfirmPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ApplyConfirmPresentation>;

export const Default: Story = {
  args: {
    image_url:
      'https://mona-log.com/wp-content/uploads/2020/05/3364392-scaled.jpg',
    eventTitle: 'タイトルタイトル',
    administratorName: 'おいしいよ株式会社',
    administratorNote: 'アンケートにご協力下さい！',
  },
};

export const Error: Story = {
  render: () => <ApplyConfirmErrorPresentation />,
};
