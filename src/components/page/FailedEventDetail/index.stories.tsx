import { Screen as FailedEventDetail } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FailedEventDetail> = {
  component: FailedEventDetail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FailedEventDetail>;

export const Default: Story = {
  args: {},
};