import { SignUpPresentation } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SignUpPresentation> = {
  component: SignUpPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SignUpPresentation>;

export const Default: Story = {};
