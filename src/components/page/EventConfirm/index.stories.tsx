import { Screen as EventConfirm } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventConfirm> = {
  component: EventConfirm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EventConfirm>;

export const Default: Story = {
  args: {},
};
