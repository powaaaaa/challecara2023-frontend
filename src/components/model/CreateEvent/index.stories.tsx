import { CreateEventPresentation } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CreateEventPresentation> = {
  component: CreateEventPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CreateEventPresentation>;

export const Default: Story = {
  args: {},
};
