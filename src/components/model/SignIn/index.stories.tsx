import { SignInPresentation } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SignInPresentation> = {
  component: SignInPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SignInPresentation>;

export const Default: Story = {
  args: {},
};
