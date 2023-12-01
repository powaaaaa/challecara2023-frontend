import { Screen as AppliedEventDetail } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AppliedEventDetail> = {
  component: AppliedEventDetail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AppliedEventDetail>;

export const Default: Story = {
  args: {},
};