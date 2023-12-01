import { Back } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Back> = {
  component: Back,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Back>;

export const Default: Story = {
  args: {},
};
