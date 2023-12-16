import { Screen as WinningEventDetail } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof WinningEventDetail> = {
  component: WinningEventDetail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WinningEventDetail>;

export const Default: Story = {
  args: {},
};
