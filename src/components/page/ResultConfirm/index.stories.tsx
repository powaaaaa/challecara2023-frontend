import { Screen as ResultConfirm } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ResultConfirm> = {
  component: ResultConfirm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ResultConfirm>;

export const Default: Story = {
  args: {},
};
