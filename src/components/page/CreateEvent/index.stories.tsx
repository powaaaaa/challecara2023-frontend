import { Screen as CreateEvent } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CreateEvent> = {
  component: CreateEvent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CreateEvent>;

export const Default: Story = {
  args: {},
};
