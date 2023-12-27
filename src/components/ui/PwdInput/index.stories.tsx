import { PwdInput } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PwdInput> = {
  component: PwdInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PwdInput>;

export const Default: Story = {
  args: {
    label: 'パスワード',
    display: 'hidden',
  },
};
