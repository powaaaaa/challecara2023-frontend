import { DateInput } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DateInput> = {
  component: DateInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
  args: {},
};
