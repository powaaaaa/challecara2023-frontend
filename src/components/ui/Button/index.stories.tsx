import { Button } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => (
    <div className="rounded">
      <Button {...args}>{args.label}</Button>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'base',
    label: 'テキスト',
  },
};

export const DefaultDisabled: Story = {
  args: {
    label: 'テキスト',
    disabled: true,
  },
};

export const Sub: Story = {
  args: {
    variant: 'sub',
    label: 'テキスト',
  },
};
