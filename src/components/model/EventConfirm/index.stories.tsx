import { EventConfirmPresentation } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventConfirmPresentation> = {
  component: EventConfirmPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EventConfirmPresentation>;

export const Default: Story = {};
