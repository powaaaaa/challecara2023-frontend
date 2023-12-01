import { DisplayAccess } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DisplayAccess> = {
  component: DisplayAccess,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DisplayAccess>;

export const Default: Story = {
  args: {
    userAccess: '〒123-4567 東京都港区浜松町1-2-3 サクラビル205号室',
  },
};
