import { ResultContent } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ResultContent> = {
  component: ResultContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ResultContent>;

export const Default: Story = {
  args: {},
};
