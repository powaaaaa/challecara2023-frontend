import { Screen as Signin } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Signin> = {
  component: Signin,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Signin>;

export const Default: Story = {
  args: {},
};
