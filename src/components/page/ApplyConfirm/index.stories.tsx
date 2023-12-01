import { Screen as ApplyConfirm } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ApplyConfirm> = {
  component: ApplyConfirm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ApplyConfirm>;

export const Default: Story = {
  args: {},
};
