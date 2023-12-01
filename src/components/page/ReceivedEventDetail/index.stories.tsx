import { Screen as ReceivedEventDetail } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ReceivedEventDetail> = {
  component: ReceivedEventDetail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ReceivedEventDetail>;

export const Default: Story = {
  args: {},
};