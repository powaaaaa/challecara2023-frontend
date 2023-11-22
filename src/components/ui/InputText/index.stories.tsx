import { InputText } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputText> = {
  component: InputText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {
  args: {},
};
