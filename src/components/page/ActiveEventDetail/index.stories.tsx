import { Screen as ActiveEventDetail } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ActiveEventDetail> = {
  component: ActiveEventDetail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ActiveEventDetail>;

export const Default: Story = {
  args: {},
};