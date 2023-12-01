import { Screen as EventParticipant } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventParticipant> = {
  component: EventParticipant,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EventParticipant>;

export const Default: Story = {
  args: {},
};