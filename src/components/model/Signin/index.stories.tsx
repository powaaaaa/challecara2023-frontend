import { SigninPresentation  } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SigninPresentation> = {
  component: SigninPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SigninPresentation>;

export const Default: Story = {
  args: {},
};
