import { Screen as EventReceipt } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventReceipt> = {
  component: EventReceipt,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EventReceipt>;

export const Default: Story = {
  args: {},
};