import { TopPresentation } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TopPresentation> = {
  component: TopPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TopPresentation>;

export const Default: Story = {};
