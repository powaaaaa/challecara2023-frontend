import { TagModal } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TagModal> = {
  component: TagModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TagModal>;

export const Default: Story = {
  args: {},
};
